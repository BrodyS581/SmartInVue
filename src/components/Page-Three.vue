<template>
  <nav id="navBar">
    <div class="container">
      <div class="cancel">
        <router-link class="cancelButton" to="/Page-Two">
          <p>〱Cancel</p>
        </router-link>
      </div>
      <div class="officeCube">
        <p>Title</p>
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
        <p class="acceptableNum">1</p>
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
      <div class="buildup">
        <div class="textForList">
          <p>Buildup</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />

      <div class="cobweb">
        <div class="textForList">
          <p>Cobweb</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />

      <div class="debris">
        <div class="textForList">
          <p>Debris</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />

      <div class="disorganized">
        <div class="textForList">
          <p>Disorganized</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />

      <div class="dull">
        <div class="textForList">
          <p>Dull</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />

      <div class="dust">
        <div class="textForList">
          <p>Dust</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="filledOver">
        <div class="textForList">
          <p>Filled (Over)</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />

      <div class="filledUnder">
        <div class="textForList">
          <p>Filled (Under)</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />

      <div class="fingerprints">
        <div class="textForList">
          <p>Fingerprints</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="graffiti">
        <div class="textForList">
          <p>Graffiti</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="malodor">
        <div class="textForList">
          <p>Malodor</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="nonCompliant">
        <div class="textForList">
          <p>Non Compliant</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="nonOperational">
        <div class="textForList">
          <p>Non-Operational</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="scuff">
        <div class="textForList">
          <p>Scuff</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="soil">
        <div class="textForList">
          <p>Soil</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="spot">
        <div class="textForList">
          <p>Spot</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
      <div class="streak">
        <div class="textForList">
          <p>Streak</p>
        </div>
        <div class="listButtons">
          <p class="deficiency">0</p>
        </div>
      </div>
      <hr />
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
.buildup {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.cobweb {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.debris {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.disorganized {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.dull {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.dust {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.filledOver {
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
.filledUnder {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.fingerprints {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.graffiti {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.malodor {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.nonCompliant {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.nonOperational {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.scuff {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.soil {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.spot {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
.streak {
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
<script setup>
import { ref, onMounted, watch } from 'vue'

const count = ref(1)

onMounted(() => {
  const savedCount = sessionStorage.getItem('count')
  count.value = savedCount ? parseInt(savedCount) : 1
})

watch(count, newCount => {
  sessionStorage.setItem('count', newCount)
})
</script>
