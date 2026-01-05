# Driada Restaurant - API Contracts

## Backend API Endpoints

### Base URL
`/api`

---

## 1. Reservations

### POST /api/reservations
Create a new reservation.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "phone": "string (optional)",
  "date": "string (required, YYYY-MM-DD)",
  "time": "string (required, HH:MM AM/PM)",
  "guests": "string (required)",
  "special_requests": "string (optional)"
}
```

**Response (201):**
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "date": "string",
  "time": "string",
  "guests": "string",
  "status": "confirmed",
  "message": "Your reservation has been confirmed!"
}
```

### GET /api/reservations
Get all reservations (admin).

### GET /api/reservations/{id}
Get a specific reservation.

### PATCH /api/reservations/{id}/status
Update reservation status (pending, confirmed, cancelled).

---

## 2. Menu

### GET /api/menu
Get all menu items. Query params: `category`, `signature_only`.

### GET /api/menu/signature
Get signature dishes for homepage.

### GET /api/menu/categories
Get menu organized by categories.

**Response:**
```json
[
  {
    "name": "Starters",
    "items": [
      {
        "id": "uuid",
        "name": "string",
        "description": "string",
        "price": "string",
        "category": "string",
        "image": "string | null",
        "is_signature": boolean
      }
    ]
  }
]
```

### POST /api/menu
Create a menu item (admin).

### PATCH /api/menu/{id}
Update a menu item (admin).

### DELETE /api/menu/{id}
Delete a menu item (admin).

---

## 3. Weather

### GET /api/weather
Get ski resort weather conditions.

**Response:**
```json
{
  "temperature": -5,
  "condition": "Snowy",
  "snow_depth": "120 cm",
  "slope_status": "Open",
  "visibility": "Good",
  "wind": "12 km/h"
}
```

---

## 4. Contact

### POST /api/contact
Submit a contact inquiry.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

---

## Frontend Integration

### Components Using API:
- `ReservationsSection.jsx` → POST /api/reservations
- `SignatureDishes.jsx` → GET /api/menu/signature
- `SeasonalMenu.jsx` → GET /api/menu/categories
- `WeatherWidget.jsx` → GET /api/weather

### API Service
Located at: `/frontend/src/services/api.js`

Exports:
- `createReservation(data)` - Create reservation
- `getSignatureDishes()` - Fetch signature dishes
- `getMenuCategories()` - Fetch full menu
- `getWeather()` - Fetch weather data
- `submitContact(data)` - Submit contact form

---

## Database Collections

### reservations
- id, name, email, phone, date, time, guests, special_requests, status, created_at

### menu_items
- id, name, description, price, category, image, is_signature, is_available, created_at

### contact_inquiries
- id, name, email, subject, message, created_at
