-- This query helps to find the number of users who registered each day in the last 7 days.
SELECT 
  registration_date,
  COUNT(*) AS new_users
FROM 
  Users
WHERE 
  registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY 
  registration_date;