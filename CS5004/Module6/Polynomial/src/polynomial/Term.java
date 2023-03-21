package polynomial;

import java.util.Objects;

/**
 * Term class.
 * Each term has a coefficient and a power in it.
 */
public class Term {
  private int coef;
  private int power;

  /**
   * Create a constructor.
   *
   * @param coef the coefficient number
   * @param power the power number
   * @throws IllegalArgumentException if parameter power is a negative number
   */
  public Term(int coef, int power) throws IllegalArgumentException {
    this.coef = coef;
    this.power = power;

    if (this.power < 0) {
      throw new IllegalArgumentException("The polynomials have only positive, integral powers");
    }
  }

  public int getCoef() {
    return this.coef;
  }

  public int getDegree() {
    return this.power;
  }

  @Override
  public String toString() {
    if (this.power == 0) {
      return String.format("%d", this.coef);
    }
    return String.format("%dx^%d", this.coef, this.power);
  }

  /**
   * Determines if this term is the same as the parameter object.
   *
   * @param o the object to use.
   * @return true if this term is of the same concrete type and has the same
   *         coef and the same power as the parameter, false otherwise.
   */
  public boolean equals(Object o) {
    if (!(o instanceof Term)) {
      return false;
    }
    Term other = (Term) o;
    return (((Term) o).getCoef() == this.getCoef() && ((Term) o).getDegree() == this.getDegree());
  }

  @Override public int hashCode() {
    return Objects.hash(coef, power);
  }
}
