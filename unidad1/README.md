# PROGRAMACIÓN EN .NET - IFCT011PO  

## 1. LA PLATAFORMA .NET 👑

La plataforma **.NET** es un **entorno de desarrollo y ejecución** creado por Microsoft que permite construir y ejecutar aplicaciones en múltiples lenguajes de programación, de forma segura y eficiente.  
Su objetivo principal es **unificar** el desarrollo de aplicaciones para escritorio, web, móviles, juegos y servicios en la nube bajo un mismo ecosistema.

---

### 1.1. Características y filosofía de funcionamiento

- **Multiplataforma**:  
  Con **.NET Core** (ahora parte de **.NET 5+**), el framework funciona en **Windows, Linux y macOS**, lo que permite desarrollar aplicaciones portables.  

- **Independencia del lenguaje**:  
  .NET soporta diversos lenguajes como **C#**, **F#** y **Visual Basic .NET**, gracias a un entorno común de ejecución.

- **Ejecución bajo el CLR (Common Language Runtime)**:  
  El CLR proporciona:
  - Gestión automática de memoria (*Garbage Collector*).
  - Seguridad de tipos y ejecución controlada.
  - Manejo de excepciones.
  - Interoperabilidad entre lenguajes.

- **Librerías de clases unificadas**:  
  La **Base Class Library (BCL)** ofrece colecciones, acceso a datos, manipulación de cadenas, entrada/salida, gráficos y más.

- **Productividad y escalabilidad**:  
  Su filosofía se centra en:
  - Facilitar la escritura de código robusto y mantenible.
  - Permitir aplicaciones desde pequeños proyectos hasta sistemas empresariales.

---

### 1.2. Los lenguajes de .NET y el código intermedio

- **Lenguajes principales soportados**:
  - **C#**: lenguaje moderno, orientado a objetos, versátil y con gran soporte en la comunidad.
  - **Visual Basic .NET**: más sencillo de aprender, sintaxis amigable para principiantes.
  - **F#**: orientado a la programación funcional y matemática.

- **Código intermedio (IL – Intermediate Language)**:
  - Todo código escrito en cualquiera de los lenguajes .NET se compila a un **lenguaje intermedio común**.
  - Este código IL no es ejecutado directamente por la máquina, sino por el **CLR**.
  - En tiempo de ejecución, un compilador JIT (*Just-In-Time*) convierte el IL en **código máquina nativo**, optimizado para el sistema operativo y hardware donde se ejecuta.

- **Ventajas del uso de IL**:
  - Permite la interoperabilidad entre lenguajes.
  - Mejora la portabilidad del software.
  - Ofrece seguridad y control en la ejecución.

---

### 1.3. El entorno de desarrollo Visual Studio .NET

**Visual Studio** es el **IDE oficial de Microsoft** para desarrollar aplicaciones en .NET.  
Ofrece un conjunto de herramientas que simplifican el proceso de programación:

- **Editor de código avanzado**:
  - Coloreado de sintaxis.
  - Autocompletado (*IntelliSense*).
  - Refactorización de código.

- **Depuración integrada**:
  - Permite detectar errores en tiempo de ejecución.
  - Incluye puntos de interrupción (*breakpoints*) y monitoreo de variables.

- **Diseñadores gráficos**:
  - Para aplicaciones de escritorio (Windows Forms, WPF).
  - Para aplicaciones web (ASP.NET).
  - Para interfaces móviles (Xamarin, MAUI).

- **Gestión de proyectos y soluciones**:
  - Organización en múltiples módulos.
  - Soporte para control de versiones integrado (Git).

- **Integración con Azure y la nube**:
  - Implementación y pruebas directamente desde el IDE.

- **Versiones disponibles**:
  - **Visual Studio Community** (gratuita para estudiantes, open source y uso personal).
  - **Visual Studio Professional y Enterprise** (para entornos empresariales).

---

### 1.4. Instalación del entorno de desarrollo

Para poder programar en .NET necesitaremos instalar un entorno adecuado. Tenemos dos opciones principales:

#### 1. Visual Studio Code (VS Code)

Un editor de código ligero, multiplataforma y altamente configurable.

1. Accede a la web oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/)  
2. Descarga el instalador correspondiente a tu sistema operativo (Windows, Linux o macOS).  
3. Instala el programa aceptando las opciones por defecto.  
4. Una vez abierto, instala las siguientes extensiones recomendadas:
   - **C# for Visual Studio Code** (soporte para .NET y C#).
   - **.NET Install Tool** (para instalar y actualizar el SDK).
   - **NuGet Package Manager** (para gestionar librerías externas).

> VS Code es ideal para quienes quieran un entorno ligero y multiplataforma.

---

#### 2. Visual Studio (IDE completo)

El entorno más potente y oficial de Microsoft para desarrollar en .NET.

1. Accede a la web oficial: [https://visualstudio.microsoft.com/](https://visualstudio.microsoft.com/)  
2. Descarga la versión gratuita **Visual Studio Community**.  
3. Durante la instalación selecciona las **cargas de trabajo** necesarias:
   - **Desarrollo de escritorio con .NET** (Windows Forms, WPF).  
   - **ASP.NET y desarrollo web**.  
   - Opcional: **Desarrollo con Azure**, **Desarrollo móvil con .NET (MAUI/Xamarin)**.  
4. Completa la instalación y abre Visual Studio.  
5. Al iniciar podrás crear proyectos nuevos en C# de forma guiada.

> Visual Studio es más pesado que VS Code, pero ofrece **herramientas profesionales completas** (diseñadores gráficos, depurador avanzado, integración con Azure y Git).

---

#### Extensiones para Visual Studio .NET
- *C# Dev Kit (Microsoft)* → soporte completo para proyectos .NET.
- *C# Extensions* (opcional, para atajos como crear clases o namespaces).
- *.NET Install Tool* (Microsoft).

---

✅ **Resumen de la clase**:  
En esta primera sesión hemos visto qué es la plataforma .NET, sus características principales, cómo funciona el código intermedio, cuál es el entorno de desarrollo más usado (**Visual Studio**) y cómo instalar tanto **Visual Studio Code** como **Visual Studio** para empezar a programar en **C#**.


---

[![Made with ❤️ by Tever](https://img.shields.io/badge/Made%20with%20❤️-by%20Tever-181717?logo=github)](https://github.com/devTever)
