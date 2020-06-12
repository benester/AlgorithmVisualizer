<style>
    .default {
        justify-content: center;
        align-content: center;
        text-align: center;
        background-color: rgb(141, 141, 136);
        width: 100%;
        margin-top: 1px;
        margin-bottom: 1px;
        height: 100%;
    }

    .clicked {
        justify-content: center;
        align-content: center;
        text-align: center;
        background-color: rgb(72, 52, 160);
        width: 100%;
        margin-top: 1px;
        margin-bottom: 1px;
        height: 100%;
    }

    .showingAsConnection {
        justify-content: center;
        align-content: center;
        text-align: center;
        background-color: rgb(243, 220, 8);
        width: 100%;
        margin-top: 1px;
        margin-bottom: 1px;
        height: 100%;
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
            gridStore.showConnections({ x, y })
        }
    }

    function handeMouseOut() {
        gridStore.hideConnections({ x, y })
    }
</script>

<div class="{model.state}" on:click={handleClick} on:mouseover={handleMouseOver} on:mouseout={handeMouseOut}
    ondragstart="return false;" ondrop="return false;">


</div>