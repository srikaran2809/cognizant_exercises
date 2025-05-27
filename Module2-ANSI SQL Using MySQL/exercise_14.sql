--It list the top 3 events based on the total number of user registrations.
SELECT 
  e.title,
  COUNT(r.registration_id) AS registration_count
FROM 
  Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY 
  e.event_id, e.title
ORDER BY 
  registration_count DESC
LIMIT 3;