-- Write your PostgreSQL query statement below
SELECT
    employee_id,
    MAX(
        CASE
            WHEN primary_flag = 'Y' THEN department_id
            ELSE department_id
        END
    ) AS department_id
FROM EMPLOYEE
GROUP BY employee_id;
