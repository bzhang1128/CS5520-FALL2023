package first;

/**
 * This function takes in the various attributes for a menu item and returns a
 * dictionary with keys for name, description, vegetarian information (true / false),
 * and price with respective values equal to whatever was passed to this function.
 */
public class MenuItem {

  private String name;
  private String description;
  private Boolean vegetarian;
  private double price;

  /**
   * This is the constructor that builds a menu item.
   *
   * @param name the name of the menu item.
   * @param description the description of the menu item.
   * @param vegetarian the information on whether the menu item is vegetarian or not.
   * @param price the price of the menu item.
   */
  public MenuItem(String name, String description, Boolean vegetarian, double price) {
    // to instantiate a menu item
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;

  }

  /**
   * Return the name of the menu item.
   *
   * @return the name of the menu item.
   */
  public String getName() {
    /* function for a menu item to return its name */
    return this.name;
  }

  /**
   * Return the description of the menu item.
   *
   * @return the description of the menu item.
   */
  public String getDescription() {
    /* function for a menu item to return its description */
    return this.description;
  }

  /**
   * Return whether the menu item is vegetarian or not.
   *
   * @return whether the menu item is vegetarian or not.
   */
  public Boolean getVegetarian() {
    /* function for a menu item to return whether it is vegetarian or not */
    return this.vegetarian;
  }

  /**
   * Return the price of the menu item.
   *
   * @return the price of the menu item.
   */
  public double getPrice() {
    /* function for a menu item to return its price */
    return price;
  }
}
