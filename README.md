# OxioTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

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

## Project Overview

This project is built using Angular and leverages several powerful libraries to enhance functionality and performance. Here, we’ll discuss why I chose NgRx, Ag-Grid, and Chart.js for this project.

## Why NgRx?

NgRx is a powerful state management library for Angular applications that helps manage application state in a reactive way. Here are the reasons why I chose NgRx:

	1.	Predictable State Management: NgRx follows the Redux pattern, which provides a single source of truth for the application state. This makes it easier to track state changes and debug issues.
	2.	Reactive Programming: Built on top of RxJS, NgRx allows for the use of reactive programming techniques, which are ideal for handling asynchronous operations and side effects.
	3.	Scalability: NgRx is well-suited for large applications with complex state requirements. It provides a robust structure for managing state and side effects, making it easier to scale the application.
	4.	Ecosystem and Community Support: NgRx has a strong ecosystem with various plugins and extensions, as well as a vibrant community, ensuring continuous improvement and support.

## Why Ag-Grid?

Ag-Grid is a feature-rich data grid for Angular that provides a range of capabilities out of the box. Here’s why I opted for Ag-Grid:

	1.	Performance: Ag-Grid is known for its high performance, even with large datasets. It provides virtual DOM support, which enhances performance by only rendering visible rows.
	2.	Feature-Rich: Ag-Grid offers a comprehensive set of features such as sorting, filtering, grouping, aggregation, and pivoting, which are essential for any enterprise application.
	3.	Customization: The grid is highly customizable, allowing for extensive configuration of the appearance and behavior of the grid and its components.
	4.	Integration: Ag-Grid integrates seamlessly with Angular, providing a smooth and consistent development experience.

## Why Chart.js?

Chart.js is a flexible and simple-to-use library for creating charts in web applications. Here’s why I chose Chart.js:

	1.	Ease of Use: Chart.js offers a straightforward API that makes it easy to create various types of charts with minimal code.
	2.	Responsiveness: Charts created with Chart.js are responsive out of the box, ensuring they look good on all devices and screen sizes.
	3.	Customization: Chart.js provides numerous customization options, allowing developers to tailor the appearance and behavior of charts to meet specific requirements.
	4.	Performance: Despite its simplicity, Chart.js is capable of handling large datasets efficiently, making it suitable for real-time data visualization.

## Accomplishments

I decided to adhere to the 2-hour time limit by focusing on table and data visualization functionalities. Given the lack of endpoints to save new entries, prioritizing these features seemed appropriate.

I opted for NgRx initially because it’s a powerful tool for projects involving data analysis.

Ag-grid was chosen due to my prior experience and comfort with it from past professional projects.

Although I had never used Chart.js before, I selected it because it is one of the two most well-known libraries for data visualization, along with D3.

## Future Improvements

	1.	Test-Driven Development: Starting with writing tests would enhance code quality, despite requiring additional time.
	2.	CRUD Functionality: Implement modals for creating/editing entries and add a button to remove selected rows.
	3.	Dispatch All Country Data: Handle country data dispatch in app.component.ts.
	4.	Additional Graphs: Create more diverse and informative graphs.
	5.	UI/UX Enhancements: Improve the overall user interface and user experience.

With an additional 4-6 hours, these improvements could be achieved.