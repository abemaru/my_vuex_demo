<template>
  <div id="app">
    <h1>{{ this.$store.state.message }}</h1>
    <sampleContents></sampleContents>
  </div>
</template>

<script>
import sampleContents from './components/contents.vue'

export default {
  name: 'app',
  components: {
    sampleContents
  }
}
</script>
