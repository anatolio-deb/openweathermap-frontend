<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-col md="2" cols="4">
        <v-img :src="linkToIcon" max-width="100"></v-img>
      </v-col>
      <v-col class="text-h1 mt-8 ml-n8"> {{ temperature }} </v-col>
      <v-spacer />
    </v-row>

    <v-row>
      <v-spacer />
      <v-col class="text-capitalize mt-n12 ml-n16">
        {{ description }}
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["linkToIcon", "description", "temperature"],
};
</script>

<style>
</style>