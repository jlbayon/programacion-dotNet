
# **10. ACCESO A BASE DE DATOS EN ASP.NET**

ASP.NET permite desarrollar aplicaciones web que interactúan con bases de datos mediante tecnologías de .NET como **ADO.NET**, **Entity Framework**, y otras bibliotecas orientadas al acceso y gestión de datos.

---

## **10.1. Acceso a datos desde una página ASP.NET**

### Conceptos Clave

* El acceso a datos es común en aplicaciones web: registro de usuarios, consulta de información, etc.
* ASP.NET utiliza **ADO.NET** para conectar, recuperar y modificar información en bases de datos SQL Server, MySQL, Oracle, etc.

### Elementos fundamentales de acceso a datos en ADO.NET

| Elemento              | Descripción                                               |
| --------------------- | --------------------------------------------------------- |
| `SqlConnection`       | Establece la conexión con la base de datos.               |
| `SqlCommand`          | Permite ejecutar comandos SQL (`SELECT`, `INSERT`, etc.). |
| `SqlDataReader`       | Lectura de datos en modo conectado (streaming).           |
| `SqlDataAdapter`      | Gestión de datos en modo desconectado.                    |
| `DataSet / DataTable` | Estructuras en memoria para almacenar datos.              |

### Ejemplo básico (modo conectado con `SqlDataReader`)

```csharp
using (SqlConnection conn = new SqlConnection("cadena_conexion"))
{
    conn.Open();
    SqlCommand cmd = new SqlCommand("SELECT * FROM Clientes", conn);
    SqlDataReader reader = cmd.ExecuteReader();

    while (reader.Read())
    {
        Response.Write(reader["Nombre"].ToString());
    }
}
```

---

## **10.2. Acceso a datos en modo desconectado**

ADO.NET permite desconectar la aplicación del servidor después de obtener los datos, optimizando recursos en aplicaciones web.

### Componentes principales del modo desconectado:

| Componente            | Función                                                       |
| --------------------- | ------------------------------------------------------------- |
| `SqlDataAdapter`      | Actúa como puente entre la BD y el `DataSet`.                 |
| `DataSet / DataTable` | Contiene datos en memoria, permite manipularlos sin conexión. |

### Flujo de trabajo

1. El `SqlDataAdapter` ejecuta una consulta.
2. Llena un `DataSet` o `DataTable`.
3. Se desconecta la base de datos.
4. Los cambios se vuelven a sincronizar mediante `Update()`.

### Ejemplo

```csharp
SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Productos", conn);
DataTable tabla = new DataTable();
da.Fill(tabla);

GridView1.DataSource = tabla;
GridView1.DataBind();
```

---

## **10.3. Práctica propuesta (modo conectado/desconectado)**

**Objetivo:** Crear una página ASP.NET que liste clientes desde una base de datos SQL Server utilizando `SqlDataAdapter` y los muestre en un control `GridView`.

Pasos:

1. Crear una base de datos con una tabla `Clientes`.
2. Configurar la cadena de conexión en `web.config`.
3. Conectar la página ASP.NET y mostrar datos en un `GridView`.

---

## **10.4. Vinculación de controles Web a datos (Data Binding)**

### Controles más utilizados:

| Control Web    | Uso                                                       |
| -------------- | --------------------------------------------------------- |
| `GridView`     | Mostrar datos en forma de tabla.                          |
| `DetailsView`  | Visualización y edición de un registro.                   |
| `Repeater`     | Plantillas personalizadas (no tiene formato por defecto). |
| `DropDownList` | Carga de valores desde una BD para selección.             |

### Ejemplo de vinculación de datos usando `GridView`:

```csharp
GridView1.DataSource = DataTableObtenido;
GridView1.DataBind();
```

---

## **10.5. Práctica propuesta (data binding)**

**Objetivo:** Cargar una lista de productos en un `DropDownList`, y al seleccionar uno, mostrar sus detalles en un `DetailsView`.

---

## **10.6. Bases de datos en la Web**

Conceptos clave:

* Las aplicaciones web modernas dependen de bases de datos para almacenar información.
* Tecnologías comunes:

  * SQL Server (usado con ASP.NET en Windows)
  * MySQL / MariaDB
  * PostgreSQL
  * MongoDB (no relacional)

Elementos esenciales:

* Autenticación y permisos del usuario de BD.
* Seguridad: parametrización de consultas para evitar **SQL Injection**.
* Uso de procedimientos almacenados para encapsular la lógica de acceso.

---

## **10.7. Introducción al comercio electrónico en la Web**

### Objetivo

Comprender cómo ASP.NET puede formar parte de una solución de comercio electrónico.

### Elementos esenciales de una aplicación e-commerce

| Componente            | Función                                                     |
| --------------------- | ----------------------------------------------------------- |
| Catálogo de productos | Consultas a BD, filtrado, paginación.                       |
| Carrito de compras    | Gestión de productos seleccionados (Session, Cookies o BD). |
| Sistema de pagos      | Integración con pasarelas de pago (PayPal, Stripe).         |
| Gestión de usuarios   | Registro, autenticación, perfiles.                          |

### Tecnologías ASP.NET orientadas a e-commerce:

* ASP.NET Web Forms / MVC / Razor Pages
* Entity Framework (ORM para BD)
* ASP.NET Identity (gestión de usuarios)

