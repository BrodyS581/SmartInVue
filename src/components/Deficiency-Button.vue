<template>
  <div class="buildup">
    <div class="textForList">
      <p>{{ dRowName }}</p>
    </div>
    <div class="listButtons">
      <div class="selectedButton">
        <div>
          <p
            class="minusButton"
            v-if="buttonsVisible && count > 0"
            @click="decreaseCount"
          >
            -
          </p>
        </div>
        <div>
          <p class="deficient" @click="toggleButtonsVisibility">
            {{ count }}
          </p>
        </div>
        <div>
          <p
            class="plusButton2"
            v-if="buttonsVisible && totalCount < acceptableNum"
            @click="increaseCount"
          >
            +
          </p>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  dButtonId: {
    type: String,
    required: true,
  },
  dRowName: {
    type: String,
    required: true,
    default: 'Lighting',
  },
  totalCount: {
    type: Number, // Acceptable as a number from the parent
    required: true,
  },
  acceptableNum: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['updateTotalCount']) // Declare events

const buttonsVisible = ref(false)
const countKey = `counter-value-${props.dButtonId}`
const count = ref(0)

onMounted(() => {
  const savedCount = sessionStorage.getItem(countKey)
  if (savedCount !== null) {
    count.value = parseInt(savedCount, 10)
  }
})

watch(count, newCount => {
  sessionStorage.setItem(countKey, newCount)
})

// Show/hide buttons
function toggleButtonsVisibility() {
  buttonsVisible.value = !buttonsVisible.value
}

// Increment function
function increaseCount() {
  if (props.totalCount < props.acceptableNum) {
    count.value += 1
    emit('updateTotalCount', 1) // Notify parent to increment totalCount
  }
}

// Decrement function
function decreaseCount() {
  if (count.value > 0) {
    count.value -= 1
    emit('updateTotalCount', -1) // Notify parent to decrement totalCount
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
