from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Reservation Models
class ReservationCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = None
    date: str  # Format: YYYY-MM-DD
    time: str  # Format: HH:MM AM/PM
    guests: str
    special_requests: Optional[str] = None

class Reservation(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    date: str
    time: str
    guests: str
    special_requests: Optional[str] = None
    status: str = "pending"  # pending, confirmed, cancelled
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ReservationResponse(BaseModel):
    id: str
    name: str
    email: str
    date: str
    time: str
    guests: str
    status: str
    message: str

# Menu Models
class MenuItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    price: str
    category: str  # starters, main_courses, desserts, wines
    image: Optional[str] = None
    is_signature: bool = False
    is_available: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)

class MenuItemCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    description: str
    price: str
    category: str
    image: Optional[str] = None
    is_signature: bool = False

class MenuItemUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    price: Optional[str] = None
    category: Optional[str] = None
    image: Optional[str] = None
    is_signature: Optional[bool] = None
    is_available: Optional[bool] = None

# Weather Models (for mock/external integration)
class WeatherData(BaseModel):
    temperature: int
    condition: str
    snow_depth: str
    slope_status: str
    visibility: str
    wind: str
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Contact/Inquiry Model
class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ContactInquiryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)
