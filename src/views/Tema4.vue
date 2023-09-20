<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Clasificación de riesgos

    .row.justify-content-center 
      .tarjeta.p-4.color-secundario(data-aos="flip-up")
        .row.justify-content-center
          .col-sm-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema4/1.svg', alt='Texto que describa la imagen')
          .col-sm-8
            p(data-aos="fade-left") Tener en cuenta los riesgos sanitarios que pueden presentarse en las producciones pecuarias, los cuales ha tomado una relevancia especial desde el punto de vista de la salud pública, ya que es inherente a la inocuidad de los productos de origen animal y a la salud de las comunidades. Un riesgo es toda característica que puede causar cambios en la estructura de la materia de manera física, mental o ambiental y se deben prever, puesto que con el tiempo avanzan hacia efectos no conocidos, hasta llegar a la fatalidad en muchos casos. Dichos riesgos o peligros en la producción pecuaria pueden ser controlados y caracterizados con el establecimiento y seguimiento de las buenas prácticas pecuarias.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Tipos

    p.mb-5(data-aos="fade-left") De acuerdo con instituciones como la Organización de las Naciones Unidas para la Agricultura y la Alimentación - FAO y la Organización Mundial de Sanidad Animal - OIE:

    .row.mb-5.justify-content-center
      .col-10
        .bloque-texto-d.color-gris.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular La seguridad sanitaria de los alimentos es una prioridad de salud pública universalmente reconocida que requiere un planteamiento global, desde la producción hasta el consumo y que por ende se deben ofrecer soluciones coherentes a los problemas socioeconómicos, zoosanitarios y medioambientales, además por tratarse de la sanidad animal, compete a la Salud pública veterinaria atender y salvaguardar la salud animal y la protección de la salud humana; por lo que se exponen los peligros y numerosos aspectos de la producción animal corren riesgo de contaminación por agentes biológicos, químicos (radionucleidos inclusive) y físicos
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (Gay et al., 2016).
    
    p(data-aos="fade-left") Las unidades productivas, constantemente, se ven enfrentadas a un creciente número de factores latentes y no tan visibles que pueden representar algún tipo de riesgo y que pueden causar daño al personal, los animales y en todos los procesos productivos. Estos patógenos pueden afectar a los animales con propósitos productivos y que están destinados para la alimentación del ser humano, interfiriendo en cualquier punto de la cadena alimentaria y ocasionando riesgos al consumidor.

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario(style="width:100%")
            .p-4
              h2.text-center Riesgos químicos
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Herbicida
                li 
                  i.lista-ul__vineta
                  | Pesticidas
                li 
                  i.lista-ul__vineta
                  | Trazas de Antibióticos
                li 
                  i.lista-ul__vineta
                  | Residuos de Fármacos
                li 
                  i.lista-ul__vineta
                  | Contaminación química con Metales pesados 
                li 
                  i.lista-ul__vineta
                  | Vinculados a BPP
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/3.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario(style="width:100%")
            .p-4
              h2.text-center Riesgos físicos
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Metales
                li 
                  i.lista-ul__vineta
                  | Alambre
                li 
                  i.lista-ul__vineta
                  | Clavos
                li 
                  i.lista-ul__vineta
                  | Bolsas plásticas
                li 
                  i.lista-ul__vineta
                  | Basuras industriales
                li 
                  i.lista-ul__vineta
                  | Estopas
                li 
                  i.lista-ul__vineta
                  | Vinculados a BPP
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/4.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario(style="width:100%")
            .p-4
              h2.text-center Riesgos biológicos
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Basuras orgánicas
                li 
                  i.lista-ul__vineta
                  | Patógenos
                li 
                  i.lista-ul__vineta
                  | Manejo de las producciones 
                li 
                  i.lista-ul__vineta
                  | Mortalidad
                li 
                  i.lista-ul__vineta
                  | Manejo de residuos como excreta, pelo, plumas, etc.
                li 
                  i.lista-ul__vineta
                  | Vinculados a Bioseguridad 
</template>

<script>
export default {
  name: 'Tema4',
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
