let sum11 = 0;
let count_sum11=0;
let timesum11 = 0;
var m11=['招牌鍋貼*10','韭菜鍋貼*10','咖哩鍋貼*10','玉米鍋貼*10','招牌水餃*10','韭菜水餃*10','咖哩水餃*10','玉米水餃*10'];
var meal11 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'招牌鍋貼',
            imgUrl:'https://linky.tw/wp-content/uploads/2018/06/p_leeks-1000x600.gif',
            price:'6',
            count:'0',
            time:'10'
          },
          {
            id:'2',
            itemName:'韭菜鍋貼',
            imgUrl:'https://linky.tw/wp-content/uploads/2018/06/p_leeks-1000x600.gif',
            price:'6',
            count:'0',
            time:'10'
          },
          {
            id:'3',
            itemName:'咖哩鍋貼',
            imgUrl:'https://linky.tw/wp-content/uploads/2018/06/p_leeks-1000x600.gif',
            price:'6.3',
            count:'0',
            time:'10'
          },
          {
            id:'4',
            itemName:'玉米鍋貼',
            imgUrl:'https://linky.tw/wp-content/uploads/2018/06/p_leeks-1000x600.gif',
            price:'6.3',
            count:'0',
            time:'10'
          },
          {
            id:'5',
            itemName:'招牌水餃',
            imgUrl:'https://lh5.googleusercontent.com/-2e4E93ZhnU0/UtPkThcvb_I/AAAAAAAAA80/MHsAWukCLz4/s400/IMG_1598.JPG',
            price:'6',
            count:'0',
            time:'10'
          }, 
          {
            id:'6',
            itemName:'韭菜水餃',
            imgUrl:'https://lh5.googleusercontent.com/-2e4E93ZhnU0/UtPkThcvb_I/AAAAAAAAA80/MHsAWukCLz4/s400/IMG_1598.JPG',
            price:'6',
            count:'0',
            time:'10'
          }, 
          {
            id:'7',
            itemName:'咖哩水餃',
            imgUrl:'https://lh5.googleusercontent.com/-2e4E93ZhnU0/UtPkThcvb_I/AAAAAAAAA80/MHsAWukCLz4/s400/IMG_1598.JPG',
            price:'6.3',
            count:'0',
            time:'10'
          }, 
          {
            id:'8',
            itemName:'玉米水餃',
            imgUrl:'https://lh5.googleusercontent.com/-2e4E93ZhnU0/UtPkThcvb_I/AAAAAAAAA80/MHsAWukCLz4/s400/IMG_1598.JPG',
            price:'6.3',
            count:'0',
            time:'10'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum11 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum11;
        count_sum11 ++;
        document.getElementById("count").innerHTML = count_sum11;
        timesum11 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum11;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum11 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum11;
          count_sum11 --;
          document.getElementById("count").innerHTML = count_sum11;
          timesum11 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum11;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
})
function ShowMsgFromScript11(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*8);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal11.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m11[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal11.itemList[i].time) <= 20)
    {
      $("#meal").html(m11[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal11.itemList[i].time) <= 40)
    {
      $("#meal").html(m11[i]);
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
