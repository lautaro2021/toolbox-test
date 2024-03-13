-------------------------------------------
#
# SERVER
#

Librerias y frameworks utilizados:
# Express
# Mocha
# Chai
# Standard

app.js => Configuracion del servidor (ruteo y CORS)
index.js => Server up
route.js => Rutas habilitadas de la API
controller.js => Manejar solicitudes HTTP
service.js => Aplicar logica de negocio
test.js => Tests


RUTAS

/files/list:
    Retorna una lista con los archivos tal cual llegan de la API externa.

/files/data:
    Retorna una lista de objetos con la informacion parseada a JSON de cada uno de los archivos.

/files/data?fileName:
    Retorna un archivo especifico de la lista, filtrando por nombre de archivo.


TEST:
    Ejecutando RUN TEST se puede testear la logica utilizada en los servicios.


---------------------------------------------
#
#  CLIENT
#

Librerias y frameworks utilizados:
# React
# Redux
# React bootstrap

FUNCIONAMIENTO:
    Mediante el custom hook useFetch se realizan las peticiones correspondientes a la API local.
    En primera instancia, se realiza una peticion al montar el componente App que retorna la lista de archivos parseados,
    redenderizando la informacion por medio del componente TableComponent.
    Mediante los botones incluidos en el footer, podemos switchear la informacion obtenida de la api, entre lista de nombres y lista de archivos parseados.
    Si la tabla renderiza solamente la lista de nombres, clickeando en la correspondiente fila se realiza la peticion a la API para encontrar 
    la informacion especifica de ese archivo.

FUNCIONAMIENTO DEL CUSTOM HOOK:
    El custom hook se encarga de manejar las peticiones entre el CLIENTE y el SERVIDOR, modificando el estado inicial dentro del store de REDUX.
    Decidi utilizar un custom hook para evitar la duplicacion de codigo a la hora de realizar las peticiones/modificaciones de estado.

REDUX:
    La implementacion de redux se realiza mediante acciones y reducers. Hay 3 acciones creadas correspondientes para cada estado de la peticion (success, error, loading).
    Estas acciones son utilizadas dentro del reducer para modificar el estado inicial de la aplicacion dependiendo del tipo de accion ejecutada.