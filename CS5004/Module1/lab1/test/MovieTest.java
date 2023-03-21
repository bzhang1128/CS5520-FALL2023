import static org.junit.Assert.assertEquals;

import first.Movie;
import first.Person;
import org.junit.Before;
import org.junit.Test;

/**
 * These are the unit tests for the Movie class.
 */
public class MovieTest {

  private Movie avatar;
  private Movie angryMen;
  private Person cameron;
  private Person lumet;

  /**
   * I create two movies avatar and angryMen.
   */
  @Before
  public void setUp() {
    this.cameron = new Person("James", "Cameron", 1954);
    this.lumet = new Person("Sidney", "Lumet", 1924);
    this.avatar = new Movie("Avatar", cameron, 2009, "United States", "Fantasy");
    this.angryMen = new Movie("12 Angry Men", lumet, 1957, "United States", "Crime");
  }

  @Test
  public void getTitle() {
    assertEquals("Avatar", this.avatar.getTitle());
    assertEquals("12 Angry Men", this.angryMen.getTitle());
  }

  @Test
  public void getDirector() {
    assertEquals(cameron, this.avatar.getDirector());
    assertEquals(lumet, this.angryMen.getDirector());
  }

  @Test
  public void getReleaseYear() {
    assertEquals(2009, this.avatar.getReleaseYear());
    assertEquals(1957, this.angryMen.getReleaseYear());
  }

  @Test
  public void getReleaseCountry() {
    assertEquals("United States", this.avatar.getReleaseCountry());
    assertEquals("United States", this.angryMen.getReleaseCountry());
  }

  @Test
  public void getGenre() {
    assertEquals("Fantasy", this.avatar.getGenre());
    assertEquals("Crime", this.angryMen.getGenre());
  }
}