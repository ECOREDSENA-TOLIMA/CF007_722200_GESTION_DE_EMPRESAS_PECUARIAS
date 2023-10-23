<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normatividad seguridad y salud en el trabajo y ambiental
    
    p.mb-5(data-aos="fade-left") A continuación, se exponen las normas básicas más importantes sobre la producción pecuaria, desde el punto de vista de seguridad y salud en el trabajo, como también, el componente ambiental.

    .row 
      .col
        .cajon.p-4.mb-5(style="background-color:#DBF9BD")(data-aos="flip-up")
          SlyderB(:datos="datosSlyder")



    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Elementos de protección personal 

    .row.justify-content-center.mt-5.mb-5 
      .col.lg-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')
      .col-9
        p(data-aos="fade-left") Cada labor requiere del uso de elementos e indumentaria que garanticen que los operarios la realicen de forma segura y eficiente por lo cual, es importante conocer cada proceso a fondo para determinar el más idóneo. También existen protocolos y guías en cada una de las producciones y procesos dentro de las mismas, que reglamenta e indica a los trabajadores qué elementos e indumentaria utilizar para realizar sus labores y cumplir con la legislación actual de salud y seguridad en el trabajo.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Tipos de protección personal, características y uso      

    p(data-aos="fade-left") Algunas labores requieren del cuidado personal, por eso es importante conocer los elementos de protección que se requieren para las actividades de la producción pecuaria.

    .tarjeta.tarjeta.color-secundario.p-4.mb-5(data-aos="flip-up")
      h4.titulo-cuarto
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Casco
            p Son elementos que permiten proteger en la parte de la cabeza al personal para evitar golpes por caídas de objetos, resbalones, contacto con cables o líneas eléctricas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Gafas de seguridad

            p Es un elemento que protege los ojos de la proyección de partículas sólidas o líquidas en el manejo de sustancias, químicas, biológicas o corrosivas, están elaboradas en policarbonato, con antiespumante.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/7.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Respirador con protección para material particulado

            p Este respirador con filtro mecánico para partículas de menos de 10 micras, ayuda en el manejo de los galpones para el polvo, manejo de la cama y alimento de las aves. El respirador se conoce comúnmente como el "N-95" cubre la cara y filtra el aire, suelen ser desechables.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/8.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Guantes de hule, caucho o plástico
            p Son diseñados para la protección de las manos, en las diferentes labores que se desempeñan dentro de los galpones, tales como limpieza y desinfección. 
            p Además, reducen el riesgo de contaminación al evitar el contacto directo con la piel.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/9.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Guantes de carnaza
            p Son elementos diseñados para proteger de abrasiones, cortes rozaduras o golpes, además de mejorar el agarre; en las granjas se utilizan para realizar diversas labores como el manejo de los animales y la adecuación de los galpones.
            //- p Además, reducen el riesgo de contaminación al evitar el contacto directo con la piel.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/10.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Guantes desechables de látex o nitrilo
            p Para el cuidado de animales enfermos y procedimientos como tratamiento y curaciones, asistencia de partos, vacunación, palpaciones, entre otros.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/11.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Botas de caucho de caña alta
            p Las botas deben ser de caña alta, para facilitar los trabajos en condiciones húmedas como el lavado y desinfección del galpón, además que permiten la rápida y efectiva limpieza y desinfección de las mismas, deben tener suela antideslizante para evitar caídas y accidentes.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/12.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Arneses y líneas de vida
            p Para trabajar en altura, como, por ejemplo, al reparar silos de alimentos, techos de los establos o gaplones, entre otras labores.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/13.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Overol anti fluidos, lavable, impermeable
            p Este elemento está diseñado para proteger el cuerpo del operario de diferentes sustancias, ya sean químicas, biológicas o físicas, así como de material sólido.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/14.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Seguridad y Salud',
        texto:
          'La seguridad y Salud en el trabajo, busca mejorar el bienestar laboral de los trabajadores y reducir o evitar los accidentes en el trabajo, a través de actividades que hagan notar las condiciones propicias para el desarrollo de las labores, la secuencia organizacional de los procesos con el fin de reducir los factores de riesgo y evitar las enfermedades o accidentes vinculados con el ejercicio de las labores diarias en el trabajo. Una actividad multidisciplinaria que a través de la promoción y prevención busca mejorar el bienestar.',
        imagen: require('@/assets/curso/temas/tema1/1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Marco normativo (primera parte)',
        texto:
          'En Colombia existen diversas normas y leyes que rigen el tema de seguridad y salud en el trabajo la más actual se registra en el año de 2019 en donde se conceden plazos para hacer la implementación en el sistema de mejoras en los diversos entes, y la adopción de las medidas que garanticen en todos los ámbitos el bienestar de los trabajadores; a continuación, se extiende una lista de las principales normas tomadas del autor Germán Campos Gutiérrez médico especialista en medicina laboral, salud ocupacional y en administración en salud, las cuales pueden ser consultadas por los aprendices para más información.',
        imagen: require('@/assets/curso/temas/tema1/2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Marco normativo (primera parte)',
        texto:
          '●  Ley 1010 2006 en donde se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros, dentro de las relaciones laborales. <br> ●  Ley 1010 2006 en donde se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros, dentro de las relaciones laborales. <br> ●   Resolución 2646 2008, por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas. <br> ●   Decreto 1072 2015. Decreto Único Reglamentario del Sector del Trabajo. ',
        imagen: require('@/assets/curso/temas/tema1/3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Marco normativo (segunda parte)',
        texto:
          '●   Resolución 1401 2007, por la cual se reglamenta la investigación de incidentes y accidentes de trabajo. <br> ●   Resolución 1409 2012, por la cual se establece el reglamento de seguridad para protección contra caídas en trabajo en alturas. <br> ●   Decreto-Ley 1295 1994, por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales. <br> ●   Resolución 1792 1990, por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido. <br> ●   Resolución 0312 2019, por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST.',
        imagen: require('@/assets/curso/temas/tema1/4.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
