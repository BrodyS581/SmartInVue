<template>
  <nav id="navBar">
    <div class="container">
      <div class="cancel">
        <router-link class="cancelButton" to="/Page-Two">
          <p>〱Cancel</p>
        </router-link>
      </div>
      <div class="officeCube">
        <p>{{ title }}</p>
      </div>
      <div class="done">
        <button @click="navigateBack" class="doneButton">Done</button>
      </div>
    </div>
  </nav>
  <hr />
  <header id="mainHeader">
    <div class="container">
      <div class="searchBar">
        <p>&#x1F50D;&#xFE0E; Search</p>
      </div>
      <div class="deficientCount">
        <p class="acceptableLabel">Acceptable</p>
        <p class="acceptableNum">{{ acceptableNum }}</p>
        |
        <p class="deficientNum">{{ deficientNum }}</p>
        <p class="deficientLabel">Deficient</p>
        <hr />
      </div>
    </div>
  </header>
  <hr />

  <section id="deficientMenu">
    <div class="container">
      <DeficiencyButton
        v-for="(deficiency, index) in deficiencies"
        :key="index"
        :d-button-id="deficiency.id"
        :d-row-name="deficiency.name"
        :total-count="totalCount"
        :acceptable-num="acceptableNum"
        @updateTotalCount="updateTotalCount"
        @updateDeficientCount="updateDeficientCount"
      />
    </div>
  </section>

  <footer id="mainFooter">
    <hr />
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
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DeficiencyButton from './Deficiency-Button.vue'

const route = useRoute()
const router = useRouter()
const title = ref(route.query.rowName || 'Unknown Title')
const initialAcceptableNum = parseInt(route.query.acceptableNum || 0, 10)
const initialDeficiencyNum = parseInt(route.query.deficientNum || 0, 10)
const acceptableNum = ref(initialAcceptableNum) // Tracks remaining acceptable items
const totalCount = ref(0)
const deficientNum = ref(initialDeficiencyNum) // Tracks total deficiencies

function updateTotalCount(change) {
  totalCount.value += change
}
function navigateBack() {
  router.push({
    path: '/Page-Two',
    query: {
      id: route.query.id,
      updatedAcceptableNum: acceptableNum.value,
      updateDeficientCount: deficientNum.value,
    },
  })
}

function updateDeficientCount(newDCount) {
  const change = newDCount - deficientNum.value // Calculate the change in deficientNum
  deficientNum.value = newDCount

  // Adjust acceptableNum based on the change
  acceptableNum.value -= change
}

const deficiencies = [
  { id: 'buildup-1', name: 'Buildup' },
  { id: 'buildup-2', name: 'Cobweb' },
  { id: 'buildup-3', name: 'Debris' },
  { id: 'buildup-4', name: 'Disorganized' },
  { id: 'buildup-5', name: 'Dull' },
  { id: 'buildup-6', name: 'Dust' },
  { id: 'buildup-7', name: 'Filled (Over)' },
  { id: 'buildup-8', name: 'Filled (Under)' },
  { id: 'buildup-9', name: 'Fingerprints' },
  { id: 'buildup-10', name: 'Graffiti' },
  { id: 'buildup-11', name: 'Malodor' },
  { id: 'buildup-12', name: 'Non Compliant' },
  { id: 'buildup-13', name: 'Non-Operational' },
  { id: 'buildup-14', name: 'Scuff' },
  { id: 'buildup-15', name: 'Soil' },
  { id: 'buildup-16', name: 'Spot' },
  { id: 'buildup-17', name: 'Streak' },
]
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
.doneButton {
  background-color: rgba(149, 202, 62, 255);
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
}
.doneButton:hover {
  background-color: rgb(116, 198, 89);
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
  width: 100%;
}
#mainHeader .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  width: 100%;
}
#mainHeader .container .searchBar {
  border: none;
  border-radius: 5px;
  background-color: rgba(240, 240, 240, 255);
  padding: 5px;
  width: 100%;
  margin-top: 5px;
}
.deficientCount {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.acceptableLabel {
  color: rgba(149, 202, 62, 255);
  margin-right: 5px;
}
.acceptableNum {
  color: rgba(149, 202, 62, 255);
  margin-right: 5px;
}
.deficientLabel {
  color: rgba(204, 64, 37, 255);
  margin-left: 5px;
}
.deficientNum {
  color: rgba(204, 64, 37, 255);
  margin-left: 5px;
}
/*Start of deficient menu*/
#deficientMenu {
  background: #fff;
  font-weight: 500;
}
#itemMenu .container {
  height: 100%;
}

.listButtons {
  display: flex;
}
.listButtons .acceptable {
  position: relative;
  right: 15px;
}

.deficiency {
  background-color: #fff;
  color: rgba(204, 64, 37, 255);
  border-radius: 5px;
  border: 2px, rgba(204, 64, 37, 255), solid;
  padding: 10px 15px;
  max-width: 50px;
  max-height: 50px;
}
.deficiencyLink {
  text-decoration: none;
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
</style>
