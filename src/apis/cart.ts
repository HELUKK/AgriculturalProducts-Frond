import axios from '@/axios';
import type { cartInfo } from '@/dataource/Types';

export const addCartAPI = (orderId : number) => {
    return axios ({
        url: '/cart/add/'+orderId,
        method: 'post'
    })
}

export const checkCartAPI = () => {
    return axios ({
        url: '/cart/show',
        method: 'get'
    })
}

export const deleteCartAPI = (shoppingId : number) => {
    return axios ({
        url: '/cart/delete/'+shoppingId,
        method: 'delete'
    })
}

export const updateCartAPI = (shoppingId : number,count : number) => {
    return axios ({
        url: '/cart/update/'+shoppingId+'/'+count,
        method: 'put'
    })
}

export const selectMyAddressAPI = () => {
    return axios ({
        url: '/address/selectDefaultByOwnName',
        method: 'get'
    })
}

export const commitAPI = (addId:number,tMoney:string,cartList:cartInfo[]) => {
    return axios ({
        url: '/cart/commitOrder/'+addId+'/'+tMoney,
        method: 'post',
        data: cartList
    })
}