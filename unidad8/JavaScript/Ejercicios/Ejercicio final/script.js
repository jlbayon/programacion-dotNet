// Pequeño helper para seleccionar elementos del DOM con CSS selectors.
// Ej.: $("#id"), $(".clase"), etc.

// Devuelve el primer elemento que coincida con el selector.
const $ = (sel) => document.querySelector(sel);


// 1) Fetch + listar datos
// Referencias a nodos donde mostraremos estado, lista y JSON crudo.
//const estadoApi = $("#estadoApi"); // párrafo de estado (p)
const estadoApi = $("#estadoApi");
const listaUsuarios = $("#listaUsuarios"); // contenedor de lista (div)
const jsonCrudo = $("#jsonCrudo"); // contenedor JSON crudo (pre)

alert(estadoApi);
// Cuando se haga clic en "Cargar":
// traemos los usuarios desde una API pública
$("#btnCargar").addEventListener("click", async () => {
      estadoApi.textContent = "Cargando…";
      listaUsuarios.innerHTML = "";
      jsonCrudo.textContent = "{}";

      try {
            // fetch realiza una petición HTTP GET a la API
            // Usamos await para esperar la respuesta de la API
            const res = await fetch("https://jsonplaceholder.typicode.com/users");

            // Si la respuesta HTTP no es correcta, lanzamos error manualmente
            if (!res.ok) throw new Error("HTTP " + res.status);

            // si está todo bien
            // Parseamos el cuerpo de la respuesta como JSON
            // (porque conocemos de antemano que la API devuelve JSON)
            const usuarios = await res.json();

            // Mostramos el número de elementos
            estadoApi.innerHTML = `✅ ${usuarios.length} usuarios cargados`;
            // Mostrar JSON crudo formateado, si está seleccionado
            jsonCrudo.textContent = JSON.stringify(usuarios, null, 2);

            // Recorremos la lista y mostramos cada usuario 
            usuarios.forEach(u => {
                  // Crear un div por usuario
                  const elto = document.createElement("div");
                  // Asignar clase CSS al elemento
                  elto.className = "item";
                  // Rellenar el contenido HTML del elemento
                  elto.innerHTML = `
                    <strong>${u.name}</strong><br>
                    <span class="muted">${u.email}</span><br>
                    <small>${u.address.city}</small>
                  `;
                  // Añadir el elemento a la lista
                  listaUsuarios.appendChild(elto);
        });

      } catch (err) {
            // Cualquier error de red o de código llega aquí
            estadoApi.innerHTML = `<span class="err">❌ Error: ${err.message}</span>`;
      }
});

// Botón "Limpiar lista": vacía la lista y el JSON crudo
$("#btnLimpiar").addEventListener("click", () => {
      listaUsuarios.innerHTML = "";
      jsonCrudo.textContent = "{}";
      estadoApi.textContent = "Lista vacía.";
});



// 2) Formulario → JSON + POST simulado
const form = $("#formUsuario"); // el formulario
const jsonForm = $("#jsonForm"); // pre donde mostramos el JSON
const estadoForm = $("#estadoForm"); // párrafo de estado del form

// Botón que rellena el formulario con valores de ejemplo
$("#btnRellenar").addEventListener("click", () => {
      $("#nombre").value = "Ada Lovelace";
      $("#email").value = "ada@example.com";
      $("#rol").value = "admin";
});

// Al enviar el formulario…
form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Evita recarga/navegación por defecto del form cuando hacemos submit

      // Tomamos los campos del form y los convertimos a diccionario (fd)
      const fd = new FormData(form); // FormData con los datos del form
      // Convertimos el diccionario en objeto JavaScript { nombre: "...", email: "...", rol: "..." }
      const obj = Object.fromEntries(fd.entries());

      // Mostramos el JSON generado a partir del form
      // generamos una cadena JSON con sangría de 2 espacios a partir del objeto JavaScript
      jsonForm.textContent = JSON.stringify(obj, null, 2);
      // Indicamos que estamos enviando
      estadoForm.textContent = "Enviando… (POST de ejemplo a jsonplaceholder)";


      // Realizamos un POST enviando el objeto como JSON
      try {
            // Enviamos el objeto como JSON al endpoint de la API REST de ejemplo
            // Usamos await para esperar la respuesta
              const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                  method: "POST",// método POST
                  headers: { "Content-Type": "application/json" }, // indicamos que enviamos JSON
                  body: JSON.stringify(obj)// cuerpo de la petición: el objeto JavaScript formateado como JSON
              });

              // Si la respuesta HTTP no es correcta, lanzamos error manualmente
              if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
              
              // Parseamos la respuesta del servidor de la API REST como JSON
              const data = await res.json();

              // Mostramos un mensaje con el id devuelto por la API fake
              //(101 es el id que devuelve jsonplaceholder para nuevos recursos creados)
              estadoForm.innerHTML = `✅ Enviado. Respuesta id=${data.id}`;
      }
      catch (err) {
            // Manejamos errores de red/código
            estadoForm.innerHTML = `<span class="err">❌ Error al enviar: ${err.message}</span>`;
      }
});



// 3) Validar/parsear JSON desde textarea
const ta = $("#ta"); // textarea donde el usuario escribe JSON
const estadoJson = $("#estadoJson"); // párrafo donde mostramos el estado

// Botón "Validar JSON": intenta parsear el texto del textarea
$("#btnValidar").addEventListener("click", () => {
      try {
            // El método parse analiza el texto del textarea como JSON y lanza excepción si es inválido
            const parsed = JSON.parse(ta.value); 
            // Si llegamos aquí, el JSON es válido y podemos mostrar mensaje de éxito
            estadoJson.innerHTML = `<span class="ok">✅ JSON válido</span>`;
      } 
      catch (e) {
            estadoJson.innerHTML = `<span class="err">❌ JSON inválido: ${e.message}</span>`;
      }
});

// Botón "Formatear": pretty-print del JSON si es válido
$("#btnBonito").addEventListener("click", () => {
      try {
            // Parseamos el JSON (lanza excepción si es inválido)
            const parsed = JSON.parse(ta.value);
            // Si es válido, lo re-serializamos con sangría (2 espacios) y lo ponemos de nuevo en el textarea
            ta.value = JSON.stringify(parsed, null, 2);
            estadoJson.textContent = "Formateado con sangría de 2 espacios.";
      } catch (e) {
            estadoJson.innerHTML = `<span class="err">❌ No se pudo formatear: ${e.message}</span>`;
      }
});



// 4) localStorage (guardar / leer / borrar)

const LS_KEY = "app:settings"; // clave en localStorage donde guardamos los datos
const jsonLs = $("#jsonLs"); // pre donde mostramos el JSON guardado

// Guardar: serializa objeto y lo guarda como string en localStorage
$("#btnGuardarLs").addEventListener("click", () => {
          const settings = {
            theme: document.documentElement.getAttribute("data-theme"),//"dark"
            dir: document.documentElement.getAttribute("dir"), //"ltr"
            idioma: document.documentElement.lang, // "es"
            actualizado: new Date().toISOString() // "año-mes-diaThora:min:seg.miliseg"
      };
      localStorage.setItem(LS_KEY, JSON.stringify(settings));
      jsonLs.textContent = JSON.stringify(settings, null, 2);
});

// Leer: recupera la cadena, la parsea a objeto y la muestra
$("#btnLeerLs").addEventListener("click", () => {
      const raw = localStorage.getItem(LS_KEY);
      jsonLs.textContent = raw ? JSON.stringify(JSON.parse(raw), null, 2) : "{}";
});

// Limpiar: Quita los datos del jsonLs sin borrar del localStorage
$("#btnLimpiarLs").addEventListener("click", () => {
      jsonLs.textContent = "{}";
});

// Borrar: elimina la clave del storage
$("#btnBorrarLs").addEventListener("click", () => {
      localStorage.removeItem(LS_KEY);
      jsonLs.textContent = "{}";
});
