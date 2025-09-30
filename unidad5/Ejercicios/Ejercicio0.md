# 🧪 Ejercicios de Windows Forms (Form, Button, CheckBox y RadioButton)

> Objetivo: practicar **formularios**, **botones**, **checkbox** y **radiobutton** y sus **eventos** (`Click`, `CheckedChanged`, `Load`).  

---

## ✅ Recomendaciones generales
- Crea un proyecto **Windows Forms App**.
- En cada ejercicio, usa **nombres de controles** claros: `btnAceptar`, `chkAcepto`, `rbtnOpcionA`, etc.
- Suscríbete a los eventos desde el diseñador:
  ```csharp
  btnAceptar.Click += BtnAceptar_Click;
  chkAcepto.CheckedChanged += ChkAcepto_CheckedChanged;
  rbtnOpcionA.CheckedChanged += RbtnOpcionA_CheckedChanged;
  this.Load += Form1_Load; // evento del formulario
  ```

---

## 1) Hola, botón
**Descripción:** Crea un formulario con un botón `btnSaludar`. Al hacer clic, muestra un mensaje con `MessageBox` saludando al usuario.

**Eventos:** `Button.Click`

**Criterios de aceptación:**
- Al pulsar el botón aparece un mensaje: *"¡Hola!"*

**Pista:** `MessageBox.Show("¡Hola!");`

---

## 2) Contador de clics
**Descripción:** Dos botones: `btnSumar` y `btnReiniciar`. Muestra el número de clics acumulados **en el título del formulario** (propiedad `this.Text`).

**Eventos:** `Button.Click`

**Criterios de aceptación:**
- `btnSumar` incrementa un contador interno (variable `int` en la clase).
- `btnReiniciar` pone el contador a 0.
- El título del formulario refleja el valor: *"Clics: N"*

**Pista:** `this.Text = $"Clics: {contador}";`

---

## 3) Habilitar/Deshabilitar acción
**Descripción:** Un `CheckBox` (`chkAcepto`) y un botón (`btnContinuar`). El botón solo debe estar **habilitado** si el CheckBox está marcado.

**Eventos:** `CheckBox.CheckedChanged`

**Criterios de aceptación:**
- `btnContinuar.Enabled` cambia en función del estado de `chkAcepto`.

**Pista:** `btnContinuar.Enabled = chkAcepto.Checked;`

---

## 4) Tema Claro / Oscuro
**Descripción:** Dos `RadioButton`: `rbtnClaro` y `rbtnOscuro`. Al seleccionar uno, cambia los colores del formulario (por ejemplo, `BackColor` y `ForeColor`).

**Eventos:** `RadioButton.CheckedChanged`

**Criterios de aceptación:**
- Si `rbtnClaro` está marcado → fondo claro, texto oscuro.
- Si `rbtnOscuro` está marcado → fondo oscuro, texto claro.

**Pista:** cambia `this.BackColor` y `this.ForeColor` en función de `rbtnClaro.Checked`.

---

## 5) Selección de nivel
**Descripción:** Tres `RadioButton` (`rbtnFacil`, `rbtnMedio`, `rbtnDificil`) y un botón `btnIniciar`. Al pulsar el botón, muestra en un `MessageBox` el nivel elegido.

**Eventos:** `Button.Click`, `RadioButton.CheckedChanged` (opcional)

**Criterios de aceptación:**
- Si no hay ninguno seleccionado, avisa al usuario.
- Si hay uno seleccionado, indica cuál.

**Pista:** comprueba `rbtnFacil.Checked || rbtnMedio.Checked || rbtnDificil.Checked`.

---

## 6) Preferencias con CheckBox
**Descripción:** Tres `CheckBox` (por ejemplo `chkMusica`, `chkDeportes`, `chkLectura`) y un `btnResumen`. Al pulsar el botón, muestra un resumen de las preferencias **seleccionadas** en un `MessageBox` (si no hay ninguna, indícalo).

**Eventos:** `Button.Click`, `CheckBox.CheckedChanged` (opcional para feedback inmediato)

**Criterios de aceptación:**
- El resumen solo incluye los checkboxes marcados.

**Pista:** concatena cadenas si `chkX.Checked` es `true`.

---

## 7) Validación combinada
**Descripción:** Un `CheckBox` `chkAcepto` y **dos** `RadioButton` (`rbtnOpcionA`, `rbtnOpcionB`) con un botón `btnContinuar`. El botón solo debe estar habilitado si **`chkAcepto` está marcado** **y** **algún `RadioButton` está seleccionado**.

**Eventos:** `CheckBox.CheckedChanged`, `RadioButton.CheckedChanged`

**Criterios de aceptación:**
- `btnContinuar.Enabled` refleja ambas condiciones.

**Pista:** método auxiliar:
```csharp
private void ActualizarEstado()
{
    bool hayOpcion = rbtnOpcionA.Checked || rbtnOpcionB.Checked;
    btnContinuar.Enabled = chkAcepto.Checked && hayOpcion;
}
```
Llama a `ActualizarEstado()` desde ambos eventos.

---

## 8) Botón que alterna un CheckBox
**Descripción:** Un botón `btnAlternar` y un `CheckBox` `chkNotificaciones`. Al pulsar el botón, invierte el estado del CheckBox (si está marcado, lo desmarca; si no, lo marca). Además, cada cambio muestra un `MessageBox` con el nuevo estado.

**Eventos:** `Button.Click`, `CheckBox.CheckedChanged`

**Criterios de aceptación:**
- `chkNotificaciones.Checked` cambia al pulsar el botón.
- Se notifica el nuevo estado en cada cambio.

**Pista:** `chkNotificaciones.Checked = !chkNotificaciones.Checked;`

---

## 9) Idioma de la interfaz
**Descripción:** Tres `RadioButton` (`rbtnES`, `rbtnEN`, `rbtnFR`). Al seleccionar cada uno, cambia el **texto de los botones** del formulario (`btnAceptar`, `btnCancelar`) al idioma correspondiente.

**Eventos:** `RadioButton.CheckedChanged`

**Criterios de aceptación:**
- Los textos cambian según el idioma seleccionado.
- Debe funcionar aunque se cambie de idioma varias veces.

**Pista:** crear un método `AplicarIdioma()` y llamarlo cuando cambie cualquier `RadioButton`.

---

## 10) Mini cuestionario binario
**Descripción:** Tres preguntas de **sí/no** usando `RadioButton` (dos por pregunta). Un botón `btnResultado` muestra un puntaje: suma 1 por cada respuesta **"Sí"** seleccionada.

**Eventos:** `Button.Click`, `RadioButton.CheckedChanged` (opcional)

**Criterios de aceptación:**
- Valida que en cada pregunta haya una opción marcada (si no, avisa).
- Calcula la puntuación total.

**Pista:** por cada pareja `(rbtnQ1Si, rbtnQ1No)`, suma `1` si `rbtnQ1Si.Checked`.

---

# 🧩 Firmas de eventos útiles (para copiar y pegar)

```csharp
private void Form1_Load(object sender, EventArgs e) { }

private void BtnGenerico_Click(object sender, EventArgs e) { }

private void ChkGenerico_CheckedChanged(object sender, EventArgs e) { }

private void RbtnGenerico_CheckedChanged(object sender, EventArgs e) { }
```


## 📦 Extra (opcional)
- Crea **un formulario por ejercicio** para que puedas probarlos por separado.
- Añade un **formulario menú** con botones para abrir cada ejercicio (como ya hicimos en tu proyecto).

---
