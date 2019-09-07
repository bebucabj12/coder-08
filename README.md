## Challenge 6 del curso de Desarrollo Móvil de Coderhouse

Para poder resolver este challenge seguir los siguientes pasos

1. Hacer un **fork** este repositorio
1. Una vez hecho el **fork**, hacer un clon copiando la URL (en el botón verde) y corriendo `git clone <URL>` en la consola
1. Una vez clonado, moverse dentro de la carpeta del proyecto y correr `npm install` (o `yarn`) para instalar las dependencias necesarias
1. Hacer un **nuevo branch** con tu nombre y apellido para identificarte (ej. `git checkout -b gonzalo-aguirre`)
1. Correr el proyecto usando `expo start`
1. Resolver el enunciado, **haciendo un nuevo commit al resolver cada parte**
1. Hacer un **push** del nuevo branch
1. Desde **github.com** crear un nuevo **pull request** desde ese branch hacia master

### Enunciado

### Configuración Previa

1. Cambiar el `SPOTIFY_CLIENT_ID` con su `clientId`
1. Agregar la nueva `redirectUrl` en la configuración de Spotify

#### Obteniendo datos de la API
1. Crear un archivo `cliente-api-spotify.js` que exporte un método `obtenerArtistasFavoritos` con la siguiente _signature_
  ```js
  obtenerArtistasFavoritos = async (accessToken) => {
    // busca los artistas de la API de Spotify
    return [{
      nombre: 'Nombre del artista',
      imagen: 'http://....',
      seguidores: 9999
    }, ...]
  }
  ```
1. Llamar ese método desde `App.js` y mostrar con un `console.warn` el resultado

#### Adaptando nuestra UI para que se vea increíble (o aceptable...)

1. Por cada artista, mostrarlo en pantalla usando el componente `<ArtistaFavorito>`
1. Modificar el componente `ArtistaFavorito.js` para que muestre la imagen, el nombre del artista y la cantidad de seguidores
> TIP: si no entran todos en la pantalla, quizás puedas usar un `ScrollView`

#### ScrollView vs FlatList

1. Reemplazar el componente de `ScrollView` por `FlatList`
> **FlatList** nos permite mostrar un listado largo de componentes, cargándolos a medida que hace falta y haciendo que el tiempo de _render_ sea mucho más bajo.
