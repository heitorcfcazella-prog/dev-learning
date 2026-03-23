public class displayVariables {
  public static void main(String[] args) {
    String name = "John";
    System.out.println("Hello " + name);
    
    //Concatenação moderna - Extra

    String msg = String.format("Olá, %s!", name);
    System.out.println(msg);

    String nome = "Epaminondas";
    System.out.printf("Olá, %s!", nome);

    //União de váriaveis

    String firstName = "John ";
    String lastName = "Doe";
    String fullName = firstName + lastName;
    System.out.println(fullName);

    //Números

    int firstNumber = 10;
    int secondNumber = 15;
    System.out.println(firstNumber + secondNumber);
  }
}
