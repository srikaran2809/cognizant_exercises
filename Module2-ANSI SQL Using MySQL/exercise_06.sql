-- It generate a report showing the number of resources (PDFs, images, links) uploaded for each event.
SELECT 
  e.title,
  r.resource_type,
  COUNT(r.resource_id) AS total_resources
FROM 
  Events e
JOIN Resources r ON e.event_id = r.event_id
GROUP BY 
  e.title, r.resource_type;