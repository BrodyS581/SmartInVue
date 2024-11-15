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
        <p class="acceptButton">Accept</p>
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
      <div class="recycle">
        <div class="textForList">
          <p>Container, Recycle</p>
        </div>
        <div class="listButtons">
          <p class="acceptable">0</p>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />

      <div class="trash">
        <div class="textForList">
          <p>Container, Trash</p>
        </div>
        <div class="listButtons">
          <p class="acceptable">1</p>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />

      <div class="carpet">
        <div class="textForList">
          <p>Floor, Carpet</p>
        </div>
        <div class="listButtons">
          <p class="acceptable">1</p>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />

      <div class="corners">
        <div class="textForList">
          <p>Floor, Corners</p>
        </div>
        <div class="listButtons">
          <p class="acceptable">1</p>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />

      <div class="edges">
        <div class="textForList">
          <p>Floor, Edges</p>
        </div>
        <div class="listButtons">
          <p class="acceptable">1</p>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />

      <div class="furniture">
        <div class="textForList">
          <p>Furniture</p>
        </div>
        <div class="listButtons">
          <p class="acceptable">2</p>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />
      <div class="lighting">
        <div class="textForList">
          <p>Lighting</p>
        </div>
        <div class="listButtons">
          <div class="selectedButton">
            <div>
              <!-- Minus button, visible only when buttons are visible and count > 0 -->
              <p
                class="minusButton"
                v-if="buttonsVisible && count > 0"
                @click="decreaseCount"
              >
                -
              </p>
            </div>
            <div>
              <!-- Acceptable button, displays the count -->
              <p class="acceptable" @click="toggleButtonsVisibility">
                {{ count }}
              </p>
            </div>
            <div>
              <!-- Plus button, increases the count when clicked -->
              <p
                class="plusButton2"
                v-if="buttonsVisible"
                @click="increaseCount"
              >
                +
              </p>
            </div>
          </div>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />

      <div class="partition">
        <div class="textForList">
          <p>Partition</p>
        </div>
        <div class="listButtons">
          <p class="acceptable">1</p>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />

      <div class="telephone">
        <div class="textForList">
          <p>Telephone</p>
        </div>
        <div class="listButtons">
          <p class="acceptable">0</p>
          <router-link class="deficiencyLink" to="/Page-Three">
            <p class="deficiency">0</p>
          </router-link>
        </div>
      </div>
      <hr />
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
  background-color: #fff;
  color: rgba(149, 202, 62, 255);
  padding: 0 10px;
  border: none;
  border-radius: 10px;
}
.plusButton:hover {
  background-color: lightgray;
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
}
#mainHeader .container .plus {
  font-size: 30px;
}
#mainHeader .container hr {
  flex: 0 0 100%;
}

/*start of item list*/
#itemMenu {
  background: #fff;
  font-weight: 500;
}
#itemMenu .container {
  height: 100%;
}
.recycle {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.trash {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.carpet {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.corners {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.edges {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.furniture {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
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
  right: 11px;
}
.plusButton2 {
  position: relative;
  right: 20px;
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
}
.partition {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.telephone {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}

.listButtons {
  display: flex;
}
.listButtons .acceptable {
  position: relative;
  right: 15px;
}
/*End of Item List*/

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
<script setup>
import { ref, onMounted, watch } from 'vue'

const buttonsVisible = ref(false)
const count = ref(1)

onMounted(() => {
  const savedCount = sessionStorage.getItem('count')
  count.value = savedCount ? parseInt(savedCount) : 1
})

watch(count, newCount => {
  sessionStorage.setItem('count', newCount)
})

function toggleButtonsVisibility() {
  buttonsVisible.value = !buttonsVisible.value
}

function increaseCount() {
  count.value += 1
}

function decreaseCount() {
  if (count.value > 0) {
    count.value -= 1
  }
}
</script>
