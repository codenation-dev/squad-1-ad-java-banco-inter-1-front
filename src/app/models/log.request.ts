export class LogErrorRequest {
  // tslint:disable-next-line:variable-name
  constructor(private title: string, 
              private details: string, 
              private environment: string,
              private errorLevel: string
            ) {
  }
}
