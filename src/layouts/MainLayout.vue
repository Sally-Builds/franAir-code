<template>
  <q-layout view="lHh lpR lfr">

    <q-header class="bg-white text-black">
      <div class="text-black">
      <q-toolbar>
        <!-- <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-space />
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" /> -->
        <q-toolbar-title class="my-font me"><strong>FranAir</strong> Construction</q-toolbar-title>
      </q-toolbar>
      <q-toolbar inset>
        <q-space />
        <div class="logout">
        <q-btn flat class="bon" to="/" label="Home" />
        <q-btn flat class="bon" to="#who" label="who are we" />
        <q-btn flat class="bon" to="/#mission" label="Our mission" />
        <q-btn flat class="bon" to="#services" label="our Services" />
        <q-btn flat class="bon" to="#project" label="Our Projects" />
        <q-btn flat class="bon" to="#contact" label="Contact us" />
        </div>
        <q-btn flat round dense icon="menu" class="q-mr-sm logoutbig" @click="left = !left" />
        <q-drawer 
          v-model="left" 
          side="left" 
          behavior="mobile" 
          bordered 
          dense
          :width="200">
        <!-- drawer content -->
            <q-item
                clickable
                :to="e.link"
                v-for="(e, i) in links"
                :key="i"
              >
              <q-item-section class="text-center bon text-black">
                <q-item-label>{{e.title}}</q-item-label>
              </q-item-section>
            </q-item>

        </q-drawer>
      </q-toolbar>
    </div>
    </q-header>

    <q-page-container>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container>

    <q-footer style="background-color: #d7dbdb" class="text-black">

      <foot :links="links" />
      <q-toolbar class="bg-grey-8">
          <div class="centre text-white">
              Designed by Uzoagulu Joshua - <span @click="emailUs" class="text-black" style="text-decoration: underline; cursor: pointer;">www.uzoagulujoshua@yahoo.com</span> © 2020
          </div>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
   components: {
    'foot': require('components/Sections/Footer').default,
  },
  data () {
    return {
      left: false,
      links: [
        {title: 'HOME', link: '/'},
        {title: 'WHO ARE WE', link: '#who'},
        {title: 'OUR MISSION', link: '#mission'},
        {title: 'OUR SERVICES', link: '#services'},
        {title: 'OUR PROJECTS', link: '#project'},
        {title: 'CONTACT US', link: '#contact'},
      ]
    }
  },
  methods: {
    emailUs() {
      window.location.href = 'mailto:uzoagulujoshua@yahoo.com?subject= '
    },
  }
}
</script>

<style>
.my-font {
  /* font-family: 'BushMarket-Regular'; */
  font-family: 'Yellowtail-Regular-webfont';
  
}
.heading {
  overflow: hidden;
  text-align: center;
}

.heading:before,
.heading:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 5%;
}

.heading:before {
  right: 0.5em;
  margin-left: -50%;
}

.heading:after {
  left: 0.5em;
  margin-right: -50%;
}

@media screen and (max-width: 768px){
  .logout {
    display: none
  }
}
@media screen and (min-width: 768px){
  .logoutbig {
    display: none
  }
}
.centre{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

.me {
  position: relative;
  /* font-family: sans-serif; */
  /* text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden; */
  background: linear-gradient(90deg, #000, #fff, #000);
  /* background-repeat: no-repeat; */
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>