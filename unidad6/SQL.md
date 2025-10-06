
# 🧠 APUNTES DE SQL
## ¿Qué es SQL? 
Es el acrónimo de Structured Query Language (Lenguaje de Consulta Estructurada), un lenguaje de programación diseñado para gestionar y manipular datos en bases de datos relacionales, que organizan la información en tablas con filas y columnas.
### 📚 Veremos ejemplos de uso de las sentencias  de SQL sobre la base de datos: `academia`

Tablas principales:
- `alumnos(id_alumno, nombre, apellido, fecha_nacimiento, email)`
- `profesores(id_profesor, nombre, apellido, especialidad)`
- `cursos(id_curso, nombre, horas, id_profesor)`
- `matriculas(id_matricula, id_alumno, id_curso, fecha_matricula)`

---

## 🔹 1. DDL – Data Definition Language  
Este subconjunto de SQL se enfoca en la estructura de la base de datos, no en los datos en sí. 
### 🏗 CREATE TABLE
 Se usa para crear una nueva tabla en una base de datos relacional, definiendo su estructura con nombres de columnas, tipos de datos y restricciones como claves primarias y foráneas para organizar y almacenar información de manera estructurada en filas y columnas. 
```sql
CREATE TABLE aulas (
    id_aula INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    capacidad INT DEFAULT 30
);
```

### 🧩 ALTER TABLE
Se utiliza para modificar la estructura de una tabla existente en una base de datos. 
Con él, se pueden agregar, eliminar o modificar columnas, añadir o quitar restricciones (como claves primarias o foráneas), o incluso cambiar el nombre de la tabla o sus columnas, permitiendo adaptar el esquema de la base de datos sin necesidad de recrearla por completo. 
```sql
ALTER TABLE alumnos ADD telefono VARCHAR(15);
ALTER TABLE cursos MODIFY horas SMALLINT;
ALTER TABLE alumnos DROP COLUMN telefono;
ALTER TABLE cursos ADD CONSTRAINT fk_profesor FOREIGN KEY (id_profesor) REFERENCES profesores(id_profesor);
```

### 🗑 DROP TABLE
Se utiliza para eliminar permanentemente una tabla existente y toda su estructura. 
Es una operación potente e irreversible que debe usarse con precaución, ya que una vez ejecutada, la tabla se elimina de forma definitiva y no se puede acceder a ella. 
```sql
DROP TABLE aulas;
```

### 💾 TRUNCATE TABLE
Elimina todas las filas de una tabla pero conserva la estructura de la tabla, incluyendo sus columnas, índices y restricciones. 
Es una operación más rápida que DELETE porque libera las páginas de datos y no registra cada fila en el log de transacciones, además de que puede reiniciar los valores de las columnas autoincrementables a cero. 
```sql
TRUNCATE TABLE matriculas;
```

---

## 🔹 2. DML – Data Manipulation Language  
Su propósito es manipular la información que se almacena en las tablas de la base de datos. 
### ➕ INSERT
Se utiliza para agregar nuevas filas de datos a una tabla de base de datos. Permite añadir una o varias filas a la vez, especificando los valores para las columnas. 
La sintaxis básica es INSERT INTO nombre_tabla (columna1, columna2, ...) VALUES (valor1, valor2, ...). 
```sql
INSERT INTO alumnos (nombre, apellido, fecha_nacimiento, email)
VALUES ('Lucía', 'Gómez', '2003-08-15', 'lucia.gomez@academia.com');
```

```sql
INSERT INTO cursos (nombre, horas, id_profesor)
VALUES ('Redes', 45, 2), ('Diseño Web', 50, 3);
```

### ✏️ UPDATE
Se utiliza para modificar los datos existentes en una o más filas de una tabla. 
Permite cambiar los valores de una o varias columnas para los registros que cumplan una condición específica definida por la cláusula WHERE, o para todas las filas si no se incluye dicha cláusula. 

```sql
UPDATE cursos SET horas = 55 WHERE nombre = 'Diseño Web';
UPDATE alumnos SET email = 'jorge.perez2025@academia.com', fecha_nacimiento = '2001-09-19' WHERE id_alumno = 2;
```

### ❌ DELETE
Se usa para eliminar registros (filas) de una tabla. 
Su sintaxis básica es:
DELETE FROM nombre_tabla [WHERE condición]; 
Es crucial usar la cláusula WHERE para especificar qué registros se eliminarán o de lo contrario, si se omite WHERE, se borrarán todas las filas de la tabla. 
```sql
DELETE FROM profesores WHERE id_profesor = 5;
DELETE FROM cursos WHERE horas < 30;
```

---
 
### 🔍 SELECT
Es una instrucción que recupera datos de una o más tablas de una base de datos, devolviendo el resultado en forma de tabla. 
Se usa para especificar qué columnas (campos) de esas tablas quieres ver y puede incluir otras cláusulas como FROM (para especificar las tablas) y WHERE (para filtrar los datos según condiciones). 
```sql
SELECT nombre, apellido, email FROM alumnos;
SELECT * FROM cursos;
SELECT nombre AS "Curso", horas AS "Duración (h)" FROM cursos;
```

### 🔸 Filtros y operadores
Los filtros son condiciones establecidas en la cláusula WHERE que determinan qué filas de una tabla se incluirán en el resultado de una consulta SELECT. 
Los operadores son las herramientas (como =, >, AND, OR, IN, BETWEEN, LIKE) que se usan dentro de esa cláusula WHERE para comparar valores y definir esas condiciones de filtrado
```sql
SELECT * FROM alumnos WHERE apellido = 'López';
SELECT * FROM cursos WHERE horas > 40 AND id_profesor = 2;
SELECT * FROM cursos WHERE horas BETWEEN 40 AND 60;
SELECT * FROM alumnos WHERE nombre LIKE 'A%';
SELECT * FROM cursos WHERE id_profesor IN (1, 3, 5);
```

### 🔸 Orden y límites
ORDER BY (ordenar) organiza el conjunto de resultados según las columnas especificadas y LIMIT (límites) restringe el número de filas devueltas. 
La cláusula ORDER BY determina el orden (ascendente o descendente) en que se muestran los datos, mientras que LIMIT se usa para obtener un subconjunto específico de esas filas, lo que es útil para paginación y optimización de consultas. 
```sql
SELECT * FROM alumnos ORDER BY apellido ASC, nombre DESC;
SELECT * FROM cursos LIMIT 3;
```

### 🔸 Funciones agregadas
Son funciones que realizan un cálculo sobre un conjunto de valores de una tabla y devuelven un único valor escalar. 
Se utilizan para resumir y analizar datos, transformando varios registros en una información más significativa. 
Ejemplos comunes incluyen SUM() para la suma, AVG() para el promedio, COUNT() para contar filas, y MIN() y MAX() para encontrar los valores mínimo y máximo, respectivamente. 
```sql
SELECT COUNT(*) AS total_alumnos FROM alumnos;
SELECT AVG(horas) AS promedio_horas FROM cursos;
SELECT SUM(horas) AS suma_horas FROM cursos;
SELECT MAX(horas), MIN(horas) FROM cursos;
```

### 🔸 Agrupamiento
El agrupamiento de datos es el proceso de organizar filas con valores idénticos en un conjunto de filas de resumen utilizando la cláusula GROUP BY. Esto te permite realizar cálculos y obtener información resumida. 
```sql
SELECT id_profesor, COUNT(*) AS cursos_asignados
FROM cursos
GROUP BY id_profesor
HAVING COUNT(*) >= 2;
```

### 🔸 Joins
Un JOIN es una cláusula que permite combinar registros de dos o más tablas basándose en un campo común entre ellas, permitiendo recuperar datos relacionados de diferentes fuentes en una sola consulta. 
Sirve para fusionar información de tablas vinculadas y realizar análisis de datos más completos, siendo fundamental en las bases de datos relacionales. 
Existen varios tipos de JOIN, como INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN y CROSS JOIN, cada uno con un comportamiento específico para combinar las filas. 

Ejemplo: listado de nombres de alumnos junto al nombre de los cursos en los que está matriculado.
```sql
SELECT a.nombre AS Alumno, c.nombre AS Curso
FROM alumnos a
JOIN matriculas m ON a.id_alumno = m.id_alumno
JOIN cursos c ON m.id_curso = c.id_curso;
```
Ejemplo: listado de nombres de profesores junto con los nombres de los cursos que imparte.
```sql
SELECT p.nombre AS Profesor, c.nombre AS Curso
FROM profesores p
LEFT JOIN cursos c ON p.id_profesor = c.id_profesor;
```

### 🔸 Subconsultas
Es una sentencia SELECT anidada dentro de otra sentencia SELECT, INSERT, UPDATE o DELETE, que se escribe entre paréntesis. 
Las subconsultas primero ejecutan su propia consulta para obtener un conjunto de resultados, y ese resultado se utiliza en la consulta principal para filtrar datos, realizar cálculos o crear valores para la consulta externa. 
```sql
SELECT nombre, apellido FROM alumnos
WHERE id_alumno IN (SELECT id_alumno FROM matriculas WHERE id_curso = 1);
```

---
