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
</style>
