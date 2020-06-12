import Square from './square'

export default class AlgoWizModel {
    constructor(columns, rows) {
        this.columns = columns
        this.rows = rows
        this.grid = new Array(columns)

        //refactor using functions and break out into method
        for (let x = 0; x < this.grid.length; x++)
            this.grid[x] = new Array(rows)

        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < rows; y++) {
                this.grid[x][y] = new Square(x, y)
            }
        }

        for (let x = 0; x < this.grid.length; x++) {
            for (let y = 0; y < rows; y++) {
                //above
                if (y > 0) {
                    this.grid[x][y].connections[0] = this.grid[x][y - 1]
                }
                //left
                if (x > 0) {
                    this.grid[x][y].connections[1] = this.grid[x - 1][y]
                }
                //bottom
                if (y < rows - 1) {
                    this.grid[x][y].connections[2] = this.grid[x][y + 1]
                }
                //right
                if (x < columns - 1) {
                    this.grid[x][y].connections[3] = this.grid[x + 1][y]
                }
            }
        }

    }

    click({ x, y }) {
        this.grid[x][y].click()
    }

    showConnections({ x, y }) {
        this.grid[x][y].showConnections()
    }
    hideConnections({ x, y }) {
        this.grid[x][y].hideConnections()
    }
}