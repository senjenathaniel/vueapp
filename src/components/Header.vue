<template>
  <h2>{{ TextHeader }}</h2>
  <button v-on:click="changeText">Change Title</button>
</template>

<script>
export default {
  name: "HeaderItem",
  data() {
    return {
      text: "Text from Headers component",
      name: "Nathaniel from Header"
    }
  },
  methods: {
    changeText() {
      this.$emit("changeTitle", this.text);
    }
  },

  emits: ["changeTitle"],

  props: ["TextHeader"]
}
</script>