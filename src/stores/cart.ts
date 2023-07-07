import { defineStore } from 'pinia'
import axios from '@/axios';
import type { cartInfo,Address } from '@/dataource/Types';
import router from '@/router';
import {open} from  '@/components/MessageView.vue'
import { checkCartAPI,addCartAPI,deleteCartAPI,updateCartAPI,selectMyAddressAPI,commitAPI,changeMyAddressAPI } from  '@/apis/cart'
import { ref } from 'vue';
import path from 'path';
import { ElMessage } from 'element-plus'

export  const useCartStore = defineStore('cartStore', {
    state: () => ({
       address: {} as Address,
       myCart:[] as cartInfo[],
       choosedCart:[] as cartInfo[],
       tMoney:ref('0'),
    }),

   actions:{

    // 修改用户地址
    async changeAddress (newAddress : string) {

        this.address.addressDetail = newAddress

        const res = await changeMyAddressAPI(this.address)
        if (res.data.code == 20000) {
            this.alertSuccessChange()
        }

        // 修改完成重新加载
        this.getAddress()
    },

    // 获取用户地址
    async getAddress () {
        const res = await selectMyAddressAPI();
        this.address = res.data.data
    },

    // 添加成功提示
    alertSuccessAdd () {
        ElMessage({
            message: '添加成功',
            type: 'success',
          })
    },
    // 修改数量成功提示
    alertSuccessChange () {
        ElMessage({
          message: '更改成功',
          type: 'success',
        })
      },
    
    // 删除成功提示
      alertSuccessDelete () {
        ElMessage({
            message: '删除成功',
            type: 'success',
          })
      },

    // 提交成功提示
    alertSuccessCommite () {
        ElMessage({
            message: '提交成功',
            type: 'success',
          })
      },

    // 提交失败提示
    alertFailedCommite () {
        ElMessage({
            message: '请先选择商品',
            type: 'error',
          })
      },
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
            //window.location.reload();
            this.alertSuccessAdd()
            
        }
    },

    //删除
    async deleteCart(shoppingId : number ){
        
        this.unChoose(shoppingId)
        const res = await deleteCartAPI(shoppingId)
        if ( res.data.code == 20000){
            this.checkCart()
            this.buildTMoney()
            await this.alertSuccessDelete()
            window.location.reload();
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
            this.alertSuccessChange()
        }
    },

    async commit () {

        if(this.choosedCart.length == 0) {
            this.alertFailedCommite()
            return
        }else {
            // 调用搜索地址接口，获取我的地址
        const res1 = await selectMyAddressAPI();

        // 调用提交接口
        const res2 = await commitAPI(res1.data.data.id,this.tMoney,this.choosedCart)

        if(res2.data.code == 20000){
            await this.alertSuccessCommite()
            window.location.reload();
        }
        }
        
    }
 },
//  persist: {
//     key: 'tMoney',
//     storage: localStorage,
//     paths: ['tMoney']
//  }

})



