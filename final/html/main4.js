let sum4 = 0;
let count_sum4=0;
let timesum4 = 0;
var m4=['煎蛋三明治','火腿蛋三明治','培根蛋三明治','里肌堡','牛肉堡','湯包(6粒)','蘿蔔糕','紅茶'];
var meal4 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'煎蛋三明治',
            imgUrl:'https://img.ltn.com.tw/Upload/food/page/2020/05/04/200504-10661-123-jaFRa.png',
            price:'20',
            count:'0',
            time:'5'
          },
          {
            id:'2',
            itemName:'火腿蛋三明治',
            imgUrl:'https://img.ltn.com.tw/Upload/food/page/2020/05/04/200504-10661-123-jaFRa.png',
            price:'25',
            count:'0',
            time:'5'
          },
          {
            id:'3',
            itemName:'培根蛋三明治',
            imgUrl:'https://img.ltn.com.tw/Upload/food/page/2020/05/04/200504-10661-123-jaFRa.png',
            price:'25',
            count:'0',
            time:'5'
          },
          {
            id:'4',
            itemName:'里肌堡',
            imgUrl:'http://pic.pimg.tw/vickyang0812/1382956068-972966593.jpg',
            price:'30',
            count:'0',
            time:'5'
          },
          {
            id:'5',
            itemName:'牛肉堡',
            imgUrl:'http://pic.pimg.tw/vickyang0812/1382956068-972966593.jpg',
            price:'35',
            count:'0',
            time:'5'
          }, 
          {
            id:'6',
            itemName:'湯包(6粒)',
            imgUrl:'https://images.chinatimes.com/newsphoto/2020-10-23/656/20201023003626.jpg',
            price:'20',
            count:'0',
            time:'10'
          }, 
          {
            id:'7',
            itemName:'蘿蔔糕',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/289212/3b4c90d3e2ea65d5.jpg',
            price:'25',
            count:'0',
            time:'5'
          }, 
          {
            id:'8',
            itemName:'紅茶',
            imgUrl:'https://www.hanyitea.tw/wp-content/uploads/2021/06/266701050_680252609642074_1816715256550604828_n.jpg',
            price:'20',
            count:'0',
            time:'2'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum4 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum4;
        count_sum4 ++;
        document.getElementById("count").innerHTML = count_sum4;
        timesum4 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum4;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum4 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum4;
          count_sum4 --;
          document.getElementById("count").innerHTML = count_sum4;
          timesum4 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum4;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },

})
function ShowMsgFromScript4(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*8);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal4.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m4[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal4.itemList[i].time) <= 20)
    {
      $("#meal").html(m4[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal4.itemList[i].time) <= 40)
    {
      $("#meal").html(m4[i]);
      flag = 1;
    }
    else
    {
      book[i] = 1;
    }
    let temp = 1;
    for (let i = 0; i < 8; i++)
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