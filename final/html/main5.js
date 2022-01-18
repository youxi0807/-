let sum5 = 0;
let count_sum5=0;
let timesum5 = 0;
var m5=['招牌豬肉蛋吐司','黑胡椒里肌蛋吐司','炒泡麵','蘑菇鐵板麵','杏仁花生厚片','七彩巧克力厚片','玉米蛋餅','培根蛋餅','煎餃(10個)','雞塊'];
var meal5 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'招牌豬肉蛋吐司',
            imgUrl:'https://img.ltn.com.tw/Upload/news/600/2021/07/31/phpxxAuMp.jpg',
            price:'35',
            count:'0',
            time:'2'
          },
          {
            id:'2',
            itemName:'黑胡椒里肌蛋吐司',
            imgUrl:'https://img.ltn.com.tw/Upload/news/600/2021/07/31/phpxxAuMp.jpg',
            price:'45',
            count:'0',
            time:'2'
          },
          {
            id:'3',
            itemName:'炒泡麵',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/372026/8a48e2c408a81bdc.jpg',
            price:'45',
            count:'0',
            time:'5'
          },
          {
            id:'4',
            itemName:'蘑菇鐵板麵',
            imgUrl:'https://cf.shopee.tw/file/906e29ba766d1f4fafd3bb9149c10d93',
            price:'45',
            count:'0',
            time:'5'
          },
          {
            id:'5',
            itemName:'杏仁花生厚片',
            imgUrl:'https://pic.pimg.tw/dressingfrad/1396253924-1594943164.jpg',
            price:'35',
            count:'0',
            time:'2'
          }, 
          {
            id:'6',
            itemName:'七彩巧克力厚片',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpF0GM_h3ziV4DVhPZXcV1rUXafUyGoRASOpiZfI1c8PaLSfIu5PzRJs3avL9bq10c9w&usqp=CAU',
            price:'35',
            count:'0',
            time:'3'
          }, 
          {
            id:'7',
            itemName:'玉米蛋餅',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/whk104-047a.jpg',
            price:'30',
            count:'0',
            time:'5'
          }, 
          {
            id:'8',
            itemName:'培根蛋餅',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/whk104-047a.jpg',
            price:'35',
            count:'0',
            time:'5'
          }, 
          {
            id:'9',
            itemName:'煎餃(10個)',
            imgUrl:'https://cf.shopee.tw/file/e76ea4d8737b612f250dac65af204211',
            price:'30',
            count:'0',
            time:'10'
          }, 
          {
            id:'10',
            itemName:'雞塊',
            imgUrl:'https://images.chinatimes.com/newsphoto/2020-10-06/1024/20201006002188.jpg',
            price:'30',
            count:'0',
            time:'20'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum5 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum5;
        count_sum5 ++;
        document.getElementById("count").innerHTML = count_sum5;
        timesum5 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum5;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum5 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum5;
          count_sum5 --;
          document.getElementById("count").innerHTML = count_sum5;
          timesum5 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum5;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
})
function ShowMsgFromScript5(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*10);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal5.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m5[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal5.itemList[i].time) <= 20)
    {
      $("#meal").html(m5[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal5.itemList[i].time) <= 40)
    {
      $("#meal").html(m5[i]);
      flag = 1;
    }
    else
    {
      book[i] = 1;
    }
    let temp = 1;
    for (let i = 0; i < 10; i++)
    {
      if (book[i] == 0){
        temp = 0;
      }
    }
    if (temp == 1)
    {
      $("#meal").html("沒有適合你的餐點!");
      flag = 1;
    }
  }
}