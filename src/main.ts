import Vue from "vue";
import App from "./components/App.lit"

new Vue({
  el: "#app",
  components: {
    App,
  },
  render: h => h( App ),
})