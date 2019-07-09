# SpyArtist's

## Descripción
Pequeña aplicación usando peticiones a la API de Musixmatch: [Link de la API](developer.musixmatch.com)

## MVP 
Realizar llamadas a la API introduciendo el nombre de un artista, y que devuelva los datos. Aplicando CSS para un mejor aspecto visual a la hora de presentar al cliente los datos.


## Backlog
Realizar llamadas a la API separando si buscas canciones o artistas, en este caso, solo comienzo buscando artistas.

## Data structure

#### Landing Page
Propiedades:
- this.parent

Métodos:
- this.generate()
- this.render()
- this.callAPI()

#### List of Artists Page
Propiedades:
- this.parent
- this.artists

Métodos:
- this.generate()
- this.render()
- this.callAPIforDetails()

## States y States Transitions
El usuario podrá buscar todo los álbumes, canciones y sus letras, de su artista favorito. A través de la ***Landing Page***. Pasará a una ***List of artists page*** donde tendrá que buscar cual de todas las opciones es su grupo o artista, y pasará a la ***Artist detail page***, donde se mostrará todos los álbumes, canciones e incluso, artistas relacionados.

En resumen, contamos con 3 páginas.
- Landing page
- List of artists page
- Artist detail page

## Task
Task definition in order of priority


## Links


### Trello
[Link trello](https://trello.com/b/pOE3ubyv/spyartists)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/prrrcl/SpyArtists)
[Link Deploy](https://prrrcl.github.io/SpyArtists/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)