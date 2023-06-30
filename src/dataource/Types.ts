export interface User {
    nickName: string
    password: String
    role: string
    name?: string
}

export interface ResultVO {
    code: number
    message?: string
    data?: any
}