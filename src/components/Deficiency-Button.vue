<template>
  <div class="buildup">
    <div class="textForList">
      <!-- Use the customizable row name -->
      <p>{{ dRowName }}</p>
    </div>
    <div class="listButtons">
      <div class="selectedButton">
        <div>
          <!-- Minus button -->
          <p
            class="minusButton"
            v-if="buttonsVisible && count > 0"
            @click="decreaseCount"
          >
            -
          </p>
        </div>
        <div>
          <!-- deficient button -->
          <p class="deficient" @click="toggleButtonsVisibility">
            {{ count }}
          </p>
        </div>
        <div>
          <!-- Plus button -->
          <p class="plusButton2" v-if="buttonsVisible" @click="increaseCount">
            +
          </p>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>

<script setup>
import { ref, onMounted, watch, toRefs } from 'vue'

// Define props explicitly
const props = defineProps({
  dButtonId: {
    type: String,
    required: true,
  },
  dRowName: {
    type: String,
    required: true,
    default: 'Lighting', // Default name if none is provided
  },
})

const { dButtonId, dRowName } = toRefs(props) // Destructure props

// State for button visibility
const buttonsVisible = ref(false)

// Define the unique storage key
const countKey = `counter-value-${dButtonId.value}`
const count = ref(0)

// Restore count from sessionStorage on mount
onMounted(() => {
  const savedCount = sessionStorage.getItem(countKey)
  if (savedCount !== null) {
    count.value = parseInt(savedCount, 10)
  }
})

// Save count to sessionStorage whenever it changes
watch(count, newCount => {
  sessionStorage.setItem(countKey, newCount)
})

// Toggle visibility of buttons
function toggleButtonsVisibility() {
  buttonsVisible.value = !buttonsVisible.value
}

// Increment and decrement functions
function increaseCount() {
  count.value += 1
}

function decreaseCount() {
  if (count.value > 0) {
    count.value -= 1
  }
}
</script>
<style scoped>
.minusButton,
.plusButton2 {
  transition: opacity 0.3s ease;
}
.listButtons {
  display: flex;
}
.buildup {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.selectedButton {
  display: flex;
}
.minusButton {
  background-color: #fff;
  color: black;
  border: 2px, rgba(204, 64, 37, 255), solid;
  border-color: rgba(204, 64, 37, 255);
  border-radius: 5px;
  padding: 10px 15px;
  max-width: 50px;
  max-height: 38.5px;
  position: relative;
  left: 2px;
}
.plusButton2 {
  position: relative;
  right: 2px;
  background-color: #fff;
  color: black;
  border: 2px, rgba(204, 64, 37, 255), solid;
  border-radius: 5px;
  padding: 10px 15px;
  max-width: 50px;
  max-height: 38.5px;
}
.minusButton,
.plusButton2 {
  transition: opacity 0.3s ease;
  position: relative;
  top: 1.5px;
}
.deficient {
  background-color: #fff;
  color: rgba(204, 64, 37, 255);
  border-radius: 5px;
  border: 2px, rgba(204, 64, 37, 255), solid;
  padding: 10px 15px;
  max-width: 50px;
  max-height: 50px;
}
</style>
