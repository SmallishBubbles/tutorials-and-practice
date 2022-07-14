import java.util.Set;
import java.util.HashSet;


/*
Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

https://www.codewars.com/kata/529bf0e9bdf7657179000008/java

Examples
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]); // => true
  
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]); // => false
*/

public class SudokuValidator {
    public static boolean check(int[][] sudoku) {
      // if any spot contains a zero, immediately return false
      // check rows
      // check columns
      // check 3 x 3

      
      // no two numbers should match each other in a row/column/square
      // and none should be zero
      // use a set, check if already contains the number (invalid solution), and add if not
      // could do an additional check to see if each of the numbersSeen sets has all 1-9
      // could have high level numbersSeen and verify it has 9 of each number
      // but I don't think those checks are necessary
      
      // square starting points
      // 0,0  0,3  0,6
      // 3,0  3,3  3,6
      // 6,0  6,3  6,6
      
      // check rows and columns
      for (int i = 0; i < 9 ; i++) {
        boolean rowIsValid = checkRow(sudoku[i]);
        boolean columnIsValid = checkColumn(sudoku, i);
        if (!rowIsValid || !columnIsValid) {
          return false;
        };
      };
      
      // check grid squares
      for (int i = 0; i < 9; i += 3) {
        for (int j = 0; j < 9; j += 3) {
          boolean squareIsValid = checkSquareOfThree(sudoku, i, j);
          if (!squareIsValid) { 
            return false;
          };
        };
      };
      
      return true;
    };
  
    // checks a given 3 x 3 square in the grid based on starting row and column
    private static boolean checkSquareOfThree(int[][] sudoku, int startRow, int startColumn) {
      Set<Integer> numbersSeen = new HashSet<Integer>();
      
      for (int i = startRow; i < startRow + 3; i++) {
        for (int j = startColumn; j < startColumn + 3; j++) {
          if (sudoku[i][j] == 0 || sudoku[i][j] > 9) {
            return false;
          };
          if (numbersSeen.contains(sudoku[i][j])){
            return false;
          } else {
            numbersSeen.add(sudoku[i][j]);
          };
        };
      };
      return true;
    };
  
    // checks a given row
    private static boolean checkRow(int[] sudokuRow) {
      Set<Integer> numbersSeen = new HashSet<Integer>();
      for (int i = 0; i < sudokuRow.length; i++) {
        if (sudokuRow[i] == 0 || sudokuRow[i] > 9) {
          return false;
        };
        if (numbersSeen.contains(sudokuRow[i])){
          return false;
        } else {
          numbersSeen.add(sudokuRow[i]);
        };
      };
      return true;  
    };
  
    // checks a given column
    private static boolean checkColumn(int[][] sudoku, int column) {
      Set<Integer> numbersSeen = new HashSet<Integer>();
      for (int i = 0; i < sudoku.length; i++) {
        if (sudoku[i][column] == 0 || sudoku[i][column] > 9) {
          return false;
        };
        if (numbersSeen.contains(sudoku[i][column])){
          return false;
        } else {
          numbersSeen.add(sudoku[i][column]);
        };
      };
      return true;  
    };
}