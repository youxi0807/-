let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'濃郁布朗尼',
            imgUrl:'https://cf.shopee.tw/file/72804cfb3ce900c73445bbebd00b3c64',
            price:'80',
            count:'0'
          },
          {
            id:'2',
            itemName:'濃郁香蕉布朗尼',
            imgUrl:'https://cf.shopee.tw/file/72804cfb3ce900c73445bbebd00b3c64',
            price:'85',
            count:'0'
          },
          {
            id:'3',
            itemName:'提拉米蘇',
            imgUrl:'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/8a067f7f-156f-4893-ae1d-c7eb7dfc6576/Derivates/56bae163-8f59-4350-92fc-97a6ad4903a3.jpg',
            price:'90',
            count:'0'
          },
          {
            id:'4',
            itemName:'原味鬆餅(蜂蜜)',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/361937/214857932a831d0a.jpg',
            price:'90',
            count:'0'
          },
          {
            id:'5',
            itemName:'原味鬆餅(焦糖)',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/361937/214857932a831d0a.jpg',
            price:'90',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'原味鬆餅(巧克力)',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/361937/214857932a831d0a.jpg',
            price:'90',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'原味貝果',
            imgUrl:'https://eshop.pasadena.com.tw/upload/product/images/202010081419491.JPG',
            price:'40',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'果醬貝果(花生)',
            imgUrl:'https://eshop.pasadena.com.tw/upload/product/images/202010081419491.JPG',
            price:'60',
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