#!/usr/bin/env python3
"""
Backend API Testing for Driada Restaurant
Tests all backend endpoints as specified in the review request
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading backend URL: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("ERROR: Could not find REACT_APP_BACKEND_URL in frontend/.env")
    sys.exit(1)

print(f"Testing backend at: {BACKEND_URL}")

class DriadaAPITester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
        self.results = {
            'passed': 0,
            'failed': 0,
            'errors': []
        }

    def log_result(self, test_name, success, message="", response_data=None):
        """Log test result"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name}")
        if message:
            print(f"   {message}")
        if response_data and not success:
            print(f"   Response: {response_data}")
        
        if success:
            self.results['passed'] += 1
        else:
            self.results['failed'] += 1
            self.results['errors'].append(f"{test_name}: {message}")
        print()

    def test_health_check(self):
        """Test GET /api/health endpoint"""
        print("🔍 Testing Health Check Endpoint...")
        try:
            response = self.session.get(f"{self.base_url}/api/health", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('status') == 'healthy':
                    self.log_result("Health Check", True, "Service is healthy")
                    return True
                else:
                    self.log_result("Health Check", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_result("Health Check", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_result("Health Check", False, f"Request failed: {str(e)}")
            return False

    def test_signature_dishes(self):
        """Test GET /api/menu/signature endpoint"""
        print("🔍 Testing Signature Dishes Endpoint...")
        try:
            response = self.session.get(f"{self.base_url}/api/menu/signature", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    signature_count = len(data)
                    if signature_count == 4:
                        # Verify structure of signature dishes
                        required_fields = ['id', 'name', 'description', 'price', 'category', 'is_signature']
                        all_valid = True
                        for dish in data:
                            if not all(field in dish for field in required_fields):
                                all_valid = False
                                break
                            if not dish.get('is_signature', False):
                                all_valid = False
                                break
                        
                        if all_valid:
                            dish_names = [dish['name'] for dish in data]
                            self.log_result("Signature Dishes", True, 
                                          f"Found {signature_count} signature dishes: {', '.join(dish_names)}")
                            return True
                        else:
                            self.log_result("Signature Dishes", False, 
                                          "Invalid dish structure or non-signature dishes returned")
                            return False
                    else:
                        self.log_result("Signature Dishes", False, 
                                      f"Expected 4 signature dishes, got {signature_count}")
                        return False
                else:
                    self.log_result("Signature Dishes", False, f"Expected list, got: {type(data)}")
                    return False
            else:
                self.log_result("Signature Dishes", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_result("Signature Dishes", False, f"Request failed: {str(e)}")
            return False

    def test_menu_categories(self):
        """Test GET /api/menu/categories endpoint"""
        print("🔍 Testing Menu Categories Endpoint...")
        try:
            response = self.session.get(f"{self.base_url}/api/menu/categories", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    expected_categories = ["Starters", "Main Courses", "Desserts", "Wines"]
                    found_categories = [cat.get('name', '') for cat in data]
                    
                    # Check if all expected categories are present
                    missing_categories = [cat for cat in expected_categories if cat not in found_categories]
                    
                    if not missing_categories:
                        # Verify structure
                        all_valid = True
                        total_items = 0
                        for category in data:
                            if 'name' not in category or 'items' not in category:
                                all_valid = False
                                break
                            if not isinstance(category['items'], list):
                                all_valid = False
                                break
                            total_items += len(category['items'])
                        
                        if all_valid and total_items > 0:
                            self.log_result("Menu Categories", True, 
                                          f"Found all categories with {total_items} total items: {', '.join(found_categories)}")
                            return True
                        else:
                            self.log_result("Menu Categories", False, 
                                          "Invalid category structure or no items found")
                            return False
                    else:
                        self.log_result("Menu Categories", False, 
                                      f"Missing categories: {', '.join(missing_categories)}")
                        return False
                else:
                    self.log_result("Menu Categories", False, f"Expected list, got: {type(data)}")
                    return False
            else:
                self.log_result("Menu Categories", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_result("Menu Categories", False, f"Request failed: {str(e)}")
            return False

    def test_create_reservation(self):
        """Test POST /api/reservations endpoint"""
        print("🔍 Testing Create Reservation Endpoint...")
        
        # Test data as specified in the review request
        reservation_data = {
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+1 555-111-2222",
            "date": "2026-02-01",
            "time": "7:30 PM",
            "guests": "2",
            "special_requests": "Anniversary dinner"
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/api/reservations", 
                json=reservation_data,
                timeout=10
            )
            
            if response.status_code == 201:
                data = response.json()
                required_fields = ['id', 'name', 'email', 'date', 'time', 'guests', 'status', 'message']
                
                if all(field in data for field in required_fields):
                    if (data['status'] == 'confirmed' and 
                        data['name'] == reservation_data['name'] and
                        data['email'] == reservation_data['email'] and
                        data['date'] == reservation_data['date'] and
                        data['time'] == reservation_data['time'] and
                        data['guests'] == reservation_data['guests']):
                        
                        self.log_result("Create Reservation", True, 
                                      f"Reservation created with ID: {data['id']}, Status: {data['status']}")
                        return True
                    else:
                        self.log_result("Create Reservation", False, 
                                      "Response data doesn't match request or status not confirmed")
                        return False
                else:
                    missing_fields = [field for field in required_fields if field not in data]
                    self.log_result("Create Reservation", False, 
                                  f"Missing required fields: {', '.join(missing_fields)}")
                    return False
            else:
                self.log_result("Create Reservation", False, 
                              f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_result("Create Reservation", False, f"Request failed: {str(e)}")
            return False

    def test_weather_api(self):
        """Test GET /api/weather endpoint"""
        print("🔍 Testing Weather API Endpoint...")
        try:
            response = self.session.get(f"{self.base_url}/api/weather", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['temperature', 'condition', 'snow_depth', 'slope_status', 'visibility', 'wind']
                
                if all(field in data for field in required_fields):
                    # Verify data types and reasonable values
                    if (isinstance(data['temperature'], (int, float)) and
                        isinstance(data['condition'], str) and data['condition'] and
                        isinstance(data['snow_depth'], str) and data['snow_depth'] and
                        isinstance(data['slope_status'], str) and data['slope_status'] and
                        isinstance(data['visibility'], str) and data['visibility'] and
                        isinstance(data['wind'], str) and data['wind']):
                        
                        self.log_result("Weather API", True, 
                                      f"Weather data: {data['temperature']}°C, {data['condition']}, "
                                      f"Snow: {data['snow_depth']}, Slopes: {data['slope_status']}")
                        return True
                    else:
                        self.log_result("Weather API", False, "Invalid data types in weather response")
                        return False
                else:
                    missing_fields = [field for field in required_fields if field not in data]
                    self.log_result("Weather API", False, 
                                  f"Missing required fields: {', '.join(missing_fields)}")
                    return False
            else:
                self.log_result("Weather API", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_result("Weather API", False, f"Request failed: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all API tests"""
        print("=" * 60)
        print("🚀 DRIADA RESTAURANT API TESTING")
        print("=" * 60)
        print()
        
        # Run all tests
        tests = [
            self.test_health_check,
            self.test_signature_dishes,
            self.test_menu_categories,
            self.test_create_reservation,
            self.test_weather_api
        ]
        
        for test in tests:
            test()
        
        # Print summary
        print("=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {self.results['passed']}")
        print(f"❌ Failed: {self.results['failed']}")
        print(f"📈 Success Rate: {(self.results['passed'] / (self.results['passed'] + self.results['failed']) * 100):.1f}%")
        
        if self.results['errors']:
            print("\n🔍 FAILED TESTS:")
            for error in self.results['errors']:
                print(f"   • {error}")
        
        print()
        return self.results['failed'] == 0

def main():
    """Main test execution"""
    tester = DriadaAPITester(BACKEND_URL)
    success = tester.run_all_tests()
    
    if success:
        print("🎉 All tests passed! Backend API is working correctly.")
        sys.exit(0)
    else:
        print("⚠️  Some tests failed. Check the details above.")
        sys.exit(1)

if __name__ == "__main__":
    main()