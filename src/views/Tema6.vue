<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Información y trazabilidad
    
    p(data-aos="fade-left").mb-5 En el sector agropecuario-alimentario se entiende por trazabilidad la capacidad de rastrear un alimento, un pienso, un animal productor de alimentos o cualquier sustancia que sea usada para ser incorporada a ellos, a través de todas las etapas de producción, elaboración y distribución que forman la cadena alimentaria.

    .row.mb-5.align-content-center
      .col-md-6(data-aos="fade-right")
        .tarjeta.color-secundario.p-4(style="border-radius: 0").mb-3
          p La trazabilidad es por tanto una herramienta fundamental para garantizar la seguridad de los alimentos, así como la sanidad de las personas y los animales, y por ello aparece de manera destacada tanto en el Código Sanitario de la OIE (Organización Mundial de la Sanidad Animal) como en el Codex Alimentarius (FAO/OMS). Al igual que en los distintos CONPES relacionados con las MSF y la aplicación de las mismas en el Colombia.
        p.mb-0 En la producción primaria coexisten instrumentos como la regulación y registro de la identificación de los animales (individual o por lotes, según la especie), el registro de producciones pecuarias y los traslados de animales que, utilizados de manera combinada, permiten garantizar la trazabilidad de los animales vivos desde su nacimiento hasta su sacrificio.
      .col-md-6(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/1.svg' alt='')

    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Registros

    p(data-aos="fade-left").mb-5 Llevar registros es de gran importancia para una unidad productiva, puesto que a través de la información que se genera es posible llevar una operación organizada y sincrónica construyendo un historial productivo, económico y financiero, lo que, a su vez, permite evaluar, diagnosticar y tomar decisiones acerca del proceso productivo, las instalaciones, los animales, la alimentación y siendo el punto de partida para actuar en consecuencia a la producción.

    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/2.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En general se llevan registros iguales o similares para actividades tales como: procedimientos y medicamentos veterinarios, ingreso y egreso de animales, de raciones alimenticias, mortalidades, de ganancia de peso, de creciente, de producido, partos por año, crías por parto, etc. 

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Diligenciamiento

    .row.mb-5.align-content-center
      .col-md-9(data-aos="fade-right")
        p(data-aos="fade-left") El correcto llenado de los diversos formatos existentes puede hacerse de manera manual o digital según como se manejen en la unidad productiva, este proceso debe ser claro y preciso, sin enmendadura ni tachones y con la frecuencia que lo requiera la actividad a la cual se le está llevando el registro.
        p(data-aos="fade-left") La información contenida en estos registros se dirige hacia los diversos parámetros productivos, es decir, lo escrito allí debe poderse aplicar en los parámetros productivos para monitorear y evaluar los procesos productivos que se desarrollan en la unidad, lo anterior permite la toma de decisiones acertadas que conlleven a una producción óptima, eficiente, sostenible y rentable.
        p(data-aos="fade-left").mb-5 A continuación, se presentan algunos ejemplos de formatos que se utilizan para llevar el registro de las producciones pecuarias.
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/3.svg' alt='')

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta" data-aos="fade-down-left")(style="background-color: #DBF9BD")
      .row(titulo="Registro y entrada de animales").justify-content-center
        .col-12.mb-5
          p Debe contener entre otros: fecha del movimiento, número de identificación del bovino , peso , genero , etapa productiva, motivo del movimiento , dirección del movimiento (entrada o salida) y observaciones, como se indica en la tabla:
        .col-10.mb-5
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2
            span #[em Modelo de registro y entrada de animales]
          figure
            img(src='@/assets/curso/temas/tema6/4.svg', alt='')
        .col-6
          a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/tabla2.docx')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-doc.svg")
            .anexo__texto
              p #[b Descargar tabla 2.] Modelo de registro y entrada de animales.

      .row(titulo="Control de peso").justify-content-center
        .col-12.mb-5
          p Llevar un riguroso registro del control de peso de los animales, requiere entre otros aspectos: lote, fecha, código correspondiente, peso, género y observaciones
        .col-10.mb-5
          .titulo-sexto.color-acento-contenido
            h5 Tabla 3
            span #[em Modelo registro de control peso]
          figure
            img(src='@/assets/curso/temas/tema6/5.svg', alt='')
        .col-6
          a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/tabla3.docx')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-doc.svg")
            .anexo__texto
              p #[b Descargar tabla 3.] Modelo registro de control peso.

      .row(titulo="Control sanitario").justify-content-center
        .col-12.mb-5
          p El control sanitario, permite realizar un seguimiento de mayor asertividad al estado general de los animales, su registro debe contener: fecha, nombre comercial medicamento, presentación, vía de administración, tiempo de espera, lote, numero individual de medicamento, motivo, nombre responsable, nombre MVZ, firma.
        .col-10.mb-5
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4
            span #[em Modelo registro de Control Sanitario]
          figure
            img(src='@/assets/curso/temas/tema6/6.svg', alt='')
        .col-6
          a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/tabla4.docx')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-doc.svg")
            .anexo__texto
              p #[b Descargar tabla 4.] Modelo registro de control sanitario. 
      

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
