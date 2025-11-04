const fakeData = [
  {
    "id": 1,
    "productName": "Wireless Headphones",
    "category": "Electronics",
    "price": 59.99,
    "rating": 4.5,
    "stock": 120,
    "items_quantity": 2
  },
  {
    "id": 2,
    "productName": "Gaming Mouse",
    "category": "Electronics",
    "price": 29.99,
    "rating": 4.3,
    "stock": 80,
    "items_quantity": 1
  },
  {
    "id": 3,
    "productName": "Running Shoes",
    "category": "Footwear",
    "price": 75.0,
    "rating": 4.7,
    "stock": 50,
    "items_quantity": 3
  },
  {
    "id": 4,
    "productName": "Smart Watch",
    "category": "Electronics",
    "price": 99.99,
    "rating": 4.6,
    "stock": 40,
    "items_quantity": 1
  },
  {
    "id": 5,
    "productName": "Backpack",
    "category": "Accessories",
    "price": 45.0,
    "rating": 4.2,
    "stock": 65,
    "items_quantity": 2
  },
  {
    "id": 6,
    "productName": "Bluetooth Speaker",
    "category": "Electronics",
    "price": 39.99,
    "rating": 4.4,
    "stock": 90,
    "items_quantity": 1
  },
  {
    "id": 7,
    "productName": "Yoga Mat",
    "category": "Fitness",
    "price": 25.5,
    "rating": 4.1,
    "stock": 110,
    "items_quantity": 4
  },
  {
    "id": 8,
    "productName": "Office Chair",
    "category": "Furniture",
    "price": 149.99,
    "rating": 4.8,
    "stock": 25,
    "items_quantity": 1
  },
  {
    "id": 9,
    "productName": "LED Monitor",
    "category": "Electronics",
    "price": 189.99,
    "rating": 4.6,
    "stock": 30,
    "items_quantity": 1
  },
  {
    "id": 10,
    "productName": "Coffee Maker",
    "category": "Home Appliances",
    "price": 69.99,
    "rating": 4.3,
    "stock": 45,
    "items_quantity": 2
  },
  {
    "id": 11,
    "productName": "Keyboard",
    "category": "Electronics",
    "price": 24.99,
    "rating": 4.2,
    "stock": 70,
    "items_quantity": 3
  },
  {
    "id": 12,
    "productName": "T-Shirt",
    "category": "Clothing",
    "price": 15.99,
    "rating": 4.0,
    "stock": 200,
    "items_quantity": 5
  },
  {
    "id": 13,
    "productName": "Sunglasses",
    "category": "Accessories",
    "price": 19.99,
    "rating": 4.3,
    "stock": 85,
    "items_quantity": 2
  },
  {
    "id": 14,
    "productName": "Laptop Stand",
    "category": "Office",
    "price": 34.99,
    "rating": 4.5,
    "stock": 60,
    "items_quantity": 1
  },
  {
    "id": 15,
    "productName": "Desk Lamp",
    "category": "Home Decor",
    "price": 27.5,
    "rating": 4.2,
    "stock": 55,
    "items_quantity": 1
  },
  {
    "id": 16,
    "productName": "Wireless Keyboard",
    "category": "Electronics",
    "price": 49.99,
    "rating": 4.4,
    "stock": 75,
    "items_quantity": 1
  },
  {
    "id": 17,
    "productName": "Jeans Pant",
    "category": "Clothing",
    "price": 39.99,
    "rating": 4.1,
    "stock": 150,
    "items_quantity": 2
  },
  {
    "id": 18,
    "productName": "Water Bottle",
    "category": "Fitness",
    "price": 12.99,
    "rating": 4.0,
    "stock": 300,
    "items_quantity": 5
  },
  {
    "id": 19,
    "productName": "Microwave Oven",
    "category": "Home Appliances",
    "price": 129.99,
    "rating": 4.5,
    "stock": 35,
    "items_quantity": 1
  },
  {
    "id": 20,
    "productName": "Wireless Earbuds",
    "category": "Electronics",
    "price": 79.99,
    "rating": 4.7,
    "stock": 95,
    "items_quantity": 2
  }
]



const topCategoriesProducts = fakeData.filter(
    (item) => item.category === "Electronics"
    ).sort((a,b) => b.rating - a.rating).slice(0, 3).map((item) => ({name: item.productName})); 
    
    //.sort((a,b) => a.rating - b.rating);-------(ascending order e sorting)
    //.sort((a,b) => b.rating - a.rating);-------(descending order e sorting)
    

    console.log(topCategoriesProducts)