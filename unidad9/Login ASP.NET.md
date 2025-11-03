# Apuntes explicativos detallados sobre el **login** en ASP.NET Framework (Web Forms)

## 1. ¿Qué es el login?

El **login** es el proceso por el cual un usuario demuestra su identidad (autenticación) para poder acceder a partes protegidas de una aplicación web.
En ASP.NET suele hacerse con:

1. Un formulario (`Login.aspx`)
2. Validación de credenciales (código C#)
3. Gestión de estado (sesión / autenticación Forms)
4. Redirección a páginas seguras

---

## 2. Conceptos básicos que intervienen

### 2.1. Autenticación vs Autorización

* **Autenticación**: ¿Quién eres? (usuario/contraseña)
* **Autorización**: ¿Qué puedes hacer? (rol/permisos)

Primero se **autentica** al usuario; luego, según su rol, se **autoriza** o no a ver cierta página.

---

## 3. Formulario típico de login (Web Forms)

Un formulario mínimo tiene:

* Caja de texto para usuario
* Caja de texto para contraseña (TextMode="Password")
* Botón
* Etiqueta para mensajes

```aspx
<asp:TextBox ID="txtUsuario" runat="server"></asp:TextBox>
<asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
<asp:Button ID="btnLogin" runat="server" Text="Entrar" OnClick="btnLogin_Click" />
<asp:Label ID="lblMensaje" runat="server" ForeColor="Red"></asp:Label>
```

---

## 4. Flujo lógico del login

1. El usuario envía usuario + contraseña.
2. El servidor recibe esos datos en el evento `btnLogin_Click`.
3. Se valida contra:

   * una tabla de base de datos,
   * una lista en memoria,
   * un servicio,
   * o lo que tengas como fuente de verdad.
4. Si las credenciales son correctas:

   * se **guarda algo en sesión** (usuario, id, rol…)
     o se **emite una cookie de autenticación** (Forms Authentication)
   * se redirige a la página inicial segura.
5. Si las credenciales son incorrectas:

   * se muestra mensaje de error
   * no se crea sesión.

---

## 5. Login con **sesión** (lo más simple)


```csharp
protected void btnLogin_Click(object sender, EventArgs e)
{
    string user = txtUsuario.Text;
    string pass = txtPassword.Text;

    // 1. Validación súper básica (en la vida real -> BD)
    if (user == "admin" && pass == "1234")
    {
        // 2. Guardar datos del usuario en sesión
        Session["Usuario"] = user;
        Session["Rol"] = "Administrador";
        Session.Timeout = 20; // minutos de inactividad

        // 3. Redirigir a zona segura
        Response.Redirect("Home.aspx");
    }
    else
    {
        lblMensaje.Text = "Usuario o contraseña incorrectos.";
    }
}
```

🔎 **Idea clave:** *Si hay algo en la sesión → el usuario está “logueado”*.

---

## 6. Proteger páginas usando la sesión

En cada página que quieras proteger:

```csharp
protected void Page_Load(object sender, EventArgs e)
{
    if (Session["Usuario"] == null)
    {
        // No está logueado
        Response.Redirect("Login.aspx");
    }
}
```

Esto es lo que hace realmente “segura” la web: **no mostrar páginas sin sesión**.

---

## 7. Cerrar sesión (logout)

Cualquier login tiene que poder **destruir la sesión**:

```csharp
protected void btnLogout_Click(object sender, EventArgs e)
{
    Session.Clear();   // quita las claves (todos los datos del objeto Session)
    Session.Abandon(); // destruye la sesión
    Response.Redirect("Login.aspx");
}
```

---

## 8. Login con **Forms Authentication** (más “oficial” de ASP.NET)

ASP.NET Framework trae un sistema propio de autenticación basado en **cookies**. La idea:

1. El usuario se loguea.
2. Si es correcto → `FormsAuthentication.RedirectFromLoginPage(...)`
3. ASP.NET crea una **cookie de autenticación**.
4. El `web.config` decide qué carpetas / páginas requieren estar autenticado.

### 8.1. Configuración en `Web.config`

```xml
<configuration>
  <system.web>
    <authentication mode="Forms">
      <forms loginUrl="Login.aspx" timeout="30" />
    </authentication>

    <authorization>
      <deny users="?" />   <!-- Niega a usuarios anónimos -->
    </authorization>
  </system.web>
</configuration>
```

* `users="?"` → usuarios NO autenticados
* `users="*"` → todos

Con esto, **todas las páginas piden login** salvo `Login.aspx`.

Para que `Login.aspx` sea pública:

```xml
<location path="Login.aspx">
  <system.web>
    <authorization>
      <allow users="*" />
    </authorization>
  </system.web>
</location>
```

---

### 8.2. Código de login con Forms

```csharp
using System.Web.Security;

protected void btnLogin_Click(object sender, EventArgs e)
{
    string user = txtUsuario.Text;
    string pass = txtPassword.Text;

    if (user == "admin" && pass == "1234")
    {
        // Crea la cookie de autenticación y redirige
        FormsAuthentication.RedirectFromLoginPage(user, false);
    }
    else
    {
        lblMensaje.Text = "Credenciales no válidas.";
    }
}
```

* El segundo parámetro (`false`) es **recordarme**. Si lo pones en `true`, la cookie vive más tiempo.

---

## 9. ¿Sesión o Forms Authentication?

| Aspecto            | Sesión                              | Forms Authentication                      |
| ------------------ | ----------------------------------- | ----------------------------------------- |
| Dónde se guarda    | Memoria/State/SQL                   | Cookie en cliente                         |
| Qué guarda         | Lo que tú quieras (objetos)         | Solo que **está autenticado** y su nombre |
| Proteger páginas   | Con `if (Session["Usuario"]==null)` | Con reglas en `web.config`                |
| Escenarios típicos | Apps pequeñas / ejercicios          | Apps más formales / roles / intranet      |
| Depende de cookies | No necesariamente                   | Sí                                        |

👉 En muchos proyectos **se usan las dos**:

* Forms → saber si está autenticado
* Session → guardar más info (IdEmpleado, Rol, Nombre, Foto…)

---

## 10. Validación contra Base de Datos (esquema típico)

En un caso real no comparas con `"admin"`, sino con la BD:

```csharp
protected void btnLogin_Click(object sender, EventArgs e)
{
    string user = txtUsuario.Text;
    string pass = txtPassword.Text;

    // 1. Traer usuario de la BD
    var datos = ObtenerUsuarioDeBD(user, pass); // tu método

    if (datos != null)
    {
        // 2. Guardar datos importantes
        Session["Usuario"] = datos.Nombre;
        Session["IdUsuario"] = datos.Id;
        Session["Rol"] = datos.Rol;

        Response.Redirect("Home.aspx");
    }
    else
    {
        lblMensaje.Text = "Usuario o contraseña incorrectos.";
    }
}
```

📌 **Muy importante en real:** guardar contraseñas **hasheadas** (SHA-256, bcrypt, etc.), nunca en texto plano.

---
