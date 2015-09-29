System.config({
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "noImplicitAny": false,
    "typeCheck": false,
    "resolveAmbientRefs": false
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  },

  map: {
    "angular": "npm:angular@1.5.0-beta.0",
    "angular-route": "npm:angular-route@1.5.0-beta.0",
    "babel": "npm:babel-core@5.8.21",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "bluebird": "npm:bluebird@2.10.1",
    "core-js": "npm:core-js@1.0.0",
    "lodash": "npm:lodash@3.10.1",
    "systemjs/plugin-text": "github:systemjs/plugin-text@0.0.2",
    "text": "github:systemjs/plugin-text@0.0.2",
    "ts": "github:frankwallis/plugin-typescript@2.0.12",
    "typescript": "npm:typescript@1.6.2",
    "github:frankwallis/plugin-typescript@2.0.12": {
      "typescript": "npm:typescript@1.6.0-beta"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:angular@1.5.0-beta.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:bluebird@2.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
