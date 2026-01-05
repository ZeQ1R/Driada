from fastapi import APIRouter, HTTPException, status
from typing import List
from models import (
    Reservation, ReservationCreate, ReservationResponse,
    MenuItem, MenuItemCreate, MenuItemUpdate,
    WeatherData, ContactInquiry, ContactInquiryCreate
)
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

router = APIRouter()

# Database will be injected from server.py
db = None

def set_database(database):
    global db
    db = database

# ==================== RESERVATIONS ====================

@router.post("/reservations", response_model=ReservationResponse, status_code=status.HTTP_201_CREATED)
async def create_reservation(reservation: ReservationCreate):
    """Create a new reservation"""
    try:
        reservation_obj = Reservation(
            name=reservation.name,
            email=reservation.email,
            phone=reservation.phone,
            date=reservation.date,
            time=reservation.time,
            guests=reservation.guests,
            special_requests=reservation.special_requests,
            status="confirmed"
        )
        
        await db.reservations.insert_one(reservation_obj.dict())
        
        logger.info(f"New reservation created: {reservation_obj.id} for {reservation.name}")
        
        return ReservationResponse(
            id=reservation_obj.id,
            name=reservation_obj.name,
            email=reservation_obj.email,
            date=reservation_obj.date,
            time=reservation_obj.time,
            guests=reservation_obj.guests,
            status=reservation_obj.status,
            message="Your reservation has been confirmed! We look forward to seeing you."
        )
    except Exception as e:
        logger.error(f"Error creating reservation: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create reservation. Please try again."
        )

@router.get("/reservations", response_model=List[Reservation])
async def get_reservations():
    """Get all reservations (admin)"""
    try:
        reservations = await db.reservations.find().sort("created_at", -1).to_list(1000)
        return [Reservation(**r) for r in reservations]
    except Exception as e:
        logger.error(f"Error fetching reservations: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch reservations"
        )

@router.get("/reservations/{reservation_id}", response_model=Reservation)
async def get_reservation(reservation_id: str):
    """Get a specific reservation"""
    reservation = await db.reservations.find_one({"id": reservation_id})
    if not reservation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Reservation not found"
        )
    return Reservation(**reservation)

@router.patch("/reservations/{reservation_id}/status")
async def update_reservation_status(reservation_id: str, status: str):
    """Update reservation status"""
    if status not in ["pending", "confirmed", "cancelled"]:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid status. Must be: pending, confirmed, or cancelled"
        )
    
    result = await db.reservations.update_one(
        {"id": reservation_id},
        {"$set": {"status": status}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Reservation not found"
        )
    
    return {"message": f"Reservation status updated to {status}"}

# ==================== MENU ITEMS ====================

@router.get("/menu", response_model=List[MenuItem])
async def get_menu_items(category: str = None, signature_only: bool = False):
    """Get all menu items, optionally filtered by category"""
    try:
        query = {"is_available": True}
        if category:
            query["category"] = category
        if signature_only:
            query["is_signature"] = True
            
        items = await db.menu_items.find(query).to_list(1000)
        return [MenuItem(**item) for item in items]
    except Exception as e:
        logger.error(f"Error fetching menu items: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch menu items"
        )

@router.get("/menu/categories")
async def get_menu_categories():
    """Get all menu categories with items"""
    try:
        categories = ["starters", "main_courses", "desserts", "wines"]
        result = []
        
        for cat in categories:
            items = await db.menu_items.find(
                {"category": cat, "is_available": True}
            ).to_list(100)
            result.append({
                "name": cat.replace("_", " ").title(),
                "items": [MenuItem(**item) for item in items]
            })
        
        return result
    except Exception as e:
        logger.error(f"Error fetching menu categories: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch menu categories"
        )

@router.get("/menu/signature", response_model=List[MenuItem])
async def get_signature_dishes():
    """Get signature dishes for homepage"""
    try:
        items = await db.menu_items.find(
            {"is_signature": True, "is_available": True}
        ).to_list(10)
        return [MenuItem(**item) for item in items]
    except Exception as e:
        logger.error(f"Error fetching signature dishes: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch signature dishes"
        )

@router.post("/menu", response_model=MenuItem, status_code=status.HTTP_201_CREATED)
async def create_menu_item(item: MenuItemCreate):
    """Create a new menu item (admin)"""
    try:
        menu_item = MenuItem(**item.dict())
        await db.menu_items.insert_one(menu_item.dict())
        logger.info(f"New menu item created: {menu_item.name}")
        return menu_item
    except Exception as e:
        logger.error(f"Error creating menu item: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create menu item"
        )

@router.patch("/menu/{item_id}", response_model=MenuItem)
async def update_menu_item(item_id: str, updates: MenuItemUpdate):
    """Update a menu item (admin)"""
    update_data = {k: v for k, v in updates.dict().items() if v is not None}
    
    if not update_data:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No updates provided"
        )
    
    result = await db.menu_items.update_one(
        {"id": item_id},
        {"$set": update_data}
    )
    
    if result.modified_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Menu item not found"
        )
    
    updated_item = await db.menu_items.find_one({"id": item_id})
    return MenuItem(**updated_item)

@router.delete("/menu/{item_id}")
async def delete_menu_item(item_id: str):
    """Delete a menu item (admin)"""
    result = await db.menu_items.delete_one({"id": item_id})
    
    if result.deleted_count == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Menu item not found"
        )
    
    return {"message": "Menu item deleted successfully"}

# ==================== WEATHER ====================

@router.get("/weather", response_model=WeatherData)
async def get_weather():
    """Get current ski resort weather conditions"""
    # In production, this would call a real weather API
    # For now, return mock data that simulates real conditions
    return WeatherData(
        temperature=-5,
        condition="Snowy",
        snow_depth="120 cm",
        slope_status="Open",
        visibility="Good",
        wind="12 km/h"
    )

# ==================== CONTACT ====================

@router.post("/contact", status_code=status.HTTP_201_CREATED)
async def submit_contact(inquiry: ContactInquiryCreate):
    """Submit a contact inquiry"""
    try:
        contact_obj = ContactInquiry(**inquiry.dict())
        await db.contact_inquiries.insert_one(contact_obj.dict())
        logger.info(f"New contact inquiry from: {inquiry.email}")
        return {"message": "Thank you for your message. We'll get back to you soon!"}
    except Exception as e:
        logger.error(f"Error submitting contact: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit inquiry"
        )
