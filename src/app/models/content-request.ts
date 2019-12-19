import { JsonObject, JsonProperty } from 'json2typescript';
import { UserModel } from './user';
import { LogError } from './log-error';

@JsonObject('Content')
export class Content{
    @JsonProperty('content', [LogError], true)
    content: LogError[] = [];
    @JsonProperty('totalPages', Number, true)
    totalPages: number = undefined;
    @JsonProperty('totalElements', Number, true)
    totalElements: number = undefined;
    @JsonProperty('size', Number, true)
    size: number = undefined;
    @JsonProperty('number', Number, true)
    number: number = undefined;
    @JsonProperty('numberOfElements', Number, true)
    numberOfElements: number = undefined;
    @JsonProperty('last', Number, true)
    last: boolean = undefined;
    @JsonProperty('first', Number, true)
    first: boolean = undefined;
    @JsonProperty('empty', Number, true)
    empty: boolean = undefined;
}
