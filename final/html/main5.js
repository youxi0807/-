let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'招牌豬肉蛋吐司',
            imgUrl:'https://img.ltn.com.tw/Upload/news/600/2021/07/31/phpxxAuMp.jpg',
            price:'35',
            count:'0'
          },
          {
            id:'2',
            itemName:'黑胡椒里肌蛋吐司',
            imgUrl:'https://img.ltn.com.tw/Upload/news/600/2021/07/31/phpxxAuMp.jpg',
            price:'45',
            count:'0'
          },
          {
            id:'3',
            itemName:'炒泡麵',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/372026/8a48e2c408a81bdc.jpg',
            price:'45',
            count:'0'
          },
          {
            id:'4',
            itemName:'蘑菇鐵板麵',
            imgUrl:'https://cf.shopee.tw/file/906e29ba766d1f4fafd3bb9149c10d93',
            price:'45',
            count:'0'
          },
          {
            id:'5',
            itemName:'杏仁花生厚片',
            imgUrl:'https://pic.pimg.tw/dressingfrad/1396253924-1594943164.jpg',
            price:'35',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'七彩巧克力厚片',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpF0GM_h3ziV4DVhPZXcV1rUXafUyGoRASOpiZfI1c8PaLSfIu5PzRJs3avL9bq10c9w&usqp=CAU',
            price:'35',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'玉米蛋餅',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/whk104-047a.jpg',
            price:'30',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'培根蛋餅',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/whk104-047a.jpg',
            price:'35',
            count:'0'
          }, 
          {
            id:'9',
            itemName:'煎餃(10個)',
            imgUrl:'https://cf.shopee.tw/file/e76ea4d8737b612f250dac65af204211',
            price:'30',
            count:'0'
          }, 
          {
            id:'10',
            itemName:'雞塊',
            imgUrl:'https://images.chinatimes.com/newsphoto/2020-10-06/1024/20201006002188.jpg',
            price:'30',
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