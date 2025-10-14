
## 📘 Ejercicio 1: `libros.xml` – Lista de libros

**Objetivo:**  
Aprender a estructurar información básica con elementos XML.

**Estructura base:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
    <libro>
        <titulo>Cien años de soledad</titulo>
        <autor>Gabriel García Márquez</autor>
        <anio>1967</anio>
        <precio>15.50</precio>
    </libro>
    <libro>
        <titulo>El Principito</titulo>
        <autor>Antoine de Saint-Exupéry</autor>
        <anio>1943</anio>
        <precio>10.00</precio>
    </libro>
    <libro>
        <titulo>Don Quijote de la Mancha</titulo>
        <autor>Miguel de Cervantes</autor>
        <anio>1605</anio>
        <precio>20.00</precio>
    </libro>
</biblioteca>
```

### ✏️ Actividades extra:
1. **Agregar:** Añade un nuevo libro con estos datos:  
   - Título: *Rayuela*  
   - Autor: *Julio Cortázar*  
   - Año: *1963*  
   - Precio: *18.00*

2. **Modificar:** Cambia el precio del libro *El Principito* a `12.00`.

3. **Eliminar:** Borra completamente el nodo del libro *Don Quijote de la Mancha*.

4. **Atributo:** Añade a cada `<libro>` un atributo `id` con valores únicos (`L001`, `L002`, `L003`, …).

---

## 👩‍💼 Ejercicio 2: `empleados.xml` – Empleados con atributos

**Objetivo:**  
Practicar el uso de atributos y elementos anidados en XML.

**Estructura base:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<empresa>
    <empleado id="E001">
        <nombre>Juan Pérez</nombre>
        <departamento>Ventas</departamento>
        <salario>2500</salario>
    </empleado>
    <empleado id="E002">
        <nombre>Ana López</nombre>
        <departamento>Marketing</departamento>
        <salario>2700</salario>
    </empleado>
</empresa>
```

### ✏️ Actividades extra:
1. **Agregar:** Añade un nuevo empleado con:
   - `id="E003"`
   - `nombre`: *Pedro Ramírez*
   - `departamento`: *Recursos Humanos*
   - `salario`: *2600*

2. **Modificar:** Aumenta el salario de *Ana López* a `3000`.

3. **Atributo:** Agrega a cada `<empleado>` el atributo `estado="activo"`.

4. **Anidar:** Dentro de cada `<empleado>`, agrega un nodo `<contacto>` con:
   - `<email>`  
   - `<telefono>`

---

## 🎓 Ejercicio 3: `universidad.xml` – Facultades y alumnos

**Objetivo:**  
Representar estructuras jerárquicas con datos anidados.

**Estructura base:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<universidad>
    <facultad nombre="Ingeniería">
        <alumno>
            <nombre>Laura Gómez</nombre>
            <matricula>2023001</matricula>
            <carrera>Ingeniería de Sistemas</carrera>
        </alumno>
        <alumno>
            <nombre>Carlos Ruiz</nombre>
            <matricula>2023002</matricula>
            <carrera>Ingeniería Civil</carrera>
        </alumno>
    </facultad>
    <facultad nombre="Ciencias Sociales">
        <alumno>
            <nombre>María Torres</nombre>
            <matricula>2024001</matricula>
            <carrera>Psicología</carrera>
        </alumno>
    </facultad>
</universidad>
```

### ✏️ Actividades extra:
1. **Agregar:** Crea una nueva facultad llamada *Artes* con un alumno:
   - nombre: *Sofía Mendoza*  
   - matrícula: *2025001*  
   - carrera: *Diseño Gráfico*

2. **Atributo:** Añade a cada `<alumno>` un atributo `promedio` (por ejemplo `promedio="8.7"`).

3. **Modificar:** Cambia el nombre de la facultad *Ciencias Sociales* a *Ciencias Humanas*.

4. **Eliminar:** Borra el alumno *Carlos Ruiz*.

5. **Anidar:** Dentro de cada `<alumno>`, añade un nodo `<materias>` con dos materias:
   ```xml
   <materias>
       <materia>Matemáticas</materia>
       <materia>Programación</materia>
   </materias>
   ```

---

## 💡 Consejos finales

- ✅ Valida el XML con un editor o validador online para detectar errores de sintaxis.  
- 🧱 Mantén sangrías consistentes para mejorar la legibilidad.  
- ⚙️ Usa atributos para metadatos breves (como `id` o `estado`) y elementos para información estructurada (como `nombre`, `precio`, etc.).  
