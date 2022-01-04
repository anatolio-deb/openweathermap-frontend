<template>
  <v-container>
    <v-row>
      <v-col class="text-h4">{{ city }}</v-col>
      <v-spacer />
      <v-col cols="1" class="mr-md-n16 mr-n6"> ° </v-col>
      <v-col class="mt-1">
        <v-btn-toggle v-model="toggle_exclusive" mandatory rounded>
          <v-btn small outlined text @click="$emit('units-toggle', 'metric')"
            >C</v-btn
          >
          <v-btn small outlined text @click="$emit('units-toggle', 'imperial')"
            >F</v-btn
          >
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row class="ml-n5">
      <v-col md="2">
        <v-btn x-small text plain :ripple="false">Сменить город</v-btn>
      </v-col>
      <v-col class="mr-n2">
        <v-btn x-small text plain :ripple="false">
          <v-icon> mdi-navigation-variant </v-icon>
          Мое местоположение
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["city"],
  data() {
    return {
      toggle_exclusive: undefined,
    };
  },
};
</script>

<style>
</style>