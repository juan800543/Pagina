/* ==========================================================================
   ARCANA PRINT — funcionamiento de la página

   Este archivo NO hay que tocarlo para el mantenimiento.
   Todo lo que se cambia a diario está en "productos.js".

   Hace tres cosas:
     1) Pone los enlaces de contacto en todos los botones.
     2) Dibuja el código QR de la portada.
     3) Dibuja los productos del catálogo.
   ========================================================================== */

(function () {
  'use strict';

  var ICONO_WHATSAPP =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';

  var ICONO_SINFOTO =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="8.5" cy="10" r="1.8"/><path d="M3.5 16.6l4-4a2 2 0 0 1 2.8 0l3 3 2-2a2 2 0 0 1 2.8 0l2.4 2.4"/></svg>';


  /* ---------------------------------------------------------------------
     1) Enlaces de contacto
     Los botones ya traen su enlace escrito en el HTML, así que funcionan
     aunque esto falle. Aquí sólo se actualizan con lo que diga productos.js.
     --------------------------------------------------------------------- */

  function aplicarEnlaces() {
    if (typeof CONTACTO === 'undefined' || !CONTACTO) return;
    var nodos = document.querySelectorAll('[data-enlace]');
    for (var i = 0; i < nodos.length; i++) {
      var clave = nodos[i].getAttribute('data-enlace');
      var url = CONTACTO[clave];
      if (typeof url === 'string' && url.trim()) nodos[i].href = url.trim();
    }
  }

  function enlaceWhatsApp() {
    if (typeof CONTACTO !== 'undefined' && CONTACTO && CONTACTO.whatsapp) {
      return CONTACTO.whatsapp;
    }
    return 'https://wa.me/message/6TVOKA7FLFCMK1';
  }


  /* ---------------------------------------------------------------------
     2) Código QR de la portada
     Se genera con la dirección desde la que se está viendo la página, así
     que si algún día se cambia de hosting, el QR se corrige solo.
     --------------------------------------------------------------------- */

  function pintarQR() {
    var caja = document.getElementById('qr');
    if (!caja) return;

    var marco = document.getElementById('qr-marco');
    var pie = document.getElementById('qr-pie');

    // Abierta con doble clic desde el computador: todavía no hay dirección web.
    if (location.protocol === 'file:') {
      caja.hidden = false;
      caja.className = 'qr qr--aviso';
      marco.textContent = 'El código QR aparecerá cuando la página esté publicada en internet.';
      pie.textContent = 'Pendiente de publicar';
      return;
    }

    if (typeof QRCode === 'undefined') return;   // sin librería no mostramos nada roto

    var url = location.origin + location.pathname.replace(/\/index\.html$/i, '/');

    caja.hidden = false;
    new QRCode(marco, {
      text: url,
      width: 264,
      height: 264,
      colorDark: '#630D64',
      colorLight: '#FFFFFF',
      correctLevel: QRCode.CorrectLevel.M
    });
    marco.setAttribute('title', url);
  }


  /* ---------------------------------------------------------------------
     3) Catálogo de productos
     --------------------------------------------------------------------- */

  function crearReserva(media) {
    while (media.firstChild) media.removeChild(media.firstChild);
    var res = document.createElement('div');
    res.className = 'producto__sinfoto';
    res.innerHTML = ICONO_SINFOTO;
    var t = document.createElement('span');
    t.textContent = 'Foto próximamente';
    res.appendChild(t);
    media.appendChild(res);
  }

  function crearFicha(p) {
    var ficha = document.createElement('article');
    ficha.className = 'producto';

    /* --- lado de la foto --- */
    var media = document.createElement('div');
    media.className = 'producto__media';

    var archivo = (p.foto || '').trim();
    if (archivo) {
      var img = document.createElement('img');
      img.alt = p.nombre + ' personalizado de ARCANA PRINT';
      img.loading = 'lazy';
      img.decoding = 'async';
      // Si la foto no existe o está mal escrito el nombre, nunca sale rota.
      img.onerror = function () { crearReserva(media); };
      img.src = 'fotos/' + archivo;
      media.appendChild(img);
    } else {
      crearReserva(media);
    }

    /* --- lado de los datos --- */
    var datos = document.createElement('div');
    datos.className = 'producto__datos';

    var nombre = document.createElement('h2');
    nombre.className = 'producto__nombre';
    nombre.textContent = p.nombre || 'Producto sin nombre';

    var desc = document.createElement('p');
    var texto = (p.descripcion || '').trim();
    if (texto) {
      desc.className = 'producto__desc';
      desc.textContent = texto;
    } else {
      desc.className = 'producto__desc producto__desc--vacia';
      desc.textContent = 'Descripción próximamente.';
    }

    var precio = document.createElement('p');
    precio.className = 'producto__precio';
    precio.textContent = (p.precio || '').trim() || 'Consultar precio';

    var cta = document.createElement('a');
    cta.className = 'producto__cta';
    cta.href = enlaceWhatsApp();
    cta.target = '_blank';
    cta.rel = 'noopener';
    cta.innerHTML = ICONO_WHATSAPP;
    cta.appendChild(document.createTextNode('Pedirlo por WhatsApp'));
    cta.setAttribute('aria-label', 'Pedir ' + (p.nombre || 'este producto') + ' por WhatsApp');

    datos.appendChild(nombre);
    datos.appendChild(desc);
    datos.appendChild(precio);
    datos.appendChild(cta);

    ficha.appendChild(media);
    ficha.appendChild(datos);
    return ficha;
  }

  function avisoAveria(contenedor, motivo) {
    var caja = document.createElement('div');
    caja.className = 'averia';

    var t = document.createElement('h2');
    t.textContent = 'No se pudo cargar el catálogo';

    var p1 = document.createElement('p');
    p1.textContent = motivo;

    var p2 = document.createElement('p');
    p2.innerHTML = 'Casi siempre es porque al editar <code>productos.js</code> se borró sin querer ' +
      'una comilla, una coma o una llave. Solución: abre el archivo ' +
      '<code>productos-COPIA.txt</code> de esta misma carpeta, copia todo su contenido ' +
      'y pégalo dentro de <code>productos.js</code> reemplazando lo que haya.';

    caja.appendChild(t);
    caja.appendChild(p1);
    caja.appendChild(p2);
    contenedor.appendChild(caja);
  }

  function pintarCatalogo() {
    var contenedor = document.getElementById('productos');
    if (!contenedor) return;

    if (typeof PRODUCTOS === 'undefined') {
      avisoAveria(contenedor, 'El archivo productos.js tiene un error de escritura y el navegador no ha podido leerlo.');
      return;
    }
    if (!Array.isArray(PRODUCTOS) || PRODUCTOS.length === 0) {
      avisoAveria(contenedor, 'El archivo productos.js se leyó bien, pero no hay ningún producto dentro.');
      return;
    }

    var trozo = document.createDocumentFragment();
    for (var i = 0; i < PRODUCTOS.length; i++) {
      if (PRODUCTOS[i] && typeof PRODUCTOS[i] === 'object') {
        trozo.appendChild(crearFicha(PRODUCTOS[i]));
      }
    }
    contenedor.appendChild(trozo);
  }


  /* --------------------------------------------------------------------- */

  function arrancar() {
    aplicarEnlaces();
    pintarQR();
    pintarCatalogo();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar);
  } else {
    arrancar();
  }

})();
