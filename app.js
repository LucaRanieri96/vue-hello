const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello.",
      presentation: "My name is Luca Ranieri",
      explanation: "This is my first implementation of vue.js, I’m having fun replicating the website of Evan You, the creator of the mentioned framework…a genius!!!",
      details:"Vue.js is an open-source model-view-viewmodel front end JavaScript framework for building user interfaces and single-page applications",
      linkVue:"https://vuejs.org/",
      linkButton:"Visit Vue.js.org",
      white: "white",
      show: false,
    };
  },
  methods: {
    toggleBtn() {
      this.show = !this.show
    }
  }
}).mount("#app");
