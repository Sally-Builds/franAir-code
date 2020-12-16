<template>
    <div class="row" id="contact">
    <div class="col-12 text-center q-pa-md">
      <span class="bon text-h4 heading">Contact US</span>  
    </div>
    <div class="col-6 col-sm-3 text-center q-py-md">
        <q-avatar size="152px">
          <img height="450px" src="~assets/email.png">
        </q-avatar><br>
        &nbsp;<br>
        <span class="text-center bon text-primary" @click="emailUs" style="text-decoration: underline; cursor: pointer;">francisozue@gmail.com</span>
    </div>
    <div class="col-6 col-sm-3 text-center q-py-md">
        <q-avatar size="152px">
          <img height="450px" src="~assets/linkedIn.webp">
        </q-avatar><br>
        &nbsp;<br>
        <span  class="text-center bon text-primary" @click="linkedIn()" style="cursor: pointer;">Join us on LinkedIn</span>
    </div>
    <div class="col-6 col-sm-3 text-center q-py-md">
        <q-avatar size="152px">
          <img height="450px" src="~assets/phone.png">
        </q-avatar><br>
        &nbsp;<br>
        <span class="text-center bon">+234-810-002-8359</span>
    </div>
    <div class="col-6 col-sm-3 text-center q-py-md">
        <q-avatar size="152px">
          <img height="450px" src="~assets/twitter.png">
        </q-avatar><br>
        &nbsp;<br>
        <span class="text-center bon text-primary" style="cursor: pointer;" @click="twitter()">Follow us on Twitter</span>
    </div>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  methods: {
    twitter() {
      openURL('https://twitter.com/joshua_uzoagulu')
    },
    linkedIn() {
      openURL('https://www.linkedin.com/in/joshua-uzoagulu-b67a70177')
    },
    emailUs() {
      window.location.href = 'mailto:francisozue@gmail.com?subject= '
    },
  }
}
</script>

<style>
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
  width: 10%;
}

.heading:before {
  right: 0.5em;
  margin-left: -50%;
}

.heading:after {
  left: 0.5em;
  margin-right: -50%;
}
 #contact {
    padding: 100px 0;
  }


.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>