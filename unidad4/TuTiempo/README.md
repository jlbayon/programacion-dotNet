# 🌦️ Proyecto TuTiempo

## 📌 Descripción
**TuTiempo** es una aplicación de consola en C# que permite consultar información meteorológica en tiempo real utilizando la API gratuita [Open-Meteo](https://open-meteo.com).  
El usuario puede:

- Ver la lista de ciudades registradas.
- Añadir nuevas ciudades con nombre, país, latitud y longitud.
- Consultar el tiempo actual de una ciudad seleccionada (temperatura y velocidad del viento).
- Salir de la aplicación.

---

## 🛠️ Tecnologías utilizadas
- Lenguaje: **C# (.NET 6/7/8)**
- API: **Open-Meteo** (no requiere API Key)
- Librerías principales:
  - `System.Net.Http` para realizar las solicitudes HTTP.
  - `System.Text.Json` para deserializar la respuesta JSON.

---

## 📂 Estructura del proyecto

```
TuTiempo/
│── Ciudad.cs          # Clase para representar una ciudad
│── TiempoCiudad.cs    # Lógica para consultar la API de Open-Meteo
│── Program.cs         # Menú principal y flujo del programa
│── TuTiempo.csproj    # Configuración del proyecto
```

---

## 🏗️ Clases principales

### 🔹 `Ciudad`
Representa una ciudad con sus datos básicos.

```csharp
public class Ciudad
{
    public string Nombre { get; set; }
    public string Pais { get; set; }
    public double Latitud { get; set; }
    public double Longitud { get; set; }

    public Ciudad(string nombre, string pais, double latitud, double longitud)
    {
        Nombre = nombre;
        Pais = pais;
        Latitud = latitud;
        Longitud = longitud;
    }
}
```

---

### 🔹 `TiempoCiudad`
Se encarga de construir la URL, llamar a la API de Open-Meteo y deserializar la respuesta.

```csharp
public class TiempoCiudad
{
    public string Url { get; set; }
    public Ciudad Ciudad { get; set; }
    public double Temperatura { get; set; }
    public double VelocidadViento { get; set; }

    public TiempoCiudad(Ciudad ciudad)
    {
        Ciudad = ciudad;
    }

    public async Task CargarTiempo()
    {
        Url = $"https://api.open-meteo.com/v1/forecast?latitude={Ciudad.Latitud.ToString(System.Globalization.CultureInfo.InvariantCulture)}&longitude={Ciudad.Longitud.ToString(System.Globalization.CultureInfo.InvariantCulture)}&current_weather=true";
        using HttpClient client = new HttpClient();
        var response = await client.GetStringAsync(Url);
        var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
        var weatherData = JsonSerializer.Deserialize<WeatherResponse>(response, options);
        Temperatura = weatherData.CurrentWeather.Temperature;
        VelocidadViento = weatherData.CurrentWeather.Windspeed;
    }
}
```

---

### 🔹 `Program`
Gestiona el menú interactivo, la lista de ciudades y la consulta del tiempo.

```csharp
class Program
{
    List<Ciudad> Ciudades;
    bool Ejecutando = true;

    public Program()
    {
        Ciudades = new List<Ciudad>
        {
            new Ciudad("Madrid", "España", 40.4168, -3.7038),
            new Ciudad("Barcelona", "España", 41.3851, 2.1734),
            new Ciudad("Valencia", "España", 39.4699, -0.3763)
        };
    }

    // Métodos: MostrarMenu, VerCiudades, AniadirCiudad, VerTiempoCiudad, etc.
}
```

---

## ▶️ Ejecución del programa
Al ejecutar, se muestra el menú principal:

```
------------------------------------------------
--------------- TU TIEMPO APP ------------------
------------------------------------------------
1. Ver ciudades
2. Añadir ciudad
3. Ver tiempo de una ciudad
4. Salir
------------------------------------------------
Elige una opción:
```

Ejemplo de salida al consultar el tiempo de **Madrid**:

```
El tiempo en Madrid, España es:
Temperatura: 25.3°C
Velocidad Viento: 10.5 km/h
```

---

## 🚀 Posibles mejoras futuras
- Añadir humedad relativa y condiciones climáticas.
- Mostrar iconos o descripciones del tiempo.
- Guardar ciudades en un archivo JSON para persistencia.
- Crear una versión con interfaz gráfica (WinForms/WPF/MAUI).
- Exportar los datos a CSV o Excel.

