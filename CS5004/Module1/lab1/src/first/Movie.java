package first;

/**
 * This function takes in the various attributes for a movie and returns a
 * dictionary with keys for title, director, year, country, and genre with
 * respective values equal to whatever was passed to this function.
 */
public class Movie {

  private String title;
  private Person director;
  private int year;
  private String country;
  private String genre;

  /**
   * This is the constructor that builds a movie.
   *
   * @param title the title of the movie.
   * @param director the director of the movie.
   * @param year the release year of the movie.
   * @param country the release country of the movie.
   * @param genre the genre of the movie.
   */
  public Movie(String title, Person director, int year, String country, String genre) {
    // to instantiate a movie
    this.title = title;
    this.director = director;
    this.year = year;
    this.country = country;
    this.genre = genre;

  }

  /**
   * Return the title of the movie.
   *
   * @return the name of the movie.
   */
  public String getTitle() {
    /* function for a movie to return its title */
    return this.title;
  }

  /**
   * Return the director of the movie.
   *
   * @return the director of the movie.
   */
  public Person getDirector() {
    /* function for a movie to return its director */
    return this.director;
  }

  /**
   * Return the release year of the movie.
   *
   * @return the release year of the movie.
   */
  public int getReleaseYear() {
    /* function for a movie to return its release year */
    return this.year;
  }

  /**
   * Return the release country of the movie.
   *
   * @return the release country of the movie.
   */
  public String getReleaseCountry() {
    /* function for a movie to return its release country */
    return this.country;
  }

  /**
   * Return the genre of the movie.
   *
   * @return the genre of the movie.
   */
  public String getGenre() {
    /* function for a movie to return its genre */
    return this.genre;
  }

}
