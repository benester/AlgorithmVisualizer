export default function bfpf(model) {
    // the start is at [0][0], we want to get to [cols][rows] and we assume that there is a path
    let grid = model.grid
    let start = model.beginning
    if (!start) return

    grid.forEach(col => col.forEach(sq => sq.setVisited(false)));

    //start is the start square
    start.path = []
    //we have visited the start square
    start.setVisited(true)

    let queue = [start]
    let end
    //adding the first of the squares

    while (queue.length > 0) {
        let current = queue.shift()
        for (let i = 0; i < 4; i++) {
            let square = current.connections[i]
            if (square && !square.visited && square.state != 'clicked') {
                square.visited = true
                square.addToPath([...current.path, current])
                queue.push(square)
                if (square.state == 'end')
                    end = square
            }
            if (end) break
        }
        if (end) break
    }

    return end
}