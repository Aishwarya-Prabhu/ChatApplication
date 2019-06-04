// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// firebase connection

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyD7ROxc2QXHJfDHDOC4wVlUES--dyFsdz4",
    authDomain: "chat-e0947.firebaseapp.com",
    databaseURL: "https://chat-e0947.firebaseio.com",
    projectId: "chat-e0947",
    storageBucket: "chat-e0947.appspot.com",
    messagingSenderId: "549221005837"
    }
};
