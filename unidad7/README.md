
# 🧾 Manipulación de documentos XML en aplicaciones .NET

## 1. Introducción

**Objetivo del tema:**  
Aprender a crear, leer, consultar, modificar, validar y transformar documentos XML utilizando las clases y tecnologías que ofrece la plataforma **.NET**.


---

## 2. ¿Qué es XML y por qué usarlo en .NET?

**XML (Extensible Markup Language)** es un formato de texto estructurado y auto-descriptivo que permite intercambiar datos entre sistemas heterogéneos.  
.NET integra  un amplio conjunto de clases para manipular XML de forma segura y eficiente.

**Ventajas:**
- Interoperabilidad entre sistemas y lenguajes.  
- Soporte nativo en .NET para lectura, escritura, validación y transformación.  
- Integración con servicios web (SOAP), configuraciones y almacenamiento estructurado. SOAP (Simple Object Access Protocol) es un protocolo estándar usado para intercambiar información estructurada entre sistemas a través de la red, principalmente sobre HTTP o HTTPS.
---

## 3. Espacios de nombres principales en .NET

| Espacio de nombres | Propósito |
|--------------------|------------|
| `System.Xml` | API clásica basada en DOM y streaming |
| `System.Xml.Linq` | API moderna basada en LINQ to XML |
| `System.Xml.Schema` | Validación contra esquemas XSD |
| `System.Xml.Serialization` | Serialización de objetos .NET a XML |
| `System.Xml.Xsl` | Transformaciones XSLT |
| `System.Xml.XPath` | Consultas XPath sobre documentos |

---

## 4. Modelos de procesamiento XML en .NET
La razón por la que existen diferentes modelos de procesamiento XML es que no todos los escenarios de uso son iguales.
Algunas aplicaciones solo necesitan leer un archivo XML grande rápidamente, mientras que otras necesitan modificar, crear, o consultar XML de forma compleja.

Por eso .NET (y en general todos los lenguajes modernos) ofrecen varios modelos de procesamiento XML, cada uno optimizado para un caso distinto.
| Modelo | Descripción | Clases clave | Cuándo usarlo |
|--------|--------------|---------------|----------------|
| **DOM (Document Object Model)** | Carga el documento completo en memoria | `XmlDocument` | XML pequeño/mediano, manipulación nodo a nodo |
| **LINQ to XML** | Modelo declarativo basado en LINQ | `XDocument`, `XElement` | Lectura y consultas expresivas |
| **Streaming** | Procesamiento secuencial (sin cargar todo el XML) | `XmlReader`, `XmlWriter` | XML grande o lectura continua |
| **Serialización** | Conversión de objetos .NET a XML (y viceversa) | `XmlSerializer` | Intercambio de datos entre capas o sistemas |
| **Transformaciones y validación** | Transformar XML o validar su estructura | `XslCompiledTransform`, `XmlSchemaSet` | Salidas en HTML o validación de contratos |

---

## 5. Lectura de XML

### 5.1 Con LINQ to XML
LINQ to XML es una tecnología de .NET que permite trabajar con documentos XML de forma más sencilla, moderna y declarativa, usando las potentes consultas de LINQ (Language Integrated Query).
Usado cuando el XML cabe en memoria y quieres manipulación flexible.



```csharp
XDocument doc = XDocument.Load("libros.xml");

var titulos = from libro in doc.Descendants("libro")
              select (string)libro.Element("titulo");

foreach (var t in titulos)
    Console.WriteLine(t);
```

### 5.2 Con XmlDocument (DOM clásico)
DOM significa Document Object Model (Modelo de Objetos del Documento).
Es un modelo estructurado en memoria que representa un documento XML o HTML como una jerarquía de objetos, lo que permite leer, recorrer, modificar o eliminar nodos mediante código.
```csharp
XmlDocument xml = new XmlDocument();
xml.Load("libros.xml");

XmlNodeList nodos = xml.GetElementsByTagName("titulo");
foreach (XmlNode n in nodos)
    Console.WriteLine(n.InnerText);
```

### 5.3 Con XmlReader (lectura secuencial)
Usado para ficheros muy grandes.
```csharp
using var reader = XmlReader.Create("libros.xml");
while (reader.Read())
{
    if (reader.NodeType == XmlNodeType.Element && reader.Name == "titulo")
        Console.WriteLine(reader.ReadElementContentAsString());
}
```

---

## 6. Escritura y modificación de XML

### 6.1 Crear documento con LINQ to XML
LINQ to XML te permite crear, leer, modificar y consultar XML como si estuvieras trabajando con colecciones de objetos en C#
```csharp
var doc = new XDocument(
    new XElement("catalogo",
        new XElement("producto",
            new XAttribute("id", "p1"),
            new XElement("nombre", "Café"),
            new XElement("precio", 7.50)
        )
    )
);
doc.Save("productos.xml");
```

### 6.2 Modificar un nodo existente
```csharp
var doc = XDocument.Load("productos.xml");
var prod = doc.Descendants("producto")
              .First(p => (string)p.Attribute("id") == "p1");
prod.Element("precio").Value = "8.00";
doc.Save("productos.xml");
```

---

## 7. Consultas con LINQ to XML
Modelo moderno y fluido, parte de System.Xml.Linq.

Carga el documento en memoria como un árbol, pero más ligero y fácil de usar que XmlDocument.

Permite consultar con LINQ, crear y modificar nodos con facilidad.
```csharp
using System.Xml.Linq;

XDocument doc = XDocument.Load("clientes.xml");
var nombres = doc.Descendants("Cliente")
                 .Select(c => (string)c.Element("Nombre"));

foreach (var n in nombres)
    Console.WriteLine(n);
```





## 8. Serialización de objetos a XML
Convierte objetos C# a XML y viceversa automáticamente.

Ideal para guardar configuraciones o intercambiar datos entre sistemas.
### Clase de ejemplo
```csharp
public class Persona
{
    public string Nombre { get; set; }
    public int Edad { get; set; }
}
```

### Serializar
```csharp
var persona = new Persona { Nombre = "Laura", Edad = 28 };
var serializer = new XmlSerializer(typeof(Persona));
using var fs = File.Create("persona.xml");
serializer.Serialize(fs, persona);
```

### Deserializar
```csharp
using var fs = File.OpenRead("persona.xml");
var persona2 = (Persona)serializer.Deserialize(fs);
```

---




