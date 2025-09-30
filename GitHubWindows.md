# 🚀 Tutorial: Instalar GitHub y trabajar con .NET en Windows

## 1. Instalar Git
1. Ve a la página oficial: [https://git-scm.com/download/win](https://git-scm.com/download/win)  
2. Descarga el instalador y ejecútalo.  
3. Durante la instalación, acepta las opciones por defecto (a no ser que quieras personalizar).  
   - Deja marcada la integración con **Git Bash** y **Git GUI**.  
   - Asegúrate de que Git se agregue al **PATH**.  

👉 Para comprobar que funciona:  
Abre la terminal (**CMD** o **PowerShell**) y escribe:
```bash
git --version
```

---

## 2. Crear una cuenta en GitHub
1. Accede a [https://github.com](https://github.com).  
2. Regístrate (usuario, email, contraseña).  
3. Crea tu primer repositorio con **New Repository**.  

Ejemplo:  
- Nombre: `curso-dotnet`  
- Visibilidad: **Public** o **Private**  
- Añade un README inicial (opcional).

---

## 3. Instalar .NET en Windows
1. Descarga el **.NET SDK** desde: [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download).  
2. Instala el SDK (no solo el Runtime).  
3. Comprueba instalación con:
```bash
dotnet --version
```

---

## 4. Instalar Visual Studio Code
1. Descarga **Visual Studio Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/).  
2. Instala la extensión **C# Dev Kit** y **.NET Install Tool** desde el marketplace.  
3. Opcional: instala también la extensión **GitHub Pull Requests and Issues** para trabajar directamente con GitHub.

---

## 5. Crear tu primer proyecto .NET
En una carpeta de trabajo:
```bash
dotnet new console -n HolaMundo
cd HolaMundo
dotnet run
```
Verás en la consola:
```
Hello, World!
```

---

## 6. Conectar tu proyecto a GitHub
Dentro de la carpeta `HolaMundo`:

```bash
git init
git add .
git commit -m "Primer commit: Hola Mundo en .NET"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/curso-dotnet.git
git push -u origin main
```

---

## 7. Flujo básico de trabajo con Git y .NET
- Modificar código → `git add .` → `git commit -m "mensaje"` → `git push`  
- Bajar cambios del repo → `git pull`  
- Ejecutar y probar → `dotnet run`

---

✅ Con esto ya tienes:  
- Git y GitHub funcionando en Windows  
- .NET Core instalado  
- Un flujo de trabajo básico para proyectos  

---

[![Made with ❤️ by Tever](https://img.shields.io/badge/Made%20with%20❤️-by%20Tever-181717?logo=github)](https://github.com/devTever)
