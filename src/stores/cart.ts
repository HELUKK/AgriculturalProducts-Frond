import { defineStore } from 'pinia'
import axios from '@/axios';
import type { cartInfo } from '@/dataource/Types';
import router from '@/router';
import {open} from  '@/components/MessageView.vue'
import { checkCartAPI,addCartAPI,deleteCartAPI,updateCartAPI } from  '@/apis/cart'
import { ref } from 'vue';

export  const useCartStore = defineStore('cartStore', {
    state: () => ({
       myCart:[] as cartInfo[],
       choosedCart:[] as cartInfo[],
       tMoney : 0
    }),

   actions:{
    
    choose(shopping : cartInfo){

        this.choosedCart.push(shopping)

        this.choosedCart.forEach(element => {
            this.tMoney = parseFloat(element.price)*element.count + this.tMoney
        })
    },

    unChoose(shopping : cartInfo) {
        const index = this.choosedCart.findIndex((item) => {
            item.orderId == shopping.orderId
        })
        console.log(this.tMoney)
        console.log(index)
        console.log(this.choosedCart[index + 1])
        console.log(this.choosedCart[index + 1].count)
        this.tMoney = this.tMoney - parseFloat(this.choosedCart[index + 1].price)*this.choosedCart[index + 1].count
        console.log("---"+this.tMoney)
        this.choosedCart.splice(index -1,1)
    },

    async checkCart () {
        const res = await checkCartAPI()
        console.log(res.data.data)
        this.myCart = res.data.data
        console.log("store中的:"+this.myCart)
    },

    async addCart(orderId : number) {
        const res = await addCartAPI(orderId)
        console.log(res.data.code)
        this.myCart = res.data.data
        if(res.data.code == 20000) {
            window.location.reload();
            alert("添加成功")
            
        }
    },
    async deleteCart(shoppingId : number ){
        const res = await deleteCartAPI(shoppingId)
        if ( res.data.code == 20000){
            window.location.reload();
            alert("删除成功")
        }
    },
    async updateCart(shoppingId:number,count:number){
        const res = await updateCartAPI(shoppingId,count)
        if (res.data.code == 20000){
            window.location.reload();
            alert("修改成功")
        }
    }
 }

})



