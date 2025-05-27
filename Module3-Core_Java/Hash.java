import java.util.HashMap;
import java.util.Scanner;

public class Hash {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        students.put(1, "Alice");
        students.put(2, "Bob");
        students.put(3, "Charlie");

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter student ID to retrieve name:");

        int id = sc.nextInt();
        System.out.println(students.get(id));
    }
}
