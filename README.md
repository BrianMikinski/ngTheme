# ThemeTest
This project is a playground for Angular Material forms customization and theming.

## Custom Theme
- https://material.angular.io/guide/theming
    -  place in `theme.scss` or `styles.scss`

## Theming Material Components Across an Application
- Do this is the styles or theme sass file

## Theming Specific Material Components
- https://github.com/angular/components/blob/master/src/material/core/theming/_all-theme.scss
    - @include mat-form-theme($candy-app-theme);
    - See the `styles.scss` file

## Adding Bootstrap to Project (Note: THIS IS NOT DONE BY DEFAULT!)
- Install via npm
    - npm install bootstrap jquery
    - Add to angular.json in the **architect** and **test** areas for both styles and packages

## Customizing SASS rules for Angular Material in an individual component
- don't forget to specify the selector for the element
    - <calculator> </calculator>
    - ```
        calculator .css-class { 
            color: blue
        }
      ```
- https://material.angular.io/guide/customizing-component-styles


## Customizing Overlay Components
- ```css
  // Add this to your global stylesheet after your theme setup
  .myapp-no-padding-dialog .mat-dialog-container {
   padding: 0;
  }
  ```
- ```typescript
  this.dialog.open(MyDialogComponent, {panelClass: 'myapp-no-padding-dialog'})
  ```

## View Encapsulation - "Help, an Angular Material Component will not style the way I want it to"
- What is it and what do you do with it?
    - View encapsulation ensures that the scss in your components only affects the desired component and none of it's children, be they custom components or library components such as Angular Material, Bootstrap, etc.
- https://material.angular.io/guide/customizing-component-styles
- https://angular.io/guide/view-encapsulation



## Cli Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
