let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'半雞',
            imgUrl:'https://www.frozenfoods.com.tw/upload/catalog_product_m/ALL_catalog_product_20E26_ut53mvvqms.jpg',
            price:'110',
            count:'0'
          },
          {
            id:'2',
            itemName:'帶翅雞胸',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxX9zpx0nnpXVMqURXDVQTSZZ59Iu4djHuxg&usqp=CAU',
            price:'60',
            count:'0'
          },
          {
            id:'3',
            itemName:'雞腿',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/whk095-051a.jpg',
            price:'60',
            count:'0'
          },
          {
            id:'4',
            itemName:'雞冠',
            imgUrl:'https://cf.shopee.tw/file/f486b36408143d5c0e0b965c3c84f582',
            price:'20',
            count:'0'
          },
          {
            id:'5',
            itemName:'雞心',
            imgUrl:'http://2.bp.blogspot.com/-upAGjsYB1iY/VIlQsKYW72I/AAAAAAAAIBQ/AUHOqAaJFHs/s1600/IMG_3936.JPG',
            price:'20',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'雞胗',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/248487/63f98fb1ab94d40c.jpg',
            price:'20',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'高麗菜',
            imgUrl:'https://img-global.cpcdn.com/recipes/2bef77b26572c1f8/1200x630cq70/photo.jpg',
            price:'20',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'青花菜',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/yqn04-020b.jpg',
            price:'20',
            count:'0'
          }, 
          {
            id:'9',
            itemName:'甜不辣',
            imgUrl:'https://cf.shopee.tw/file/b3ce99fc1d7829d474c57af09ff35719',
            price:'20',
            count:'0'
          }, 
          {
            id:'10',
            itemName:'吉古拉',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/04/10/99/6158586.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=800',
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