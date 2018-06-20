# Front-end implementation of JWT auth 

This is an implementation of JWT auth using Angular, you can use this app as an example to build your own projects. It uses refresh tokens to keep the user from logging out everytime the main token expires. The tokens are stored in local storage and are attached to every Http request via the Interceptor class(./shared/interceptor), the request is then sent to the server and the tokens are verified(I have a repo of the backend implementation if you'd like to know how that is done). The response from the server is then intercepted, if the main token is valid, the application follows its flow normally. If it has expired(it has a 1 min life time) the server will then check the refresh token, if the refresh token is valid, new tokens are issued (a new normal token and a new refresh token with a new expiration date), if none are valid, the server returns a bad response that is intercepted by the Interceptor and the user is logged out.

# User data

User data can be retrieved from the server using the UserID property that is stored in session storage. The UserID and other relevant data were provided in the JWT payload

# is it hackable? 

Yes, it is. The way the AuthGuard works is that it checks if there is a current user in session storage, if there is it will load protected routes but it WILL NOT be load protected resources from the API. In order to make an API call the client has to have a valid JWT in local storage, and the only way to do that is by using the secret key, which they don't have (hopefully) 

# Ang

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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
# Angular6-JWT-Auth
