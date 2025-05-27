public class Operator_pred
{
 public static void main(String[] args)
 {
    int result = 10 + 5 * 2;
    System.out.println("Here the high precidence is *"+result);
      int result3= 10 * 5 + 2;
   System.out.println("Here * has  high precidence "+result3);
    int result2 = 10 + 5/2;
  System.out.println("Here / has  high precidence "+result2);
  System.out.println("Entire operators "+(10+2-5*10/10%50));
  System.out.println(6%5/12*4+2-1);
    int result4= 10 - 5 + 2;
  System.out.println("It evaluates from left to right "+result4);
   int result5= 10 + 5 - 2;
  System.out.println(result5);
 
 }
}