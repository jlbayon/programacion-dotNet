# 📘 Unidad 3: Clases básicas del .NET Framework

En esta unidad vamos a estudiar algunas de las clases más utilizadas del **.NET Framework** y que son fundamentales para el desarrollo de aplicaciones:

- **Cadenas (string)**
- **Fechas y horas (DateTime)**
- **Consola (Console)**
- **Matemáticas (Math)**
- **Colecciones (List, Dictionary, etc.)**

---

## 3.1 Clase `string` (cadenas de texto)
Las cadenas (`string`) son inmutables y se utilizan para representar texto.

### Ejemplo:
```csharp
string saludo = "Hola, mundo";
Console.WriteLine(saludo.ToUpper());   // "HOLA, MUNDO"
Console.WriteLine(saludo.ToLower());   // "hola, mundo"
Console.WriteLine(saludo.Substring(0, 4)); // "Hola"
Console.WriteLine(saludo.Contains("mundo")); // True
```

---

## 3.2 Clase `DateTime` (fechas y horas)
La clase `DateTime` representa una fecha y hora.

### Ejemplo:
```csharp
DateTime ahora = DateTime.Now;
Console.WriteLine("Fecha y hora actual: " + ahora);

DateTime cumple = new DateTime(2025, 7, 4);
Console.WriteLine("Cumpleaños: " + cumple.ToShortDateString());

TimeSpan diferencia = cumple - ahora;
Console.WriteLine("Días para el cumple: " + diferencia.Days);
```

---

## 3.3 Clase `Console` (entrada y salida)
La clase `Console` permite interactuar con la terminal.

### Ejemplo:
```csharp
Console.WriteLine("Introduce tu nombre:");
string nombre = Console.ReadLine();
Console.WriteLine("Hola " + nombre);
```

---

## 3.4 Clase `Math` (operaciones matemáticas)
La clase `Math` incluye operaciones matemáticas comunes.

### Ejemplo:
```csharp
double raiz = Math.Sqrt(16); // 4
double potencia = Math.Pow(2, 3); // 8
double redondeo = Math.Round(3.14159, 2); // 3.14

Console.WriteLine("Raíz: " + raiz);
Console.WriteLine("Potencia: " + potencia);
Console.WriteLine("Redondeo: " + redondeo);
```

---

## 3.5 Colecciones básicas
Las colecciones permiten almacenar múltiples elementos.

### Lista (`List<T>`)
```csharp
List<string> frutas = new List<string>();
frutas.Add("Manzana");
frutas.Add("Plátano");
frutas.Add("Naranja");

foreach (string fruta in frutas)
{
    Console.WriteLine(fruta);
}
```

### Diccionario (`Dictionary<TKey, TValue>`)
```csharp
Dictionary<string, int> edades = new Dictionary<string, int>();
edades["Ana"] = 25;
edades["Luis"] = 30;

foreach (var par in edades)
{
    Console.WriteLine(par.Key + " tiene " + par.Value + " años");
}
```

---

## ✅ Resumen de la Unidad 3
En esta unidad hemos aprendido a trabajar con:

- **Cadenas** → Manipulación de texto.  
- **DateTime** → Manejo de fechas y horas.  
- **Console** → Entrada y salida por pantalla.  
- **Math** → Operaciones matemáticas comunes.  
- **Colecciones** → Almacenar y recorrer conjuntos de datos.


---

[![Made with ❤️ by Tever](https://img.shields.io/badge/Made%20with%20❤️-by%20Tever-181717?logo=github)](https://github.com/devTever)
