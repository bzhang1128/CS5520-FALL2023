import static org.junit.Assert.*;

import animals.Dog;
import org.junit.Before;
import org.junit.Test;

/**
 * Test units for Dog class.
 */
public class DogTest {

  private Dog dog1;

  /**
   * Initialize a dog1 instance.
   */
  @Before
  public void setUp() {
    this.dog1 = new Dog("Molly", 3, 5.41, "small", true);


  }

  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForNegativeAge() {
    new Dog("Max", -5, 10.5, "medium", false);
  }

  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForNegativeWeight() {
    new Dog("Max", 5, -10.5, "medium", false);
  }

  @Test
  public void testToString() {
    String expected;
    expected = "Name: Molly\nSize: small\nGet Vaccinated: true\n" + "Age: 3\n" + "Weight: 5.41";
    assertEquals(expected, this.dog1.toString());
  }

  @Test
  public void getAge() {
    assertEquals(3, this.dog1.getAge());
  }


  @Test public void getWeight() {
    assertEquals(5.41, this.dog1.getWeight(), 0.01);
  }

}