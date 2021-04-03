# Cypress + Cucucmber
Proyecto de automatización con Cypress utilizando Cucumber, en este proyecto también se implementa el uso de variables de entorno como se usaría en un proyecto real. Se incluye un script para la generación del reporte.
> Aunque en este ejemplo se incluye el archivo .env, este no debe de incluirse dentro del repositorio.
> Los archivos .env contienen información sensible como credenciales de base de datos que no deben ser expuestos

## Dependencias
| Librería | Versión |
| ------ | ------ |
| cypress | 6.8.0 |
| cypress-cucumber-preprocessor | 4.0.3 |
| dotenv | 8.2.0 |
| multiple-cucumber-html-reporter | 1.18.0 |

### Uso
1. Clonar el proyecto
2. Instalar las depedencias `npm i` o `npm install`
3. Ejecución de las pruebas: `npm test`
4. Generar reporte: `npm run report`
