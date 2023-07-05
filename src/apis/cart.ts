import axios from '@/axios';


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