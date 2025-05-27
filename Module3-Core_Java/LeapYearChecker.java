public class LeapYearChecker  {
   public static void main(String[] args) {
         java.util.Scanner sc = new java.util.Scanner(System.in);
         System.out.print("Enter a year: ");
         int year = sc.nextInt();
         boolean isLeap = false;
    
         if (year % 4 == 0) {
              if (year % 100 == 0) {
                if (year % 400 == 0) {
                     isLeap = true;
                }
              } else {
                isLeap = true;
              }
         }
    
         if (isLeap) {
              System.out.println(year + " is a leap year.");
         } else {
              System.out.println(year + " is not a leap year.");
         }
         sc.close();
   } 
}
