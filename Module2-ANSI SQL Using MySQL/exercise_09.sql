-- For each event organizer, show the number of events created and their current status.
SELECT 
  u.full_name AS organizer,
  e.status,
  COUNT(e.event_id) AS event_count
FROM 
  Users u
JOIN Events e ON u.user_id = e.organizer_id
GROUP BY 
  u.full_name, e.status;
