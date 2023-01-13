# AngularMuseum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7. I used a public proyect of Andes university (Api consumption) like this ![BackMuseums](https://github.com/MISW-4104-Web/BackMuseums). Project that was carried out within the Master of Software Engineering at the Universidad de los Andes

## Installation.

### Databases configuration
1. Open Pgadmin in your computer and enter
2. Right click on the Databases node and select the Create > Database option and create a new database named modern-art-museum

<img src="https://user-images.githubusercontent.com/66263776/212344471-77c6fe02-3b96-4031-ad36-12ca699a6fde.png">

### Api consuption
In the first time you need to clone the repository BackMuseum

```
git clone https://github.com/MISW-4104-Web/BackMuseums
```

Then you need enter into the repositori BackMuseum and in this repository you need to make the followinig change.
Before this you need to have postgrel installed.

1. Edit the src/app.module.ts file. Verify that the values ​​for "username" and "password" match those of your postgres installation.
2. Comment lines 65 to 69

```typescript
extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
```
3. Install dependencies

```
npm install
```
4. Execute

```
npm run start
```

### project execution
Go to the file Backmuseums and and run the API data to consume. Like this

```
npm run start
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
