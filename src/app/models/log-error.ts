import { JsonObject, JsonProperty } from 'json2typescript';
import { UserModel } from './user';

@JsonObject('LogError')
export class LogError{
    @JsonProperty('id', Number, true)
    id: number = undefined;
    @JsonProperty('environment', String, true)
    environment: string = undefined;
    @JsonProperty('requestIp', String, true)
    requestIp: string = undefined;
    @JsonProperty('level', String, true)
    level: string = undefined;
    @JsonProperty('title', String, true)
    title: string = undefined;
    @JsonProperty('details', String, true)
    details: string = undefined;
    @JsonProperty('createdAt', String, true)
    createdAt: string = undefined;
    @JsonProperty('users', UserModel, true)
    user: UserModel = undefined;

    constructor(){

    }
}