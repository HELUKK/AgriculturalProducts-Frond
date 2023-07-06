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
value: { knowledgeId: number; title: string; content: "草莓"; picPath: string; ownName: string; createTime: string; updateTime: string } | undefined
    "knowledgeId": number,
        "title": string,
        "content": string,
        "picPath": string,
        "ownName": string,
        "createTime": string,
        "updateTime": string
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
<<<<<<< HEAD
=======

>>>>>>> d6ce26cb18dcb0ce0bb0e28bcfcc458774a0ec5d
export interface Question{
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