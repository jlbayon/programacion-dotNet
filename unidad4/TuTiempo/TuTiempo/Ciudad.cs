
namespace TuTiempo
{
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
}
