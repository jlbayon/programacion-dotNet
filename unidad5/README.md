# 📘 Apuntes: Aplicaciones Windows con C#

## 1. Introducción a Windows Forms
- **Windows Forms** es un conjunto de clases dentro del **.NET Framework** para crear aplicaciones de escritorio.
- Cada aplicación tiene:
  - **Form (Formulario):** ventana principal o secundaria.
  - **Controles:** elementos interactivos (botones, cuadros de texto, menús, etc.).
  - **Eventos:** acciones que ocurren (clic, carga, cambio de texto…).

---

## 2. Formularios
- El **Form** es la clase base (`System.Windows.Forms.Form`).
- Propiedades importantes:
  - `Text`: título de la ventana.
  - `Name`: identificador del formulario.
  - `StartPosition`: posición inicial.
  - `FormBorderStyle`: estilo de la ventana (fijo, redimensionable, etc.).
  - `BackColor`, `ForeColor`: colores de fondo y texto.
- Métodos útiles:
  - `Show()`: muestra el formulario de manera no modal.
  - `ShowDialog()`: muestra el formulario como modal (bloquea al padre).
  - `Close()`: cierra el formulario.

---

## 3. Controles
### Controles básicos:
- **Button**: botón que ejecuta acciones.
- **Label**: muestra texto estático.
- **TextBox**: entrada de texto.
- **CheckBox** y **RadioButton**: selección de opciones.
- **ListBox** y **ComboBox**: listas desplegables o de selección.
- **PictureBox**: mostrar imágenes.
- **DataGridView**: mostrar y editar tablas de datos.

### Propiedades comunes:
- `Text`: texto mostrado.
- `Enabled`: habilitado o deshabilitado.
- `Visible`: mostrar/ocultar.
- `Dock` y `Anchor`: controlar ubicación y redimensionamiento automático.

---

## 4. Eventos
- Los **eventos** permiten reaccionar a la interacción del usuario.
- Sintaxis:
  ```csharp
  private void button1_Click(object sender, EventArgs e)
  {
      MessageBox.Show("Botón pulsado");
  }
  ```
- Ejemplos comunes:
  - `Click`: cuando se hace clic en un control.
  - `Load`: al cargar el formulario.
  - `TextChanged`: cuando cambia el texto de un control.
  - `CheckedChanged`: cuando cambia un `CheckBox` o `RadioButton`.
  - `SelectedIndexChanged`: cuando cambia la selección de una lista.

---

## 5. Formularios MDI (Multiple Document Interface)
- Permiten manejar varios formularios dentro de una ventana principal.
- Configuración:
  - En el formulario principal: `IsMdiContainer = true;`
  - Crear formularios hijos:
    ```csharp
    FormHijo hijo = new FormHijo();
    hijo.MdiParent = this;
    hijo.Show();
    ```
- Uso común en aplicaciones como editores de texto, IDEs, sistemas de gestión.

---

## 6. Distribución de Controles y Diseño
- **Layout**: organizar controles para una buena interfaz.
- Opciones:
  - `Dock`: acoplar control a un borde o rellenar.
  - `Anchor`: mantener posición relativa al borde.
  - **TableLayoutPanel**: organiza en filas y columnas.
  - **FlowLayoutPanel**: organiza controles en fila/columna.
- Buenas prácticas:
  - Usar nombres significativos en controles (`txtNombre`, `btnGuardar`).
  - Agrupar controles relacionados con `GroupBox` o `Panel`.
  - Mantener consistencia en colores, fuentes y márgenes.

---

## 7. Ejemplo básico
```csharp
using System;
using System.Windows.Forms;

namespace MiPrimeraApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnSaludar_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Hola " + txtNombre.Text);
        }
    }
}
```

---

## 8. Distribución de la aplicación
- Una aplicación Windows Forms se distribuye como:
  - **Ejecutable (.exe)**: compilado en `bin/Debug` o `bin/Release`.
  - Puede complementarse con **archivos de configuración** (`app.config`).
  - Herramientas de distribución:
    - **ClickOnce**: despliegue simple desde Visual Studio.
    - **Instaladores MSI** o proyectos de instalación.
    - Publicación en carpetas compartidas o en la nube.
