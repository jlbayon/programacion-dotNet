# 🧩 Ejercicios de JavaScript

## 1️⃣ Mostrar un mensaje en pantalla
**Objetivo:**  
Usar la función `alert()` para mostrar un mensaje en pantalla.

**Instrucción:**  
Crea un script que muestre una alerta con el texto:
> ¡Hola, mundo!

---

## 2️⃣ Sumar dos números
**Objetivo:**  
Practicar el uso de `prompt()` y operadores aritméticos.

**Instrucción:**  
Pide al usuario dos números y muestra su suma usando `alert()`.

**Ejemplo:**
```
Introduce el primer número: 5  
Introduce el segundo número: 7  
Resultado → La suma es: 12
```

---

## 3️⃣ Calcular el cuadrado de un número
**Objetivo:**  
Usar variables y operaciones matemáticas básicas.

**Instrucción:**  
Solicita un número al usuario y muestra su cuadrado.

**Ejemplo:**
```
Introduce un número: 4  
Resultado → El cuadrado de 4 es 16
```

---

## 4️⃣ Mostrar un mensaje al hacer clic
**Objetivo:**  
Aprender a manejar eventos del DOM.

**Instrucción:**  
Crea un botón en HTML.  
Cuando el usuario haga clic, muestra un mensaje con `alert()`.

**Ejemplo HTML:**
```html
<button id="btn">Haz clic aquí</button>
```

**Ejemplo JS:**
```js
const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  alert("¡Has hecho clic en el botón!");
});
```

---

## 5️⃣ Mostrar números del 1 al 10
**Objetivo:**  
Usar un bucle `for` para recorrer números.

**Instrucción:**  
Muestra los números del 1 al 10 en la consola (`console.log()`).

**Ejemplo:**
```
1
2
3
4
5
6
7
8
9
10
```

---

✳️ **Consejo:**  
Puedes combinar estos ejercicios en un solo archivo HTML y ejecutarlos con botones para practicar la interacción entre HTML y JavaScript.
