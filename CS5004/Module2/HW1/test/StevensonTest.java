import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import weather.Stevenson;

/**
 * These are the unit test for the Stevenson class.
 */
public class StevensonTest {

  private Stevenson weather1;

  @Before
  public void setUp() {

    this.weather1 = new Stevenson(23.32, 12.11, 3.24, 12);
  }

  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForInvalidDewPoint() {

    new Stevenson(23.32, 25, 3.24, 12);
  }

  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForNegativeWindSpeed() {

    new Stevenson(23.32, 12.11, -1, 12);
  }

  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForNegativeTotalRain() {

    new Stevenson(23.32, 12.11, 3.24, -12);
  }

  @Test public void getTemperature() {

    assertEquals(23, this.weather1.getTemperature(), 0.01);
  }

  @Test public void getDewPoint() {

    assertEquals(12, this.weather1.getDewPoint(), 0.01);
  }

  @Test public void getWindSpeed() {

    assertEquals(3, this.weather1.getWindSpeed(), 0.01);
  }

  @Test public void getTotalRain() {

    assertEquals(12, this.weather1.getTotalRain(), 0.01);
  }

  @Test public void getRelativeHumidity() {
    assertEquals(49, this.weather1.getRelativeHumidity(), 0.01);
  }

  @Test public void getHeatIndex() {

    assertEquals(25, this.weather1.getHeatIndex(), 0.01);
  }

  @Test public void getWindChill() {

    assertEquals(25, this.weather1.getWindChill(), 0.01);
  }

  @Test public void testToString() {
    String expected;
    expected = "Reading: T = 23, D = 12, v = 3, rain = 12";
    assertEquals(expected, this.weather1.toString());
  }
}