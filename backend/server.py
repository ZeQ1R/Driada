from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from contextlib import asynccontextmanager

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
db_name = os.environ.get('DB_NAME', 'driada_restaurant')

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Connecting to MongoDB...")
    app.state.mongo_client = AsyncIOMotorClient(mongo_url)
    app.state.db = app.state.mongo_client[db_name]
    
    # Import and set database for routes
    from routes import set_database
    set_database(app.state.db)
    
    # Run seed script on startup
    try:
        from seed import seed_database
        await seed_database()
    except Exception as e:
        logger.warning(f"Seed script skipped or failed: {e}")
    
    logger.info("Connected to MongoDB successfully!")
    
    yield
    
    # Shutdown
    logger.info("Closing MongoDB connection...")
    app.state.mongo_client.close()

# Create the main app
app = FastAPI(
    title="Driada Restaurant API",
    description="Backend API for Driada Restaurant - Mountain Dining Experience",
    version="1.0.0",
    lifespan=lifespan
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Welcome to Driada Restaurant API", "status": "healthy"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "Driada Restaurant API"}

# Include routes from routes.py
from routes import router as restaurant_router
api_router.include_router(restaurant_router)

# Include the router in the main app
app.include_router(api_router)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
