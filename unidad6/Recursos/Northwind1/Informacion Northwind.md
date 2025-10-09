# 🗂️ Base de Datos Northwind

## 🧩 ¿Qué es Northwind?

**Northwind Traders** es una empresa ficticia que **importa y exporta productos alimenticios** a nivel mundial.  
La base de datos **Northwind** fue creada por **Microsoft** como **base de datos de ejemplo** para enseñar el uso de sistemas relacionales, como **Access**, **SQL Server**, **Entity Framework** y **ADO.NET**.

Se utiliza ampliamente para **aprender SQL**, probar consultas, y desarrollar aplicaciones de ejemplo.

---

## 🗂️ Estructura general de Northwind

| Tabla | Descripción |
|--------|--------------|
| **Customers** | Clientes (nombre, dirección, país, teléfono, etc.) |
| **Suppliers** | Proveedores que venden los productos. |
| **Employees** | Empleados de la empresa. |
| **Orders** | Pedidos hechos por los clientes. |
| **Order Details** | Detalle de cada pedido (qué productos, cantidades, precios). |
| **Products** | Productos que se venden. |
| **Categories** | Categorías de productos (bebidas, lácteos, etc.). |
| **Shippers** | Empresas de envío. |
| **Territories / Regions** | Información geográfica para ventas. |

---

## 🔗 Relaciones entre tablas (simplificadas)

- **Customers** 🔗 **Orders** — un cliente puede tener muchos pedidos.  
- **Orders** 🔗 **Order Details** — un pedido tiene varios productos.  
- **Products** 🔗 **Suppliers** — cada producto tiene un proveedor.  
- **Products** 🔗 **Categories** — cada producto pertenece a una categoría.  
- **Employees** 🔗 **Orders** — cada pedido es gestionado por un empleado.

---



## 📦 Ejemplo de uso con C# y ADO.NET

```csharp
using System;
using System.Data;
using System.Data.OleDb;

class EjemploNorthwind
{
    static void Main()
    {
        string rutaBD = @"C:\Datos\Northwind.accdb";
        string conexionStr = $"Provider=Microsoft.ACE.OLEDB.12.0;Data Source={rutaBD};";

        using (OleDbConnection conexion = new OleDbConnection(conexionStr))
        {
            conexion.Open();
            string sql = "SELECT CompanyName, Country FROM Customers WHERE Country = 'Mexico'";

            using (OleDbCommand cmd = new OleDbCommand(sql, conexion))
            using (OleDbDataReader dr = cmd.ExecuteReader())
            {
                while (dr.Read())
                {
                    Console.WriteLine($"{dr["CompanyName"]} - {dr["Country"]}");
                }
            }
        }
    }
}
```

---

## 📍 En resumen

| Característica | Descripción |
|-----------------|--------------|
| **Nombre** | Northwind |
| **Origen** | Base de datos de ejemplo creada por Microsoft |
| **Tipo de empresa** | Mayorista de alimentos |
| **Objetivo** | Enseñar conceptos de bases de datos y desarrollo |
| **Disponible en** | Access, SQL Server, SQLite, MySQL, etc. |

---
