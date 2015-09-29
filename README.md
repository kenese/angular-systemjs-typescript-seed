# Angular SystemJS TypeScript Seed App

Basic AngularJs app with SystemJS modules and bundling, and Typescript. Its pretty sweet.   

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You also need node.js and npm.  You can get them from [http://nodejs.org/](http://nodejs.org/).

## Clone angular-seed

Clone the angular-systemjs-typescript-seed repository using [git][git]:

```
git clone https://github.com/kenese/angular-systemjs-typescript-seed.git
cd angular-systemjs-typescript-seed
```

### Install Dependencies

```
npm install
```

This will also run jspm install to install client side dependencies

## Run

```
gulp
```

This builds and watches sass files and serves from localhost:4321. There is no bundling, the files are served individually.

## Dist

``` 
gulp dist
```

Builds and copies assets to dist folder. 

## Serve dist

```
gulp serve-dist
```

Serves from localhost:4567


