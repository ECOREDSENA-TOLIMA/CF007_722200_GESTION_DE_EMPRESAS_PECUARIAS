<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Limpieza, higiene y desinfección
    
    p.mb-5(data-aos="fade-left") La limpieza y desinfección hacen parte integral del programa de bioseguridad implementado en las instalaciones, elementos y personal, de las diferentes producciones para impedir la entrada y propagación de agentes patógenos, que pongan en riesgo el proceso productivo, a los animales y a los trabajadores de las unidades productivas.
    
    .row.justify-content-center.mb-5
      .col-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las bondades de realizar una buena limpieza, higiene y desinfección tienen una durabilidad de aproximadamente un año. En el momento en que se presente una enfermedad infecciosa o parasitaria, las actividades de higiene y desinfección podrían aumentar su frecuencia para controlar los problemas sanitarios. Un buen programa de limpieza, desinfección y desinsectación, al igual que las medidas de bioseguridad, son muy necesarias en la producción y se pagan por sí solos.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Procedimientos

    p.mb-5(data-aos="fade-left") Para que los programas de desinfección sean eficientes y eficaces se debe tener en cuenta el manejo “todo adentro, todo afuera” con el aprovechamiento de los vacíos sanitarios para la ejecución de la limpieza en las instalaciones, los elementos y personal. La limpieza es un componente fundamental en el saneamiento de un área o instalación, ya que de realizarse correctamente eliminará el 90 % de la materia microbiológica en el área; esta se puede dividir en dos pasos:

    .row.justify-content-center 
      .col-10
        <hr style="border:15px;">
    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema3/2.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b  Limpieza en seco] 
        p Eliminar, tanto como se pueda, toda la suciedad y la materia orgánica visible por métodos físicos o mecánicos (estiércol, camas). Se debe hacer con toda la superficie que pueda tener suciedad y ser hace preferiblemente desde arriba hacia abajo incluyendo los mismos artículos con los que se hace la limpieza como raspadores o rastrillos; los vehículos de transporte también se deben trabajar de esta forma.
      .col-10
        <hr style="border:15px;">

    .row.justify-content-center 
      .col-sm-1
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema3/3.svg', alt='Texto que describa la imagen')
      .col-sm-9
        p #[b  Limpieza con líquido o húmeda] 
        p Antes del lavado, se recomienda mojar las superficies de los elementos de aseo y las superficies planas en donde reposa la suciedad, para humedecer esos espacios es fundamental contar con un detergente o jabón adecuado según la suciedad o tipo de superficie para cuidar las películas de material. Posteriormente se limpia con abundante agua que puede ser a presión con una manguera para eliminar el residuo de jabón. El agua a presión por lo general funciona bien en el momento de limpieza aplicando en el remojo y en la finalización para facilitar la labor.
        p Continúa el proceso de desinfección puesto que la limpieza logra un alto porcentaje de detalle, pero el porcentaje faltante se alcanza con el proceso de desinfección que habitualmente se elabora con un líquido o polvo desinfectante que pueda ser usado en el ambiente a limpiar, no se recomienda que se haga con elementos tóxicos o nocivos para la salud, para eso se requiere revisar las fichas técnicas y solicitar apoyo a los comerciales de las marcas para evitar algún percance.


      .col-10
        <hr style="border:15px;">
        
    .row.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4
          p La desinfección, al igual que la limpieza, debe incluir cada rincón de trabajo de la sección afectada, es preferible hacer un solo impacto para que todo vuelva a la normalidad lo más pronto posible, en algunos casos se puede aplicar logística de limpieza por medio de planes estructurados para que los sectores trabajados no entorpezcan la labor operativa de la planta o moleste a los animales.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Insumos

    p.mb-5(data-aos="fade-left") A continuación, se observa la tabla 1, en la cual se resaltan los tipos de desinfectantes químicos.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span #[em Desinfectantes químicos]
    
    .row.justify-content-center 
      .col
        .tabla-a.mb-5 
          table
            caption Nota. Elaboración propia en base a Mata-Haro et al. (2013) 
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
              tr
                th Tipo de desinfectante
                th Producto
                th Uso
                th Función
            tbody.text-center
              tr
                td(rowspan="3") Alcalino
                td Cal
                td Cobertura de heces o cadáveres en tierra
                td Mitigación de olores y fluidos
              tr
                td Soda cáustica (2-3 %)
                td Desinfección de instalaciones generalmente cuando se tiene sospecha de infecciones
                td Bactericida
              tr
                td Carbonato de sodio (4-5 %)
                td Desinfección de instalaciones generalmente cuando se tiene sospecha de virus
                td Viricida. Exposición: 15 min
              tr
                td(rowspan="2") Halógenos
                td Yodo (2.5 % en alcohol de 90 °GL)
                td Desinfección de agua para tomar o piel
                td Desinfectante de contacto
              tr
                td Cloro (2-5 %)
                td Desinfección de agua potable (0.1 ppm), sanitizante, superficies, aguas negras, etc.
                td Desinfectante de amplio espectro Exposición: Contacto

    p.mb-5(data-aos="fade-left") También se cuenta con ácidos que, por lo general, son usados en la desinfección y limpieza profunda, pero se recomienda su uso bajo supervisión profesional, ya que el riesgo a la salud es notable junto con su tratamiento. Como observación adicional, se debe visitar al médico más cercano en caso de malestar, mareo, comezón o envenenamiento pues las cantidades de uso de estos productos químicos son dadas según la salubridad del ambiente, además, se debe trabajar siempre con todos los artículos de protección personal como guantes, gafas y protección general para la piel.
</template>

<script>
export default {
  name: 'Tema3',
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
