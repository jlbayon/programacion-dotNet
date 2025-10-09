# ⚙️ Uso de try-catch para conexión con base de datos


---

## 🧠 Ejemplo

```csharp
using System;
using System.Data.OleDb;

class Program
{
    static void Main()
    {
        // Ruta del archivo Access
        string rutaBD = @"C:\Datos\Northwind.accdb";

        // Cadena de conexión (para Access 2007+)
        string conexionStr = $"Provider=Microsoft.ACE.OLEDB.12.0;Data Source={rutaBD};";

        // Crear el objeto conexión
        using (OleDbConnection conexion = new OleDbConnection(conexionStr))
        {
            try
            {
                // Intentar abrir la conexión
                conexion.Open();
                Console.WriteLine("✅ Conexión establecida correctamente.");
            }
            catch (OleDbException ex)
            {
                // Errores relacionados con la base de datos (por ejemplo, proveedor no encontrado)
                Console.WriteLine("❌ Error de base de datos: " + ex.Message);
            }
            catch (InvalidOperationException ex)
            {
                // Si la conexión ya está abierta o cerrada incorrectamente
                Console.WriteLine("⚠️ Error de operación: " + ex.Message);
            }
            catch (Exception ex)
            {
                // Cualquier otro error inesperado
                Console.WriteLine("🚨 Error general: " + ex.Message);
            }
        }
    }
}
```

---

## 🧰 Explicación del código

| Parte | Descripción |
|-------|--------------|
| `try` | Intenta ejecutar el código dentro (abrir la conexión). |
| `catch (OleDbException ex)` | Captura errores específicos del proveedor `OleDb` (como problemas con la base de datos Access). |
| `catch (InvalidOperationException ex)` | Captura errores de estado de la conexión (por ejemplo, abrir una conexión ya abierta). |
| `catch (Exception ex)` | Captura cualquier otro error no previsto. |


---

## 🧩 Ejemplo con consulta SQL y `try-catch`

```csharp
try
{
    conexion.Open();
    string sql = "SELECT * FROM Clientes";
    OleDbCommand cmd = new OleDbCommand(sql, conexion);
    OleDbDataReader lector = cmd.ExecuteReader();

    while (lector.Read())
    {
        Console.WriteLine(lector["Nombre"]);
    }

    lector.Close();
}
catch (Exception ex)
{
    Console.WriteLine("❌ Error al ejecutar la consulta: " + ex.Message);
}
finally
{
    //si no hemos usado using, debemos cerrar nosotros la conexión
    conexion.Close();
}
```

---

## 💡 Buenas prácticas

1. ✅ Siempre usar `try-catch` al abrir una conexión o ejecutar un comando SQL para capturar posibles errores, capturarlos y gestionarlos para que el programa no finalice de forma abrupta.  
2. 🔒 Usar `finally` o `using` para cerrar la conexión, incluso si ocurre un error.  
3. 💬 Mostrar mensajes claros (no solo el error, también qué se intentaba hacer).  
4. 🧪 Probar la cadena de conexión antes de usarla en producción.  

---
