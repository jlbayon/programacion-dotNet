# 📘 Controles de Windows Forms

Los controles de Windows Forms son objetos gráficos que se colocan en un formulario para interactuar con el usuario. Cada uno tiene:

- **Propiedades**: definen su apariencia y comportamiento.  
- **Eventos**: permiten reaccionar a acciones del usuario o del sistema.  
- **Métodos**: acciones que se pueden ejecutar desde el código.

---

## 🔹 1. Button
Un botón permite ejecutar una acción cuando el usuario hace clic.

### Propiedades comunes
- `Text`: texto que muestra el botón.  
- `Enabled`: indica si está habilitado.  
- `BackColor`, `ForeColor`: colores de fondo y de texto.  
- `Font`: tipo de letra.  
- `Image`: imagen asociada al botón.  
- `DialogResult`: usado en formularios de diálogo (`OK`, `Cancel`, etc.).  

### Eventos principales
- `Click`: ocurre cuando el usuario hace clic.  
- `MouseEnter`: cuando el puntero entra en el botón.  
- `MouseLeave`: cuando el puntero sale.  
- `KeyDown`: al presionar una tecla mientras el botón tiene el foco.  
- `KeyUp`: al soltar la tecla.  



---

## 🔹 2. Label
Muestra texto no editable en el formulario.

### Propiedades comunes
- `Text`: texto mostrado.  
- `AutoSize`: ajusta el tamaño al texto.  
- `Font`: tipo de letra.  
- `ForeColor`: color del texto.  
- `BackColor`: color de fondo.  
- `TextAlign`: alineación del texto.  

### Eventos principales
- `Click`: aunque no suele usarse, puede detectar clics.  
- `MouseEnter` / `MouseLeave`: útil para efectos visuales.  

---

## 🔹 3. TextBox
Permite la entrada de texto por parte del usuario.

### Propiedades comunes
- `Text`: contenido del cuadro.  
- `Multiline`: permite varias líneas.  
- `PasswordChar`: oculta caracteres (ej. contraseñas).  
- `ReadOnly`: evita edición.  
- `MaxLength`: número máximo de caracteres.  

### Eventos principales
- `TextChanged`: cuando cambia el contenido.  
- `KeyDown` / `KeyUp`: teclas presionadas.  
- `KeyPress`: captura caracteres individuales.  
- `Enter`: cuando el control obtiene el foco.  
- `Leave`: cuando el control pierde el foco.  

---

## 🔹 4. CheckBox
Casilla de verificación que puede estar marcada o no.

### Propiedades comunes
- `Checked`: indica si está marcado.  
- `CheckState`: `Checked`, `Unchecked` o `Indeterminate`.  
- `Text`: etiqueta visible.  
- `ThreeState`: permite estado intermedio.  

### Eventos principales
- `CheckedChanged`: cuando cambia el estado.    
- `Click`: cuando el usuario pulsa sobre él.  

---

## 🔹 5. RadioButton
Botones de opción para elegir solo una alternativa dentro de un grupo.

### Propiedades comunes
- `Checked`: indica si está seleccionado.  
- `Text`: texto que muestra.  
- `AutoCheck`: si está en `true`, se deseleccionan los demás automáticamente.  

### Eventos principales
- `CheckedChanged`: cuando se selecciona.  
- `Click`: cuando el usuario lo pulsa.  

---

## 🔹 6. ListBox
Muestra una lista de elementos.

### Propiedades comunes
- `Items`: colección de elementos.  
- `SelectedItem`: elemento actual.  
- `SelectedIndex`: índice del elemento actual.  
- `SelectionMode`: simple o múltiple.  
- `Sorted`: ordena automáticamente los elementos.  

### Eventos principales
- `SelectedIndexChanged`: cuando cambia la selección.  
- `DoubleClick`: al hacer doble clic en un elemento.  
- `KeyDown` / `KeyPress`: capturar teclas mientras está activo.  

---

## 🔹 7. ComboBox
Lista desplegable que permite seleccionar o escribir.

### Propiedades comunes
- `Items`: colección de opciones.  
- `DropDownStyle`: `DropDown`, `DropDownList`, `Simple`.  
- `SelectedItem` / `SelectedIndex`: opción elegida.  
- `Text`: texto actual.  

### Eventos principales
- `SelectedIndexChanged`: cuando se cambia la selección.  
- `TextChanged`: cuando se escribe texto.  
- `DropDown`: cuando se abre la lista.  

---

## 🔹 8. PictureBox
Muestra imágenes en el formulario.

### Propiedades comunes
- `Image`: la imagen cargada.  
- `SizeMode`: `Normal`, `StretchImage`, `AutoSize`, `CenterImage`, `Zoom`.  
- `BorderStyle`: estilo del borde.  

### Eventos principales
- `Click`: al hacer clic sobre la imagen.  
- `MouseMove`: al mover el puntero.  

---

## 🔹 9. Panel / GroupBox
Contenedores para organizar otros controles.

- **Panel**: contenedor flexible, puede tener scroll (`AutoScroll`).  
- **GroupBox**: incluye un título, ideal para agrupar RadioButtons.  

### Eventos principales
- `Paint`: personalización de dibujo.  
- `Enter` / `Leave`: cuando gana o pierde el foco.  

---

## 🔹 10. DataGridView
Control avanzado para mostrar y editar datos en forma tabular.

### Propiedades comunes
- `DataSource`: fuente de datos (lista, DataTable, etc.).  
- `Columns` / `Rows`: acceso directo a celdas.  
- `AllowUserToAddRows`: permite añadir filas.  
- `AllowUserToDeleteRows`: permite borrarlas.  
- `ReadOnly`: solo lectura.  

### Eventos principales
- `CellClick`: clic en una celda.  
- `CellValueChanged`: cambio en el valor.  
- `RowEnter` / `RowLeave`: cambio de fila.  

---

# 📊 Resumen
- **Button / Label / TextBox** → interacción básica.  
- **CheckBox / RadioButton** → opciones de selección.  
- **ListBox / ComboBox** → listas desplegables o múltiples.  
- **PictureBox** → imágenes.  
- **Panel / GroupBox** → organización de la UI.  
- **DataGridView** → manejo de datos tabulares.
