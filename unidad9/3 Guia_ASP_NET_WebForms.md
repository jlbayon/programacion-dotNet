# Guía paso a paso: Primer proyecto ASP.NET Web Forms en C# con Visual Studio

## 1) Preparación

1. **Visual Studio 2022** con el workload **“ASP.NET and web development”**.  
2. **.NET Framework 4.7.2 o 4.8** (recomendado).  
3. HTTPS de desarrollo: acepta el certificado si VS te lo pide al ejecutar.

---

## 2) Crear el proyecto (Web Forms)

1. Abre VS → **Create a new project**.  
2. Busca **ASP.NET Web Application (.NET Framework)** (C#).  
3. Nombre: `Proyecto1`: **.NET Framework 4.8**  → **Create**.  
4. Selecciona plantilla **Web Forms** → **Create**.  


Al crear, VS genera páginas demo (`Default.aspx`, `About.aspx`), una **master page** (`Site.Master`), estilos, scripts y `Global.asax`.

---

## 3) Estructura básica de Web Forms

- **.aspx**: páginas (vista) + **code-behind** `.aspx.cs` (C#).  
- **Site.Master**: master page (layout).  
- **App_Data**: BD/archivos de datos.  
- **Scripts/** y **Content/**: JS y CSS.  
- **Global.asax**: eventos de aplicación (inicio, errores).  
- **web.config**: configuración.

> En Web Forms todo gira en torno al **ciclo de vida de la página** y los **eventos** (Page_Load, Button_Click, etc.) con **postbacks**.

---

## 4) Ejecutar el proyecto

Pulsa **F5** (Debug) o **Ctrl+F5**. Se abrirá en **IIS Express** la home `Default.aspx`. Si ves la plantilla, todo ok.

**IIS Express** (Internet Information Services Express) es una **versión ligera y gratuita de IIS**, el servidor web de Microsoft. Se utiliza principalmente por **desarrolladores** para **probar y ejecutar aplicaciones web ASP.NET** en sus máquinas locales.

---

## 5) Tu primera página “Hola” (postback + code-behind)

### 5.1 Crear la página

1. Clic derecho en el proyecto → **Add** → **Web Form…**  
2. Nombre: **Hello.aspx**.  
3. (Opcional) marca **Select master page** para usar `Site.Master`.

### Si usas master page

```aspx
<%@ Page Title="Hello" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Hello.aspx.cs" Inherits="MiPrimerWebForms.Hello" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <h2>Hola desde Web Forms</h2>

    <asp:Label ID="lblSaludo" runat="server" Text="(aún sin saludar)"></asp:Label>
    <br /><br />

    <asp:TextBox ID="txtNombre" runat="server" Placeholder="Tu nombre"></asp:TextBox>
    <asp:RequiredFieldValidator ID="valNombre" runat="server"
        ControlToValidate="txtNombre" ErrorMessage="El nombre es obligatorio"
        Display="Dynamic" ForeColor="Red" />
    <br /><br />

    <asp:Button ID="btnSaludar" runat="server" Text="Saludar" OnClick="btnSaludar_Click" />
</asp:Content>
```

**Hello.aspx.cs**:

```csharp
using System;

namespace MiPrimerWebForms
{
    public partial class Hello : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                lblSaludo.Text = "¡Bienvenido! Escribe tu nombre y pulsa Saludar.";
            }
        }

        protected void btnSaludar_Click(object sender, EventArgs e)
        {
            var nombre = txtNombre.Text?.Trim();
            if (!string.IsNullOrEmpty(nombre))
            {
                lblSaludo.Text = $"Hola, {nombre} 👋";
            }
        }
    }
}
```

### Si no usas master page

```aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Hello.aspx.cs" Inherits="MiPrimerWebForms.Hello" %>
<!DOCTYPE html>
<html>
<head runat="server"><title>Hello</title></head>
<body>
<form id="form1" runat="server">
    <h2>Hola desde Web Forms</h2>
    <asp:Label ID="lblSaludo" runat="server" />
    <br /><br />
    <asp:TextBox ID="txtNombre" runat="server" />
    <asp:RequiredFieldValidator ID="valNombre" runat="server"
        ControlToValidate="txtNombre" ErrorMessage="El nombre es obligatorio"
        Display="Dynamic" ForeColor="Red" />
    <br /><br />
    <asp:Button ID="btnSaludar" runat="server" Text="Saludar" OnClick="btnSaludar_Click" />
</form>
</body>
</html>
```

---

## 6) Navegación y menú

Agrega en `Site.Master`:

```aspx
<asp:HyperLink runat="server" NavigateUrl="~/Hello.aspx" Text="Hello" />
```

---

## 7) Validación

Ejemplo:

```aspx
<asp:ValidationSummary ID="valResumen" runat="server" ForeColor="Red" />
```

---

## 8) Mostrar datos con GridView

```aspx
<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:DemoConnectionString %>"
    SelectCommand="SELECT TOP (10) object_id, name, type_desc FROM sys.objects ORDER BY object_id">
</asp:SqlDataSource>

<asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1"
    AutoGenerateColumns="true" CellPadding="4" GridLines="None" />
```

**web.config:**

```xml
<connectionStrings>
  <add name="DemoConnectionString"
       connectionString="Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Demo.mdf;Integrated Security=True"
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

---

## 9) Ciclo de vida

```csharp
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        // Cargar datos iniciales
    }
}
```

---

## 10) Publicar

### File System

1. **Build** → **Publish MiPrimerWebForms**  
2. Target: **Folder** → selecciona carpeta → **Publish**  
3. Copia a IIS.

### IIS

1. Activa **IIS** y **ASP.NET 4.8**  
2. En IIS: **Add Application** → alias, carpeta, pool .NET v4.  
3. Navega a `http://localhost/MiWebForms/`.

---

## 11) Paquetes útiles

- Microsoft.AspNet.FriendlyUrls  
- AjaxControlToolkit  
- EntityFramework 6  

---

## 12) Problemas comunes

| Problema | Solución |
|-----------|-----------|
| Evento no se ejecuta | Verifica OnClick y método correspondiente |
| Error de validación | Revisa ControlToValidate |
| Página en blanco | Comprueba Application Pool (.NET v4) |
| Error BD | Ajusta connectionString |

---

**Autor:** Guía elaborada por ChatGPT  
**Versión:** 2025-10
