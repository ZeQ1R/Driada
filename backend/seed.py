"""Database seed script for Driada Restaurant"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Menu items data
MENU_ITEMS = [
    # Starters
    {
        "name": "Mountain Cheese Board",
        "description": "Selection of aged local cheeses with honey and nuts",
        "price": "$22",
        "category": "starters",
        "is_signature": False
    },
    {
        "name": "Wild Mushroom Soup",
        "description": "Creamy forest mushroom bisque with truffle oil",
        "price": "$16",
        "category": "starters",
        "is_signature": False
    },
    {
        "name": "Cured Meats Platter",
        "description": "Traditional alpine cured meats with pickled vegetables",
        "price": "$26",
        "category": "starters",
        "is_signature": False
    },
    {
        "name": "Warm Goat Cheese Salad",
        "description": "Fresh greens with baked goat cheese and walnuts",
        "price": "$18",
        "category": "starters",
        "is_signature": False
    },
    # Main Courses
    {
        "name": "Mountain Lamb Stew",
        "description": "Slow-braised lamb with root vegetables and aromatic herbs, a cherished family recipe passed down through generations.",
        "price": "$38",
        "category": "main_courses",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
        "is_signature": True
    },
    {
        "name": "Traditional Cheese Pie",
        "description": "Golden layers of handmade phyllo filled with local mountain cheese and fresh herbs.",
        "price": "$24",
        "category": "main_courses",
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
        "is_signature": True
    },
    {
        "name": "Slow-Cooked Veal",
        "description": "Tender veal roasted with wild mushrooms and served with creamy polenta.",
        "price": "$45",
        "category": "main_courses",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
        "is_signature": True
    },
    {
        "name": "Pan-Seared Trout",
        "description": "Local river trout with alpine herbs and lemon butter",
        "price": "$34",
        "category": "main_courses",
        "is_signature": False
    },
    {
        "name": "Venison Medallions",
        "description": "Wild venison with berry reduction and seasonal vegetables",
        "price": "$48",
        "category": "main_courses",
        "is_signature": False
    },
    {
        "name": "Traditional Cheese Fondue",
        "description": "Melted local cheeses served with crusty bread (for 2)",
        "price": "$56",
        "category": "main_courses",
        "is_signature": False
    },
    # Desserts
    {
        "name": "Homemade Desserts",
        "description": "Traditional alpine pastries with seasonal berries and fresh mountain cream.",
        "price": "$16",
        "category": "desserts",
        "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
        "is_signature": True
    },
    {
        "name": "Apple Strudel",
        "description": "Warm apple pastry with vanilla ice cream",
        "price": "$14",
        "category": "desserts",
        "is_signature": False
    },
    {
        "name": "Chocolate Fondant",
        "description": "Rich chocolate cake with molten center",
        "price": "$16",
        "category": "desserts",
        "is_signature": False
    },
    {
        "name": "Berry Tart",
        "description": "Seasonal berries on vanilla custard",
        "price": "$15",
        "category": "desserts",
        "is_signature": False
    },
    {
        "name": "Cheese Selection",
        "description": "Local cheeses with fruit compote",
        "price": "$18",
        "category": "desserts",
        "is_signature": False
    },
    # Wines
    {
        "name": "Alpine Red Reserve",
        "description": "Full-bodied red with notes of dark fruit",
        "price": "$52/bottle",
        "category": "wines",
        "is_signature": False
    },
    {
        "name": "Mountain White",
        "description": "Crisp white wine with citrus undertones",
        "price": "$46/bottle",
        "category": "wines",
        "is_signature": False
    },
    {
        "name": "Rosé de Montagne",
        "description": "Light and refreshing rosé",
        "price": "$44/bottle",
        "category": "wines",
        "is_signature": False
    },
    {
        "name": "Mulled Wine",
        "description": "Traditional warm spiced wine",
        "price": "$12/glass",
        "category": "wines",
        "is_signature": False
    }
]

async def seed_database():
    """Seed the database with initial menu items"""
    mongo_url = os.environ.get('MONGO_URL')
    db_name = os.environ.get('DB_NAME', 'driada_restaurant')
    
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    # Check if menu items already exist
    existing_count = await db.menu_items.count_documents({})
    
    if existing_count > 0:
        print(f"Database already has {existing_count} menu items. Skipping seed.")
        client.close()
        return
    
    # Insert menu items
    import uuid
    from datetime import datetime
    
    for item in MENU_ITEMS:
        item['id'] = str(uuid.uuid4())
        item['is_available'] = True
        item['created_at'] = datetime.utcnow()
        if 'image' not in item:
            item['image'] = None
    
    result = await db.menu_items.insert_many(MENU_ITEMS)
    print(f"Seeded {len(result.inserted_ids)} menu items to database.")
    
    # Create indexes
    await db.menu_items.create_index("category")
    await db.menu_items.create_index("is_signature")
    await db.reservations.create_index("email")
    await db.reservations.create_index("date")
    await db.reservations.create_index("created_at")
    print("Created database indexes.")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())
