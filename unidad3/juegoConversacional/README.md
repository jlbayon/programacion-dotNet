# 🎲 Crimen en Palacio

Juego conversacional en C# (.NET) inspirado en Cluedo, donde debemos
descubrir al asesino en un palacio lleno de sospechosos y pistas.

------------------------------------------------------------------------

## 1. Título del Juego

Propuesta final: **Crimen en Palacio**

Alternativas:
```
- Misterio en el Palacio
- El Asesinato del Palacio
- Sombras en Palacio
```

------------------------------------------------------------------------

## 2. Historia Base

El detective llega al Palacio Real tras el aviso de un asesinato.\
El rey ha sido encontrado muerto en su biblioteca.

-   El palacio tiene varias salas: Biblioteca, Comedor, Jardín, Sala del
    Trono, Dormitorio, Cocina...\
-   En cada sala hay un objeto o personaje que ofrece una pista.\
-   El detective debe recopilar las pistas en su libreta para finalmente
    deducir quién es el asesino.

------------------------------------------------------------------------

## 3. Estructura del Juego

-   **Mapa:** Representado por una matriz bidimensional (`array[,]`) de
    salas.\
-   **Jugador:** Detective que se mueve por las salas con comandos (`N`,
    `S`, `E`, `O`).\
-   **Salas:** Cada sala tiene un nombre, descripción y puede contener
    un personaje u objeto.\
-   **Objetos:** Dan pistas al interactuar (ej: un cuchillo
    ensangrentado).\
-   **Personajes:** Responden con una pista (verdadera o falsa).\
-   **Libreta:** Lista de pistas recopiladas, siempre consultable.

------------------------------------------------------------------------

## 4. Clases en C#

``` csharp
// Clase Sala
class Sala {
    public string Nombre { get; set; }
    public string Descripcion { get; set; }
    public Objeto Objeto { get; set; }
    public Personaje Personaje { get; set; }
}

// Clase Objeto
class Objeto {
    public string Nombre { get; set; }
    public string Pista { get; set; }
}

// Clase Personaje
class Personaje {
    public string Nombre { get; set; }
    public string Dialogo { get; set; }
}

// Clase Detective
class Detective {
    public List<string> Libreta { get; set; } = new List<string>();

    public void Apuntar(string pista) {
        Libreta.Add(pista);
    }

    public void MostrarLibreta() {
        Console.WriteLine("📒 Libreta del detective:");
        foreach (var pista in Libreta) {
            Console.WriteLine("- " + pista);
        }
    }
}
```

------------------------------------------------------------------------

## 5. Dinámica de Juego

1.  El jugador empieza en la entrada del palacio.\
2.  Puede moverse con comandos: `norte`, `sur`, `este`, `oeste`.\
3.  Si hay un personaje u objeto en la sala, puede interactuar con
    `hablar` o `examinar`.\
4.  La pista se guarda en la libreta.\
5.  En cualquier momento puede escribir `libreta` para revisar lo
    recopilado.\
6.  Cuando crea tener al culpable, escribe `acusar <nombre>`.

------------------------------------------------------------------------

## 6. Ejemplo de Flujo

    Bienvenido al Palacio del Crimen.
    Un asesinato ha tenido lugar. ¡Descubre quién fue!

    Te encuentras en la Sala del Trono.
    Opciones: norte (Biblioteca), este (Comedor).
    > norte

    Has entrado en la Biblioteca.
    Hay un personaje: La Dama de Compañía.
    > hablar

    Dama de Compañía: “Yo vi al cocinero con un cuchillo ayer por la noche…”
    (Pista anotada en tu libreta).
    > libreta
    📒 Libreta del detective:
    - La Dama de Compañía vio al cocinero con un cuchillo.

---

[![Made with ❤️ by Tever](https://img.shields.io/badge/Made%20with%20❤️-by%20Tever-181717?logo=github)](https://github.com/devTever)
