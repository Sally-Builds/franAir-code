<template>
    <q-page>
      <div class="cover" id="title">
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="text-center">
            <span class="my-font text-h4 text-white cssanimation random leRotateSkateInLeft">FranAir Construction</span>
        </div>
        <div class="q-pa-md text-center bon">
          <span class="text-h5 text-white cssanimation sequence leRotateSkateInLeft">We offer the best building service</span>
        </div>
        <div class="col-12 text-center">
          <p class="text-h6 text-white bon cssanimation sequence leRotateSkateInLeft">
            Our Goal Is To Design and Construct Your Desired Home and Projects, Provide Quality on Time Delivery.
          </p>
        </div>
        <div class="text-center q-pa-lg">
          <q-btn label="Contact us" color="secondary" @click="push" class="text-white" outline />
        </div>
      </div>
      <transition-group
        appear-active-class="animated zoomIn"
      >
        <who-are-we key="who" class="company"></who-are-we>
        <mission key="mission" />
        <services key="services" />
        <projects key="projects" />
        <contact  key="contact"/>
      </transition-group>
    </q-page>
</template>

<script>
export default {
  components: {
    'who-are-we': require('components/Sections/WhoAreWe').default,
    'mission': require('components/Sections/Mission').default,
    'services': require('components/Sections/Services').default,
    'projects': require('components/Sections/Projects').default,
    'contact': require('components/Sections/Contact').default,
  },
  mounted() {
    if(this.$route.hash){
      this.$router.push({ name: 'Home' }, undefined, () => { location.href = this.$route.hash })
    }
    this.animateSequence();
    this.animateRandom();
  },
  data() {
    return {
    }
  },
  methods: {
    push(hashbang) {
      this.$router.push('#contact')
    },
    animateSequence() {
    var a = document.getElementsByClassName('sequence');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 1000;
        for (var l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
          $this.innerHTML = str;
     }
    },
    animateRandom() {
    var a = document.getElementsByClassName('random');
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var delay = 70;
        var delayArray = new Array;
        var randLetter = new Array;
        for (var j = 0; j < letter.length; j++) {
            while (1) {
                var random = this.getRandomInt(0, (letter.length - 1));
                if (delayArray.indexOf(random) == -1)
                    break;
            }
            delayArray[j] = random;
        }
        for (var l = 0; l < delayArray.length; l++) {
            var str = '';
            var index = delayArray[l];
            if (letter[index] != ' ') {
                str = '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[index] + '</span>';
                randLetter[index] = str;
            } else
                randLetter[index] = letter[index];
            delay += 80;
        }
        randLetter = randLetter.join("");
        $this.innerHTML = randLetter;
      }
    },
    getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}
</script>

<style>
.cover {
    height: 600px;
    width: 100vw;
    background: black;
    overflow: hidden;
    background: #C33764;  /* fallback colour. Make sure this is just one solid colour. */
    background: -webkit-linear-gradient(rgba(77, 78, 82, 0.8), rgba(54, 32, 39, 0.8)), url("~assets/image2.jpg");
    background: linear-gradient(rgba(42, 42, 44, 0.8), rgba(49, 27, 33, 0.8)), url("~assets/image2.jpg"); /* The least supported option. */
}

img {
   object-fit: cover;
}
.my-font {
  /* font-family: 'BushMarket-Regular'; */
  font-family: 'Yellowtail-Regular-webfont';
  
}
.bon {
  font-family: 'Museo300-Regular'
}
.centre{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

.tran {
  width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.cssanimation, .cssanimation span {
    animation-duration: 1s;
    animation-fill-mode: both;
}

.cssanimation span { display: inline-block }

.leRotateSkateInLeft span { animation-name: leRotateSkateInLeft }
@keyframes leRotateSkateInLeft {
    from {
        transform: scaleX(0.2) translateX(-100px);
        opacity: 0;
    }
}
</style>
