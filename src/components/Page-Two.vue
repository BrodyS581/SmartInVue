<template>
  <nav id="navBar">
    <div class="container">
      <div class="cancel">
        <router-link class="cancelButton" to="/Page-One">
          <p>〱Cancel</p>
        </router-link>
      </div>
      <div class="officeCube">
        <p>Office Cube</p>
      </div>
      <div class="accept">
        <router-link class="cancelButton" to="/Page-One">
          <p class="acceptButton">Accept</p>
        </router-link>
      </div>
    </div>
  </nav>
  <hr />

  <header id="mainHeader">
    <div class="container">
      <div class="searchBar">
        <input
          type="text"
          name="search"
          placeholder="&#x1F50D;&#xFE0E; Search"
        />
      </div>
      <div class="plus">
        <p class="plusButton">+</p>
      </div>
    </div>
  </header>
  <hr />

  <section id="itemMenu">
    <div class="container">
      <CounterButton
        v-for="button in buttons"
        :key="button.id"
        :buttonId="button.id"
        :rowName="button.rowName"
        :initialCount="button.count"
        :updatedAcceptableNum="button.count"
        :updateDeficientCount="button.dCount"
        @updateCount="handleUpdateCount"
        @goToPageThree="navigateToPageThree"
      />
    </div>
  </section>

  <section id="spaceBetween">
    <div>
      <hr />
    </div>
  </section>
  <hr />

  <footer id="mainFooter">
    <div class="container">
      <div class="percent">
        <p>---%</p>
      </div>
      <div class="summary">
        <p>Summary</p>
      </div>
      <div class="notes">
        <p>Notes</p>
      </div>
      <div class="tickets">
        <p>Tickets</p>
      </div>
      <div class="edit">
        <p>Edit</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CounterButton from './Counter-Button.vue'
import { ref } from 'vue'
const route = useRoute()
// Retrieve query parameters
const updatedAcceptableNum = ref(
  parseInt(route.query.updatedAcceptableNum || 0, 10),
)
const updateDeficientCount = ref(
  parseInt(route.query.updateDeficientCount || 0, 10),
)

console.log('Updated Acceptable Number:', updatedAcceptableNum.value)
console.log('Updated Deficiency Number:', updateDeficientCount.value)
const buttons = reactive([
  {
    id: 'lighting-1',
    rowName: 'Container, Recycle',
    count: 0,
    dCount: 0,
  },
  { id: 'lighting-2', rowName: 'Container, Trash', count: 1, dCount: 0 },
  { id: 'lighting-3', rowName: 'Floor, Carpet', count: 1, dCount: 0 },
  { id: 'lighting-4', rowName: 'Floor, Corners', count: 1, dCount: 0 },
  { id: 'lighting-5', rowName: 'Floor, Edges', count: 1, dCount: 0 },
  { id: 'lighting-6', rowName: 'Furniture', count: 2, dCount: 0 },
  { id: 'lighting-7', rowName: 'Lighting', count: 1, dCount: 0 },
  { id: 'lighting-8', rowName: 'Partition', count: 1, dCount: 0 },
  { id: 'lighting-9', rowName: 'Telephone', count: 0, dCount: 0 },
])

// Check for query parameters and update the corresponding button
onMounted(() => {
  const { id, updatedAcceptableNum, updateDeficientCount } = route.query
  if (id) {
    const button = buttons.find(b => b.id === id)
    if (button) {
      button.count = parseInt(updatedAcceptableNum || button.count, 10)
      button.dCount = parseInt(updateDeficientCount || button.dCount, 10)
    }
  }
})
function handleUpdateCount({ id, count, dCount }) {
  const button = buttons.find(b => b.id === id)
  if (button) {
    button.count = count
    button.dCount = dCount
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  background-color: #fff;
}
.container {
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 30px;
}
.cancelButton {
  text-decoration: none;
  color: rgba(149, 202, 62, 255);
}
.acceptButton {
  background-color: rgba(149, 202, 62, 255);
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
}
.acceptButton:hover {
  background-color: rgb(116, 198, 89);
}
.plusButton {
  color: rgba(149, 202, 62, 255);
}

#navBar {
  background: #fff;
  height: 60px;
}
#navBar .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
#navBar .container .cancel {
  color: rgba(149, 202, 62, 255);
}
#navBar .container .accept {
  color: #fff;
}

#mainHeader {
  background: #fff;
  height: 35px;
}
#mainHeader .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
#mainHeader .container .searchBar input[type='text'] {
  width: 350px;
  border: none;
  border-radius: 5px;
  background-color: rgba(240, 240, 240, 255);
  padding: 5px;
  position: relative;
  bottom: 5px;
}
#mainHeader .container .plus {
  font-size: 30px;
  position: relative;
  bottom: 5px;
}
#mainHeader .container hr {
  flex: 0 0 100%;
}

#itemMenu {
  background: #fff;
  font-weight: 500;
}
#itemMenu .container {
  height: 100%;
}

#spaceBetween {
  height: 200px;
  display: flex;
  align-content: end;
  background-color: rgba(248, 248, 248, 255);
}

#mainFooter {
  color: rgba(149, 202, 62, 255);
}

#mainFooter .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 15px;
}

.acceptable {
  background-color: rgba(149, 202, 62, 255);
  color: #fff;
  border-radius: 5px;
  padding: 10px 15px;
  max-width: 50px;
  max-height: 50px;
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

@media (max-width: 720px) {
  #mainHeader .container {
    text-align: left;
  }
  #mainFooter {
    display: block;
    text-align: center;
  }
}
</style>
