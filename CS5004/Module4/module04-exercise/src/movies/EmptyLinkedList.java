package movies;

public class EmptyLinkedList implements MovieList {
  @Override public void add(int index, Movie movie) throws IndexOutOfBoundsException {


  }

  @Override public boolean remove(Movie movie) {
    return false;
  }

  @Override public MovieList moviesMade(TimeIndicator timeIndicator, int year) {
    return null;
  }

  @Override public MovieList moviesDirectedBy(Person director) {
    return null;
  }
}
