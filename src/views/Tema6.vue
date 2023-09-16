<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Limpieza, higiene y desinfección

    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Registros

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Diligenciamiento
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
