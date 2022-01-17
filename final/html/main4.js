let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'煎蛋三明治',
            imgUrl:'https://img.ltn.com.tw/Upload/food/page/2020/05/04/200504-10661-123-jaFRa.png',
            price:'20',
            count:'0'
          },
          {
            id:'2',
            itemName:'火腿蛋三明治',
            imgUrl:'https://img.ltn.com.tw/Upload/food/page/2020/05/04/200504-10661-123-jaFRa.png',
            price:'25',
            count:'0'
          },
          {
            id:'3',
            itemName:'培根蛋三明治',
            imgUrl:'https://img.ltn.com.tw/Upload/food/page/2020/05/04/200504-10661-123-jaFRa.png',
            price:'25',
            count:'0'
          },
          {
            id:'4',
            itemName:'里肌堡',
            imgUrl:'http://pic.pimg.tw/vickyang0812/1382956068-972966593.jpg',
            price:'30',
            count:'0'
          },
          {
            id:'5',
            itemName:'牛肉堡',
            imgUrl:'http://pic.pimg.tw/vickyang0812/1382956068-972966593.jpg',
            price:'35',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'湯包(6粒)',
            imgUrl:'https://images.chinatimes.com/newsphoto/2020-10-23/656/20201023003626.jpg',
            price:'20',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'蘿蔔糕',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/289212/3b4c90d3e2ea65d5.jpg',
            price:'25',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'紅茶',
            imgUrl:'https://www.hanyitea.tw/wp-content/uploads/2021/06/266701050_680252609642074_1816715256550604828_n.jpg',
            price:'20',
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