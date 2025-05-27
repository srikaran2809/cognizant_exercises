-- This query helps to identify the speakers who are handling more than one session across all events.
SELECT 
  speaker_name,
  COUNT(session_id) AS session_count
FROM 
  Sessions
GROUP BY 
  speaker_name
HAVING 
  COUNT(session_id) > 1;