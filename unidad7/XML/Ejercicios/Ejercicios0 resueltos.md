# Enunciados de Ejercicios Básicos de XML

## 🧩 Ejercicio 1 – Lista de Libros (`libros.xml`)

**Objetivo:**  
Aprender a crear una estructura XML simple con elementos anidados que representen una colección de datos.

**Instrucciones:**  
Crea un archivo llamado **`libros.xml`** que contenga una lista de libros.  
Cada libro debe tener los siguientes elementos:

- `<titulo>`  
- `<autor>`  
- `<anio>`  
- `<precio>`

El documento debe tener una raíz llamada `<biblioteca>` y al menos tres libros dentro.  
Incluye la declaración XML al inicio del archivo.

**Ejemplo de salida esperada:**
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

---

## 🧩 Ejercicio 2 – Empleados con atributos (`empleados.xml`)

**Objetivo:**  
Practicar el uso de **atributos** y **elementos anidados** en XML.

**Instrucciones:**  
Crea un archivo llamado **`empleados.xml`** que contenga información de empleados dentro de una empresa.  
El documento debe tener una raíz `<empresa>` y varios nodos `<empleado>` con un **atributo `id`**.

Cada empleado debe contener los siguientes elementos:

- `<nombre>`  
- `<departamento>`  
- `<salario>`

**Ejemplo de salida esperada:**
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

---

## 🧩 Ejercicio 3 – Universidad con jerarquía (`universidad.xml`)

**Objetivo:**  
Comprender cómo representar **estructuras jerárquicas** y datos anidados en XML.

**Instrucciones:**  
Crea un archivo llamado **`universidad.xml`** que contenga varias **facultades**, y dentro de cada una, una lista de **alumnos**.

Cada facultad debe tener un atributo `nombre`, y cada alumno debe incluir:

- `<nombre>`  
- `<matricula>`  
- `<carrera>`

**Ejemplo de salida esperada:**
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
