<template>
  <nav id="navBar">
    <div class="container">
      <div class="cancel">
        <router-link class="cancelButton" to="/Page-Two">
          <p>〱Cancel</p>
        </router-link>
      </div>
      <div class="officeCube">
        <!-- Display the dynamic title -->
        <p>{{ title }}</p>
      </div>
      <div class="done">
        <p class="doneButton">Done</p>
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
        <p class="deficientNum">0</p>
        <p class="deficientLabel">Deficient</p>
        <hr />
      </div>
    </div>
  </header>
  <hr />
  <!--Start of Deficient List-->
  <section id="deficientMenu">
    <div class="container">
      <DeficiencyButton d-button-id="buildup-1" d-row-name="Buildup" />
      <DeficiencyButton d-button-id="buildup-2" d-row-name="Cobweb" />
      <DeficiencyButton d-button-id="buildup-3" d-row-name="Debris" />
      <DeficiencyButton d-button-id="buildup-4" d-row-name="Disorganized" />
      <DeficiencyButton d-button-id="buildup-5" d-row-name="Dull" />
      <DeficiencyButton d-button-id="buildup-6" d-row-name="Dust" />
      <DeficiencyButton d-button-id="buildup-7" d-row-name="Filled (Over)" />
      <DeficiencyButton d-button-id="buildup-8" d-row-name="Filled (Under)" />
      <DeficiencyButton d-button-id="buildup-9" d-row-name="Fingerprints" />
      <DeficiencyButton d-button-id="buildup-10" d-row-name="Graffiti" />
      <DeficiencyButton d-button-id="buildup-11" d-row-name="Malodor" />
      <DeficiencyButton d-button-id="buildup-12" d-row-name="Non Compliant" />
      <DeficiencyButton d-button-id="buildup-13" d-row-name="Non-Operational" />
      <DeficiencyButton d-button-id="buildup-14" d-row-name="Scuff" />
      <DeficiencyButton d-button-id="buildup-15" d-row-name="Soil" />
      <DeficiencyButton d-button-id="buildup-16" d-row-name="Spot" />
      <DeficiencyButton d-button-id="buildup-17" d-row-name="Streak" />
    </div>
  </section>

  <!--End of Deficiency List-->
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
import { ref, onMounted, watch } from 'vue'
import DeficiencyButton from './Deficiency-Button.vue'
const count = ref(1)

onMounted(() => {
  const savedCount = sessionStorage.getItem('count')
  count.value = savedCount ? parseInt(savedCount) : 1
})

watch(count, newCount => {
  sessionStorage.setItem('count', newCount)
})
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

// Access the route
const route = useRoute()

// Reactive title based on rowName query parameter
const title = ref(route.query.rowName || 'Title') // Default to 'Title'

// Update the title if the route changes
onBeforeRouteUpdate(to => {
  title.value = to.query.rowName || 'Title'
})

// Retrieve the count from the query parameters
const acceptableNum = route.query.acceptableNum || 0
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
