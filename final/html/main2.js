let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'香腸飯',
            imgUrl:'https://pic.pimg.tw/anoli/1625419138-3241307493-g_wn.jpg',
            price:'60',
            count:'0'
          },
          {
            id:'2',
            itemName:'糖醋排骨飯',
            imgUrl:'https://lh5.googleusercontent.com/p/AF1QipOgOA3oappd2JvoAuBnA2L23xvclFyPK65doZSj=w1080-k-no',
            price:'60',
            count:'0'
          },
          {
            id:'3',
            itemName:'排骨飯',
            imgUrl:'https://pic.pimg.tw/anoli/1599835888-559413632-g_wn.jpg',
            price:'60',
            count:'0'
          },
          {
            id:'4',
            itemName:'宮保雞丁飯',
            imgUrl:'https://lh5.googleusercontent.com/p/AF1QipOgOA3oappd2JvoAuBnA2L23xvclFyPK65doZSj=w1080-k-no',
            price:'60',
            count:'0'
          },
          {
            id:'5',
            itemName:'三杯G腿飯',
            imgUrl:'https://pic.pimg.tw/anoli/1599835888-559413632-g_wn.jpg',
            price:'60',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'烤鯖魚飯',
            imgUrl:'https://pic.pimg.tw/anoli/1625419138-3241307493-g_wn.jpg',
            price:'65',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'黑胡椒豬柳飯',
            imgUrl:'https://pic.pimg.tw/anoli/1625419138-3241307493-g_wn.jpg',
            price:'70',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'蒲燒魚飯',
            imgUrl:'https://lh5.googleusercontent.com/p/AF1QipOgOA3oappd2JvoAuBnA2L23xvclFyPK65doZSj=w1080-k-no',
            price:'70',
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