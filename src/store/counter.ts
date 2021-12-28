import { defineStore } from 'pinia'

export const userCounterStore = defineStore({
    id: 'counter',
    state: () => {
        return {
            counter: 0
        }
    },
    actions: {
        incrementCounter() {
            this.counter++
        },
        doubleCounter() {
            this.counter *= 2
        },
        resetCounter() {
            this.counter = 0
        }
    },
    getters: {
        getCounter(state) {
            return state.counter
        }
    }
})