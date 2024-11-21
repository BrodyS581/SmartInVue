<template>
  <div class="lighting">
    <div class="textForList">
      <p>{{ rowName }}</p>
    </div>
    <div class="listButtons">
      <div class="selectedButton">
        <div>
          <!-- Minus button -->
          <p
            class="minusButton"
            v-if="buttonsVisible && count > 0"
            @click="decrement"
          >
            -
          </p>
        </div>
        <div>
          <!-- Acceptable button -->
          <p class="acceptable" @click="toggleButtonsVisibility">
            {{ count }}
          </p>
        </div>
        <div>
          <!-- Plus button -->
          <p class="plusButton2" v-if="buttonsVisible" @click="increment">+</p>
        </div>
      </div>
      <!-- Update the router-link for the deficient button -->
      <router-link
        class="deficiencyLink"
        :to="{
          path: '/Page-Three',
          query: {
            rowName: rowName || 'DefaultValue',
            acceptableNum: count,
          },
        }"
      >
        <p class="deficiency">0</p>
      </router-link>
    </div>
  </div>
  <hr />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  buttonId: {
    type: String,
    required: true,
  },
  rowName: {
    type: String,
    default: 'Lighting',
  },
  initialCount: {
    type: Number,
    default: 0,
  },
})

// Local state
const count = ref(props.initialCount)
const buttonsVisible = ref(false)

// Define unique storage key
const countKey = `counter-value-${props.buttonId}`

// Restore count from sessionStorage
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

// Increment function
function increment() {
  count.value++
}

// Decrement function
function decrement() {
  if (count.value > 0) {
    count.value--
  }
}

// Toggle button visibility
function toggleButtonsVisibility() {
  buttonsVisible.value = !buttonsVisible.value
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
.lighting {
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
  border: solid;
  border-color: rgba(149, 202, 62, 255);
  border-radius: 5px;
  padding: 10px 15px;
  max-width: 50px;
  max-height: 38.5px;
  position: relative;
  left: 3px;
}
.plusButton2 {
  position: relative;
  right: 19px;
  background-color: #fff;
  color: black;
  border: solid;
  border-color: rgba(149, 202, 62, 255);
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
.acceptable {
  background-color: rgba(149, 202, 62, 255);
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  max-width: 50px;
  max-height: 50px;
  margin-right: 15px;
}
.deficiency {
  background-color: rgba(204, 64, 37, 255);
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  max-width: 50px;
  max-height: 50px;
}
.deficiencyLink {
  text-decoration: none;
}
</style>
