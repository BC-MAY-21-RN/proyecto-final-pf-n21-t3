![BrightCoders Logo](img/logo-bc.png)
<!-- 
Co-authored-by: Dylanson25 <Dvillarreal0@ucol.mx>
Co-authored-by: GerardoIbarra <libarra2@ucol.mx>
Co-authored-by: Ernesto2899 <eramirez28@ucol.mx> 
SHA1: F5:05:83:8A:65:21:EA:1E:6C:C8:26:BD:CD:B2:76:75:93:C2:4E:73
         SHA256: D6:69:1A:F6:AB:15:B4:0D:87:6F:0D:EF:E5:1D:9E:97:AD:B7:31:72:99:EF:02:70:55:F5:77:5A:59:3B:91:FB 
         HASH FB: tUw2F8+ETK5kjylFABKlr5QLrBk= 
-->

# BrightMusic 


## Problematica que atiende
Las aplicaciones de reproducción de música convencionales trabajan de tal manera que se le da prioridad a mostrar las canciones más populares de las regiones en la que la misma es utilizada, dichas canciones son típicamente de artistas conocidos con un respaldo monetario bastante grande.

Los artistas pequeños que empiezan no logran conseguir un impacto más grande cuando están iniciando, es aquí donde encontramos la problemática. Artistas locales, solistas y grupos que están comenzando, no tienen la oportunidad de lograr un alcance o un impacto considerable para que su carrera crezca.

## Propuesta de solución
Nuestra propuesta de solución radica en la página principal de la app de música en donde se le daría prioridad de aparecer a bandas con pocas canciones, artistas locales (México) y bandas/grupos que estén empezando.

## Definición de requerimientos del MVP

### Requerimientos funcionales

- La aplicación permitirá al usuario registrarse: 
  -   El usuario tendrá que ingresar nombre, correo y contraseña.
  -   Los datos del registro se deberán guardar en Firebase.
  -   La información tiene que estar validada:
      - *password*: más de 8 caracteres, combinar mayúsculas, minúsculas y números.
      - *Email*: Único.
      - *Nombre*: Debe de contar con uno.
- Permitir a los usuarios registrados iniciar sesión.
- Permitirá al los usurarios crear "Listas de reproducción":
    - Puedes mezclar artistas, géneros y/u otras playlists.
- Se tiene que poder buscar:
  - Tiene que tener un filtro por género / artista.
- Se podra seguir al usuario o a las listas de reproduccion de este.

### Requerimientos no funcionales
- Base de datos
  - información de los usuarios guardada en firebase
- Informacion de la musica
  - Obtenida atravez de una api (spotify/last.fm)
 - Calidad
   - Utilizar un estilo de código estandarizado (revisado por Eslint)
   - Incluir pruebas unitarias
   - Puntuación **A** obtenida en CodeClimate
- Ejecución 
   - Puede ejecutarse en Android o iOs
- Diseño
   - Debe ser lo más cercano posible al proporcionado
- Código fuente
   - Orientado a Objetos
   - Métodos pequeños
   - Aplicar los principios [SOLID](https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982)
## Diseño del MVP

Incluyan en [esta carpeta](/design) su propuesta de diseño

## Recursos

- [Minimum Viable Product](https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1))
- [Minimum Viable Product (MVP)](https://www.productplan.com/glossary/minimum-viable-product/)
- [Design Thinking](https://www.interaction-design.org/literature/topics/design-thinking)
- [El proceso de pensamiento de diseño](https://www.youtube.com/watch?v=_r0VX-aU_T8)
- [Metodología Design Thinking. Ejemplos](https://www.youtube.com/watch?v=_ul3wfKss58) 
- [Design Thinking ejemplo sencillo](https://www.youtube.com/watch?v=_H33tA2-j0s)
