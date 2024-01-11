export interface LoginSuccess {
    statusCode : number
    message : string
    data : {
        access_token : string
        email : string
    }
}