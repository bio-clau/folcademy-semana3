<img  src="https://raw.githubusercontent.com/bio-clau/folcademy-semana3/main/public/folcademy-logo.png" atl="hello world"/>

## Semana 03 - Entrenamiento Front End React

### Primeros Pasos

Luego de clonar el repo, deben correr el comando:

```bash
npm i
o
yarn add
```

Para instalar las dependencias necesarias.

### Levantar el proyecto

Una vez instaladas las dependencias, correr el comando:

```bash
npm run dev
o
yarn run dev
```

De esta forma levantamos el proyecto en modo desarrollo.

Abrir en un navegador web [http://localhost:3000](http://localhost:3000) para ver la pagina web.

## Contenido

En esta clase aprenderemos cuándo, para qué y cómo usar los hooks que nos provee React, haremos hincapié en usarlos de forma correcta para no tener renderizados innecesarios en nuestro proyecto. También veremos las tres formas de comunicación que existen entre componentes.

### Divide and Conquer

Paradigma de diseño de algoritmos.
Para resolver un problema difícil, se divide en partes más simples tantas veces como sea necesario.

### Componentes

Se utiliza el concepto de componentes para crear la interfaz gráfica de la aplicación. Por lo que permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

### Props

Los componentes aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React que describen lo que debe aparecer en la pantalla.

### Estados

Los estados son valores internos que manejan la lógica del componente.
Hacen que el componente sea reactivo (afectan el lifecycle)

### One Way Data Binding

El flujo de datos es unidireccional, siempre de componentes padres a hijos.

### Comunicación entre componentes

3 Casos:

- Comunicación entre padre e hijo (props)
- Comunicación entre hijo y su padre (eventos)
- Comunicación entre componentes no relacionados (contexto, redux, etc)

### Lifecycle

#### Montaje

Estos métodos se ejecutan cuando se crea un componente y se inserta en el árbol del DOM.\
componentDidMount: Se invoca inmediatamente después de que un componente se ha insertado al árbol del DOM.

#### Actualización

Estos métodos son ejecutados por cambios en el estado o las propiedades de los componentes. \
componentDidUpdate: Se ejecuta inmediatamente después de que la actualización del estado o las propiedades sucede.

#### Desmontaje

Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol del DOM. \
componentWillUpdate: Se ejecuta antes de destruir el componente del árbol del DOM, es un método útil para hacer tareas de limpieza.

### Hooks

Los Hooks son una nueva incorporación a partir de React 16.8.0, que nos permiten "enganchar" el estado y el ciclo de vida en componentes basados en funciones.

#### useState

Permite manipular el estado de un componente funcional. Se importa desde react.

#### useEffect

Permite hacer uso del ciclo de vida en un componente funcional. Se importa desde react

#### useRef

Una referencia es muy similar a un estado. Persiste entre renderizados, pero el componente NO se actualiza cuando cambia.

#### useContext

Se utiliza para crear un contexto en la aplicación, de esta forma se puede realizar la comunicación entre componentes no relacionados.
Consta de 2 partes:

- contextProvider
- useContext
