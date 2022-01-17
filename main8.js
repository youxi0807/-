let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'日光仙草冰',
            imgUrl:'https://images.zi.org.tw/twpang/2020/08/23231857/1598195936-e6b38354452a59767cf656de9b9a712a-768x432.jpg',
            price:'55',
            count:'0'
          },
          {
            id:'2',
            itemName:'綜合仙草冰',
            imgUrl:'https://images.zi.org.tw/twpang/2020/08/23231857/1598195936-e6b38354452a59767cf656de9b9a712a-768x432.jpg',
            price:'65',
            count:'0'
          },
          {
            id:'3',
            itemName:'芋圓仙草凍',
            imgUrl:'https://images.zi.org.tw/twpang/2020/08/23231857/1598195936-e6b38354452a59767cf656de9b9a712a-768x432.jpg',
            price:'45',
            count:'0'
          },
          {
            id:'4',
            itemName:'仙草甘茶',
            imgUrl:'https://www.yuanlin-1900.com/archive/image//%E8%8C%B6_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%201.jpg',
            price:'35',
            count:'0'
          },
          {
            id:'5',
            itemName:'花生綿綿冰',
            imgUrl:'https://cdn2.ettoday.net/images/4976/d4976677.jpg',
            price:'35',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'梅子綿綿冰',
            imgUrl:'https://cdn2.ettoday.net/images/4976/d4976677.jpg',
            price:'35',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'鳳梨綿綿冰',
            imgUrl:'https://cdn2.ettoday.net/images/4976/d4976677.jpg',
            price:'35',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'草莓綿綿冰',
            imgUrl:'https://cdn2.ettoday.net/images/4976/d4976677.jpg',
            price:'35',
            count:'0'
          }, 
    ]
    },
    methods:{
        handlePlus: function(item){
          item.count++;
          sum += parseInt(item.price);
          document.getElementById("price").innerHTML = sum;
          count_sum ++;
          document.getElementById("count").innerHTML = count_sum;
        },
        handleSub: function(item){
          if(item.count>0){
            item.count--;
            sum -= parseInt(item.price);
            document.getElementById("price").innerHTML = sum;
            count_sum --;
            document.getElementById("count").innerHTML = count_sum;s               
          }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
    computed:{
        
    }
})