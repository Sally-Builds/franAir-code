<template>
    <div id="project" class="co">
        <div>
                <br>
                <br>
                <br>
                <br>
                <br>
            <div class="q-pa-lg text-center">
                <span class="bon text-white text-h4 heading">Projects</span> <br>
            </div>
            <div class=" text-center q-pt-lg">
                <span class="bon text-white text-body1">CLICK PROJECT BELOW TO SEE BEFORE, DURING AND AFTER WORK</span>
            </div>
            <div class="text-center q-pa-lg">
                <!-- <q-btn label="View projects" class="text-white bon q-pa-lg" @click="fullscreen = true" outline size="lg" /> -->
                <q-btn label="View projects" class="text-white bon q-pa-lg" @click="carousel = true" outline size="lg" />
            </div>
        </div>
        <!-- <div class="q-pa-md">
                <q-carousel
                swipeable
                animated
                arrows
                v-model="slide"
                :fullscreen.sync="fullscreen"
                infinite
                v-show="fullscreen"
                >
                <q-carousel-slide v-for="(e,i) in 20" 
                :key="i" :name="i+1" 
                :img-src="`${e}.jpg`" />

                <template v-slot:control>
                    <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    >
                    <q-btn
                        push round dense color="white" text-color="primary"
                        :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                        @click="fullscreen = false"
                    />
                    </q-carousel-control>
                </template>
                </q-carousel>
        </div> -->
        <!-- ---------------- -->
        <div>
            <q-dialog v-model="carousel">
            <q-carousel
                swipeable
                animated
                arrows
                v-model="slide"
                infinite
                style="width: 700px; max-width: 100vw; height: 100vh;"
                class="bg-black shadow-1 rounded-borders"
                >
                <q-carousel-slide v-for="(e,i) in 20" 
                :key="i" :name="i+1" 
                :img-src="`${e}.jpg`" />

                <template v-slot:control>
                    <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    class="bg-black"
                    >
                    </q-carousel-control>
                </template>
                </q-carousel>
            </q-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slide: 1,
            fullscreen: false,
            carousel: false,
        }
    }
}
</script>

<style scoped>
.co {
    /* height: 500px; */
    height: auto;
    width: 100vw;
    background: black;
    overflow: hidden;
    background: #C33764;  /* fallback colour. Make sure this is just one solid colour. */
    background: -webkit-linear-gradient(rgba(77, 78, 82, 0.8), rgba(54, 32, 39, 0.8)), url("~assets/pop4.jpg");
    background: linear-gradient(rgba(42, 42, 44, 0.8), rgba(49, 27, 33, 0.8)), url("~assets/pop3.jpeg"); /* The least supported option. */
}

img {
   object-fit: cover;
}

.heading {
  overflow: hidden;
  text-align: center;
}

.heading:before,
.heading:after {
  background-color: #fff;
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
.responsive {
  object-fit: cover;
}
</style>