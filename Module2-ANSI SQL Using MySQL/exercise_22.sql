-- Detect if a user has been registered more than once for the same event.
SELECT 
  user_id,
  event_id,
  COUNT(*) AS registration_count
FROM 
  Registrations
GROUP BY 
  user_id, event_id
HAVING 
  COUNT(*) > 1;
