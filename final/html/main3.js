let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'海鮮義大利麵',
            imgUrl:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRYR9ws1MrhlTMJFaHWytU5y9R_Eq10eYagS4VFfQTtZdz6q29-',
            price:'120',
            count:'0'
          },
          {
            id:'2',
            itemName:'豬里肌義大利麵',
            imgUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUlw8YYdSfoBRL8AUuxvt4BqtqnDUfYZ98_JfN1otCXrwAMGsc',
            price:'110',
            count:'0'
          },
          {
            id:'3',
            itemName:'雞柳義大利麵',
            imgUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUlw8YYdSfoBRL8AUuxvt4BqtqnDUfYZ98_JfN1otCXrwAMGsc',
            price:'130',
            count:'0'
          },
          {
            id:'4',
            itemName:'海鮮風味燉飯',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/yqn31-018.jpg',
            price:'130',
            count:'0'
          },
          {
            id:'5',
            itemName:'原味什錦鍋',
            imgUrl:'http://www.ttv.com.tw/recipe/images/%E5%9C%98%E5%9C%93%E5%B9%B4%E8%8F%9C%E5%81%A5%E5%BA%B7%E9%A4%90/335/%E4%BB%80%E9%8C%A6%E7%81%AB%E9%8D%8B.jpg',
            price:'120',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'原味鍋燒麵',
            imgUrl:'https://www.unileverfoodsolutions.tw/dam/global-ufs/mcos/na/taiwan/calcmenu/recipes/TW-recipes/general/%E6%B5%B7%E9%AE%AE%E9%8D%8B%E7%87%92%E9%BA%B5/main-header.jpg',
            price:'70',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'脆皮雞排',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/bk145-016.jpg',
            price:'55',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'木瓜牛奶',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/gy49-056.jpg',
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