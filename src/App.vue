<template>
  <HeaderItem @changeTitle="changeTitle" v-bind:TextHeader="text" />
  <p>{{ name }}</p>
</template>

<script>
import HeaderItem from "./components/Header.vue";
export default {
  name: "App",
  data() {
    return {
      text: "Text from App component"
    }
  },
  components: {
    HeaderItem,
  },

  methods: {
    changeTitle(NewTitle) {
      this.text = NewTitle;
    }
  }
}
</script>