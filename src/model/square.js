export default class Square {
    constructor(x, y) {
        this.pos = { x, y }
        this.x = x
        this.y = y
        this.connections = new Array(4)
        this.state = "default"
        this.visited = false
        this.path = []
    }

    click() {
        switch (this.state) {
            case "default":
                this.state = "clicked"
                break;
            case "clicked":
                this.state = "default"
                break;
            case "highlight":
                this.state = "clicked"
                break;
            case "path":
                this.state = "clicked"
                break;
            default:
                break;
        }
    }

    setVisited(status) {
        this.visited = status
    }

    resetHighlights() {
        if (this.state == 'path' || this.state == 'highlight')
            this.state = 'default'
        this.path = []
    }

    showVisited() {
        if (!this.visited && this.state == 'highlight') {
            this.state = 'default'
            return
        }
        if (this.visited && this.state != 'beginning' && this.state != 'end' && this.state != 'path')
            this.state = 'highlight'
    }

    addToPath(squares) {
        squares.forEach(square => {
            this.path.push(square)
        });
    }
}