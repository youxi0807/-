let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'招牌鍋貼',
            imgUrl:'https://linky.tw/wp-content/uploads/2018/06/p_leeks-1000x600.gif',
            price:'6',
            count:'0'
          },
          {
            id:'2',
            itemName:'韭菜鍋貼',
            imgUrl:'https://linky.tw/wp-content/uploads/2018/06/p_leeks-1000x600.gif',
            price:'6',
            count:'0'
          },
          {
            id:'3',
            itemName:'咖哩鍋貼',
            imgUrl:'https://linky.tw/wp-content/uploads/2018/06/p_leeks-1000x600.gif',
            price:'6.3',
            count:'0'
          },
          {
            id:'4',
            itemName:'玉米鍋貼',
            imgUrl:'https://linky.tw/wp-content/uploads/2018/06/p_leeks-1000x600.gif',
            price:'6.3',
            count:'0'
          },
          {
            id:'5',
            itemName:'招牌水餃',
            imgUrl:'https://lh5.googleusercontent.com/-2e4E93ZhnU0/UtPkThcvb_I/AAAAAAAAA80/MHsAWukCLz4/s400/IMG_1598.JPG',
            price:'6',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'韭菜水餃',
            imgUrl:'https://lh5.googleusercontent.com/-2e4E93ZhnU0/UtPkThcvb_I/AAAAAAAAA80/MHsAWukCLz4/s400/IMG_1598.JPG',
            price:'6',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'咖哩水餃	',
            imgUrl:'https://lh5.googleusercontent.com/-2e4E93ZhnU0/UtPkThcvb_I/AAAAAAAAA80/MHsAWukCLz4/s400/IMG_1598.JPG',
            price:'6.3',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'玉米水餃',
            imgUrl:'https://lh5.googleusercontent.com/-2e4E93ZhnU0/UtPkThcvb_I/AAAAAAAAA80/MHsAWukCLz4/s400/IMG_1598.JPG',
            price:'6.3',
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