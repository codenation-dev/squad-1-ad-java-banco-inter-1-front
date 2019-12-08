import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('UserModel')
export class UserModel {
    @JsonProperty('id', Number, true)
    id: number = undefined;
    @JsonProperty('email', String, true)
    email: string = undefined;
    @JsonProperty('name', String, true)
    name: string = undefined;
    @JsonProperty('token', String, true)
    token: string = undefined; 
    @JsonProperty('adress', String, true)
    adress: string = undefined; 
    @JsonProperty('number', String, true)
    number: string = undefined; 
    @JsonProperty('neighborhood', String, true)
    neighborhood: string = undefined; 
    @JsonProperty('city', String, true)
    city: string = undefined; 
    @JsonProperty('password', String, true)
    password: string = undefined; 

    constructor(){
        
    }
}