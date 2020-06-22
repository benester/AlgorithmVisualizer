<style>
    div {
        justify-content: center;
        align-content: center;
        text-align: center;
        width: 100%;
        margin-top: 1px;
        margin-bottom: 1px;
        height: 100%;
    }

    .default {
        background-color: rgb(141, 141, 136);
    }

    .clicked {
        background-color: rgb(72, 52, 160);
    }

    .showingAsConnection {
        background-color: rgb(243, 220, 8);
    }

    .beginning {
        background-color: rgb(252, 252, 252);
        background-image: url("../beginning.svg");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .end {
        background-color: rgb(252, 252, 252);
        background-image: url("../end.svg");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .highlight {
        background-color: rgb(142, 226, 135);
    }

    .path {
        background-color: cornflowerblue;
    }
</style>

<script>
    export let square;

    import Nav from '../Nav.svelte'
    import { gridStore } from '../../stores/gridStore'

    let x = square.x
    let y = square.y

    let model

    gridStore.subscribe(data => {
        model = data.grid[x][y]
    })

    function handleClick(event) {
        if (event.which == 1) {
            gridStore.click({ x, y })
        } else if (event.which == 3) {
            event.preventDefault()
            gridStore.rClick({ x, y })
        }
    }

    function handleMouseOver(event) {
        if (event.buttons == 1)
            gridStore.click({ x, y })
    }

</script>

<div class="{model.state}" on:mousedown={handleClick} on:mouseover={handleMouseOver} ondragstart="return false;"
    on:contextmenu={handleClick} ondrop="return false;">
</div>