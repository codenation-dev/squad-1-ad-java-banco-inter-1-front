// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { OperationMode } from 'json2typescript';

export const environment = {
  production: false,
  API_BASE_URL: 'http://localhost:8080/api/v1/',
  // API_BASE_URL: 'https://central-de-erros-api.herokuapp.com/api/v1/',
  JSON_CONVERT_OPERATION_MODE: OperationMode.ENABLE,
  NAME_APP: 'Central de erros',
  EMAIL_MOCK: "dnprocks@yahoo.com.br",
  USER_MOCK: "Daniel",
  PASS_MOCK: "123",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
