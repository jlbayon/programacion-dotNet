
# 📘 Acceso a bases de datos con ADO.NET

## 1. ¿Qué es ADO.NET?
- Es un conjunto de clases de .NET Framework para acceder a datos.
- Permite trabajar con bases de datos relacionales (SQL Server, Oracle, MySQL, etc.) y también con fuentes no relacionales (XML, servicios).
- Dos modos principales de trabajo:
  1. **Conectado** → se mantiene abierta la conexión mientras se usan los datos.  
  2. **Desconectado** → los datos se cargan en memoria (DataSet, DataTable) y luego la conexión se cierra.

---

## 2. Proveedores de datos en ADO.NET
Los proveedores son librerías específicas para conectarse a distintos orígenes de datos. Cada proveedor incluye:
- **Connection** (abrir y cerrar la conexión).  
- **Command** (ejecutar consultas SQL o procedimientos almacenados).  
- **DataReader** (leer datos en modo conectado, solo hacia adelante).  
- **DataAdapter** (cargar datos en DataSet/DataTable en modo desconectado).  

Principales proveedores:
- `System.Data.SqlClient` → para SQL Server.  
- `System.Data.OleDb` → para Access y otras bases.  
- `System.Data.Odbc` → acceso vía ODBC.  
- `Oracle.DataAccess.Client` → Oracle.  

---

## 3. Conexión y desconexión

### Ejemplo con SQL Server
```csharp
using System.Data.SqlClient;

string cadena = "Server=MI_SERVIDOR;Database=MiBase;User Id=usuario;Password=clave;";

using (SqlConnection conexion = new SqlConnection(cadena))
{
    conexion.Open();
    Console.WriteLine("Conexión abierta.");

    SqlCommand comando = new SqlCommand("SELECT * FROM Clientes", conexion);
    SqlDataReader lector = comando.ExecuteReader();

    while (lector.Read())
    {
        Console.WriteLine($"{lector["Id"]} - {lector["Nombre"]}");
    }

    lector.Close();
    // conexión se cierra automáticamente por el using
}
```

---

## 4. Modo desconectado: DataAdapter y DataSet
El **DataAdapter** permite llenar objetos en memoria (DataSet o DataTable) y desconectarse de la BD.

```csharp
using System.Data;
using System.Data.SqlClient;

string cadena = "Server=MI_SERVIDOR;Database=MiBase;Integrated Security=True;";
SqlConnection conexion = new SqlConnection(cadena);

SqlDataAdapter adaptador = new SqlDataAdapter("SELECT * FROM Clientes", conexion);
DataTable tabla = new DataTable();

adaptador.Fill(tabla);

foreach (DataRow fila in tabla.Rows)
{
    Console.WriteLine($"{fila["Id"]} - {fila["Nombre"]}");
}
```

✅ Ventaja: no se necesita mantener la conexión abierta.  
✅ Permite modificaciones en memoria (agregar, editar, borrar) y luego sincronizar con la BD usando `DataAdapter.Update()`.

---

## 5. Controles vinculados a datos
En aplicaciones **Windows Forms o WPF** es común usar controles que se conectan a DataTables o DataSets.

Ejemplo en WinForms:
```csharp
// Suponiendo que tenemos un DataGridView llamado dataGridView1
dataGridView1.DataSource = tabla; // tabla es un DataTable con los datos
```

- `BindingSource` se usa como intermediario para enlazar datos a varios controles.  
- Se pueden enlazar TextBox, ComboBox, DataGridView, etc.  

---

## 6. Buenas prácticas
- Usar `using` para cerrar automáticamente conexiones.   
- Evitar mantener conexiones abiertas más tiempo del necesario.  
- Usar DataReader para lectura rápida y DataAdapter/DataSet para escenarios desconectados.  


## 7. Resumen visual
- **ADO.NET** → Framework para acceder a datos.  
- **Proveedores** → SQL Server, Oracle, OLEDB, ODBC.  
- **Conectado** → `SqlConnection`, `SqlCommand`, `SqlDataReader`.  
- **Desconectado** → `DataAdapter`, `DataSet`, `DataTable`.  
- **Controles vinculados** → DataGridView, BindingSource.  
