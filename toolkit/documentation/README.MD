# Frameworkless Toolkit: Documentation

## Rendering
````
Pure  +----------------------------------> Stateful
````
API used in this project: Angular / React / Vue / lit-html / Web Components / frameworkless

## State Management
````
                       Mutable
                          ^
                          |
                          |
                          |
                          |
                          |
                          |
                          |
                          |
Single  +-----------------------------------> Multiple
                          |
                          |
                          |
                          |
                          |
                          |
                          |
                          |
                          |
                          +
                      Immutable
````
API used in this project: Redux / MobX

Pattern used in this project: MVC / EventBus / Reactive

## Other libraries

* axios
* navigo
* etc...

## Non-functional requirement

This is the list of "ilities" for our project. Choose from the list on [Wikipedia](https://en.wikipedia.org/wiki/Non-functional_requirement)

### Must have
* Testability
* Maintainability

### Nice to have
* Portability
* Extensibility

## Fitness Functions

* **Testability**: Analyze signatures to understand if we are hardwiring dependencies in the code
* **Maintainability**: Track time to solve critical bug
* **Portability**: Is our application runnable in a Cordova / Electron Application?

## Architectural Decisions Records

Look at the other files in this directory