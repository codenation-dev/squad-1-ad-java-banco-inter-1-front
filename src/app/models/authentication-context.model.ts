import { UserModel } from "./user";

export class AuthenticationContextModel {
    authorization: string;
    user: UserModel;
}
