# Ambev Tech Challenge

### Description
This project is a solution for beverage delivery. It determines which vehicle is the best option to deliver beer based on where the order is, how much boxes of beer are ordered, where the vehicle is and how much beer it can carry.

### Features
* Add Order
* List Orders
* Add Vehicles
* List Vehicles
* List vehicles rankings for that specific order.

### Requirements
* Docker

### How to Install and Start
To get the app ready for use, simply download or clone this repository. From there you can open the terminal and run the following command line:

```html
 docker build -t ambevs .
```
Once the docker finish building, you are ready to run it by using the command:
```html
 docker-compose up
```
This will start MongoDB and the application.
Once the application is running, you should see something like this:

![appRunning](https://user-images.githubusercontent.com/20649713/114636880-719fdc80-9c9e-11eb-87f6-db825a7ac2f5.png)

### API Usage
 + Add new Order
 
 ```POST http://localhost:9000/v1/vehicle```

 Body:

 ```json
 {
    "store": "Empório da cerveja",
    "location": "A",
    "quantity": 30
 }
 ```
+ Add new Vehicle

```POST http://localhost:9000/v1/vehicle```

Body:

```json
{
    "model": "F1000",
    "location": "C",
    "type": "B"
}
```
 + List all orders
 
```GET http://localhost:9000/orders```

 + List all vehicles
 
```GET http://localhost:9000/vehicles```

 + GET the ranking of each vehicle, using an specific order
 
Once you have at least one Order and one Vehicle, you can use the following GET method to Rank all the vehicles.

```GET http://localhost:9000/v1/order/<orderId>/vehicle/ranking```

Note that **orderId** refers to the id of the order you want!
The response should look like:
```json
[
    {
        "_id": "607633d7c64be00026ca32d6",
        "order": "607482c8b0d0e705bc2f7267",
        "id_vehicle": "60749852e4770d22f49b33a9",
        "model": "F3000",
        "location": "E",
        "capacity": 40,
        "score": 100,
        "__v": 0
    },
    {
        "_id": "607633d9c64be00026ca32d9",
        "order": "607482c8b0d0e705bc2f7267",
        "id_vehicle": "60750811ca7b7c38b4bd0d61",
        "model": "F4000",
        "location": "B",
        "capacity": 50,
        "score": 100,
        "__v": 0
    },
    ...
]
```
