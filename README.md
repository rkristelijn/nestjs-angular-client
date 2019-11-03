# Angular NestJs client using Material Design Bootstrap

This frontend goes hand in hand with my other [backend project](https://github.com/rkristelijn/nestjs). It uses [Angular-Bootstrap-with-Material-Design](https://github.com/mdbootstrap/Angular-Bootstrap-with-Material-Design#how-to-install-mdb-via-npm) :

## How to install MDB via npm

- create new project `ng new project_name --style=scss`
- `npm i angular-bootstrap-md chart.js@2.5.0 font-awesome hammerjs --save`
- to `src/app/app.module.ts` add

```javascript
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot()
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
});
```

- add below lines to `angular.json`:

```javascript
"styles": [
    "node_modules/font-awesome/scss/font-awesome.scss",
    "node_modules/angular-bootstrap-md/assets/scss/bootstrap/bootstrap.scss",
    "node_modules/angular-bootstrap-md/assets/scss/mdb.scss",
    "src/styles.scss"
],
"scripts": [
  "node_modules/chart.js/dist/Chart.js",
  "node_modules/hammerjs/hammer.min.js"
],
```

### Run server

```bash
ng serve --open
```

###

Now I'm just stealing stuff from [mdbootstrap / Angular-Bootstrap-Boilerplate /src/app](https://github.com/mdbootstrap/Angular-Bootstrap-Boilerplate/tree/master/src/app)

# NestClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
