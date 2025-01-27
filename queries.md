# Database Queries

## find all customers that live in London. Returns 6 records.

SELECT * FROM customers
WHERE city = 'London'

around the horn, b'b beverages, consoliadted holdings, eastern connection, north/south, 7 seas imports

## find all customers with postal code 1010. Returns 3 customers.

SELECT * FROM customers
WHERE postalCode = '1010'

cactus comidas para ilevar, océano atlántico ltda., rancho grande

## find the phone number for the supplier with the id 11. Should be (010) 9984510.

SELECT phone FROM suppliers
WHERE supplierID = 11

## list orders descending by the order date. The order with date 1997-02-12 should be at the top.

SELECT * FROM orders
ORDER BY Orderdate DESC

top order# 10443
bottom order# 10248

## find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name. Returns 11 records.

SELECT suppliername AS Name, length(supplierName) AS Length FROM Suppliers
WHERE Length > 20

new orleans cajun delights --> new england seafood cannery


## find all customers that include the word "market" in the name. Should return 4 records.

SELECT * FROM customers
WHERE customerName LIKE '%market%'

cust ids: 10, 32, 71, 89


## add a customer record for _"The Shire"_, the contact name is _"Bilbo Baggins"_ the address is _"1 Hobbit-Hole"_ in _"Bag End"_, postal code _"111"_ and the country is _"Middle Earth"_.

INSERT INTO customers (customerName, contactName, address, city, postalCode, Country) VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth')

## update _Bilbo Baggins_ record so that the postal code changes to _"11122"_.

UPDATE customers SET postalCode = '11122'
WHERE customerID = 92

## STRETCH:
## list orders grouped by customer showing the number of orders per customer. _Rattlesnake Canyon Grocery_ should have 7 orders.

SELECT CustomerName, Customers.CustomerID, COUNT(*) AS number_of_orders
FROM Customers, Orders
WHERE Customers.CustomerID = Orders.CustomerID
GROUP BY customerName
ORDER BY Customers.CustomerID


## list customers names and the number of orders per customer. Sort the list by number of orders in descending order. _Ernst Handel_ should be at the top with 10 orders followed by _QUICK-Stop_, _Rattlesnake Canyon Grocery_ and _Wartian Herkku_ with 7 orders each.

SELECT CustomerName, COUNT(*) AS number_of_orders
FROM Customers, Orders
WHERE Customers.CustomerID = Orders.CustomerID
GROUP BY CustomerName
ORDER BY number_of_orders DESC

## list orders grouped by customer's city showing number of orders per city. Returns 58 Records with _Aachen_ showing 2 orders and _Albuquerque_ showing 7 orders.

SELECT City, COUNT(*) AS number_of_orders
FROM Customers, Orders
WHERE Customers.CustomerID = Orders.CustomerID
GROUP BY City

## delete all users that have no orders. Should delete 17 (or 18 if you haven't deleted the record added) records.

DELETE FROM Customers
WHERE Customers.CustomerID NOT IN 
 (SELECT Orders.CustomerID FROM Orders)

<!-- DELETE FROM customers
WHERE NULL IN()

DELETE FROM customers 
WHERE NULL IN(SELECT COUNT(*) AS number_of_orders
FROM Customers, Orders
WHERE Customers.CustomerID = Orders.CustomerID
) -->