import static org.junit.Assert.assertEquals;

import first.MenuItem;
import org.junit.Before;
import org.junit.Test;

/**
 * These are the unit test for the MenuItem class.
 */
public class MenuItemTest {

  private MenuItem falafel;
  private MenuItem beef;

  /**
   * I create two menu items falafel and beef.
   */
  @Before
  public void setUp() {
    this.falafel = new MenuItem("Vegetarian Falafel Wrap",
        "Falafel topped with lettuce or organic spring leaf, "
            + "tomatoes, onions, pickles, turnips and banana peppers.",
        true, 10.99);
    this.beef = new MenuItem("Beef Donair Wrap",
        "Beef topped with lettuce or organic spring leaf, "
            + "tomatoes, onions, pickles, turnips and banana peppers",
        false, 12.95);
  }

  @Test
  public void getName() {
    assertEquals("Vegetarian Falafel Wrap", this.falafel.getName());
    assertEquals("Beef Donair Wrap", this.beef.getName());
  }

  @Test
  public void getDescription() {
    assertEquals("Falafel topped with lettuce or organic spring leaf, "
            + "tomatoes, onions, pickles, turnips and banana peppers.",
        this.falafel.getDescription());
    assertEquals("Beef topped with lettuce or organic spring leaf, "
            + "tomatoes, onions, pickles, turnips and banana peppers",
        this.beef.getDescription());
  }

  @Test
  public void getVegetarian() {
    assertEquals(true, this.falafel.getVegetarian());
    assertEquals(false, this.beef.getVegetarian());
  }

  @Test
  public void getPrice() {
    assertEquals(10.99, this.falafel.getPrice(), 0.1);
    assertEquals(12.95, this.beef.getPrice(), 0.1);
  }
}