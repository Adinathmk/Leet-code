-- Write your PostgreSQL query statement below
SELECT p.name FROM SalesPerson p 
WHERE sales_id NOT IN(
    SELECT sales_id FROM Orders o 
    JOIN Company c
    ON c.com_id=o.com_id
    WHERE c.name = 'RED'
)