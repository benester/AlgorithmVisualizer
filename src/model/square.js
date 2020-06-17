export default class Square {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.connections = new Array(4)
        this.state = "default"
        this.visited = false
    }

    showConnections() {
        if (this.state == "clicked")
            return
        this.connections.forEach(square => {
            if (square && square.state != "clicked")
                square.state = "showingAsConnection"
        })
    }

    hideConnections() {
        this.connections.forEach(square => {
            if (square && square.state == "showingAsConnection")
                square.state = "default"
        });
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
            default:
                break;
        }
    }

    setVisited(status) {
        this.visited = status
    }

    showVisited() {
        if (!this.visited && this.state == 'highlight') {
            this.state = 'default'
            return
        }
        if (this.visited && this.state != 'beginning' && this.state != 'end')
            this.state = 'highlight'
    }
}