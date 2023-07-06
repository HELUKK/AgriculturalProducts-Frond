import { defineStore } from 'pinia'
import axios from '@/axios';
import type { cartInfo } from '@/dataource/Types';
import router from '@/router';
import {open} from  '@/components/MessageView.vue'
import { checkCartAPI,addCartAPI,deleteCartAPI,updateCartAPI,selectMyAddressAPI,commitAPI } from  '@/apis/cart'
import { ref } from 'vue';
import path from 'path';

export  const useCartStore = defineStore('cartStore', {
    state: () => ({
       myCart:[] as cartInfo[],
       choosedCart:[] as cartInfo[],
       tMoney:ref('0'),
    }),

   actions:{
    
    // 计算总价
    buildTMoney(){
        this.tMoney='0'
        this.choosedCart.forEach(element => {
            this.tMoney =( parseFloat(element.price)*element.count + parseFloat(this.tMoney)).toFixed(2)
        })
    },

    //选择
    choose(shopping : cartInfo){

        this.choosedCart.push(shopping)
        this.buildTMoney()
        // console.log('选择后'+this.choosedCart[0]?.price+' '
        // +this.choosedCart[1]?.price+' '+this.choosedCart[2]?.price+' ')
    },

    //取消选择
    unChoose(shoppingId : number) {
        const index = this.choosedCart.findIndex((item) => {return item.shoppingId == shoppingId
        })
        this.buildTMoney()
        // console.log('当前要减的价格：' +parseFloat(this.choosedCart[index].price)*this.choosedCart[index].count)
        // console.log('当前总价格1:'+this.tMoney)
        this.tMoney = (parseFloat(this.tMoney) - parseFloat(this.choosedCart[index]?.price)*this.choosedCart[index]?.count).toFixed(2)
        // console.log('当前总价格2:'+this.tMoney)
        this.choosedCart.splice(index,1)

    },

    //调用
    async checkCart () {
        const res = await checkCartAPI()
        console.log(res.data.data)
        this.myCart = res.data.data
        console.log("store中的:"+this.myCart)
    },


    //添加
    async addCart(orderId : number) {
        const res = await addCartAPI(orderId)
        console.log(res.data.code)
        this.myCart = res.data.data
        if(res.data.code == 20000) {
            window.location.reload();
            open("添加成功")
            
        }
    },

    //删除
    async deleteCart(shoppingId : number ){
        
        this.unChoose(shoppingId)
        const res = await deleteCartAPI(shoppingId)
        if ( res.data.code == 20000){
            window.location.reload();
            this.checkCart()
            this.buildTMoney()
            alert("删除成功")
        }
    },

    //更新-改数量
    async updateCart(shoppingId:number,count:number){
        this.myCart.forEach(element => {
            if(element.shoppingId == shoppingId){
                element.count = count
            }
        });

        this.buildTMoney()

        const res = await updateCartAPI(shoppingId,count)
        if (res.data.code == 20000){
            alert("修改成功")
        }
    },

    async commit () {
        // 调用搜索地址接口，获取我的地址
        const res1 = await selectMyAddressAPI();

        // 调用提交接口
        const res2 = await commitAPI(res1.data.data.id,this.tMoney,this.choosedCart)

        if(res2.data.code == 20000){
            alert("提交成功")
            window.location.reload();
        }
    }
 },
//  persist: {
//     key: 'tMoney',
//     storage: localStorage,
//     paths: ['tMoney']
//  }

})



