export interface User {
    userName?:String
    password?: String
    nickName?: String
    phone?:String
    identityNum?:String
    address?:String
    role?: String
    createTime?:Date
    updateTime?:Date
    integral?:number
    credit?:number
    avatar?:String
    realName?: String
}

export interface Userinfo {
    userName?:String
    nickName?: String
    phone?:String
    identityNum?:String
    address?:String
    avatar?:String
    realName?: String
}

export interface Expert{
        userName: string,
        realName: string,
        phone: string,
        profession: string,
        position: string,
        belong: string
}
export interface Discuss {
    discussId? : number
    knowledgeId? :number
    ownName? : string
    content? : string
    createTime? : Date
}
export interface ResultVO {
    code: number
    message?: string
    data?: any
}
export interface Good {
    shoppingId?:number
    "orderId": number,
    "title": string,
    "price": number,
    "content": string,
    "orderStatu": number,
    "type": string,
    "picture":string ,
    "ownName": string,
    "cooperationName": string,
    "createTime": string,
    "updateTime": string,
    "address": string
}
export interface Know{
    "knowledgeId": number,
        "title": string,
        "content": string,
        "picPath": string,
        "ownName": string,
        "createTime": Date,
        "updateTime": Date

}

export interface cartInfo{
    "content":string,
    "count":number,
    "orderId":number,
    "ownName":string,
    "picture":string,
    "price":string,
    "shoppingId":number,
    "title":string,
}

export interface Question{
userName: any
nickName: any
identityNum: any
address: any
role: any
        "id": number,
        "expertName": string,
        "questioner": string,
        "phone": string,
        "plantName": string,
        "title": string,
        "question": string,
        "answer": string,
        "status": number
}