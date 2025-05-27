import java.util.ArrayList;
import java.util.Scanner;

public class ArrayStudentList {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the names of  2 students:");
        names.add(sc.nextLine());
        names.add(sc.nextLine());

        for (String name : names) {
            System.out.println(name);
        }
    }
}
