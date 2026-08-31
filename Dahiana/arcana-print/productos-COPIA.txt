/* ==========================================================================

   ARCANA PRINT — ARCHIVO DE PRODUCTOS Y ENLACES

   ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA ACTUALIZAR LA PÁGINA.

   --------------------------------------------------------------------------
   ANTES DE EMPEZAR, LAS 4 REGLAS DE ORO
   --------------------------------------------------------------------------

   1. Cambia SOLO lo que está entre comillas "  ".
      Todo lo demás (las llaves { }, las comas, los nombres como nombre: o
      precio:) tiene que quedarse exactamente igual.

   2. No borres nunca una comilla, una coma ni una llave.
      Si se borra una sola, la página de catálogo deja de funcionar.
      Tranquilo: si pasa, la web te avisará en pantalla y podrás restaurar
      el archivo desde la copia "productos-COPIA.txt" que está en esta
      misma carpeta.

   3. Para poner una foto NO hay que escribir nada aquí.
      Solo tienes que renombrar tu foto con el nombre exacto que aparece
      en la línea foto: y meterla en la carpeta "fotos".
      Ejemplo: para los imanes, tu foto debe llamarse   imanes.jpg
      Si aún no hay foto, la web muestra un recuadro que dice
      "Foto próximamente". No se rompe nada.

   4. Guarda el archivo y actualiza la página del navegador para ver el
      cambio. Cuando esté todo bien, vuelve a subir la carpeta a internet.

   ========================================================================== */


/* --------------------------------------------------------------------------
   1) ENLACES DE CONTACTO
   Si algún día cambia el WhatsApp, el Instagram o el Facebook,
   cámbialo aquí y se actualiza en TODA la página de una vez.
   -------------------------------------------------------------------------- */

var CONTACTO = {

  whatsapp:  "https://wa.me/message/6TVOKA7FLFCMK1",

  instagram: "https://www.instagram.com/arcana_print",

  facebook:  "https://www.facebook.com/share/1EpY33QJiS/"

};


/* --------------------------------------------------------------------------
   2) LOS PRODUCTOS DEL CATÁLOGO
   Aparecen en la página en el mismo orden en que están escritos aquí.
   -------------------------------------------------------------------------- */

var PRODUCTOS = [

  {
    nombre:      "Llaveros",
    precio:      "$12.000",
    descripcion: "Llaveros de acero personalizados con fotos, diseños únicos o ilustraciones, ofreciendo un acabado atractivo y duradero.",
    foto:        "llaveros.jpg"
  },

  {
    nombre:      "Portarretrato pequeño",
    precio:      "$25.000",
    descripcion: "Es un material ligero y resistente, con dimensiones de 15 x 20 cm, totalmente personalizable.",
    foto:        "portarretrato-pequeno.jpg"
  },

  {
    nombre:      "Portarretrato grande",
    precio:      "$30.000",
    descripcion: "Es un material ligero y resistente, ideal para personalizar con un acabado satinado y una dimensión de 20 x 30 cm.",
    foto:        "portarretrato-grande.jpg"
  },

  {
    /* FALTA LA FOTO: llámala  mouse-pad.jpg  y déjala en la carpeta "fotos". */
    nombre:      "Mouse pad",
    precio:      "$12.000",
    descripcion: "Alfombrillas personalizadas de 12 x 22 cm. Son accesorios para computadora que puedes diseñar según tus preferencias.",
    foto:        "mouse-pad.jpg"
  },

  {
    /* PRECIO POR CONFIRMAR — el detalle está en el LEEME.txt,
       que se guarda fuera de esta carpeta y no se sube a internet.
       FALTA LA FOTO: llámala  imanes.jpg */
    nombre:      "Imanes",
    precio:      "$700",
    descripcion: "Imanes personalizados para nevera, que son resistentes y duraderos, perfectos para uso prolongado.",
    foto:        "imanes.jpg"
  },

  {
    /* PRECIO POR CONFIRMAR — el detalle está en el LEEME.txt,
       que se guarda fuera de esta carpeta y no se sube a internet.
       FALTA LA DESCRIPCIÓN: escríbela entre las comillas de descripcion.
       Mientras esté vacía, la web pone "Descripción próximamente".
       FALTA LA FOTO: llámala  rompecabezas.jpg */
    nombre:      "Rompecabezas",
    precio:      "$900",
    descripcion: "",
    foto:        "rompecabezas.jpg"
  },

  {
    /* PRECIO POR CONFIRMAR — el detalle está en el LEEME.txt,
       que se guarda fuera de esta carpeta y no se sube a internet.
       FALTA LA DESCRIPCIÓN: escríbela entre las comillas de descripcion.
       FALTA LA FOTO: llámala  placa-mascota.jpg */
    nombre:      "Placa para mascota",
    precio:      "$500",
    descripcion: "",
    foto:        "placa-mascota.jpg"
  }

];


/* --------------------------------------------------------------------------
   ¿CÓMO AÑADO UN PRODUCTO NUEVO?

   Copia uno de los bloques de arriba entero, desde la llave  {  hasta la
   llave  },  y pégalo justo debajo. Después cambia los textos.

   Cuidado con las comas: todos los bloques llevan una coma detrás de la
   llave de cierre  },  MENOS EL ÚLTIMO de la lista, que no lleva ninguna.

   Así queda un bloque nuevo:

     {
       nombre:      "Tazas personalizadas",
       precio:      "$18.000",
       descripcion: "Tazas de cerámica con la foto o ilustración que elijas.",
       foto:        "tazas.jpg"
     }

   -------------------------------------------------------------------------- */
