import java.util.Scanner;
public class Grade{
    public static void main(String[] args){
        Scanner s=new Scanner(System.in);
        System.out.println("Enter your mark");
        int mark=s.nextInt();
        if(mark>=90&&mark<=100)
         System.out.println("A");
        else if(mark>=80&&mark<=89)
         System.out.println("B");
          else if(mark>=70&&mark<=79)
         System.out.println("C"); 
         else if(mark>=60&&mark<=69)
         System.out.println("D"); 
         
        else
         System.out.println("F");
 s.close();

    }
    
}