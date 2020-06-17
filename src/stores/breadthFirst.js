export default function bfpf(grid) {
    // the start is at [0][0], we want to get to [cols][rows] and we assume that there is a path

    grid.map(col => col.map(sq => { sq.setVisited(false); return sq }))

    //start is the start square
    let start = grid[0][0]
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
                queue.push(square)
                if (square.state == 'end')
                    end = square
            }
            if (end) {
                break
            }
        }
        if (end) {
            break
        }
    }

    console.log(end)
}