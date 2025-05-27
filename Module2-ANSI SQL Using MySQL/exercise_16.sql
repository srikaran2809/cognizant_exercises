--This query helps to find the users who created an account in the last 30 days but haven’t registered for any events.
SELECT 
  u.user_id,
  u.full_name
FROM 
  Users u
LEFT JOIN Registrations r ON u.user_id = r.user_id
WHERE 
  r.registration_id IS NULL
  AND u.registration_date >= CURDATE() - INTERVAL 30 DAY;
