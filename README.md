# AngularDesdeCero
Practica para desarrollar aplicaciones web con Angular 17

Lo primero que necesitampos para iniciar el proyecto es tener la version Node.js LTS (Long-term support) osea la version mas actualiza a la cual le brindan un support constante o por recomendaciòn de la 18 en adelante


NVM (Node Version Manager) para cambiar entre las version de Node.js en cado de tener una que no te guste o lo veas necesario (NVM es un administrador de versiones de Node.js independiente que se instala por separado https://github.com/nvm-sh/nvm)
 - nvm ls
 - nvm install (numero de version Ejemplo: 20.12.2 Que es la LTS en estos momentos)
 - nvm use 20.12.2
 - node --version
 - nvm alias default 20.12.2 (Para dejar una version por defecto)


EL primer paso es instalar Linea de Comandos que se van a utilzar para realizar nuestro proyecto
 - npm install -g @angular/cli
 - ng version (y corroboramos la version de angular como la de node)


Extension recomendada para trabajar con Angular
 - angular.ng-template (Esta extension lo que hace es darte recomendaciones en tu proyecto.Lo recomendable solo habilitar la extension en el area de trabajo que estes realizando con Angular)

Instalar Bootstrap 5
 - npm install bootstrap@5
 - npm install bootstrap@next (es lo unico que se necesita next es para instalar la ultima version disponible pero en modo beta)
https://aspnetcoremaster.com/angular/instalar-bootstrap-5-en-angular.html

Instalar Angular Material
 - ng add @angular/material@17.3.3

Intalacion y ejecucion de un proyecto en Angular
ng new NombreDelProyecto
npm install
ng serve
ng build para compilar y por ejemplo subirlo a la nube en un servicio estatico, solo tenemos que copiar lo del archivo que crea llamado dist y copiar el contenido

<img src="lala.png" width="10px">
<img src="prometeo.jpg" width="10px">
