<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-left") La sanidad animal en la producción es uno de los temas de mayor importancia en los procesos productivos e interviene transversalmente en todas las etapas de los mismos, y de la cual depende que los animales se encuentren en óptimas condiciones, así como las instalaciones, los elementos utilizados, el manejo correcto de los residuos y se garantice una producción óptima y eficiente.

    figure
    .video(data-aos="fade-right")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/O7eVMn5mxNQ?si=u65wyYL0gvkiWvWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
