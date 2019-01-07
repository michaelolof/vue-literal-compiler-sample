/** @VueLiteralCompiler Template */
const template = (app:App) => html`
  <div class="app">
    <h1>${ app.message }</h1>
    <button @click="${ app.sayHi() }">Show Message</button>
  </div>
`;


/**         -----   SCRIPTS   -----         **/
import { Component, Vue } from "vue-property-decorator";
import { html } from "../utils";

@Component
export default class App extends Vue {
  message = "Hello World!";

  sayHi() {
    alert("Hello World! Hope you're ok.")
  }
}


/** @VueLiteralCompiler Styles */
const styles = html`
  <style scoped>
    .app {
      padding: 50px;
      text-align: center;
      width: 400px;
      margin: 60px auto;
      border: solid 1px #000000;
    }
  </style>

  <style>
    body {
      background-color: #E2E2E2;
    }
  </style>
`;
