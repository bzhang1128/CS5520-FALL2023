import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import transmission.AutomaticTransmission;

/**
 * These are the unit test for AutomaticTransmission class.
 */
public class AutomaticTransmissionTest {
  private AutomaticTransmission auto;

  /**
   * Create a constructor for each gear level.
   */
  @Before
  public void setup() {
    auto = new AutomaticTransmission(20, 45, 55, 70, 90);
  }

  /**
   * Test exception for negative threshold1.
   */
  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForNegativeThreshold1() {
    new AutomaticTransmission(-5, 45, 55, 70, 90);
  }

  /**
   * Test exception for zero threshold1.
   */
  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForZeroThreshold1() {
    new AutomaticTransmission(0, 45, 55, 70, 90);
  }

  /**
   * Test exception for invalid threshold2.
   */
  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForInvalidThreshold2() {
    new AutomaticTransmission(20, 15, 55, 70, 90);
  }

  /**
   * Test exception for invalid threshold3.
   */
  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForInvalidThreshold3() {
    new AutomaticTransmission(20, 45, 45, 70, 90);
  }

  /**
   * Test exception for invalid threshold4.
   */
  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForInvalidThreshold4() {
    new AutomaticTransmission(20, 45, 55, 50, 90);
  }

  /**
   * Test exception for invalid threshold5.
   */
  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForInvalidThreshold5() {
    new AutomaticTransmission(20, 45, 55, 70, 60);
  }

  /**
   * Test whether incereseSpeed function works or not.
   */
  @Test
  public void testIncreaseSpeed() {
    for (int i = 0; i < 5; i++) {
      auto.increaseSpeed();
    }
    assertEquals(5, auto.getSpeed(), 0.01);
  }

  /**
   * Test whether decereseSpeed function works or not.
   */
  @Test
  public void testDecreaseSpeed() {
    for (int i = 0; i < 45; i++) {
      auto.increaseSpeed();
    }
    for (int i = 0; i < 5; i++) {
      auto.decreaseSpeed();
    }
    assertEquals(40, auto.getSpeed(), 0.01);
  }

  /**
   * Test exception for invalid decreasespeed function.
   */
  @Test(expected = IllegalStateException.class)
  public void testExceptionForInvalidDecreaseSpeed() {
    auto.decreaseSpeed();
  }

  /**
   * Test whether getSpeed function works or not.
   */
  @Test
  public void testGetSpeed() {
    assertEquals(0, auto.getSpeed(), 0.01);
  }

  /**
   * Test whether getGear function works or not.
   */
  @Test
  public void testGetGear() {
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    auto.increaseSpeed();
    assertEquals(2, auto.getGear(), 0.01);
  }

  /**
   * Test whether toString function works or not.
   */
  @Test
  public void testToString() {
    assertEquals("Transmission (speed = 0, gear = 0)", auto.toString());
  }
}