// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://192.168.1.25:8000/api',

  firebaseConfig: {
    apiKey: 'AIzaSyAZlu7PbTNMfSFg4RqGVunO4c27GiF4XOU',
    authDomain: 'taxi-go-bce83.firebaseapp.com',
    projectId: 'taxi-go-bce83',
    storageBucket: 'taxi-go-bce83.appspot.com',
    messagingSenderId: '140460129394',
    appId: '1:140460129394:web:1ceff4e3c942e37dd7d6eb',
    measurementId: 'G-0K122SW0LJ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
