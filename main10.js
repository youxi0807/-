let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'BBQ牛肉堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'90',
            count:'0'
          },
          {
            id:'2',
            itemName:'起司牛肉醬漢堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0'
          },
          {
            id:'3',
            itemName:'夏威夷牛肉堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0'
          },
          {
            id:'4',
            itemName:'檸檬脆雞堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'90',
            count:'0'
          },
          {
            id:'5',
            itemName:'墨西哥莎莎雞腿堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'塔塔豬排堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'日式胡麻豬排堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'蘋果豬排堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'100',
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