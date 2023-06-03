## OLX Classifieds (FullStack) (RN)

# Backend

# Requirements

- User can able to register
- User can login by email and password
- Crud Operation in post routes
- User can Post classifield
- also User can browse their request

# User's schema

- email
- password

# Users signup API

` http://localhost:8080/login`

```
{
  "email":"ayushi@gmail.com",
  "password":"12345"

}
```

# User's Login API

` http://localhost:8080/login`

```
{
  "email":"ayushi@gmail.com",
  "password":"12345"

}
```

# Respose with Token and UserId

```

{
  "message": " Users Successfully Login 🙂",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ3YWVjNzhiYTI1MTBkZjYxMjE5NmQ4IiwiaWF0IjoxNjg1Nzc4MjI2LCJleHAiOjE2ODYzODMwMjZ9.5jxEWHq08qDxZ0qrpkLHJr36yNim-7p7p1sy1JQS46M",
  "user_id": "647aec78ba2510df612196d8",
  "user": {
    "_id": "647aec78ba2510df612196d8",
    "email": "ayushi@gmail.com",
    "password": "$2b$06$HzxB9XPBCy54s6pA5hsXauMAusASDMnE/neQIygst265IHnC9smda",
    "__v": 0
  }
}
```

# Post API

`http://localhost:8080/post`

# Post schema

```
{

	{
		"name": "ayushi 5",
		"description" : "Brand new PS5 digital edition, with extra dualshock",
		"category" : "clothing",
		"image" : "https://5.imimg.com/data5/SELLER/Default/2022/6/TQ/TK/HJ/154727183/ps5-disc-edition-500x500.jpg",
		"location" : "india",
		"postedAt" : "2023-02-01",
		"price" : "25999"

	}


	}
```

# Post Response

```
{
  "message": "  Classifields posted  here successfully 🙂",
  "data": {
     {
    "_id": "647b018747d69feda8a6951b",
    "name": "ayushi 5",
    "description": "Brand new PS5 digital edition, with extra dualshock",
    "category": "clothing",
    "location": "india",
    "postedAt": "2023-02-01T00:00:00.000Z",
    "price": "25999",
    "__v": 0
  }
  }
}
```

# filter by category

`http://localhost:8080/clothing`
`http://localhost:8080/electronics`
`http://localhost:8080/furniture`
`http://localhost:8080/others`

# Sort by date

`http://localhost:8080/sortbydate`

# Search by product name

``http://localhost:8080/post?name=ayushi 5`

# pagination

`http://localhost:8080/post?page=3 `
