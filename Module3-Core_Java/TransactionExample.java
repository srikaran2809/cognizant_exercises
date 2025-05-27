import java.sql.*;
public class TransactionExample {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bank", "root", "Sri@2809");
        try {
            conn.setAutoCommit(false);
            Statement stmt = conn.createStatement();
            stmt.executeUpdate("UPDATE accounts SET balance = balance - 500 WHERE id = 1");
            stmt.executeUpdate("UPDATE accounts SET balance = balance + 500 WHERE id = 2");
            conn.commit();
            System.out.println("Transaction successful.");
        } catch (Exception e) {
            conn.rollback();
            System.out.println("Transaction failed, rolled back.");
            e.printStackTrace();
        }
    }
}
