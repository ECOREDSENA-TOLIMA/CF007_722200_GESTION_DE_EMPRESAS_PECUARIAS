<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Residuos

    img(src='@/assets/curso/temas/tema7/1.svg' alt='').mb-5

    .tarjeta.color-primario(data-aos="fade-left") 
      p.p-4 Realizar un buen manejo de los diferentes residuos generados en las producciones pecuarias, es de gran importancia puesto que contribuye en gran parte al plan ambiental y la mitigación del impacto que la industria ejerce en el mismo. Esta tarea es sencilla y metódica por lo que todo el personal que trabaja en las granjas debe involucrarse y conocer al respecto para hacer una buena recolección, clasificación, almacenamiento y disposición de los residuos ya sean sólidos o líquidos, orgánicos, reciclables, sanitarios o peligrosos.

    separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Clasificación

    p(data-aos="fade-left").mb-5 Los residuos sólidos se separan en la fuente según su origen y se pueden clasificar en orgánicos, inorgánicos, peligrosos y de manejo especial. Existen contenedores especiales para realizar esta actividad y facilitar su entendimiento, al igual que las rutas de almacenamiento, transporte y disposición final de los residuos.

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/2.svg' alt='AvatarTop')
        h4 Desechos en general
        p Principalmente material biodegradable.

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/3.svg' alt='AvatarTop')
        h4 Orgánico
        p Huesos, restos de alimentos, etc.
        p Sino se tiene este contenedor se utiliza gris.

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/4.svg' alt='AvatarTop')
        h4 Vidrio
        p Botellas, vidrios rotos. Importante no utilizar para cerámica o cristal.

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/5.svg' alt='AvatarTop')
        h4 Plásticos y envases metálicos.
        p Latas o envases de alimentos y bebidas, bolsas.

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/6.svg' alt='AvatarTop')
        h4 Papel
        p Todo tipo de papeles y cartones, periódicos, revistas, papeles de envolver o folletos publicitarios entre otros.


      .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/7.svg' alt='AvatarTop')
        h4 Desechos peligrosos
        p Baterías, pilas, insecticidas, aceites, aerosoles, o productos tecnológicos. Residuos hospitalarios infecciosos.

    .row.justify-content-center.mb-5 
      .col-6
        <hr style="border:15px;">

    p(data-aos="fade-left").mb-5 En Colombia, de acuerdo con la Resolución 2184 de 2019 del Ministerio del Ambiente y que empezó a regir en el 2021, se implementó el nuevo código de colores blanco, negro y verde para la separación de residuos en la fuente, de la siguiente manera:

    .row.justify-content-center.mb-5 
      .col-4
        img(src='@/assets/curso/temas/tema7/8.svg' alt='AvatarTop').mb-3
        h4 Color blanco
        p Es el depósito de los residuos aprovechables, por lo general son el vidrio, metal y plásticos, en la mayoría de los casos también funciona para el papel y el cartón.
      .col-4
        img(src='@/assets/curso/temas/tema7/9.svg' alt='AvatarTop').mb-3
        h4 Color verde
        p Es el depósito de los residuos orgánicos aprovechables que son todos los que funcionan para composta y no afectan de forma tan agresiva al medio ambiente.
      .col-4
        img(src='@/assets/curso/temas/tema7/10.svg' alt='AvatarTop').mb-3
        h4 Color negro
        p Es para residuos no aprovechables como el papel higiénico; servilletas, papeles y cartones usados para comida o limpieza.

    .row.justify-content-center.mb-5 
      .col-6
        <hr style="border:15px;">

    p(data-aos="fade-left") Se establece que estos elementos sean dispuestos desde los hogares y controlados por los municipios en los planes de gestión de residuos; para las empresas se requiere un plan de trabajo de residuos sólidos y líquidos que, por lo general, es aprobado por un ente gubernamental para no afectar la cadena de distribución ni el ambiente.

    p(data-aos="fade-left").mb-5 En cuanto a la producción pecuaria, la #[b segregación] se debe llevar a cabo según la composición de los residuos:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")

        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema7/11.svg', alt='Texto que describa la imagen')

          .tarjeta.tarjeta--blanca.p-3(x="37%" y="10.5%" numero="+")
            .h5.mb-2 Orgánicos
            p Huevos no eclosionados, nacidos no vivos, mortalidad, cascarás de huevos, huevos infértiles, excretas, cama, pelos, pieles, limadura de cascos, heno sin comer, etc.

          .tarjeta.tarjeta--blanca.p-3(x="72%" y="37%" numero="+")
            .h5.mb-2 No aprovechables
            p No aprovechables: Como el papel y cartón contaminados con grasas o productos orgánicos, vidrios procedentes de bombillos de luz de neón, papel de uso sanitario, restos de comida.

          .tarjeta.tarjeta--blanca.p-3(x="6.5%" y="91%" numero="+")
            .h5.mb-2 Especiales
            p Son aquellos clasificados como peligrosos, entre los que se encuentran pilas y baterías, aceite usado, estopas para almacenamiento de soda cáustica NaOH, empaques de productos químicos, disolventes, desinfectantes, herbicidas, insecticidas, elementos contaminados con hidrocarburos, envases de vacunas, residuos anatomopatológicos, agujas, jeringas, residuos de medicamentos.

          .tarjeta.tarjeta--blanca.p-3(x="30%" y="91%" numero="+")
            .h5.mb-2 Reciclables
            p Reciclables como papel, ya sea cartón, periódicos, etc.; plásticos tales como politereftalato de etileno (PET), Polietileno de alta densidad (PE - HD), Policloruro de vinilo ( PVC), polietileno de baja densidad (PE – LD), polipropileno (PP), poliestireno (PS), plásticos mezclados y multilaminados; vidrio como verde, ámbar o azul que no deben ser mezclados con los blancos; y metales como acero, hierro y cobre.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema7/11-m.svg', alt='Texto que describa la imagen')

    p(data-aos="fade-left").mb-5 Los residuos líquidos generados en la producción pecuaria corresponden a las aguas residuales, que se producen normalmente en la industria, por lo cual no requieren de ninguna disposición especial.

    separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Técnicas de manejo y disposición

    .row.justify-content-center.align-items-center
      .col.lg-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema7/12.svg', alt='Texto que describa la imagen')
      .col-9
        p(data-aos="fade-left") El estiércol es la mezcla de la cama de los animales y sus deyecciones sólidas y líquidas. Dadas las condiciones de humedad, composición y carga microbiana sufre una fermentación progresiva en la que se modifica su composición química, la de su población de microorganismos y su porcentaje de humedad.
        p(data-aos="fade-left") Al principio del proceso se habla de estiércol fresco, y cuando se estabiliza el proceso y las fermentaciones se completan es maduro. El purín es el residuo líquido de las explotaciones ganaderas procedente de los orines del ganado y recogido en un depósito; por el sistema de recogida de los residuos el purín se asocia en exclusiva a las explotaciones porcinas.

    p.mt-5(data-aos="fade-left").mb-5 Teniendo en cuenta lo anterior y que estos son los principales residuos generados en las producciones pecuarias, se han establecido técnicas para realizar un manejo sustentable ambientalmente y que permita la utilización de estos como subproductos.

    .row.justify-content-center.mb-5.mt-5 
      .col-6
        .bloque-texto-f(style="background-color:#DBF9BD; height:100%").pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto En primera instancia esta la técnica del compostaje, el cual en términos generales el Compostaje se define como una biotecnia donde es posible ejercer un control sobre los procesos de biodegradación de la materia orgánica. como una “descomposición biológica y estabilización de la materia orgánica, bajo condiciones aeróbicas que permitan un desarrollo de temperaturas termofílicas como consecuencia de una producción biológica de calor, que da un producto final estable, libre de patógenos y semillas de malas hierbas y que aplicado al terreno produce un beneficio” dejando de este un producto final llamado “compost” que es un nutriente para el suelo que mejora la estructura, ayuda a reducir la erosión y ayuda a la absorción de agua y nutrientes por parte de las plantas
          .bloque-texto-f__autor.mb-3
            h3.mb-0 (Mejia et al. 2015).
      .col-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema7/13.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5 
      .col-10 
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema7/14.svg', alt='Texto que describa la imagen')
        .cajon.color-secundario.p-4.mb-4
          p Por otra parte se establece el uso de un #[b biodigestor], que consiste en un digestor de desechos orgánicos o biodigestor es, en su forma más simple, un contenedor cerrado, hermético e impermeable (llamado reactor), dentro del cual se deposita el material orgánico a fermentar (excrementos de animales y humanos, desechos vegetales-no se incluyen cítricos ya que acidifican-, etcétera) en determinada dilución de agua para que a través de la fermentación anaerobia se produzca gas metano y fertilizantes orgánicos ricos en nitrógeno, fósforo y potasio, y además, se disminuya el potencial contaminante de los excrementos. Además, es un sistema natural y ecológico que aprovecha la digestión anaeróbica (en ausencia de oxígeno) de las bacterias para transformar el estiércol en biogás y fertilizante.

    p(data-aos="fade-left") El biogás puede ser empleado como combustible en las cocinas, o iluminación, y en grandes instalaciones se puede utilizar para alimentar un motor que genere energía eléctrica. El fertilizante, llamado biol, inicialmente se ha considerado un producto secundario, pero actualmente se está considerando de la misma importancia o mayor, que el biogás ya que provee un fertilizante natural que mejora fuertemente el rendimiento de las cosechas.
    p(data-aos="fade-left").mb-5 Para complementar la información sobre el manejo de residuos, se invita a ver el siguiente vídeo:

    figure
    .video(data-aos="fade-right")
      iframe(width="560" height="315" src="https://www.youtube.com/embed/pedXzm7J7Dc?si=_9KkryPRTAGPvRho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)

         
</template>

<script>
export default {
  name: 'Tema7',
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
