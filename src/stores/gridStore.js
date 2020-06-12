import { writable } from 'svelte/store'
//This is the model that is wrapped in this store.
import Model from '../model/model'

let defaultGridStore = new Model(32, 16)

function createStore() {
    const { subscribe, set, update } = writable(defaultGridStore)

    return {
        subscribe,
        //these methods could have return values 
        click: arg => update(model => {
            model.click(arg)
            return model
        }),
        showConnections: arg => update(model => {
            model.showConnections(arg)
            return model
        }),
        hideConnections: arg => update(model => {
            model.hideConnections(arg)
            return model
        }),
        update
    }
}

export const gridStore = createStore()