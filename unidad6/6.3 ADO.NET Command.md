# 🧠 ADO.NET: Clases Command en C#

## 📘 1. ¿Qué es un `Command` en ADO.NET?
En ADO.NET, las clases **Command** se usan para **ejecutar instrucciones SQL** o **procedimientos almacenados** contra una base de datos.

Un objeto `Command` representa una orden que se envía a una base de datos mediante una conexión (`Connection`).

---

## 🧩 2. Clases principales derivadas de `DbCommand`
ADO.NET define una clase base abstracta llamada `DbCommand`, de la que derivan las clases específicas para cada proveedor de datos:

| Clase | Espacio de nombres | Base de datos |
|--------|--------------------|---------------|
| `SqlCommand` | `System.Data.SqlClient` | SQL Server |
| `OleDbCommand` | `System.Data.OleDb` | Access, Excel, etc. |
| `OdbcCommand` | `System.Data.Odbc` | Fuentes ODBC |
| `OracleCommand` | `Oracle.ManagedDataAccess.Client` | Oracle |

---

## ⚙️ 3. Propiedades importantes de `Command`

| Propiedad | Tipo | Descripción |
|------------|------|--------------|
| `CommandText` | `string` | Contiene la consulta SQL o el nombre del procedimiento almacenado. |
| `CommandType` | `CommandType` | Define el tipo de comando: `Text`, `StoredProcedure` o `TableDirect`. |
| `Connection` | `DbConnection` | La conexión usada para ejecutar el comando. |
| `Parameters` | `DbParameterCollection` | Colección de parámetros que se pasan al comando. |
| `Transaction` | `DbTransaction` | Transacción en la que participa el comando. |
| `CommandTimeout` | `int` | Tiempo máximo (en segundos) que se espera antes de cancelar la ejecución. |

---

## 🚀 4. Métodos principales

| Método | Descripción |
|---------|--------------|
| `ExecuteNonQuery()` | Ejecuta comandos que **no devuelven resultados** (INSERT, UPDATE, DELETE). Retorna el número de filas afectadas. |
| `ExecuteScalar()` | Ejecuta un comando y **devuelve el primer valor de la primera fila** del resultado. Ideal para COUNT(), MAX(), etc. |
| `ExecuteReader()` | Devuelve un **DataReader** (`SqlDataReader`) para leer filas de manera secuencial y eficiente. |
| `ExecuteXmlReader()` | (Solo `SqlCommand`) Devuelve los resultados en formato XML. |

---
.
.
.
## 💻 5. Ejemplo práctico con `SqlCommand`

```csharp
using System;
using System.Data;
using System.Data.OleDb;

class EjemploCommand
{
    static void Main()
    {
        string connectionString = "Data Source=SERVIDOR;Initial Catalog=MiBase;Integrated Security=True";
        using (SqlConnection conexion = new SqlConnection(connectionString))
        {
            conexion.Open();

            // Crear el comando
            SqlCommand comando = new SqlCommand();
            comando.Connection = conexion;
            comando.CommandText = "SELECT COUNT(*) FROM Empleados";
            comando.CommandType = CommandType.Text;

            // Ejecutar y obtener resultado
            int total = (int)comando.ExecuteScalar();
            Console.WriteLine($"Número de empleados: {total}");
        }
    }
}
```

---

## 🔄 6. Uso con parámetros (`SqlParameter`)

Evita la inyección SQL usando parámetros.

```csharp
SqlCommand cmd = new SqlCommand(
    "SELECT * FROM Empleados WHERE IdEmpleado = @id", conexion);
cmd.Parameters.AddWithValue("@id", 5);

using (SqlDataReader lector = cmd.ExecuteReader())
{
    while (lector.Read())
    {
        Console.WriteLine(lector["Nombre"]);
    }
}
```

**Nota:** Usa `Add` o `AddWithValue`, pero `Add` te da más control sobre tipo y tamaño.

---

## 🧮 7. Ejemplo de `ExecuteNonQuery`

```csharp
SqlCommand cmd = new SqlCommand(
    "UPDATE Empleados SET Salario = Salario + 500 WHERE IdDepartamento = @dep", conexion);
cmd.Parameters.AddWithValue("@dep", 2);

int filasAfectadas = cmd.ExecuteNonQuery();
Console.WriteLine($"{filasAfectadas} empleados actualizados.");
```

---

## 🧰 8. Ejemplo de `Stored Procedure`

Supón que tienes un procedimiento almacenado:

```sql
CREATE PROCEDURE ObtenerEmpleado
    @IdEmpleado INT
AS
BEGIN
    SELECT * FROM Empleados WHERE IdEmpleado = @IdEmpleado
END
```

Uso en C#:

```csharp
SqlCommand cmd = new SqlCommand("ObtenerEmpleado", conexion);
cmd.CommandType = CommandType.StoredProcedure;
cmd.Parameters.AddWithValue("@IdEmpleado", 3);

using (SqlDataReader dr = cmd.ExecuteReader())
{
    if (dr.Read())
        Console.WriteLine($"{dr["Nombre"]} - {dr["Cargo"]}");
}
```

---

## 🧩 9. CommandType explicado

| Tipo | Descripción |
|------|--------------|
| `CommandType.Text` | Es el valor por defecto. Se ejecuta texto SQL directo. |
| `CommandType.StoredProcedure` | Se ejecuta un procedimiento almacenado. |
| `CommandType.TableDirect` | Recupera todas las filas de una tabla (poco usado, solo con `OleDbCommand`). |

---

## 🔐 10. Uso con transacciones

```csharp
SqlTransaction trans = conexion.BeginTransaction();
SqlCommand cmd = conexion.CreateCommand();
cmd.Transaction = trans;

try
{
    cmd.CommandText = "INSERT INTO Empleados (Nombre) VALUES ('Carlos')";
    cmd.ExecuteNonQuery();

    trans.Commit();
}
catch
{
    trans.Rollback();
}
```

---

## 🧾 11. Buenas prácticas

✅ Usa siempre **`using`** para cerrar conexiones y liberar recursos.  
✅ Usa **parámetros** para evitar inyección SQL.  
✅ Maneja errores con `try-catch`.  
✅ No mantengas conexiones abiertas más tiempo del necesario.  
✅ Usa `CommandTimeout` si las consultas pueden ser lentas.  
