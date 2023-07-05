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