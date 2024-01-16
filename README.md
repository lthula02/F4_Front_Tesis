# Frontend - Trabajo de Grado

**Universidad Metropolitana**
Título: Subsistema para el análisis de variabilidad como mecanismo para el diseño de arquitecturas de referencia
Autores: [Christian Behrens](https://github.com/cbehrensunimet) y [Nicolás Briceño](https://github.com/nicoabb)

## Cómo comenzar

`npm install --legacy-peer-deps`
`npm run dev`

El proyecto es el cuarto paso de una fase de investigación, explicado más adelante, debido a las tecnologías utilizadas y el tiempo transcurrido entre el primer paso y este último existen múltiples dependencias desactualizadas/obsoletas. De ahí que se recomienda el uso del '--legacy-peer-deps' para poder probar el proyecto, ya fueron dadas las recomendaciones para un futuro trabajo encargado de actualizar y reparar el código.

**Nota: se debe estar corriendo frontend y backend para que funcione el proyecto, ya que la información se guarda en la cuenta de Google enlazada**

#### [Repositorio del Backend](https://github.com/nicoabb/F4_Back_Tesis)

## Contexto de la aplicación desarrollada

La investigación *Estudio de la ingeniería inversa en el contexto de generación de arquitecturas referenciales*, busca diseñar una metodología para la generación de arquitecturas de referencia, a partir de la aplicación de procedimientos propios de la ingeniería inversa (Guillén et al., 2020). Esta investigación se desarrolla en tres etapas: la primera etapa implica un estudio exhaustivo del estado del arte; la segunda etapa se centra en el diseño y construcción de un prototipo de herramienta; y la tercera y última etapa se dedica a la validación del método propuesto.

La presente investigación corresponde a la segunda etapa, que se divide en cuatro actividades. Esta es la cuarta y última actividad. El trabajo previo incluyó, en primer lugar, la construcción de la arquitectura global del prototipo y la generación de un grafo como resultado del análisis del código fuente del sistema a analizar (Cafarelli y Mariña, 2021). En segundo lugar, se desarrolló un subsistema para la identificación de componentes conceptuales mediante la aplicación de métricas (D’Lacoste y Perez, 2022). Finalmente, como tercera actividad, se desarrolló un subsistema para la reconstrucción de la arquitectura de un sistema (González y Rodríguez, 2023). Tomando como entrada las arquitecturas generadas en la tercera actividad, **este trabajo realiza el análisis de variabilidad para generar una arquitectura de referencia**, cerrando así, la etapa de diseño y construcción del prototipo de software.