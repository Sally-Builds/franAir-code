<template>
      <div class="row q-px-lg">
        <div class="col-12 col-sm-4 text-center q-pa-lg">
          <div>
          <span class="bon text-h4">FranAir Construction</span>
          </div>
          <p class="q-pa-lg text-caption1">
           FranAir Building Contracting Company.
          Our Goal Is To Design and Construct Your 
          Desired Home and Projects, Provide Quality on Time Delivery.
          </p>
        </div>
        <div class="col-12 col-sm-4 text-center q-pa-lg">
          <div>
            <span class="bon text-h4">Contact Details</span>
          </div>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="location_on"/>
              </q-item-section>
              <q-item-section class="bon">
                <span class="text-bold">Main Office </span>
                Andeez wuse zone two, Fct Abuja, Nigeria
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="location_on"/>
              </q-item-section>
              <q-item-section class="bon">
                <span class="text-bold"> Branch Office </span>
                36 new market road Onitsha, Mpkor Anambara state, Nigeria
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="call"/>
              </q-item-section>
              <q-item-section class="bon">+234-810-002-8359</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-12 col-sm-4 text-center q-px-lg q-pt-lg">
          <q-list dense>
            <q-item v-for="(link, i) in links" :key="i" clickable :to="link.link">
              <q-item-section avatar>
                <q-icon color="secondary" name="chevron_right"/>
              </q-item-section>
              <q-item-section><q-btn class="bon" :label="link.title" flat /></q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
</template>

<script>
export default {
    props: ['links']
}
</script>

<style>

</style>