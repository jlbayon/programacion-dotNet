namespace TuTiempo
{
    class Program
    {
        // Lista de Ciudades
        List<Ciudad> Ciudades;
        bool Ejecutando = true;

        public Program()
        {
            Ciudades = new List<Ciudad>();
            Ciudades.Add(new Ciudad("Madrid", "España", 40.4168, -3.7038));
            Ciudades.Add(new Ciudad("Barcelona", "España", 41.3851, 2.1734));
            Ciudades.Add(new Ciudad("Valencia", "España", 39.4699, -0.3763));
        }

        string MostrarMenu()
        {
            Console.Clear();
            Console.WriteLine("------------------------------------------------");
            Console.WriteLine("--------------- TU TIEMPO APP ------------------");
            Console.WriteLine("------------------------------------------------");
            Console.WriteLine("1. Ver ciudades");
            Console.WriteLine("2. Añadir ciudad");
            Console.WriteLine("3. Ver tiempo de una ciudad");
            Console.WriteLine("4. Salir");
            Console.WriteLine("------------------------------------------------");
            Console.Write("Elige una opción: ");
            char opcion = Console.ReadKey(true).KeyChar;
            return opcion.ToString();
        }

        void EjecutarOpcion(string opcion)
        {
            switch (opcion)
            {
                case "1":
                    VerCiudades();
                    break;
                case "2":
                    AniadirCiudad();
                    break;
                case "3":
                    VerTiempoCiudad();
                    break;
                case "4":
                    Ejecutando = false;
                    break;
                default:
                    Console.WriteLine("Opción no válida. Pulsa una tecla para continuar...");
                    Console.ReadKey();
                    break;
            }
        }

        void VerCiudades()
        {
            Console.Clear();
            Console.WriteLine("------------------------------------------------");
            Console.WriteLine("--------------- LISTA DE CIUDADES --------------");
            Console.WriteLine("------------------------------------------------");
            for (int i = 0; i < Ciudades.Count; i++)
            {
                Console.WriteLine($"{i + 1}. {Ciudades[i].Nombre}, {Ciudades[i].Pais} (Lat: {Ciudades[i].Latitud}, Lon: {Ciudades[i].Longitud})");
            }
            Console.WriteLine("------------------------------------------------");
            Console.WriteLine("Pulsa una tecla para volver al menú...");
            Console.ReadKey();
        }

        void AniadirCiudad()
        {
            Console.Clear();
            Console.WriteLine("------------------------------------------------");
            Console.WriteLine("--------------- AÑADIR NUEVA CIUDAD ------------");
            Console.WriteLine("------------------------------------------------");
            Console.Write("Nombre de la ciudad: ");
            string nombre = Console.ReadLine();
            Console.Write("País: ");
            string pais = Console.ReadLine();
            Console.Write("Latitud: ");
            double latitud = Convert.ToDouble(Console.ReadLine());
            Console.Write("Longitud: ");
            double longitud = Convert.ToDouble(Console.ReadLine());
            Ciudades.Add(new Ciudad(nombre, pais, latitud, longitud));
            Console.WriteLine("Ciudad añadida correctamente. Pulsa una tecla para volver al menú...");
            Console.ReadKey();
        }

        async void VerTiempoCiudad()
        {
            Console.Clear();
            Console.WriteLine("------------------------------------------------");
            Console.WriteLine("--------------- VER TIEMPO CIUDAD --------------");
            Console.WriteLine("------------------------------------------------");
            for (int i = 0; i < Ciudades.Count; i++)
            {
                Console.WriteLine($"{i + 1}. {Ciudades[i].Nombre}, {Ciudades[i].Pais}");
            }
            Console.Write("Elige una ciudad por número: ");
            int indice = Convert.ToInt32(Console.ReadLine()) - 1;
            if (indice >= 0 && indice < Ciudades.Count)
            {
                Ciudad ciudad = Ciudades[indice];
                TiempoCiudad tiempoCiudad = new TiempoCiudad(ciudad);

                await tiempoCiudad.CargarTiempo(); // 👈 ahora sí

                Console.WriteLine($"El tiempo en {ciudad.Nombre}, {ciudad.Pais} es:");
                Console.WriteLine($"Temperatura: {tiempoCiudad.Temperatura}°C");
                Console.WriteLine($"Velocidad Viento: {tiempoCiudad.VelocidadViento} km/h");
            }
            else
            {
                Console.WriteLine("Ciudad no válida.");
            }
            Console.WriteLine("Pulsa una tecla para volver al menú...");
            Console.ReadKey();
        }

        public void LanzarPrograma()
        {
            do
            {
                string opcion = MostrarMenu();
                EjecutarOpcion(opcion);
            } while (Ejecutando) ;

            Console.WriteLine("-----------------------------------------------");
            Console.WriteLine("Adios, muchas gracias por usar nuestro programa");
            Console.WriteLine("Pulsa una tecla para salir...");
            Console.ReadKey();
        }

        static void Main(string[] args)
        {
            Program program = new Program();
            program.LanzarPrograma();
        }
    }
}