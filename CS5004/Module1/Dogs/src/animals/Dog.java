package animals;

/**
 * This function takes in the various attributes for a dog and returns a
 * dictionary with keys for name, age, year, weight, size, and info on whether
 * the dog is vaccinated with respective values equal to whatever was passed
 * to this function.
 */
public class Dog {

  private String name;
  private int age;
  private double weight;
  private String size;
  private Boolean getVaccinated;

  /**
   * This is the constructor that builds a dog.
   *
   * @param name the name of the dog
   * @param age the age of the dog
   * @param weight the weight of the dog
   * @param size the size of the dog
   * @param getVaccinated the information on whether the dog is vaccinated or not
   */
  public Dog(String name, int age, double weight, String size, Boolean getVaccinated) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.size = size;
    this.getVaccinated = getVaccinated;

    if (age < 0) {
      throw new IllegalArgumentException("Dog's age cannot be negative");
    }

    if (weight < 0) {
      throw new IllegalArgumentException("Dog's weight cannot be negative");
    }

  }

  @Override
  public String toString() {
    String str;

    str = "Name: " + this.name + "\n"
        + "Size: " + this.size + "\n"
        + "Get Vaccinated: " + this.getVaccinated + "\n";

    str = str + String.format("Age: %d\n", age);
    str = str + String.format("Weight: %.2f", weight);

    return str;

  }

  /**
   * Return the dog's age.
   *
   * @return the dog's age.
   * @throws IllegalArgumentException if the dog's age is negative.
   */
  public int getAge() throws IllegalArgumentException {
    if (this.age < 0) {
      throw new IllegalArgumentException("Dog's age cannot be negative");
    }
    return this.age;
  }

  /**
   * Return the dog's weight.
   *
   * @return the dog's weight.
   * @throws IllegalArgumentException if the dog's weight is negative.
   */
  public double getWeight() throws IllegalArgumentException {
    if (this.weight < 0) {
      throw new IllegalArgumentException("Dog's weight cannot be negative");
    }
    return this.weight;
  }
}
