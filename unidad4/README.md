# Unidad 4: Programación Orientada a Objetos en C#

## Introducción
La **Programación Orientada a Objetos (POO)** es un paradigma de programación que organiza el software en torno a **clases** y **objetos**. Permite reutilizar código, facilitar el mantenimiento y modelar problemas del mundo real.

En C#, los pilares de la POO son:
1. **Clases y Objetos**
2. **Herencia**
3. **Polimorfismo**
4. **Interfaces**
5. **Genéricos**

---

## 1. Clases y Objetos
Una **clase** es un molde que define atributos (campos) y comportamientos (métodos).  
Un **objeto** es una instancia de una clase.

```csharp
public class Persona
{
    // Atributos (campos)
    public string Nombre;
    public int Edad;

    // Constructor
    public Persona(string nombre, int edad)
    {
        Nombre = nombre;
        Edad = edad;
    }

    // Método
    public void Saludar()
    {
        Console.WriteLine($"Hola, soy {Nombre} y tengo {Edad} años.");
    }
}

// Uso de la clase
class Program
{
    static void Main()
    {
        Persona p1 = new Persona("Ana", 25);
        p1.Saludar();
    }
}
```

---

## 2. Herencia
La **herencia** permite que una clase (hija) herede atributos y métodos de otra clase (padre).

```csharp
public class Animal
{
    public string Nombre;

    public void Comer()
    {
        Console.WriteLine($"{Nombre} está comiendo.");
    }
}

// Clase hija que hereda de Animal
public class Perro : Animal
{
    public void Ladrar()
    {
        Console.WriteLine($"{Nombre} dice: ¡Guau!");
    }
}

class Program
{
    static void Main()
    {
        Perro perro = new Perro();
        perro.Nombre = "Boby";
        perro.Comer();
        perro.Ladrar();
    }
}
```

---

## 3. Polimorfismo
El **polimorfismo** permite que un método tenga diferentes comportamientos según la clase que lo implemente.  
Se logra con **métodos virtuales** y la palabra clave `override`.

```csharp
public class Animal
{
    public virtual void HacerSonido()
    {
        Console.WriteLine("El animal hace un sonido.");
    }
}

public class Gato : Animal
{
    public override void HacerSonido()
    {
        Console.WriteLine("El gato dice: Miau.");
    }
}

public class Perro : Animal
{
    public override void HacerSonido()
    {
        Console.WriteLine("El perro dice: Guau.");
    }
}

public class Delfin : Animal
{
    public override void HacerSonido()
    {
        Console.WriteLine("El delfín dice: Auauaua.");
    }
}

class Program
{
    static void Main()
    {
		int numAnimales=50;
        List<Animal> animales = new List<Animal>();
		// Añadimos animales
		for(int i=0; i<numAnimales; i++)
			if(i%2 == 0) animales.Add(new Perro());
			else if(i%5 == 0) animales.Add(new Delfin());
			else animales.Add(new Gato());
		
		foreach (var animal in animales)
			animal.HacerSonido();
    }
}
```

---

## 4. Interfaces
Una **interfaz** define un contrato que las clases deben implementar.  
Las interfaces solo contienen definiciones, no implementación.

```csharp
public interface IVehiculo
{
    void Conducir();
}

public class Coche : IVehiculo
{
    public void Conducir()
    {
        Console.WriteLine("Conduciendo un coche.");
    }
}

public class Moto : IVehiculo
{
    public void Conducir()
    {
        Console.WriteLine("Conduciendo una moto.");
    }
}

class Program
{
    static void Main()
    {
        IVehiculo v1 = new Coche();
        IVehiculo v2 = new Moto();

        v1.Conducir();
        v2.Conducir();
    }
}
```

---

## 5. Genéricos
Los **genéricos** permiten definir clases, interfaces o métodos que trabajan con cualquier tipo de datos.

```csharp
public class Caja<T>
{
    private T contenido;

    public void Guardar(T valor)
    {
        contenido = valor;
    }

    public T Obtener()
    {
        return contenido;
    }
}

class Program
{
    static void Main()
    {
        // Caja de enteros
        Caja<int> cajaEntero = new Caja<int>();
        cajaEntero.Guardar(123);
        Console.WriteLine(cajaEntero.Obtener());

        // Caja de cadenas
        Caja<string> cajaCadena = new Caja<string>();
        cajaCadena.Guardar("Hola mundo");
        Console.WriteLine(cajaCadena.Obtener());
    }
}
```

---

## Conclusión
En esta unidad hemos aprendido:
- Cómo crear clases y objetos.
- Cómo usar la herencia para reutilizar código.
- Cómo aplicar polimorfismo para cambiar el comportamiento de métodos.
- Cómo definir contratos con interfaces.
- Cómo usar genéricos para mayor flexibilidad.

La **POO en C#** es fundamental para desarrollar software modular, reutilizable y fácil de mantener.

---

[![Made with ❤️ by Tever](https://img.shields.io/badge/Made%20with%20❤️-by%20Tever-181717?logo=github)](https://github.com/devTever)
