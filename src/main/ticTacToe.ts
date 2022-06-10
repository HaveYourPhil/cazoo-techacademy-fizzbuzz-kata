type BoardValue = string | null
type Board = BoardValue[][]

export class TicTacToe {
  status: string = "ongoing";
  board: Board = [[null, null, null], [null, null, null], [null, null, null]];
  boardColumns: Board = [[null, null, null], [null, null, null], [null, null, null]];
  currentPlayer: string = "X";


  play(row: number, column: number) {
    if (row > 2 || column > 2) throw Error("Out of bounds");
    if (this.board[row][column]) throw Error("Stop trying to cheat!");
    if (this.status !== 'ongoing') throw Error("Game finished")

    this.board[row][column] = this.currentPlayer;
    this.boardColumns[column][row] = this.currentPlayer;

    const rowFull = this.board.every(row => row.every(mark => mark !== null))
    if (rowFull) this.status = 'draw'

    // Diagonal top left
    if (this.board[1][1] && this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]) this.status = `${this.board[1][1]} wins`
    // Diagonal top right
    if (this.board[1][1] && this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]) this.status = `${this.board[1][1]} wins`

    const rowWinner = this.board.some(row => row.every(mark => mark === this.currentPlayer))
    const columnWinner = this.boardColumns.some(row => row.every(mark => mark === this.currentPlayer))
    if (rowWinner || columnWinner) this.status = `${this.currentPlayer} wins`

    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  getCurrentPlayer(): string {
    return this.currentPlayer;
  }

  getBoard(): Board {
    return this.board
  }

  getStatus(): string {
    return this.status;
  }
}
