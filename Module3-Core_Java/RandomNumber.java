import java.util.*;
public class RandomNumber{
    public static void main(String[] args){
        Random r=new Random();
        int rand=r.nextInt(100);
        System.out.println(rand);

        System.out.println("Come on lets play a game \n GUESS THE NUMBER");
        Scanner s=new Scanner(System.in);
        int input=s.nextInt();
        
         while(input!=rand){
          if(input<rand)
             {System.out.println("Input is smaller than the random ,guess the little higher ");
             input=s.nextInt(); 

             }
          else
           { System.out.println("Input is greater than the random, ,guess the little lower");
            input= s.nextInt(); }
          
    }
    System.out.println("Yes you guess it!");
    s.close();
    }
}

