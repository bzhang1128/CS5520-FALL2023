import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import chess.Bishop;
import chess.Color;
import chess.King;
import chess.Knight;
import chess.Pawn;
import chess.Queen;
import chess.Rook;
import org.junit.Before;
import org.junit.Test;

/**
 * These are the unit test for Chess piece classes.
 */
public class ChessTest {
  private King whiteKing;
  private Queen whiteQueen;
  private Knight blackKnight;
  private Rook whiteRook;
  private Bishop blackBishop;
  private Pawn blackPawn;
  private Rook killed1;
  private Rook killed2;
  private Rook killed3;
  private Rook killed4;
  private Rook killed5;

  /**
   * Create a chess piece for each different chess type.
   */
  @Before
  public void setUp() {
    this.whiteKing = new King(4, 3, Color.WHITE);
    this.whiteQueen = new Queen(4, 3, Color.WHITE);
    this.blackKnight = new Knight(4, 3, Color.BLACK);
    this.whiteRook = new Rook(4, 3, Color.WHITE);
    this.blackBishop = new Bishop(4, 3, Color.BLACK);
    this.blackPawn = new Pawn(6, 3, Color.BLACK);
    this.killed1 = new Rook(4, 2, Color.BLACK);
    this.killed2 = new Rook(7, 0, Color.WHITE);
    this.killed3 = new Rook(2, 2, Color.WHITE);
    this.killed4 = new Rook(4, 2, Color.WHITE);
    this.killed5 = new Rook(5, 2, Color.WHITE);
  }

  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForInvalidRow() {
    new King(-4, 3, Color.WHITE);
    new Queen(8, 3, Color.WHITE);
    new Pawn(0, 4, Color.WHITE);
    new Pawn(6, 4, Color.BLACK);
  }

  @Test(expected = IllegalArgumentException.class)
  public void testExceptionForInvalidColumn() {
    new King(4, -3, Color.WHITE);
    new Queen(4, 8, Color.WHITE);
  }

  @Test
  public void testGetRow() {
    assertEquals(4, this.blackKnight.getRow(), 0.01);
    assertEquals(6, this.blackPawn.getRow(), 0.01);
  }

  @Test
  public void testGetColumn() {
    assertEquals(3, this.whiteRook.getColumn(), 0.01);
    assertEquals(3, this.blackBishop.getColumn(), 0.01);
  }

  @Test
  public void testGetColor() {
    assertEquals(Color.WHITE, this.whiteKing.getColor());
    assertEquals(Color.BLACK, this.blackBishop.getColor());
  }

  @Test
  public void testMove() {
    assertTrue(this.whiteKing.move(3, 3));

    assertFalse(this.blackPawn.move(6, 3));
  }

  @Test
  public void testCanMove() {
    assertTrue(this.whiteKing.canMove(5, 3));
    assertTrue(this.whiteQueen.canMove(2, 3));
    assertTrue(this.blackBishop.canMove(1, 0));
    assertTrue(this.blackKnight.canMove(3, 1));
    assertTrue(this.whiteRook.canMove(4, 0));
    assertTrue(this.blackPawn.canMove(4, 3));

    assertFalse(this.whiteKing.canMove(0, 3));
    assertFalse(this.whiteQueen.canMove(0, 2));
    assertFalse(this.blackBishop.canMove(4, 0));
    assertFalse(this.blackKnight.canMove(2, 5));
    assertFalse(this.whiteRook.canMove(2, 2));
    assertFalse(this.blackPawn.canMove(2, 3));
  }

  @Test
  public void testCanKill() {
    assertTrue(this.whiteKing.canKill(killed1));
    assertTrue(this.whiteQueen.canKill(killed1));
    assertTrue(this.blackBishop.canKill(killed2));
    assertTrue(this.blackKnight.canKill(killed3));
    assertTrue(this.whiteRook.canKill(killed1));
    assertTrue(this.blackPawn.canKill(killed5));

    assertFalse(this.whiteKing.canKill(killed4));
    assertFalse(this.whiteQueen.canKill(killed4));
    assertFalse(this.blackBishop.canKill(killed1));
    assertFalse(this.blackKnight.canKill(killed1));
    assertFalse(this.whiteRook.canKill(killed3));
    assertFalse(this.blackPawn.canKill(killed1));
  }


}