
## 🧠 1. Concepto de Sesión en ASP.NET

En ASP.NET **una sesión es un mecanismo para almacenar información específica de cada usuario** mientras navega por el sitio web.
El objetivo principal es **mantener el estado entre diferentes peticiones HTTP**, ya que el protocolo HTTP es *sin estado* (stateless).

🔹 Ejemplo:
Cuando un usuario inicia sesión, su nombre de usuario, rol o carrito de compras se guarda en sesión, permitiendo acceder a esos datos en distintas páginas sin volver a autenticarse.

---

## ⚙️ 2. Ciclo de Vida de la Sesión

1. **Inicio:**
   La sesión se crea automáticamente cuando el usuario accede por primera vez al sitio o cuando se usa `Session` por primera vez.

2. **Durante la sesión:**
   El servidor mantiene los datos asociados a un identificador único (SessionID) que crea automáticamente el servidor al iniciar sesión.

3. **Fin de la sesión:**

   * Por inactividad (timeout).
   * Por cierre manual (`Session.Abandon()`).
   * Al cerrar el navegador (en algunos modos de almacenamiento).

---

## 💾 3. Dónde se guarda la información de la sesión

ASP.NET Framework permite varios **modos de almacenamiento**, configurables en `Web.config`:

### a) **InProc (por defecto)**

* Los datos se almacenan **en la memoria del servidor web**.
* Rápido, pero se pierden si el servidor se reinicia o si hay balanceo de carga sin persistencia (reparto de peticiones entre varios servidores, cada petición puede ser atendida por un servidor diferente).

```xml
<sessionState mode="InProc" timeout="20" />
```

### b) **StateServer**

* Los datos se guardan en un **servicio de estado** independiente (`aspnet_state`).
* Permite compartir una misma sesión entre varios servidores web.

```xml
<sessionState mode="StateServer" stateConnectionString="tcpip=localhost:42424" timeout="20" />
```

### c) **SQLServer**

* La sesión se almacena en una **base de datos SQL Server**.
* Ideal para aplicaciones distribuidas y persistentes.

```xml
<sessionState mode="SQLServer" sqlConnectionString="data source=ServidorSQL;Trusted_Connection=yes;" timeout="20" />
```

---

## 🧩 4. Propiedades y Métodos de `Session`

| Propiedad / Método        | Descripción                               |
| ------------------------- | ----------------------------------------- |
| `Session["clave"]`       | Guarda o recupera un valor de la sesión.  |
| `Session.SessionID`       | Devuelve el ID único asignado al usuario. |
| `Session.Timeout`         | Tiempo (en minutos) antes de que expire.  |
| `Session.Count`           | Número de variables almacenadas.          |
| `Session.Clear()`         | Elimina todos los valores de la sesión.   |
| `Session.Remove("clave")` | Elimina el valor asociado a la clave especificada.             |
| `Session.Abandon()`       | Termina la sesión actual.                 |

---

## 🧰 5. Ejemplos Prácticos

### ➤ Guardar y recuperar datos de sesión
En una página:
```csharp
// Guardar datos en la sesión
Session["Usuario"] = "Carlos";
Session["Rol"] = "Administrador";
```
En otra página:
```csharp
// Recuperar datos
string usuario = (string)Session["Usuario"];
string rol = (string)Session["Rol"];
```

### ➤ Comprobar si existe un valor

```csharp
if (Session["Usuario"] != null)
{
    Label1.Text = "Bienvenido, " + Session["Usuario"].ToString();
}
else
{
    Response.Redirect("Login.aspx");
}
```

### ➤ Cerrar sesión

```csharp
Session.Clear();     // Limpia todos los valores
Session.Abandon();   // Finaliza la sesión actual
```

---

## 🔐 6. Identificador de Sesión (SessionID)

* ASP.NET asigna un **SessionID único** por cada instancia del navegador que accede a la aplicación.
* Se almacena generalmente en una **cookie** llamada `ASP.NET_SessionId`.


---

## 📜 7. Configuración en `Web.config`

```xml
<configuration>
  <system.web>
    <sessionState 
        mode="InProc" 
        timeout="20" 
        cookieless="false"
        stateConnectionString="tcpip=127.0.0.1:42424"
        sqlConnectionString="data source=ServidorSQL;Integrated Security=SSPI;"
    />
  </system.web>
</configuration>
```
Vamos a analizar cada atributo uno por uno 👇


#### 🔹 1. `mode="InProc"`

Define **dónde se almacenan los datos de sesión**.

Posibles valores:

* **InProc** → (por defecto) las sesiones se guardan **dentro del proceso del propio servidor web (IIS)**.
  ➜ Es rápido, pero **si el servidor se reinicia o el usuario pasa a otro servidor, se pierde la sesión.**
* **StateServer** → guarda las sesiones en un **servicio externo de estado** (usando `stateConnectionString`).
* **SQLServer** → guarda las sesiones en una **base de datos SQL Server**.
* **Custom** → permite un proveedor personalizado.
* **Off** → desactiva el uso de sesiones.

👉 En nuestro caso está en `InProc`, así que las sesiones se guardan en memoria del servidor IIS.

---

#### 🔹 2. `timeout="20"`

Indica **cuánto tiempo (en minutos)** una sesión puede estar inactiva antes de expirar.
En este caso, **20 minutos** sin actividad ⇒ la sesión se elimina.

---

#### 🔹 3. `cookieless="false"`

Define si ASP.NET debe usar **cookies** para mantener la sesión del usuario.

* **false** → usa cookies (la forma habitual).
* **true** → no usa cookies; el identificador de sesión (`SessionID`) se agrega a la URL.

Por ejemplo:

* Con cookie: `www.ejemplo.com/pagina.aspx`
* Sin cookie: `www.ejemplo.com/(S(abc123))/pagina.aspx`

---

#### 🔹 4. `stateConnectionString="tcpip=127.0.0.1:42424"`

Esta cadena se usa **solo cuando el modo es `StateServer`**.
Indica **la dirección y puerto del servicio de estado** (ASP.NET State Service).
👉 En este caso no se usa realmente porque el `mode` es `InProc`.
Si el modo fuera `StateServer`, esto significaría:

* El servicio de sesión está en la **misma máquina (`127.0.0.1`)**
* Escucha en el **puerto 42424**.

---

#### 🔹 5. `sqlConnectionString="data source=ServidorSQL;Integrated Security=SSPI;"`

También se usa **solo si el modo es `SQLServer`**.
Es la cadena de conexión hacia la base de datos donde se guardarán las sesiones.
Aquí apunta a un servidor SQL llamado `ServidorSQL` usando autenticación integrada de Windows (`SSPI`).

---

#### 🧠 En resumen:

| Atributo                | Función                         | Valor en tu ejemplo     | Significado                             |
| ----------------------- | ------------------------------- | ----------------------- | --------------------------------------- |
| `mode`                  | Dónde se guarda la sesión       | `InProc`                | En memoria del IIS                      |
| `timeout`               | Tiempo de expiración            | `20`                    | 20 minutos                              |
| `cookieless`            | Usa cookies o no                | `false`                 | Sí usa cookies                          |
| `stateConnectionString` | Servidor del servicio de estado | `tcpip=127.0.0.1:42424` | No aplica (solo si fuera `StateServer`) |
| `sqlConnectionString`   | Servidor SQL para sesiones      | `ServidorSQL`           | No aplica (solo si fuera `SQLServer`)   |

---

### ⚠️ Relación con balanceo de carga
El balanceo de carga sin persistencia es una técnica en la que un balanceador de carga distribuye las solicitudes entrantes entre varios servidores, sin mantener información sobre las conexiones anteriores de un cliente.

Si estás usando **balanceo de carga sin persistencia**, el modo **`InProc`** **no es recomendable**, porque:

* Cada servidor tiene sus propias sesiones en memoria.
* Si un usuario pasa de un servidor a otro, **perderá su sesión**.

✅ Soluciones:

* Cambiar a `mode="StateServer"` o `mode="SQLServer"`, para que **todos los servidores compartan la misma fuente de sesiones**.
* O bien, usar “**sticky sessions**” (persistencia en el balanceador).

---


## 🚨 8. Consideraciones Importantes

* **Evitar guardar objetos muy grandes** en sesión (consume memoria del servidor).
* **No almacenar objetos no serializables** si se usa `StateServer` o `SQLServer`.
* **Controlar expiración** para no perder información crítica (por ejemplo, carritos de compra).
* **Proteger datos sensibles** (usar HTTPS y cifrado si se almacenan datos personales). A la hora de desplegar (publicar) la aplicación, hacerlo en un servidor que utilice el protocolo HTTPS.

---

## 🧭 9. Comparación rápida: `Session`, `ViewState`, `Application`, `Cookies`

| Estado        | Alcance | Persiste entre páginas | Se almacena en      | Uso típico                                |
| ------------- | ------- | ---------------------- | ------------------- | ----------------------------------------- |
| `Session`     | Usuario | Sí                     | Servidor            | Datos por usuario                         |
| `ViewState`   | Página  | No                     | Cliente (oculto)    | Mantener controles entre postbacks        |
| `Application` | Global  | Sí                     | Servidor            | Datos globales                            |
| `Cookies`     | Usuario | Sí                     | Cliente (navegador) | Datos persistentes (ej: recordar usuario) |

---

## 🧩 10. Buenas Prácticas

✅ Usar `Session` solo para datos realmente necesarios.

✅ Limpiar la sesión al cerrar sesión o al finalizar procesos.

✅ Evitar dependencias de sesión en servicios RESTful (no utilizar sesiones en servicios API REST).

✅ Configurar correctamente `timeout` según el caso de uso.

---

