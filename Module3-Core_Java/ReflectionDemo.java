import java.lang.reflect.Method;

public class ReflectionDemo {
    public void greet() {
        System.out.println("Hello from greet!");
    }

    public static void main(String[] args) throws Exception {
        // Load the class dynamically
        Class<?> cls = Class.forName("ReflectionDemo");

        // Create an object (instance) of the class
        Object obj = cls.getDeclaredConstructor().newInstance();

        // Get all methods declared in the class
        Method[] methods = cls.getDeclaredMethods();

        // Print method names and invoke them (excluding main)
        for (Method method : methods) {
            if (method.getName().equals("main")) {
                continue; // skip main to prevent IllegalArgumentException
            }

            System.out.println("Invoking: " + method.getName());
            method.invoke(obj);
        }
    }
}
