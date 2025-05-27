-- This query show the events with the highest average rating (minimum 10 feedback submissions)
SELECT 
  e.event_id,
  e.title,
  COUNT(f.feedback_id) AS feedback_count,
  AVG(f.rating) AS average_rating
FROM 
  Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY 
  e.event_id, e.title
HAVING 
  COUNT(f.feedback_id) >= 10
ORDER BY 
  average_rating DESC;
