<template>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
  <nav>
    <div id="oslogo">
      <img src="@/assets/images/logoOS.png" alt="Minha Figura">
      <h1 style="margin-top: 10px">Genealogy</h1>
    </div>

    <div class="nav-menu" :class="{ 'active': showingMenu }">
      <ul>
        <li><router-link to="/">Multic</router-link></li>
        <li><router-link to="/dos">DOS</router-link></li>
      </ul>
    </div>
  </nav>
  <br/>
  <div class="titleOS">
    <H2>Árvore Genealógica de Sistemas Operacionais</H2>
  </div>
  <router-view/>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue'


const showingMenu = ref(false);

onMounted(() => {
  document.title = 'App VueJS'
})

</script>

<style scoped>
nav {
  margin-top:100px;
  height: 50px;
  padding: 10px 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);

}

#oslogo {
  display: flex;
  height: 45px;
  margin-right: 20px;
  color: white;
}

#oslogo img {
  height: 45px;
  margin-right: 20px;
  color: white;
}
.titleOS{
  margin-left: 45.3vh;
  width: 37%;
  height: 30px;
  margin-top: 20px;
  padding: 10px 30px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 15px 10px 0px rgba(0, 0, 0, 0.75);
  text-align: center;
}
.nav-menu {
  flex-grow: 1;
}

.nav-menu > ul {
  display: flex;
  flex-flow: row nowrap;
}

.nav-menu > ul > li {
  display: block;
  line-height: 100px;
}

.nav-menu > ul > li > a  {
  color: #33371d;
  text-decoration: none;

  font-family: "Lato";
  font-size: 1rem;
  font-weight: 800;

  text-transform: uppercase;

  display: block;

  padding: 0 15px;

  transition: color 100ms;
  cursor: pointer;
}

.nav-menu > ul > li > a:hover {
  color: #b68c5c;
}

nav a.router-link-exact-active {
  color: black !important;
  border: 3px solid #fff;
  height: 1px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
} 


</style>
