# Explicación del código `Serializar(string path)`

Este código define un **método estático** llamado `Serializar()` que crea una lista de personas y la guarda en un archivo XML (`personas.xml`) utilizando la clase `XmlSerializer`.

---

## 1. Firma del método

```csharp
static void Serializar(string path)
```

- `static`: el método pertenece a la clase, no a una instancia.  
- `void`: no devuelve ningún valor.  
- `Serializar`: nombre del método.
- `string path`:Es la lista de parámetros del método: una cadena de texto que representa la ruta o nombre del archivo XML donde se guardará la información serializada.

Su función es **serializar datos a XML**.

---

## 2. Crear lista de personas

```csharp
ListaPersonas lista = new ListaPersonas();
```

Se crea un objeto `ListaPersonas`, el cual contiene una lista de personas:

```csharp
public class ListaPersonas
{
    public List<Personas> Personas { get; set; } = new List<Personas>();
}
```

---

## 3. Agregar personas a la lista

```csharp
lista.Personas.Add(new Personas { Id = 1, Nombre = "Ana Pérez", Edad = 28, Ciudad = "Madrid" });
lista.Personas.Add(new Personas { Id = 2, Nombre = "Carlos Ruiz", Edad = 35, Ciudad = "Sevilla" });
lista.Personas.Add(new Personas { Id = 3, Nombre = "Lucía Gómez", Edad = 22, Ciudad = "Valencia" });
```

Se crean tres objetos `Personas` y se agregan a la lista.

---

## 4. Crear el serializador XML

```csharp
XmlSerializer serializador = new XmlSerializer(typeof(ListaPersonas));
```

Se crea un objeto `XmlSerializer` que sabrá cómo convertir una `ListaPersonas` en XML.

---

## 5. Crear el archivo y serializar los datos

```csharp
using (FileStream fs = new FileStream(path, FileMode.Create))
{
    serializador.Serialize(fs, lista);
}
```

- `FileStream` abre o crea un archivo `personas.xml`.  
- `serializador.Serialize()` convierte la lista en XML y la guarda.  
- `using` asegura que el archivo se cierre correctamente.

---

## 6. Mostrar mensaje en consola

```csharp
Console.WriteLine("Archivo XML con lista de personas creado:");
Console.WriteLine(Path.GetFullPath(path));
```

Imprime la ubicación del archivo en la consola.

Ejemplo:
```
Archivo XML con lista de personas creado:
C:\Users\TuNombre\source\repos\MiProyecto\personas.xml
```
---

## ✅ Resumen

| Parte del código | Qué hace |
|------------------|-----------|
| `ListaPersonas lista = new ListaPersonas();` | Crea una lista vacía de personas |
| `lista.Personas.Add(...)` | Agrega personas con sus datos |
| `XmlSerializer serializador = new XmlSerializer(typeof(ListaPersonas));` | Prepara el serializador XML |
| `FileStream` + `serializador.Serialize()` | Crea el archivo XML y guarda los datos |
| `Console.WriteLine(...)` | Muestra confirmación en la consola |

---


# Resultado: personas.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<ListaPersonas xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
               xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <Personas>
    <Personas id="1">
      <NombreCompleto>Ana Pérez</NombreCompleto>
      <Edad>28</Edad>
      <Ciudad>Madrid</Ciudad>
    </Personas>
    <Personas id="2">
      <NombreCompleto>Carlos Ruiz</NombreCompleto>
      <Edad>35</Edad>
      <Ciudad>Sevilla</Ciudad>
    </Personas>
    <Personas id="3">
      <NombreCompleto>Lucía Gómez</NombreCompleto>
      <Edad>22</Edad>
      <Ciudad>Valencia</Ciudad>
    </Personas>
  </Personas>
</ListaPersonas>
```

---



### 1️⃣ La primera línea: declaración XML

```xml
<?xml version="1.0"?>
```
Es la declaración del documento XML. Indica que este archivo está escrito en formato XML versión 1.0 (la más común).

---

### 2️⃣ El elemento raíz

```xml
<ListaDePersonas xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xmlns:xsd="http://www.w3.org/2001/XMLSchema">
```
- `<ListaDePersonas>` es el **elemento raíz** del documento.
- El nombre proviene del atributo `[XmlRoot("ListaDePersonas")]` en la clase C#.
- Los atributos `xmlns:xsi` y `xmlns:xsd` son **espacios de nombres XML**, agregados automáticamente por .NET, usados para definir esquemas y validación XML.

---

### 3️⃣ Cada elemento `<Persona>`

```xml
<Persona id="1">
  <NombreCompleto>Ana Pérez</NombreCompleto>
  <Edad>28</Edad>
  <Ciudad>Madrid</Ciudad>
</Persona>
```
Cada bloque `<Persona>...</Persona>` representa un objeto de la clase `Persona`.  
Esto se debe a `[XmlElement("Persona")]` en la lista del contenedor `ListaPersonas`.

---

### 4️⃣ El atributo `id="1"`

Viene de la propiedad con el atributo `[XmlAttribute("id")]` en C#:

```csharp
[XmlAttribute("id")]
public int Id { get; set; }
```
Hace que el valor `Id` aparezca como un **atributo XML**, no como un elemento interno.

---

### 5️⃣ Los elementos internos (`<NombreCompleto>`, `<Edad>`, `<Ciudad>`)

Cada uno representa una propiedad pública de la clase `Persona`.

```csharp
[XmlElement("NombreCompleto")]
public string Nombre { get; set; }

[XmlElement("Edad")]
public int Edad { get; set; }

[XmlElement("Ciudad")]
public string Ciudad { get; set; }
```

---

### 📘 Resumen

| Parte del XML | Proviene de | Descripción |
|----------------|-------------|-------------|
| `<?xml version="1.0"?>` | Automático | Declaración XML estándar |
| `<ListaDePersonas>` | `[XmlRoot("ListaDePersonas")]` | Nodo raíz del documento |
| `xmlns:xsi`, `xmlns:xsd` | Automático (.NET) | Namespaces para validación |
| `<Persona id="1">` | `[XmlElement("Persona")]` + `[XmlAttribute("id")]` | Objeto de la clase Persona |
| `<NombreCompleto>` | `[XmlElement("NombreCompleto")]` | Propiedad `Nombre` |
| `<Edad>` | `[XmlElement("Edad")]` | Propiedad `Edad` |
| `<Ciudad>` | `[XmlElement("Ciudad")]` | Propiedad `Ciudad` |

---



El XML es una **representación textual de la estructura de tus clases en C#**.  
Cada **etiqueta** o **atributo** refleja una **propiedad** del objeto, y la jerarquía de etiquetas representa la jerarquía de objetos.

