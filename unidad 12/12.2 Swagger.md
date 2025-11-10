**Swagger** es un conjunto de herramientas que permiten **documentar, diseñar, probar y consumir APIs** de forma sencilla.
Hoy en día, el nombre técnico del estándar que usa Swagger es **OpenAPI Specification (OAS)**, pero el término “Swagger” se sigue usando para referirse a las herramientas.

---

## ✅ ¿Para qué sirve Swagger?

Swagger permite:

* **Documentar** automáticamente los endpoints de una API.
* **Mostrar** esos endpoints en una página web interactiva.
* **Probar** la API desde el navegador (sin usar Postman ni cURL).
* **Generar código cliente** para consumir la API (Java, C#, Python, etc.).

---

## 🧩 Componentes principales de Swagger

| Herramienta                             | Función                                                                                            |
| --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Swagger UI**                          | Interfaz web que muestra y permite probar la API (lo que ves en `https://localhost:xxxx/swagger`). |
| **Swagger / OpenAPI Specification**     | El archivo (JSON/YAML) que describe la API (endpoints, parámetros, modelos).                       |
| **Swagger Editor**                      | Editor online para escribir o visualizar especificaciones OpenAPI.                                 |
| **Swagger Codegen / OpenAPI Generator** | Genera código cliente/servidor a partir de la especificación.                                      |

---

## 🖥️ Ejemplo visual

Cuando entras a Swagger UI en una Web API de .NET, ves algo como:

```
GET    /api/productos
POST   /api/productos
PUT    /api/productos/{id}
PATCH  /api/productos/{id}
DELETE /api/productos/{id}
```

Puedes hacer clic en un endpoint → escribir el JSON → **"Try it out"** → probarlo en vivo.

---

## 📌 En ASP.NET Core

Swagger viene integrado con el paquete:

```csharp
builder.Services.AddSwaggerGen();
app.UseSwagger();
app.UseSwaggerUI();
```

Por eso, cuando ejecutas una Web API en .NET Core en modo desarrollo, aparece automáticamente:

➡️ `https://localhost:xxxx/swagger`

---

## ✨ En resumen

> **Swagger es una herramienta que ayuda a documentar y probar APIs, usando el estándar OpenAPI.**

Sin Swagger tendrías que leer documentación manual o usar herramientas externas; con Swagger ves la API, la entiendes y la pruebas desde el navegador.

