import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0) // Initialize count
  const doubleCount = computed(() => count.value * 2) // Keep this if needed

  // Increment the count
  function increment() {
    count.value++
  }

  // Decrement the count (with optional validation)
  function decrement() {
    if (count.value > 0) count.value--
  }

  // Set count to a specific value (if needed)
  function setCount(newCount) {
    count.value = newCount
  }

  const dCount = ref(0) // Initialize count
  const dDoubleCount = computed(() => dCount.value * 2) // Keep this if needed

  // Increment the count
  function dIncrement() {
    dCount.value++
  }

  // Decrement the count (with optional validation)
  function dDecrement() {
    if (dCount.value > 0) dCount.value--
  }

  // Set count to a specific value (if needed)
  function dSetCount(newDCount) {
    dCount.value = newDCount
  }

  return {
    count,
    doubleCount,
    increment,
    decrement,
    setCount,
    dCount,
    dDoubleCount,
    dIncrement,
    dDecrement,
    dSetCount,
  }
})
