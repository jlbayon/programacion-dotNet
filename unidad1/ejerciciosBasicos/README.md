
# 📝 Ejercicios Básicos en C# (Nivel Inicial)

Estos ejercicios están pensados para practicar **entrada y salida estándar** en C# sin usar bucles ni estructuras condicionales.
- Usamos => [dotnetfidde.net](https://dotnetfiddle.net/)

---

## 1. Saludo personalizado
Pide al usuario su nombre y muestra un saludo.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Escribe tu nombre: ");
        string nombre = Console.ReadLine();

        Console.WriteLine("¡Hola, " + nombre + "!");
    }
}
```

---

## 2. Suma de dos números
Pide dos números enteros y muestra su suma.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Número 1: ");
        int a = int.Parse(Console.ReadLine());

        Console.Write("Número 2: ");
        int b = int.Parse(Console.ReadLine());

        Console.WriteLine("La suma es: " + (a + b));
    }
}
```

---

## 3. Resta de dos números
Pide dos números enteros y muestra la resta.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Número 1: ");
        int a = int.Parse(Console.ReadLine());

        Console.Write("Número 2: ");
        int b = int.Parse(Console.ReadLine());

        Console.WriteLine("La resta es: " + (a - b));
    }
}
```

---

## 4. Multiplicación
Pide dos números y muestra el producto.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Número 1: ");
        int a = int.Parse(Console.ReadLine());

        Console.Write("Número 2: ");
        int b = int.Parse(Console.ReadLine());

        Console.WriteLine("El producto es: " + (a * b));
    }
}
```

---

## 5. División real
Pide dos números y muestra la división real.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Dividendo: ");
        double a = double.Parse(Console.ReadLine());

        Console.Write("Divisor: ");
        double b = double.Parse(Console.ReadLine());

        Console.WriteLine("El cociente es: " + (a / b));
    }
}
```

---

## 6. Área de un rectángulo
Pide base y altura y calcula el área.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Base: ");
        double b = double.Parse(Console.ReadLine());

        Console.Write("Altura: ");
        double h = double.Parse(Console.ReadLine());

        Console.WriteLine("Área del rectángulo: " + (b * h));
    }
}
```

---

## 7. Área de un círculo
Pide el radio y calcula el área.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Radio: ");
        double r = double.Parse(Console.ReadLine());

        double area = Math.PI * r * r;

        Console.WriteLine("Área del círculo: " + area);
    }
}
```

---

## 8. Conversión a mayúsculas
Pide una palabra y la muestra en mayúsculas.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Escribe una palabra: ");
        string palabra = Console.ReadLine();

        Console.WriteLine("En mayúsculas: " + palabra.ToUpper());
    }
}
```

---

## 9. Concatenación de cadenas
Pide el nombre y los apellidos y muestra el nombre completo.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Nombre: ");
        string nombre = Console.ReadLine();

        Console.Write("Apellidos: ");
        string apellidos = Console.ReadLine();

        Console.WriteLine("Nombre completo: " + nombre + " " + apellidos);
    }
}
```

---

## 10. Calcular promedio de tres números
Pide tres números y muestra la media aritmética.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.Write("Número 1: ");
        double a = double.Parse(Console.ReadLine());

        Console.Write("Número 2: ");
        double b = double.Parse(Console.ReadLine());

        Console.Write("Número 3: ");
        double c = double.Parse(Console.ReadLine());

        double promedio = (a + b + c) / 3;

        Console.WriteLine("Promedio: " + promedio);
    }
}
```

---

[![Made with ❤️ by Tever](https://img.shields.io/badge/Made%20with%20❤️-by%20Tever-181717?logo=github)](https://github.com/devTever)
