<template>
  <v-container>
    <v-row>
      <v-col
        v-for="obj in [
          { text: wind, title: 'Ветер', metric: 'м/c' },
          { text: pressure, title: 'Давление', metric: 'мм рт. ст.' },
          { text: humidity, title: 'Влажность', metric: '%' },
        ]"
        :key="obj.text"
        :cols="$vuetify.breakpoint.name === 'xs' ? '6' : '4'"
      >
        <indicator :value="obj.text" :title="obj.title" :metric="obj.metric" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Indicator from "./Indicator.vue";

export default {
  components: { Indicator },
  props: ["wind", "pressure", "humidity"],
};
</script>

<style>
</style>