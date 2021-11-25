# JUMP2DIGITAL

Cristian Pérez(Frontend). Formulario-Pasarela de pago.

> **Descripción del Proyecto** 

En esta ocasión se nos pide maquetar y administrar los errores de un formulario propio de una pasarela de pago.

**Objetivos** 

✅ Task 1 → Puedo ver correctamente la vista de PC

✅ Task 2 → Puedo ver correctamente la vista de móvil

✅ Task 3 → Si introduzco un campo que no corresponde con un patrón de tarjeta de crédito salta un error

✅ Task 4 → Si introduzco un email que no corresponde con patrón de correo electrónico salta un error de aviso

✅ Task 5 → Puedo seleccionar ver la lista de países completa


## Tecnologias
👌  React -Create-React-App
🎨 Styled Components
🔎 Axios
😍 Sweet Alert2

## API/Component

Consumo de API (Paises) 📃 https://countriesnow.space/

## Arquitectura 

He decidido trabajar con React-Hooks para tener mejor fluidez a la hora de trabajar con los estados.
He implementado un Custum-Hook con validaciones basadas en regex para el manejo de errores y validaciones para los diferentes campos, consiguiendo asi una mejora en la escalabilidad.
El uso de axios para la consulta de la API optimiza y facilita en este caso el consumo del servicio web.

## Installation

npm install # Instalación de todas las dependencias del proyecto
npm start  #  Ejecuta el proyecto en local.





