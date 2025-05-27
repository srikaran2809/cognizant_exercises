-- This query show a month-wise registration count trend over the past 12 months.
SELECT 
  DATE_FORMAT(registration_date, '%Y-%m') AS month,
  COUNT(*) AS registrations
FROM 
  Registrations
WHERE 
  registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY 
  month
ORDER BY 
  month;
