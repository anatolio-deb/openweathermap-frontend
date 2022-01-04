<template>
  <v-container>
    <v-row>
      <v-col>
        {{ title }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="font-weight-bold">
        {{ value }}
        <span class="font-weight-regular">
          {{ metric }}
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["title", "value", "metric"],
};
</script>

<style>
</style>