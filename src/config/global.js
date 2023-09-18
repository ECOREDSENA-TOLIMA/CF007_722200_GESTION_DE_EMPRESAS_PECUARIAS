export default {
  global: {
    componenteFormativo: 'Plan sanitario, protocolos, componentes y normativa',
    descripcionCurso:
      'Los planes sanitarios en el manejo de la producción son de gran importancia, puesto que se puede hacer la prevención de entrada de patógenos, el control de riesgos, el manejo de apropiado de residuos, garantizando las buenas condiciones de los animales y, por ende, que se haga más eficiente la producción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad seguridad y salud en el trabajo y ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos de protección personal',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de protección personal, características y uso',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan sanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Limpieza, higiene y desinfección',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Procedimientos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Insumos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Clasificación de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Protocolos',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Información y trazabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Registros',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Diligenciamiento',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Clasificación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Técnicas de manejo y disposición',
            hash: 't_7_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_007_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Plan sanitario',
      referencia:
        'TV Agro. (2015). Cómo implementar un plan sanitario en una explotación de cerdos y gallinas - por Juan Gonzalo Ángel. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uyJ4SHQN394',
    },
    {
      tema: '2. Plan sanitario',
      referencia:
        'La Finca de Hoy. (2020). Así debe ser un correcto plan sanitario para el bienestar de sus bovinos. [Video]. YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=uVxB71GZBpw',
    },
    {
      tema: '7. Residuos',
      referencia:
        'Alcotrans. (2020). Capacitación certificada: Reciclaje - separación en la fuente (¿sabes hacerlo correctamente?). [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sPEEozv6SUI',
    },
    {
      tema: '7. Residuos',
      referencia:
        'Avicultores Colombia. (2016). Compostaje de mortalidad. [Video]. YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=fd5mo5Pr1pQ',
    },
    {
      tema: '3. Limpieza, higiene y desinfección',
      referencia:
        'Eco House Global. (2020). 3R de la ecología - Educación Ambiental Digital. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rRCZzrMjiY0',
    },
    {
      tema: '7. Residuos',
      referencia:
        'Avicultores Colombia. (2016). Manejo de residuos en granjas avícolas. [Video]. YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=3fzop2lQ7Ps',
    },
    {
      tema: '7. Residuos',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible – Colombia. (2016). Planes de gestión integral de residuos sólidos. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GPIcH8RAJTk',
    },
    {
      tema: '7. Residuos',
      referencia:
        'Ortega, W. (2019). Clasificación de los residuos sólidos. [Video]. YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=J2lcgWUqS98',
    },
  ],
  glosario: [
    {
      termino: 'Biodigestor',
      significado:
        'Contenedor cerrado de forma hermética que contiene residuos orgánicos de origen vegetal o animal (carne en descomposición, excrementos…) Un grupo de microorganismos presentes en los desechos orgánicos producen una reacción conocida como fermentación anaeróbica, de la que se puede obtener energía (EQUAE Fundación, 2021).',
    },
    {
      termino: '<em>Compost</em>',
      significado:
        'Resultado del proceso de compostaje (Guía de buenas prácticas ambientales para el sector avícola en Guatemala, 2008).',
    },
    {
      termino: 'Compostaje',
      significado:
        'Técnica de estabilización y de tratamiento aerobio de los residuos orgánicos biodegradables, resultado de una actividad microbiológica compleja desarrollada en condiciones controladas (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008).',
    },
    {
      termino: 'Microorganismos',
      significado:
        'Organismos que, por su tamaño reducido, son imperceptibles a la vista. También denominados “microbios”, estos organismos cuentan con una organización biológica muy básica: una proporción importante de ellos cuentan con apenas una única célula (Raffino, 2020).',
    },
    {
      termino: 'Mitigación',
      significado:
        'Designa el conjunto de actividades que se realizan antes de un desastre, destinadas a reducir o atenuar el impacto adverso de los peligros y desastres relacionados (Bienestar animal, orientaciones para la elaboración de planes de contingencia, 2016).',
    },
    {
      termino: 'Mortalidad',
      significado:
        'En biología, y particularmente en genética, se denomina parental al progenitor o a los progenitores de una progenie, esto es, al individuo o a los individuos cuya reproducción, ya sea sexual o asexual, provoca la transmisión de una herencia genética.',
    },
    {
      termino: 'MSF',
      significado:
        'Medidas Sanitarias y Fitosanitarias, es un tratado internacional de la Organización Mundial del Comercio (OMC). Fue negociado durante la Ronda Uruguay del Acuerdo General sobre Aranceles Aduaneros y Comercio (GATT), y entró en vigor con el establecimiento de la OMC a principios de 1995. 1 En términos generales, las medidas sanitarias y fitosanitarias ("MSF") cubiertas por el acuerdo son aquellas destinadas a proteger la vida o la salud humana, animal o vegetal de ciertos riesgos.',
    },
    {
      termino: 'Patógenos',
      significado:
        'Agentes infecciosos que pueden provocar enfermedades a su huésped. Este término se emplea normalmente para describir microorganismos como los virus, bacterias y hongos, entre otros. Estos agentes pueden perturbar la fisiología normal de plantas, animales y humanos (ESNM).',
    },
    {
      termino: 'Prevención',
      significado:
        'Designa toda acción destinada a impedir o evitar que sucesos naturales o generados por la actividad humana, causen consecuencias adversas para las personas, los animales, el entorno y los bienes (Bienestar animal, orientaciones para la elaboración de planes de contingencia, 2016).',
    },
    {
      termino: 'Residuo',
      significado:
        'Material o subproducto industrial considerado, por su cantidad, composición o particular naturaleza, para ser reintegrado a los ciclos, flujos y procesos de la misma u otras cadenas productivas (Guía de buenas prácticas ambientales para el sector avícola en Guatemala, 2008).',
    },
    {
      termino: 'Residuo orgánico',
      significado:
        'Son aquellos que por su composición general y específica son derivados del carbono y tienen la propiedad biodegradable (Guía de buenas prácticas ambientales para el sector avícola en Guatemala, 2008).',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'También denominada rastreabilidad, como componente fundamental de los mecanismos de garantía sanitaria, es la capacidad de mantener identificados los animales o sus productos, a lo largo de las cadenas de producción, comercialización y transformación hasta su origen, con el fin de realizar investigaciones epidemiológicas o establecer acciones correctivas en beneficio de la comunidad consumidora (Programa oficial de trazabilidad – SAG, 2021).',
    },
  ],
  referencias: [
    {
      referencia:
        '“Amigosafety.com”. (2021) EPP básico en la ganadería. Amigosafety.com. ',
      link:
        'https://blog.amigosafety.com/2021/02/epp-basico-en-la-ganaderia.html',
    },
    {
      referencia:
        'Asocebú. (s. f.) Plan sanitario, planificación, control y erradicación. Asocebú. ',
      link: 'https://www.asocebu.com/index.php/blog/plan-sanitario',
    },
    {
      referencia:
        'Brunori, J., y Juárez, M. (s. f.). Un plan sanitario adecuado. Agritotal.com. ',
      link: 'https://www.agritotal.com/nota/un-plan-sanitario-adecuado/',
    },
    {
      referencia:
        'Campos, G., G. (s. f.). Normatividad en seguridad y salud en el trabajo, 2019-2020 (Colombia). Seguridad Laboral. ',
      link:
        'https://www.seguridad-laboral.es/sl-latam/colombia/normatividad-en-seguridad-y-salud-en-el-trabajo-2019-2020-colombia_20200630.html',
    },
    {
      referencia:
        'Gay, J., F. R. (2016). La importancia de los riesgos en las buenas prácticas en producción y su relación en la salud pública veterinaria. BM Editores. ',
      link:
        'https://www.produccion-animal.com.ar/produccion_organica_y_trazabilidad/69-Importancia_de_los_Riesgos.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (s. f.). Guía para la elaboración del plan sanitario. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/LISTADO-DE-PREDIOS-CERTIFICADOS-EN-BPG/GUIA-PARA-LA-ELABORACION-DEL-PLAN-SANITARIO-1.pdf.aspx?lang=es-CO',
    },
    {
      referencia:
        'Mata-Haro, V., Acedo-Félix, E., y Pinelli-Saavedra, A. (2013). Bioseguridad, limpieza y desinfección (Cap. II). Red Porcina Iberoamericana. ',
      link:
        'https://www.produccion-animal.com.ar/libros_on_line/51-manual_porcino/02-BuenasPracticasCap2.pdf',
    },
    {
      referencia:
        'Mejía, S., G., Ruiz, B., J. D., Correa, J., D., y Londoño, G., J. M. (2015). Compostaje de mortalidad como alternativa para el manejo del cadáver y el residuo del equino en el Centro de Veterinaria y Zootecnia CES. CES. ',
      link:
        'http://repository.ces.edu.co/bitstream/10946/1879/1/Compostaje_mortalidad.pdf',
    },
    {
      referencia:
        'Rodríguez, A. (2019). Limpieza y desinfección, un paso importante en la bioseguridad. BM Editores. ',
      link:
        'https://bmeditores.mx/porcicultura/limpieza-y-desinfeccion-un-paso-importante-en-la-bioseguridad-estudio-de-revision/',
    },
    {
      referencia:
        'Rodríguez, E. (2013). Desinfección en las explotaciones ganaderas. PV Albéitar. ',
      link: 'https://www.adiveter.com/ftp_public/A1200913.pdf',
    },
    {
      referencia:
        'Servicio Agrícola y Ganadero de Chile - SAG. (2016). Bienestar animal, orientaciones para la elaboración de planes de contingencia. SAG. ',
      link:
        'http://www.sag.cl/sites/default/files/ba_orientaciones_elaborac_plan_contingencia_v1__26-10-16.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
