<template>
  <div class="logoBar">
    <div><img class="smartLogo" src="/src/assets/SmartLogo.png" /></div>
  </div>
  <div class="nav">
    <div><img class="userLogo" src="/src/assets/userLogo.png" /></div>
    <div class="websiteTitle"><p>Test Website 8</p></div>
    <hr class="lineInNav" />
    <div class="userName"><p>Brody Serfass</p></div>
    <div class="userEmail"><p>brodyserfass@gmail.com</p></div>
  </div>
  <div class="btnContainer">
    <div class="q-pa-md q-gutter-sm">
      <router-link class="rLink" to="/Page-Two">
        <q-btn
          class="button"
          @click="startInspection"
          icon-right="+"
          label="Start Inspection"
        />
      </router-link>
    </div>
  </div>

  <hr />

  <footer>
    <ul>
      <li>
        <q-btn icon="🏠︎" label="Home" stack class="homeBtn" />
      </li>
      <li><q-btn icon="📋" label="Inspections" stack class="inspBtn" /></li>
      <li><q-btn icon="🎫" label="Tickets" stack /></li>
      <li><q-btn icon="✅" label="Checklists" stack /></li>
      <li><q-btn icon="⚙️" label="Settings" stack /></li>
    </ul>
  </footer>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
.logoBar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.smartLogo {
  width: 300px;
  height: auto;
}
.userLogo {
  padding: 20px 0;
  width: 125px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}
.nav {
  background-image: url('/src/assets/navBackground.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.lineInNav {
  width: 90%;
}
.websiteTitle {
  padding-bottom: 20px;
  font-size: 25px;
}
.userName {
  padding: 20px 0px;
  font-size: 20px;
}
.userEmail {
  padding-bottom: 20px;
  font-size: 15px;
}
.btnContainer {
  background-color: whitesmoke;
  height: 500px;
  padding: 50px;
}
.button {
  width: 100%;
  height: 50px;
  background-color: white;
  border-color: lightgray;
  border-radius: 10px;
  position: relative;
  top: 200px;
  display: flex;
  align-items: center;
  padding: 10px;
  color: black;
}
.rLink {
  text-decoration: none;
}
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.homeBtn {
  color: rgba(149, 202, 62, 255);
}
</style>

<script>
import { defineComponent } from 'vue'
import { QBtn } from 'quasar'

export default defineComponent({
  name: 'PageOne',
  components: {
    QBtn,
  },
  methods: {
    handleClick() {
      console.log('Button clicked')
    },
    startInspection() {
      this.$router.push('/inspection')
    },
  },
})
</script>
