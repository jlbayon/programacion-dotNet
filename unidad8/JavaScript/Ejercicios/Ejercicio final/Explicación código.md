# Explicación del código JavaScript — JSON y Fetch

Este documento explica el funcionamiento del código que implementa un ejemplo práctico de **JavaScript + JSON + fetch() + localStorage**.

---

## 🧩 Estructura general
El código se divide en 4 bloques principales:

1. **Fetch + listar datos** — Obtiene información desde una API y la muestra.  
2. **Formulario → JSON + POST** — Convierte un formulario a JSON y lo envía con `fetch()`.  
3. **Validación y formateo de JSON** — Verifica si un texto es JSON válido y lo formatea.  
4. **Uso de localStorage** — Guarda, lee y elimina datos en el almacenamiento local del navegador.

---

## 🔹 Bloque 1: Fetch + listar datos
- Usa `fetch()` para obtener una lista de usuarios desde una API pública.
- Limpia los resultados previos y muestra un estado inicial (“Cargando…”).
- Convierte la respuesta con `res.json()` y muestra el contenido formateado con `JSON.stringify()`.
- Recorre el array de usuarios y los pinta en el DOM (nombre, email y ciudad).
- Si hay error de red o de API, lo muestra en pantalla.

**Puntos clave:**
- `async/await` y `try/catch` para código asíncrono.
- `res.ok` para verificar si la respuesta HTTP fue exitosa.
- Manipulación del DOM con `document.createElement()` y `.appendChild()`.

---

## 🔹 Bloque 2: Formulario → JSON + POST
- Captura el evento `submit` de un formulario y usa `e.preventDefault()` para evitar que la página se recargue.
- Crea un objeto con los datos del formulario:  
  `Object.fromEntries(new FormData(form).entries())`
- Convierte el objeto a JSON y lo muestra.
- Envía el JSON a una API de prueba mediante `fetch()` con método `POST`.
- Muestra la respuesta recibida.

**Puntos clave:**
- `FormData` para capturar datos del formulario.
- `fetch()` con opciones `{ method, headers, body }`.
- Serialización con `JSON.stringify()`.

---

## 🔹 Bloque 3: Validar/parsear JSON desde textarea
- El botón “Validar JSON” usa `JSON.parse()` para verificar si el texto del `<textarea>` es JSON válido.
- El botón “Formatear” convierte el texto en JSON bonito (pretty print) con `JSON.stringify(obj, null, 2)`.

**Puntos clave:**
- `try...catch` para capturar errores de parseo.
- Formateo legible para mostrar datos correctamente indentados.

---

## 🔹 Bloque 4: localStorage
- Usa el almacenamiento local del navegador para guardar configuraciones.
- “Guardar” → convierte un objeto a string JSON y lo almacena.  
- “Leer” → recupera y convierte de nuevo con `JSON.parse()`.  
- “Limpiar” → quita los datos del control que los muestra. 
- “Borrar” → elimina la clave.

**Puntos clave:**
- `localStorage.setItem()`, `.getItem()` y `.removeItem()`.
- Serialización / deserialización JSON.

---

## 🧭 Buenas prácticas aplicadas
- Verificar `res.ok` en `fetch()` para detectar errores HTTP.
- Mostrar mensajes de estado al usuario (Cargando, Error, OK).
- Separar responsabilidades: un bloque por funcionalidad.
- Uso correcto de `preventDefault()` en formularios.
- Reutilización del helper `$()` para seleccionar elementos del DOM.

---

## 🧰 Conclusión
Este código ejemplifica cómo integrar **JavaScript moderno** con:
- Peticiones HTTP asíncronas (`fetch`).
- Formatos de intercambio (`JSON`).
- Interacción con el DOM.
- Persistencia de datos (`localStorage`).

Es ideal como base para mini proyectos o ejercicios de introducción a APIs y persistencia en el navegador.
