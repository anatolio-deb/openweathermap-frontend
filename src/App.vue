<template>
  <v-app>
    <v-spacer />
    <Header
      v-on:units-toggle="updateUnits($event.target.value)"
      :city="name"
    ></Header>
    <v-container fill-height>
      <display
        :linkToIcon="icon"
        :description="description"
        :temperature="temp"
      >
      </display>
    </v-container>
    <Footer :humidity="humidity" :pressure="pressure" :wind="wind"> </Footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Display from "./components/Display.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Display, Footer },
  data() {
    return {
      input: {
        name: "moscow",
        units: "metric",
      },
      name: "",
      description: "",
      temp: "",
      wind: null,
      pressure: "",
      humidity: "",
      icon: "",
    };
  },
  methods: {
    setData() {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.input.name}&appid=${process.env.VUE_APP_API_KEY}&units=${this.input.units}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.name = data.name;
          this.description = data.weather[0].description;
          this.temp = data.main.temp.toFixed() + "°";
          this.wind = data.wind.speed;
          this.pressure = data.main.pressure;
          this.humidity = data.main.humidity;
          this.icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        });
    },
    setName(name) {
      this.input.name = name;
    },
    updateUnits(value) {
      this.input.units = value;
      this.setData();
    },
  },
  created() {
    this.setData(this.input.name);
  },
};
</script>