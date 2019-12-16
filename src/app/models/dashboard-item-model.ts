import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('DashboardItem')
export class DashBoardItem{
    @JsonProperty('count', Number, true)
    count: number = undefined;
    @JsonProperty('environment', String, true)
    environment: string = undefined;
}
