export class User {

    constructor(
    _id: number,
    _username: string,
    _name: string,
    _idRol: number,
    _expires: number,
    _token: string) {
        this.id=_id;
        this.username=_username;
        this.name=_name;
        this.idRol=_idRol;
        this.expires=_expires;
        this.token=_token;
   }
    id: number;
    username: string;
    name: string;
    idRol: number;
    expires: number;
    token: string;
    public esAdmin() : boolean{return this.idRol==1};
   
}