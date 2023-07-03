export interface User {
    nickName: string
    password: String
    userName?:string
    role?: string
    name?: string
}

export interface ResultVO {
    code: number
    message?: string
    data?: any
}
export interface Good {
    "orderId": number,
    "title": string,
    "price": number,
    "content": string,
    "orderStatu": number,
    "type": string,
    "picture":any ,
    "ownName": string,
    "cooperationName": string,
    "createTime": string,
    "updateTime": string,
    "address": string
}
export interface Know{
    "knowledgeId": number,
        "title": string,
        "content": "草莓",
        "picPath": string,
        "ownName": string,
        "createTime": string,
        "updateTime": string
}