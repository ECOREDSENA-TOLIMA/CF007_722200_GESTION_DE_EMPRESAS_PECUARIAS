<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plan de contingencia

    p(data-aos="fade-left").mb-5 Los planes de contingencia sanitaria para animales de producción están diseñados para hacer frente a situaciones de desastre en donde se ven afectadas las diferentes producciones. Aquí se deben tener en cuenta las condiciones específicas de cada desastre y el tipo de producción a la que se dirige; sin embargo, existen modelos o protocolos para seguir, en líneas generalizadas, las acciones para salvaguardar el bienestar de los animales y la unidad productiva en lo que se pueda.

    .row.justify-content-center
      .tarjeta.p-4(style="background-color:#DBF9BD")(data-aos="flip-up")
        .row.justify-content-center.align-items-center
          .col-sm-3
            figure(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema5/1.svg', alt='Texto que describa la imagen')
          .col-sm-8
            p(data-aos="fade-left") Para poder estar preparado y crear un plan, se deben conocer e identificar los riesgos específicos de la zona, estar en contacto con las entidades gubernamentales que ofrecen información oportuna, desarrollar una lista de contactos que incluyan al médico veterinario, albergues o asociaciones encargadas del cuidado y bienestar de los animales, servicios de transporte, elaborar un kit de emergencia y tener en mente un plan de evacuación.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Protocolos

    p(data-aos="fade-left").mb-5 Los protocolos están diseñados para cubrir determinadas situaciones de desastre, y estos deben tener en cuenta un orden y estructura en general, por ello, las cuatro fases que se recomienda seguir en los protocolos son:

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 a. Prevención y mitigación: 

    p(data-aos="fade-left").mb-5 Para hacer una correcta #[b  prevención] se deben tener en cuenta principalmente estas acciones:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/2.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario(style="width:100%")
            .p-4
              h2 Identificar el tipo de contingencia que podría ocurrir en la zona donde se ubica el establecimiento y con qué frecuencia podría presentarse
              p #[b  Sanitarias:] brotes de enfermedades, de notificación, incidencia, patogenicidad, propagación.
              p #[b No sanitarias:] desastres naturales, provocados por el hombre o tecnológicos.
              p Evitar la instalación de prevenir la construcción de instalaciones en zonas de riesgo a los desastres naturales, tales como inundaciones, derrumbes, incendios, aluviones, tsunamis, etc. O bien sea que no tengan buen acceso y dificulten el tránsito de cualquier tipo de vehículo, afectando el transporte de los animales

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/3.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario(style="width:100%")
            .p-4
              h2 Considerar salidas de emergencia en la construcción de planteles productivos, que se encuentren bien señalizadas
              p Tener al día los planes y protocolos preventivos, sanitario, de bioseguridad y terapéuticos de los animales.
              p Almacenar correctamente los productos de la unidad productiva como lo son medicamentos, pesticidas, herbicidas, rodenticidas, tal y como lo contemplan los protocolos de bioseguridad
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/4.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-secundario(style="width:100%")
            .p-4
              h2 Durante el transporte
              ul.lista-ul
                li
                  ul
                    li 
                      i.lista-ul__vineta
                      | Conducir responsablemente, acorde al tipo de carga (viva), lentamente, sin frenadas o virajes bruscos.
                    li 
                      i.lista-ul__vineta
                      | Elaborar una ruta segura, contemplando horarios, temperaturas y las mejores condiciones.
                    li 
                      i.lista-ul__vineta
                      | Escoger los animales aptos para las condiciones de viaje, teniendo en cuenta el número de animales adecuados para el vehículo, asegurando el bienestar de los mismos.
                    li 
                      i.lista-ul__vineta
                      | Utilizar vehículos idóneos para el transporte de los animales, cumpliendo con la normatividad sanitaria, guía de movilización, plan de viaje y señalización del mismo.
                    li 
                      i.lista-ul__vineta
                      | Asegurarse de que se conduzcan con responsabilidad de acuerdo a la carga viva, recordando no frenar o virar bruscamente o desplazarse demasiado rápido.

    p(data-aos="fade-left").mb-5 En cuanto a la #[b mitigación] las principales actividades son:

    .row.justify-content-center 
      .col
        .row.mb-5
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Los establecimientos deben tener resistencia a los desastres naturales.

          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Hacer que el establecimiento a nivel estructural y de infraestructura cumplan con los requisitos para controlar los riesgos por desastres. 
          
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Mantener las vías de acceso en buen estado para que los vehículos tengan transitabilidad en todo momento. 

    .row.justify-content-center 
      .col
        .row.mb-5
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Realizar mantenimiento a los vehículos y mantenerlos con suficiente combustible

          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Direccionar y tener a la mano equipos y material de primeros auxilios como extintores, camillas, detectores de humo, botiquín, en cada una las instalaciones de la unidad productiva
          
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Tener como respaldo, generadores eléctricos, que se encuentren en óptimas condiciones

    .row.justify-content-center 
      .col
        .row.mb-5
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Mantener en buenas condiciones los sistemas de comunicación como radios, transmisores y celulares

          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Los equipos de sacrificio de emergencia deben estar en buenas condiciones y en disposición
          
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Designar un lugar adecuado para realizar el almacenamiento de elementos propicios para atender emergencias tales como linternas, generadores, combustibles, radios, equipos de contención de animales, primeros auxilios de personas y animales, etc.

    .row.justify-content-center 
      .col
        .row.mb-5
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Llevar un registro actualizado de los elementos que se encuentran almacenados para la atención de emergencias

          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Almacenar pienso y agua en un lugar idóneo y asegurarse de llevar registro de ellos, fecha de caducidad, así como de entradas y salidas
          
          .col-sm-4.col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.color.p-4(style="background-color:#3B5620; height:100%")
              p.text-white Realizar convenio con establecimientos que permitan llevar a cabo sacrificios de emergencia de ser necesario cuando se presente algún desastre

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 b. Preparación: 

    p(data-aos="fade-left") Se refiere a las actividades que surgen para la disposición y capacidad de los recursos humanos y materiales, como las comunidades y estructuras, respectivamente, a través de las cuales se pueda originar una acción ágil y eficiente frente una emergencia, siendo el resultado del plan de contingencia generado anteriormente.
    p(data-aos="fade-left").mb-5 Las acciones más importantes para la #[b preparación] se describen a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema5/5.svg", alt="alt").img400.m-auto
      .col-lg-6
        SlyderF.custom.mb-5(columnas="col-lg-12 col-xl-12")
          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 El plan debe guardarse en un lugar de fácil acceso, a prueba de factores que puedan afectarle, tales como polvo, agua, fuego, etc.

          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Socializar y divulgar el plan de contingencia con el personal a través de capacitaciones, simulacros, material  de difusión como folletos, revistas volantes, etc.

          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Asignar responsables y roles en los eventos de emergencia, quien tomara el liderazgo, que acciones realizara el personal, quien tomara las decisiones y como se ejecutaran

          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Establecer equipos de personas para ejecutar por partes el plan de contingencia.

          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Asegurarse de que la señalización y direccionamiento se encuentran siempre en buen estado y son entendibles.
          
          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Trazar, poner en un lugar visible y repartir al personal las rutas de evacuación y los puntos de seguridad, asegurándose de que todos tengan conocimiento sobre el mismo. 

          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Actualizar periódicamente y tener copias de seguridad en físico y digital de los planes y rutas de evacuación, así como los documentos que hacen parte de los mismos.

          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Identificar correctamente a los animales  y llevar registros, asegurándose de actualizar continuamente los datos, tener en cuenta cuantos animales hay en la producción y cuantos por cada instalación

          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 El recurso humano siempre debe estar listado y actualizado, teniendo en cuenta  el número de personas por el tipo de proceso.

          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Identificar fuentes de financiamiento para facilitar la disposición de recursos financieros sin demora
          
          .tarjeta.tarjeta--slyder.p-4(style="background-color:#EDF0EB")
            p.mb-0 Tener en un lugar visible los números de entidades y lugares que puedan atender y ayudar en situaciones de emergencia, además de clinas u hospitales médicos veterinarios, tales como: ICA, Carabineros, Bomberos, Secretarias de Salud, Secretaria de Desarrollo rural, Secretaria de Ambiente y Atención a Desastres, CARS, entre otros.
     
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 c. Respuesta:

    p(data-aos="fade-left").mb-5 Esta etapa corresponde a la ejecución del plan de contingencia en la implementación de su segundo estadio y establece el suministro de los servicios de emergencia y la intervención del sector público durante o inmediato a la presentación de un desastre, teniendo como objeto salvar las vidas animales y humanas, disminuir los impactos sanitarios y amenazas a la salud pública, garantizar que se sostenga el cubrimiento de las necesidades básicas para la subsistencia tanto de las personas como de los animales afectados; y para lograr una efectiva respuesta, es necesario poner en práctica las siguientes actividades.

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/6.svg' alt='AvatarTop').p-4
          .tarjeta.color-secundario
            .p-4
              p Actuar con rapidez y conservar la calma,  para luego llamar a las autoridades competentes y los especialistas quienes  pudieran intervenir  (carabineros, bomberos, ICA,  Secretarias de Salud o Secretaria de desarrollo rural, médicos veterinarios, gestión del riesgo y atención a desastres, entre otros). 

      .col-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/7.svg' alt='AvatarTop').p-4
          .tarjeta.color-secundario
            .p-4
              p Dar prioridad al recurso humano f su seguridad, seguidamente ejecutar los protocolos de  seguridad animal y de necesitarse transportar a los animales hacia sectores más seguros

      .col-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/8.svg' alt='AvatarTop').p-4
          .tarjeta.color-secundario
            .p-4
              p El acceso a agua limpia y alimento debe garantizarse, así como la atención oportuna de un médico veterinario o médico veterinario zootecnista para los animales que se encuentren heridos o afectados por el evento emergente.

      .col-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/9.svg' alt='AvatarTop').p-4
          .tarjeta.color-secundario
            .p-4
              p La supervisión de los procedimientos que se llevarán a cabo en ejecución de los protocolos de emergencia serán realizados por un médico veterinario o médico veterinario zootecnista o en su defecto por un profesional con experiencia en el campo 

      .col-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/10.svg' alt='AvatarTop').p-4
          .tarjeta.color-secundario
            .p-4
              p Llevar a cabo el transporte y/o evacuación de los animales que tengan lesiones, a la brevedad posible para ejecutar si es necesario el sacrificio de emergencia, teniendo en cuenta las responsabilidades, competencias, método de elección, definición del ejecutor y signos de aturdimiento eficiente, adoptar medidas de bioseguridad y considerar aspectos medioambientales (disposición de cadáveres), dar aviso al médico veterinario y hacer la denuncia a la autoridad competente (ICA) en caso de observar muerte de animales y/o enfermedades que afecten a numerosos animales, especialmente los que tengan signos nerviosos y abortos, petequias o hematomas, respiratorios con alta mortalidad, con alta mortalidad de adultos y crías, Tos seca, secreción nasal, fiebre, entre otros. 

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 d. Recuperación:

    p(data-aos="fade-left") Se refiere a la restauración y mejoramiento de las instalaciones e infraestructura, de ser necesario, así como de los medios de subsistencia y las condiciones de vida de las personas y poblaciones afectadas, en donde se priorizan todas las iniciativas para disminuir los factores de riesgo de desastre.
    p(data-aos="fade-left").mb-5 En este ítem las acciones principales de recuperación a cumplir son:

    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color:#DBF9BD")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/11.svg' alt='AvatarTop')
        p.text-center Asegurarse de que se ha atendido la emergencia y que esta ha cesado.

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/12.svg' alt='AvatarTop')
        p.text-center Observar los lugares afectados identificando: objetos punzantes, materiales peligrosos, fauna peligrosa, agua contaminada, cadáveres, líneas eléctricas caídas y otros peligros

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/13.svg' alt='AvatarTop')
        p.text-center Prestar atención médica veterinaria a los animales que estén heridos o afectados por el evento de desastre

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/14.svg' alt='AvatarTop')
        p.text-center Analizar la situación para reconocer avances en el entorno de la resolución de la emergencia

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/15.svg' alt='AvatarTop')
        p.text-center Examinar las consecuencias a largo plazo y monitorearlas

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/16.svg' alt='AvatarTop')
        p.text-center Revisar los animales con precaución y prestar especial atención a su comportamiento, el cual puede haber sido afectado por la situación de desastre

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/17.svg' alt='AvatarTop')
        p.text-center Suministrar agua y alimento suficiente a los animales durante el tiempo que sea necesario, sobre todo a los que llevan en inanición algún tiempo.

      .tarjeta(style="background-color:#DBF9BD").p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/18.svg' alt='AvatarTop')
        p.text-center Para retroalimentar el plan de contingencia para evaluar los aciertos y errores, así como los avances, se recomienda elaborar un informe final.
</template>

<script>
export default {
  name: 'Tema5',
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
