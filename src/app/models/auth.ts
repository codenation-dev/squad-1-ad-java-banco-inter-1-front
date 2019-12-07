import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('AuthModel')
export class AuthModel {
    @JsonProperty('email', String, true)
    email: string = undefined;
    @JsonProperty('password', String, true)
    password: string = undefined; 

    constructor(){
        
    }
}