-- This query list all users who gave feedback with a rating less than 3, with their comments and event names.
SELECT 
  u.full_name,
  e.title AS event_title,
  f.rating,
  f.comments
FROM 
  Feedback f
JOIN Users u ON f.user_id = u.user_id
JOIN Events e ON f.event_id = e.event_id
WHERE 
  f.rating < 3;