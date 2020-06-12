export default class Square {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.clicked = false
        this.connections = new Array(4)
        this.state = "default"
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
            default:
                break;
        }
    }
}