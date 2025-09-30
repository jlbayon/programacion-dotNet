using System.Text.Json;
using System.Text.Json.Serialization;

namespace TuTiempo
{
    // Clases para mapear el JSON
    internal class WeatherResponse
    {
        [JsonPropertyName("current_weather")]
        public CurrentWeather CurrentWeather { get; set; }
    }

    internal class CurrentWeather
    {
        public double Temperature { get; set; }
        public double Windspeed { get; set; }
        public int Winddirection { get; set; }
        public int Weathercode { get; set; }
        public DateTime Time { get; set; }
    }

    public class TiempoCiudad
    {
        public string Url { get; set; }
        public Ciudad Ciudad { get; set; }
        public Double Temperatura { get; set; }
        public Double VelocidadViento { get; set; }
        public TiempoCiudad(Ciudad ciudad)
        {
            Ciudad = ciudad;
        }

        public async Task CargarTiempo()
        {
            // Url de la API con latitud y longitud
            Url = $"https://api.open-meteo.com/v1/forecast?latitude={Ciudad.Latitud.ToString(System.Globalization.CultureInfo.InvariantCulture)}&longitude={Ciudad.Longitud.ToString(System.Globalization.CultureInfo.InvariantCulture)}&current_weather=true";
            // Crear HttpClient
            using HttpClient client = new HttpClient();
            // Hacer la solicitud HTTP
            var response = await client.GetStringAsync(Url);
            // Deserializar JSON
            var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            var weatherData = JsonSerializer.Deserialize<WeatherResponse>(response, options);
            // Mostrar resultados
            Temperatura = weatherData.CurrentWeather.Temperature;
            VelocidadViento = weatherData.CurrentWeather.Windspeed;
        }

    }
}
