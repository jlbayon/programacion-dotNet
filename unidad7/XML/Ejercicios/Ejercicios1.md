# 🧾 HOJA DE EJERCICIOS — XML + DTD

Colección de ejercicios por nivel para practicar XML y DTD: operadores de frecuencia, atributos, entidades, ID/IDREF, secuencias y alternativas.

---



### 🧩 Ejercicio 1: Datos personales
**Objetivo:** Crear un XML sencillo y su DTD para representar información de personas.

**Instrucciones**
1. Crea un archivo `personas.xml` con una raíz `<agenda>`.
2. Cada persona tendrá: `<nombre>`, `<apellido>`, `<edad>`, `<telefono>` (opcional).

**DTD sugerido (`personas.dtd`)**
```xml
<!ELEMENT agenda (persona+)>
<!ELEMENT persona (nombre, apellido, edad, telefono?)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT apellido (#PCDATA)>
<!ELEMENT edad (#PCDATA)>
<!ELEMENT telefono (#PCDATA)>
```

---

### 🧩 Ejercicio 2: Catálogo de productos
**Objetivo:** Usar operadores de frecuencia `+`, `*`, `?`.

**DTD sugerido (`catalogo.dtd`)**
```xml
<!ELEMENT catalogo (producto+)>
<!ELEMENT producto (nombre, precio, descripcion?, comentario*)>
<!ELEMENT nombre (#PCDATA)>
<!ELEMENT precio (#PCDATA)>
<!ELEMENT descripcion (#PCDATA)>
<!ELEMENT comentario (#PCDATA)>
```

**Tareas:** Crea `catalogo.xml` con ≥3 productos. Valida y prueba eliminar/duplicar nodos para ver errores.

---



### 🧩 Ejercicio 3: Biblioteca con atributos y entidades
**Objetivo:** Practicar atributos, entidades personalizadas y validación estructural.

**DTD (`biblioteca.dtd`)**
```xml
<!ELEMENT biblioteca (libro+)>
<!ELEMENT libro (titulo, autor+, anio, editorial?)>
<!ATTLIST libro id ID #REQUIRED>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
<!ELEMENT anio (#PCDATA)>
<!ELEMENT editorial (#PCDATA)>
<!ENTITY editorialDef "Editorial Planeta">
```

**Tareas:** Crea un documento XML que contenga datos de dos libros.
Añade un segundo libro con dos autores y prueba duplicar `id` para observar la validación.

---

### 🧩 Ejercicio 4: Universidad (ID y IDREF)
**Objetivo:** Usar referencias internas (`ID`/`IDREF`).

**DTD (`universidad.dtd`)**
```xml
<!ELEMENT universidad (alumno+, curso+, matricula+)>
<!ELEMENT alumno (nombre, carrera)>
<!ATTLIST alumno id ID #REQUIRED>
<!ELEMENT curso (nombre, creditos)>
<!ATTLIST curso id ID #REQUIRED>
<!ELEMENT matricula (alumnoRef, cursoRef)>
<!ELEMENT alumnoRef EMPTY>
<!ATTLIST alumnoRef ref IDREF #REQUIRED>
<!ELEMENT cursoRef EMPTY>
<!ATTLIST cursoRef ref IDREF #REQUIRED>
```

**Tareas:** Crea un documento XML con tres alumnos que sea válido con respecto a este DTD.
Agrega más alumnos/cursos y provoca un `ref` roto para ver el error del validador.

---


### 🧩 Ejercicio 5: Pedidos con secuencias y alternativas
**Objetivo:** Combinación de orden obligatorio y opciones excluyentes.

**DTD (`pedido.dtd`)**
```xml
<!ELEMENT pedido (cliente, (producto+ | servicio+), descuento?, comentario*)>
<!ELEMENT cliente (#PCDATA)>
<!ELEMENT producto (#PCDATA)>
<!ELEMENT servicio (#PCDATA)>
<!ELEMENT descuento (#PCDATA)>
<!ELEMENT comentario (#PCDATA)>
```

**Pruebas:** Un XML con solo `producto+` o solo `servicio+` es válido; mezclar ambos es inválido.Compruébalo.

---

### 🧩 Ejercicio 6: Biblioteca extendida con DTD reutilizable
**Objetivo:** Reusar un DTD externo en múltiples XML.

**DTD (`biblioteca_simple.dtd`)**
```xml
<!ELEMENT biblioteca (libro+)>
<!ELEMENT libro (titulo, autor+, editorial?)>
<!ELEMENT titulo (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
<!ELEMENT editorial (#PCDATA)>
```

**Tareas:** Crea `biblioteca1.xml` y `biblioteca2.xml` que referencien el mismo DTD. Cambia el DTD y revalida.

---
