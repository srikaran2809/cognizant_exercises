import java.util.Scanner;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Mysqlconnection {
    public static void main(String[] args) {
        final String URL = "jdbc:mysql://localhost:3306/Sample";
        final String USER = "root";
        final String PASSWORD = "Kiruthika@24";
        Scanner s=new Scanner(System.in);

        try {
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);

          
            PreparedStatement dropStmt = connection.prepareStatement("DROP TABLE IF EXISTS Princeclg");
            dropStmt.execute();
            dropStmt.close();

     
            PreparedStatement createStmt = connection.prepareStatement(
                "CREATE TABLE Princeclg (" +
                "student_id INT AUTO_INCREMENT PRIMARY KEY, " +
                "name VARCHAR(100) NOT NULL, " +
                "age INT, " +
                "department VARCHAR(50), " +
                "admission_date DATE)"
            );
            createStmt.execute();
            System.out.println("Table created successfully.");

            // Insert data without specifying student_id (auto-generated)
            String insertSql = "INSERT INTO Princeclg (name, age, department, admission_date) VALUES (?, ?, ?, ?)";
            PreparedStatement insertStmt = connection.prepareStatement(insertSql);
    
        
            System.out.println("Enter you name");
            insertStmt.setString(1,s.nextLine());
         System.out.println("Enter your department");
            insertStmt.setString(3,s.nextLine());//department
            System.out.println("Enter your age");
            insertStmt.setInt(2,s.nextInt());//age

            insertStmt.setDate(4, java.sql.Date.valueOf("2022-11-14"));

            
          
            insertStmt.setDate(4,java.sql.Date.valueOf("2022-11-13"));
            System.out.println("Date updated successfully");
                 int rowsInserted = insertStmt.executeUpdate();
              System.out.println("Inserted " + rowsInserted + " row(s) successfully.");
       

            // Close all resources
            insertStmt.close();
            createStmt.close();
            connection.close();
            s.close();

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
