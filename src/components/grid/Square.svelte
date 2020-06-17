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
    }

    .end {
        background-color: rgb(211, 24, 24);
    }

    .highlight {
        background-color: rgb(142, 226, 135);

    }
</style>

<script>
    export let square;

    import Nav from '../Nav.svelte'
    import { gridStore } from '../../stores/gridStore'

    let x = square.x
    let y = square.y

    let model

    gridStore.subscribe(data => model = data.grid[x][y])

    function handleClick() {
        gridStore.click({ x, y })
    }

    function handleMouseOver(event) {
        if (event.buttons == 1) {
            gridStore.click({ x, y })
        } else {
            //gridStore.showConnections({ x, y })
        }
    }

    function handeMouseOut() {
        //gridStore.hideConnections({ x, y })
    }
</script>

<div class="{model.state}" on:click={handleClick} on:mouseover={handleMouseOver} on:mouseout={handeMouseOut}
    ondragstart="return false;" ondrop="return false;">
</div>