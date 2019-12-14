import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('AuthModel')
export class AuthModel {
    @JsonProperty('name', String, false)
    name: string = undefined;
    @JsonProperty('email', String, true)
    email: string = undefined;
    @JsonProperty('password', String, true)
    password: string = undefined; 

    constructor(){
        
    }
}