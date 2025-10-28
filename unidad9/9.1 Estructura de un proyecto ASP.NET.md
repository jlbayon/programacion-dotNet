# Estructura de un proyecto ASP.NET Web Forms

## 🧩 ¿Qué es un proyecto ASP.NET Web Forms?

Un **proyecto ASP.NET Web Forms** es una aplicación web basada en el **modelo de páginas**.  
Cada página `.aspx` representa una parte del sitio (por ejemplo, “Inicio”, “Acerca de”, “Contacto”), y cada una puede tener **su propio código C#** en un archivo separado (*code-behind*).  

---

## 🧱 Estructura general del proyecto

```
MiSitioWeb/
│
├── Default.aspx
├── Default.aspx.cs
├── Site.Master
├── Web.config
│
├── App_Data/
├── App_Code/
├── Bin/
├── Scripts/
└── Content/
```

---

## 🗂️ 1. Archivos `.aspx` → **Interfaz de usuario**

Estos archivos definen la **vista (frontend)**: la estructura HTML de la página y los controles de servidor ASP.NET.

**Ejemplo:**
```aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="MiSitioWeb._Default" %>

<!DOCTYPE html>
<html>
<body>
    <form id="form1" runat="server">
        <h1>Bienvenido a mi sitio</h1>
        <asp:Button ID="btnSaludar" runat="server" Text="Saludar" OnClick="btnSaludar_Click" />
        <asp:Label ID="lblMensaje" runat="server" />
    </form>
</body>
</html>
```

🔹 Contiene etiquetas HTML **y** controles de servidor (`<asp:Button>`, `<asp:Label>`, etc.)  
🔹 El atributo `runat="server"` indica que ese control será procesado en el servidor.  
🔹 Cada `.aspx` tiene asociado un archivo `.aspx.cs`.

---

## 🧠 2. Archivos `.aspx.cs` → **Lógica del servidor (Code-Behind)**

Estos archivos contienen el **código C#** que ejecuta la lógica de negocio (conjunto de reglas y procesos que definen cómo funciona la aplicación según las normas de la empresa.) y maneja los eventos del usuario.

**Ejemplo: `Default.aspx.cs`**
```csharp
using System;

namespace MiSitioWeb
{
    public partial class _Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                lblMensaje.Text = "Página cargada por primera vez.";
                // aquí se suelen inicializar valores
            }
        }

        protected void btnSaludar_Click(object sender, EventArgs e)
        {
            lblMensaje.Text = "¡Hola desde el servidor!";
            // al pulsar el botón desde el navegador, se ejecutará en el servidor este manejador de evento
        }
    }
}
```

🔹 Aquí se ejecutan los **eventos del ciclo de vida de la página**, como `Page_Load` y `Button_Click`.  
🔹 `partial class` permite que la clase esté dividida entre el archivo `.aspx`, el `.aspx.cs` y el `.aspx.designer.cs`.

---
## ⚙️ ¿Cómo se genera el archivo `.designer.cs`?

Visual Studio lo crea o actualiza automáticamente cuando:

- Guardas cambios en el archivo `.aspx`.
- Añades o eliminas un control del servidor (`runat="server"`).
- Compilas el proyecto.

> 🧠 Consejo: | ❌ **No edites manualmente** el `.designer.cs`, se sobrescribe automáticamente. Si el archivo `.designer.cs` se daña o no se actualiza, puedes **hacer clic derecho en el `.ascx` → Convert to Web Application**, y Visual Studio lo regenerará.

---

## ⚙️ 3. Archivo `Web.config` → **Configuración global**

Es un archivo XML que contiene la **configuración del sitio**, como:
- Conexiones a base de datos
- Seguridad y autenticación
- Rutas, errores, sesiones, etc.

**Ejemplo:**
```xml
<?xml version="1.0"?>
<configuration>
  <connectionStrings>
    <add name="MiConexion" connectionString="Data Source=.;Initial Catalog=MiBD;Integrated Security=True" />
  </connectionStrings>

  <system.web>
    <compilation debug="true" targetFramework="4.8" />
    <authentication mode="Forms" />
    <customErrors mode="Off" />
  </system.web>
</configuration>
```

🔹 Este archivo se carga automáticamente al iniciar la aplicación.  
🔹 Si hay errores en `Web.config`, la app **no arranca**.  

---

## 📁 4. Carpeta `App_Data` → **Datos y bases de datos locales**

- Contiene archivos de datos como **bases de datos SQL Server (.mdf)**, bases de datos de Access, **XML**, **archivos de texto**, o cualquier otro archivo de datos.  
- **No se puede acceder directamente desde el navegador**, por seguridad.

**Ejemplo:**  
`App_Data/MiBaseDeDatos.mdf`

---

## 📁 5. Carpeta `App_Code` → **Clases de lógica compartida**

- Contiene clases en C# o VB.NET reutilizables en toda la aplicación.  
- Ideal para colocar código común, como:
  - Funciones auxiliares (helpers)
  - Clases de negocio (Business Logic)
  - Conexiones a base de datos (código necesario para establecer la conexión)

**Ejemplo: `App_Code/Utilidades.cs`**
```csharp
public static class Utilidades
{
    public static string FormatearTexto(string texto)
    {
        return texto.ToUpper();
    }
}
```

---

## 📁 6. Carpeta `Bin` → **Bibliotecas compiladas**

- Contiene los archivos **.dll** (bibliotecas) que usa tu aplicación.  
- Al compilar el proyecto, Visual Studio genera tu código como una DLL dentro de `Bin`.

**Ejemplo:**
```
Bin/
 ├── MiSitioWeb.dll
 └── Microsoft.CodeDom.Providers.DotNetCompilerPlatform.dll
```

💡 Las DLL permiten que el código del servidor esté compilado y protegido (no visible como texto).

---

## 📁 7. Carpeta `Scripts` → **Archivos JavaScript**

- Contiene scripts de cliente, como **jQuery**, **Bootstrap** (ambos son Frameworks populares en el desarrollo Web), o scripts personalizados.  
- Se ejecutan **en el navegador**, no en el servidor.

**Ejemplo:**
```
Scripts/
 ├── jquery-3.7.0.min.js
 └── site.js
```

---

## 📁 8. Carpeta `Content` → **Archivos estáticos (CSS, imágenes, etc.)**

- Guarda los recursos visuales del sitio web:
  - Archivos CSS
  - Imágenes
  - Íconos

**Ejemplo:**
```
Content/
 ├── estilos.css
 └── logo.png
```

---

## 🧠 En conjunto

| Tipo de archivo | Función | Procesado por |
|------------------|----------|----------------|
| `.aspx` | Interfaz visual | Servidor ASP.NET |
| `.aspx.cs` | Lógica del servidor | Compilador de C# |
| `Web.config` | Configuración global | ASP.NET |
| `App_Data` | Datos y archivos de BD | Servidor |
| `App_Code` | Clases reutilizables | Compilador |
| `Bin` | Bibliotecas compiladas | CLR (.NET) |
| `Scripts` | Código JavaScript del cliente | Navegador |
| `Content` | CSS, imágenes, recursos visuales | Navegador |

---

## ✅ En resumen

> Un proyecto **ASP.NET Web Forms** combina HTML (interfaz), C# (lógica), y configuración (Web.config) dentro de una estructura organizada en carpetas.  
> El **servidor ASP.NET** se encarga de procesar los archivos `.aspx` y `.cs`, mientras que el **navegador** interpreta los archivos estáticos (HTML, CSS, JS).
