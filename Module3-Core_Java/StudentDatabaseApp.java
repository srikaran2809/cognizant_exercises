import java.sql.*;
import java.util.Scanner;

public class StudentDatabaseApp {

    // ------------------ Model Class ------------------
    static class Student {
        private int id;
        private String name;
        private int age;
        private String grade;

        // Constructors
        public Student(String name, int age, String grade) {
            this.name = name;
            this.age = age;
            this.grade = grade;
        }

        public Student(int id, String name, int age, String grade) {
            this(name, age, grade);
            this.id = id;
        }

        // Getters and Setters
        public int getId() { return id; }
        public String getName() { return name; }
        public int getAge() { return age; }
        public String getGrade() { return grade; }

        public void setId(int id) { this.id = id; }
        public void setName(String name) { this.name = name; }
        public void setAge(int age) { this.age = age; }
        public void setGrade(String grade) { this.grade = grade; }
    }

    // ------------------ DAO Class ------------------
    static class StudentDAO {
        static final String URL = "jdbc:mysql://localhost:3306/studentdb";
        static final String USER = "root";
        static final String PASSWORD = "Sri@2809";

        private Connection conn;

        public StudentDAO() throws Exception {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(URL, USER, PASSWORD);
        }

        public void insertStudent(Student student) throws SQLException {
            String insertQuery = "INSERT INTO students (name, age, grade) VALUES (?, ?, ?)";
            PreparedStatement ps = conn.prepareStatement(insertQuery);
            ps.setString(1, student.getName());
            ps.setInt(2, student.getAge());
            ps.setString(3, student.getGrade());
            ps.executeUpdate();
            ps.close();
        }

        public void updateStudent(Student student) throws SQLException {
            String updateQuery = "UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ?";
            PreparedStatement ps = conn.prepareStatement(updateQuery);
            ps.setString(1, student.getName());
            ps.setInt(2, student.getAge());
            ps.setString(3, student.getGrade());
            ps.setInt(4, student.getId());
            ps.executeUpdate();
            ps.close();
        }

        public void close() throws SQLException {
            conn.close();
        }
    }

    // ------------------ Main Method ------------------
    public static void main(String[] args) {
        try {
            StudentDAO dao = new StudentDAO();
            Scanner sc = new Scanner(System.in);

            System.out.println("1. Insert Student");
            System.out.println("2. Update Student");
            System.out.print("Choose option: ");
            int option = sc.nextInt();
            sc.nextLine(); // consume newline

            if (option == 1) {
                System.out.print("Enter name: ");
                String name = sc.nextLine();
                System.out.print("Enter age: ");
                int age = sc.nextInt();
                sc.nextLine();
                System.out.print("Enter grade: ");
                String grade = sc.nextLine();

                Student student = new Student(name, age, grade);
                dao.insertStudent(student);
                System.out.println("Student inserted successfully.");

            } else if (option == 2) {
                System.out.print("Enter student ID to update: ");
                int id = sc.nextInt();
                sc.nextLine();
                System.out.print("Enter new name: ");
                String name = sc.nextLine();
                System.out.print("Enter new age: ");
                int age = sc.nextInt();
                sc.nextLine();
                System.out.print("Enter new grade: ");
                String grade = sc.nextLine();

                Student student = new Student(id, name, age, grade);
                dao.updateStudent(student);
                System.out.println("Student updated successfully.");

            } else {
                System.out.println("Invalid option.");
            }

            dao.close();
            sc.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}