# AngularDesdeCero
Practica para desarrollar aplicaciones web con Angular 17


## Instalación de ```Node.js```
Necesitaremos para iniciar en la creación de un proyecto es instalar la versión de ```Node.js LTS (Long-term support)``` osea la versión mas actualizada a la cual le brindan un support constante o por recomendación una versión de la 18 en adelante

### Comandos de terminal

Con este comando verificamos la versión de ```Node.js``` que tenemos en estos momentos
```
node --versión
```

Con este comando dejamos una versión por default para no tener que estar cambiando entre versiones cada vez que vallamos a utilizar ```Node.js```, en este caso dejaremos la versión 20.12.2 
```
nvm alias default 20.12.2
```

---

## Instalación del ```nvm```
Instalar ```nvm (Node Versión Manager)``` para poder cambiar entre las versión de Node.js en caso de tener una que no te guste o lo veas necesario (```nvm``` es un administrador de versiónes de ```Node.js``` independiente que se instala por separado y se puede encontrar dentro https://github.com/nvm-sh/nvm)

### Comandos de terminal

Con este comando verificamos que versión de ```Node.js``` estamos utilizando en estos momentos
```
nvm ls
```

Con este comando instalamos la versión de ```Node.js``` que deseemos utilizar, en este caso la versión 20.12.2
```
nvm install 20.12.2
```

Con este comando cambiamos a la versión a que vamos a usar, en este caso la versión 20.12.2
```
nvm use 20.12.2
```

---

## Instalación de ```Angular```
Ahora proseguiremos a instalar ```Angular``` desde la terminal

### Comandos de terminal

Con este comando instalamos la ultima versión de ```Angular```
```
npm install -g @angular/cli
```

Con este comando verificaremos la versión de ```Angular``` y de paso tambien verificaremos la versión de ```Node.js``` con la cual estaremos trabajando
Con este comando instalamos la ultima versión de ```Angular```
```
ng version
```

## Recomendaciones

A la hora de desarrollar con ```Angular``` es recomendado por el mismo Framework instalar la extension de Visual Studio Code llamada ```angular.ng-template``` para trabajar con los proyectos realizados o que se van a realizar con ```Angular```
 - La extension ```angular.ng-template``` lo que hace es darte recomendaciones sobre lo que estas haciendo dentro de tu proyecto. Lo recomendable es solo habilitar la extension en el area de trabajo que estes realizando con ```Angular``` si tu divides tus en areas de trabajo tus tipos de desarrollo


Además para facilitar el desarrollo podemos instalar ```Bootstrap 5```. Si ya lo conoces entonces debes de saber cuales son sus beneficios, si este no es tu caso entonces te recomiendo indagar mas sobre esta herramienta https://getbootstrap.com/docs/5.0/getting-started/introduction/

Con este comando instalamos la ultima versión de ```Bootstrap 5``` utilizando ```npm```
```
npm install bootstrap@5
```

Con este comando se utiliza para instalar la versión más reciente de ```Bootstrap``` que se encuentra en etapa de pre-lanzamiento en lugar de la última versión estable. Para mas información sobre este tema https://aspnetcoremaster.com/angular/instalar-bootstrap-5-en-angular.html
```
npm install bootstrap@next
```

Si no deseas utilizar ```Bootstrap``` puedes utilizar directamente la biblioteca oficial de componentes de ```Angular```, que ofrece una completa colección de interfaz de usuario y se mantiene actualizada con las últimas funciones y cambios de la ```API``` de ```Angular```.

Con este comando instalamos la ultima versión de ```Angular Material```
```
ng add @angular/material
```

## Comandos de ```Angular```
Estos son los comandos que vamos a utilizar dentro de ```Angular```

 - Con este comando creamos un nuevo proyecto ```Angular``` con el nombre especificado
    ```
    ng new NombreDelProyecto
    ```

<<<<<<< HEAD
    ---

 - Con este comando instalamos las dependencias de un proyecto ```Angular```
    ```
    npm install
    ```

    ---

 - Con este comando compilamos y servir un proyecto ```Angular``` en un servidor de desarrollo local
    ```
    ng serve
    ```

    ---

 - Con este comando podemos compilar y servir un proyecto ```Angular``` en un servidor de desarrollo local, y abrir automáticamente la aplicación en el navegador
    ```
    ng serve -o
    ```

    ---

 - Con este comando compilamos el proyecto ```Angular``` y generamos los archivos de salida listos para producción. El comando crea una archivo llamado ```dist``` el cual solo debemos copiarlo para subirlo a la nube en un servicio estatico
    ```
    ng build
    ```

    ---
=======
Con este comando instalamos las dependencias de un proyecto ```Angular```
```
npm install
```

Con este comando podemos compilar y servir un proyecto ```Angular``` en un servidor de desarrollo local
```
ng serve
```

Con este comando podemos compilar y servir un proyecto ```Angular``` en un servidor de desarrollo local, y abrir automáticamente la aplicación en el navegador
```
ng serve -o
```

Con este comando compilamos el proyecto ```Angular``` y generaramos los archivos de salida listos para producción. El comando crea una archivo llamado ```dist``` el cual solo debemos copiarlo para subirlo a la nube en un servicio estatico
```
ng build
```
>>>>>>> 0e5e7fdb6e420895904541fe23697542881c3a32

<img src="lala.png" width="10px">
<img src="chat_en_linea__1_-removebg-preview.png" width="10px">
<img src="prometeo.jpg" width="10px">
<img src="publicar.jpg" width="10px">
