# Explicación del método `Deserializar(string path)`

Este método **lee un archivo XML** (ruta recibida en `path`) y **reconstruye** en memoria una instancia de `ListaPersonas`, imprimiendo cada persona por consola.

---

## 🧩 Código

```csharp
static void Deserializar(string path)
{
    XmlSerializer serializador = new XmlSerializer(typeof(ListaPersonas));

    using (FileStream fs = new FileStream(path, FileMode.Open))
    {
        ListaPersonas lista = (ListaPersonas)serializador.Deserialize(fs);

        foreach (var persona in lista.Personas)
        {
            Console.WriteLine($"{persona.Id} - {persona.Nombre}, {persona.Edad} años, {persona.Ciudad}");
        }
    }
}
```

---

## 🔹 Paso a paso

### 1) Crear el deserializador
```csharp
XmlSerializer serializador = new XmlSerializer(typeof(ListaPersonas));
```
Se instancia un `XmlSerializer` preparado para **convertir XML ⇄ objeto** del tipo `ListaPersonas`.

### 2) Abrir el archivo XML indicado
```csharp
using (FileStream fs = new FileStream(path, FileMode.Open))
```
- Abre el archivo cuya ruta se pasa por parámetro (`path`).  
- `FileMode.Open` exige que el archivo **ya exista**.  
- El `using` garantiza que el **stream se cierre** aunque ocurra una excepción.

### 3) Deserializar el contenido
```csharp
ListaPersonas lista = (ListaPersonas)serializador.Deserialize(fs);
```
Lee el XML desde el `FileStream` y lo transforma a un objeto real `ListaPersonas`.  
El *cast* es necesario porque `Deserialize` devuelve `object`.

### 4) Recorrer y mostrar
```csharp
foreach (var persona in lista.Personas)
{
    Console.WriteLine($"{persona.Id} - {persona.Nombre}, {persona.Edad} años, {persona.Ciudad}");
}
```
Itera las personas y escribe una línea con `Id`, `Nombre`, `Edad` y `Ciudad`.

---

## ✅ Flujo general
1. Recibe la **ruta** del XML (`path`).  
2. Crea un `XmlSerializer` para `ListaPersonas`.  
3. Abre el archivo en lectura.  
4. **Deserializa** el XML a `ListaPersonas`.  
5. Recorre e **imprime** cada persona.

---

## 🧪 Ejemplo de uso
```csharp
// Si el XML fue creado previamente por Serializar():
Deserializar("personas.xml");
```

---



## 🗂️ Resumen rápido
| Bloque | Función |
|-------|---------|
| `XmlSerializer(typeof(ListaPersonas))` | Configura la deserialización para ese tipo |
| `new FileStream(path, FileMode.Open)` | Abre el archivo XML en lectura |
| `serializador.Deserialize(fs)` | Convierte el XML a `ListaPersonas` |
| `foreach (var persona in lista.Personas)` | Recorre e imprime cada persona |

