import { OperationMode } from 'json2typescript';

export const environment = {
  production: true,
  API_BASE_URL: 'https://central-de-erros-api.herokuapp.com/api/v1/',
  // API_BASE_URL: 'https://codenation-api.herokuapp.com/api/v1/',
  JSON_CONVERT_OPERATION_MODE: OperationMode.ENABLE,
  NAME_APP: 'Central de erros',
  EMAIL_MOCK: "dnprocks@yahoo.com.br",
  USER_MOCK: "Daniel",
  PASS_MOCK: "123",
};
