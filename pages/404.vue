<template>
    <h1>404</h1>
</template>

<script>

export default {
  async asyncData({ res}) {
        res.statusCode = 404
  },
  components: {
  }
}
</script>
<style>
</style>
