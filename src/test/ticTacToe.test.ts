import { TicTacToe } from "../main/ticTacToe";

describe('The game of tic tac toe', () => {

  describe("Current Player", () => {
    it("should default to 'X' as the first player", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      expect(ticTacToe.getCurrentPlayer()).toBe("X");
    });

    it("should be 'O' after one move", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      expect(ticTacToe.getCurrentPlayer()).toBe("O");
    });

    it("should be 'X' after two moves", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(0, 1);
      expect(ticTacToe.getCurrentPlayer()).toBe("X");
    });

    it("should be 'O' after three moves", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(0, 1);
      ticTacToe.play(0, 2);
      expect(ticTacToe.getCurrentPlayer()).toBe("O");
    });
  })

  describe("Board", () => {
    it("should default to an empty board on start", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      expect(ticTacToe.getBoard()).toStrictEqual([[null, null, null], [null, null, null], [null, null, null]]);
    });

    it("should return a the current board after one move", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      expect(ticTacToe.getBoard()).toStrictEqual([["X", null, null], [null, null, null], [null, null, null]]);
    });

    it("should return a the current board after two moves", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(0, 1)
      expect(ticTacToe.getBoard()).toStrictEqual([["X", "O", null], [null, null, null], [null, null, null]]);
    });

    it("should return a the current board after three moves", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(0, 1);
      ticTacToe.play(0, 2);
      expect(ticTacToe.getBoard()).toStrictEqual([["X", "O", "X"], [null, null, null], [null, null, null]]);
    });

    it("should return a the current board after six moves", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(0, 1);
      ticTacToe.play(0, 2);
      ticTacToe.play(1, 0);
      ticTacToe.play(1, 1);
      ticTacToe.play(1, 2);
      expect(ticTacToe.getBoard()).toStrictEqual([["X", "O", "X"], ["O", "X", "O"], [null, null, null]]);
    });

    it("should not allow to place in the same spot", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      expect(() => { ticTacToe.play(0, 0) }).toThrowError("Stop trying to cheat!");
    });

    it("should not be able to place in a 4th row", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      expect(() => { ticTacToe.play(3, 0) }).toThrowError("Out of bounds");
    });

    it("should not be able to place in a 4th column", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      expect(() => { ticTacToe.play(0, 3) }).toThrowError("Out of bounds");
    });
  })

  describe("the game status", () => {
    it("should be 'ongoing' when the game starts", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      expect(ticTacToe.getStatus()).toBe("ongoing");
    });

    it("should be 'X wins' when they have a vertical line on the left", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(0, 1);
      ticTacToe.play(1, 0);
      ticTacToe.play(1, 1);
      ticTacToe.play(2, 0);
      expect(ticTacToe.getStatus()).toBe("X wins");
    });

    it("should be 'X wins' when they have a vertical line in the middle", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 1);
      ticTacToe.play(0, 0);
      ticTacToe.play(1, 1);
      ticTacToe.play(0, 2);
      ticTacToe.play(2, 1);
      expect(ticTacToe.getStatus()).toBe("X wins");
    });

    it("should be 'X wins' when they have a vertical line on the right", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 2);
      ticTacToe.play(0, 0);
      ticTacToe.play(1, 2);
      ticTacToe.play(0, 1);
      ticTacToe.play(2, 2);
      expect(ticTacToe.getStatus()).toBe("X wins");
    });

    it("should be 'O wins' when they have a horizontal line on the top", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(1, 0);
      ticTacToe.play(0, 0);
      ticTacToe.play(2, 0);
      ticTacToe.play(0, 1);
      ticTacToe.play(2, 2);
      ticTacToe.play(0, 2);
      expect(ticTacToe.getStatus()).toBe("O wins");
    });

    it("should be 'O wins' when they have a horizontal line on the top", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(1, 0);
      ticTacToe.play(2, 0);
      ticTacToe.play(1, 1);
      ticTacToe.play(2, 2);
      ticTacToe.play(1, 2);
      expect(ticTacToe.getStatus()).toBe("O wins");
    });

    it("should be 'O wins' when they have a horizontal line on the top", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(2, 0);
      ticTacToe.play(1, 0);
      ticTacToe.play(2, 1);
      ticTacToe.play(1, 2);
      ticTacToe.play(2, 2);
      expect(ticTacToe.getStatus()).toBe("O wins");
    });


    it("should be 'X wins' when they have a diagonal line from top left", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(2, 0);
      ticTacToe.play(1, 1);
      ticTacToe.play(2, 1);
      ticTacToe.play(2, 2);
      expect(ticTacToe.getStatus()).toBe("X wins");
    });

    it("should be 'X wins' when they have a diagonal line from top right", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 2);
      ticTacToe.play(1, 0);
      ticTacToe.play(1, 1);
      ticTacToe.play(2, 1);
      ticTacToe.play(2, 0);
      expect(ticTacToe.getStatus()).toBe("X wins");
    });

    it("should be throw an error when trying to play an already won game", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(0, 1);
      ticTacToe.play(1, 0);
      ticTacToe.play(1, 1);
      ticTacToe.play(2, 0);
      expect(() => { ticTacToe.play(0, 2) }).toThrowError("Game finished");
    });

    it("should return 'draw' after 9 moves and no winner", () => {
      let ticTacToe: TicTacToe = new TicTacToe();
      ticTacToe.play(0, 0);
      ticTacToe.play(0, 1);
      ticTacToe.play(0, 2);
      ticTacToe.play(1, 1);
      ticTacToe.play(1, 0);
      ticTacToe.play(1, 2);
      ticTacToe.play(2, 1);
      ticTacToe.play(2, 0);
      ticTacToe.play(2, 2);
      expect(ticTacToe.getStatus()).toBe("draw");
    });
  });
});

