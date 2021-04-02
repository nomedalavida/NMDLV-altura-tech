<template>
  <div class="container flex flex-col items-center">
    <h1 v-if="error.statusCode === 404">Página no encontrada</h1>
    <h1 v-else>Ha ocurrido un error</h1>
    <nuxt-link to="/">Volver al medidor</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
