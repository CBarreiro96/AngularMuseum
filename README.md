# AngularMuseum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7. I used a public proyect of Andes university (Api consumption) like this [BackMuseums](https://github.com/MISW-4104-Web/BackMuseums). Project that was carried out within the Master of Software Engineering at the Universidad de los Andes

## PreInstallation.

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

### Project API execution
Go to the file Backmuseums and and run the API data to consume. Like this

```
npm run start
```

## Installation.

To use this repository, you need to do the following steps:

1. Clone this repository with the following command:

```shell
git clone https://github.com/CBarreiro96/AngularMuseum
```

2. Install dependencies

```shell
npm install
```

3. Open project

```
ng serve --open
```

## Others Information

* [Accessibility in the project](https://github.com/CBarreiro96/AngularMuseum/wiki)
* [project visualization]()
