
# Tema 2: El Lenguaje C#

Para estos ejemplos vamos a usar [Dotnetfiddle](https://dotnetfiddle.net/)

## 2.1 Características sintácticas básicas
C# es un lenguaje de programación moderno, orientado a objetos, diseñado por Microsoft como parte de la plataforma .NET. Sus principales características son:
- **Sintaxis similar a C/C++ y Java**, lo que lo hace fácil de aprender para programadores con experiencia previa.
- **Tipado fuerte y seguro**, obliga a declarar tipos de datos y evita errores comunes.
- **Lenguaje orientado a objetos (POO)**: todo se estructura en clases y objetos.
- **Compatibilidad con .NET**, lo que permite acceder a una gran librería de clases (Framework Class Library).
- **Portabilidad**: se ejecuta en múltiples sistemas operativos gracias a .NET Core / .NET 5+.

Ejemplo básico:
```csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hola, mundo!");
    }
}
```

---

## 2.2 Variables, constantes y tipos de datos
- **Variables**: almacenan datos que pueden cambiar durante la ejecución.
  ```csharp
  int edad = 20;
  string nombre = "Ana";
  double precio = 19.99;
  ```
- **Constantes**: valores que no cambian.
  ```csharp
  const double PI = 3.1416;
  ```
- **Tipos de datos primitivos**:
  - Enteros: `int`, `short`, `long`, `byte`
  - Reales: `float`, `double`, `decimal`
  - Caracteres y cadenas: `char`, `string`
  - Booleanos: `bool`

---

## 2.3 Operadores
- **Aritméticos**: `+`, `-`, `*`, `/`, `%`
- **Relacionales**: `==`, `!=`, `<`, `>`, `<=`, `>=`
- **Lógicos**: `&&`, `||`, `!`
- **Asignación**: `=`, `+=`, `-=`, `*=`, `/=`
- **Incremento/Decremento**: `++`, `--`

Ejemplo:
```csharp
int a = 5, b = 3;
bool resultado = (a > b) && (a != 0); // true
```

---

## 2.4 Instrucciones de control
- **Condicionales**:
  ```csharp
  if (edad >= 18) {
      Console.WriteLine("Mayor de edad");
  } else {
      Console.WriteLine("Menor de edad");
  }
  ```
- **Switch**:
  ```csharp
  switch (opcion) {
      case 1: Console.WriteLine("Opción 1"); break;
      case 2: Console.WriteLine("Opción 2"); break;
      default: Console.WriteLine("Opción no válida"); break;
  }
  ```
- **Bucles**:
  ```csharp
  for (int i = 0; i < 5; i++) Console.WriteLine(i);
  while (condicion) { /* código */ }
  do { /* código */ } while (condicion);
  ```

---

## 2.5 Utilización de las funciones incorporadas
C# dispone de una amplia librería estándar:
- `Console.WriteLine()` → salida por consola.
- Métodos de cadenas:
  ```csharp
  string texto = "Hola";
  Console.WriteLine(texto.ToUpper()); // HOLA
  ```
- Métodos matemáticos (`Math`):
  ```csharp
  double raiz = Math.Sqrt(16); // 4
  double potencia = Math.Pow(2,3); // 8
  ```

---

## 2.6 Arrays
Estructura que almacena múltiples valores del mismo tipo.
```csharp
int[] numeros = {1, 2, 3, 4, 5};
Console.WriteLine(numeros[0]); // 1
```

También se pueden recorrer:
```csharp
foreach (int n in numeros) {
    Console.WriteLine(n);
}
```

---

## 2.7 Clases y objetos
Base de la **programación orientada a objetos**.
```csharp
class Persona {
    public string Nombre { get; set; }
    public int Edad { get; set; }

    public void Saludar() {
        Console.WriteLine($"Hola, soy {Nombre}");
    }
}

class Program {
    static void Main() {
        Persona p = new Persona { Nombre = "Ana", Edad = 25 };
        p.Saludar();
    }
}
```

---

## 2.8 Tipos especiales de C#
- **Nullable**: permiten almacenar `null`.
  ```csharp
  int? numero = null;
  ```
- **Structs**: tipos por valor, útiles para datos pequeños.
  ```csharp
  struct Punto {
      public int X, Y;
  }
  ```
- **Enums**: listas de valores predefinidos.
  ```csharp
  enum Dia { Lunes, Martes, Miercoles }
  ```
- **Dynamic**: permite cambiar el tipo en tiempo de ejecución.
- **Var**: inferencia de tipos en compilación.

---

## 2.9 Control de excepciones
Se usa para manejar errores de ejecución:
```csharp
try {
    int x = int.Parse("abc"); // lanza excepción
} catch (FormatException e) {
    Console.WriteLine("Formato incorrecto");
} finally {
    Console.WriteLine("Bloque finally ejecutado");
}
```

---

## 2.10 Fases del desarrollo de aplicaciones en C# .NET
1. **Análisis de requisitos** → Definir qué debe hacer la aplicación.
2. **Diseño** → Modelar la arquitectura (clases, interfaces, BD).
3. **Codificación** → Escribir el programa en C#.
4. **Compilación** → El código C# se convierte en **CIL** (Common Intermediate Language).
5. **Ejecución en CLR** → El Common Language Runtime ejecuta el código.
6. **Pruebas y depuración** → Verificar funcionamiento correcto.
7. **Despliegue** → Instalar en el entorno de usuario.
8. **Mantenimiento** → Actualizaciones y correcciones.

---

[![Made with ❤️ by Tever](https://img.shields.io/badge/Made%20with%20❤️-by%20Tever-181717?logo=github)](https://github.com/devTever)
