import {JsonConvert, ValueCheckingMode} from 'json2typescript';
import {PropertyMatchingRule} from 'json2typescript/src/json2typescript/json-convert-enums';
import {Provider} from '@angular/core';
import {environment} from '../../environments/environment';

const JsonConvertProvider: Provider = {
  provide: JsonConvert,
  useFactory: () => {
    const jsonConvert: JsonConvert = new JsonConvert();

    jsonConvert.operationMode = environment.JSON_CONVERT_OPERATION_MODE;
    jsonConvert.ignorePrimitiveChecks = false;
    jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;
    jsonConvert.propertyMatchingRule = PropertyMatchingRule.CASE_STRICT;

    return jsonConvert;
  }
};

export {JsonConvertProvider};
