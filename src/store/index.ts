import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        counter: 0,
    }),
    getters: {
        doubleCount(state) {
            return state.counter * 2
        },
        doublePlusOne(): number {
            return this.counter * 2 + 1
        },
    },
    actions: {
        setCount(data: number) {
          this.$patch({
            counter: data,
          })
        }
    }
})