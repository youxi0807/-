let sum8 = 0;
let count_sum8=0;
let timesum8 = 0;
var m8=['日光仙草冰','綜合仙草冰','芋圓仙草凍','仙草甘茶','花生綿綿冰','梅子綿綿冰','鳳梨綿綿冰','草莓綿綿冰'];
var meal8 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'日光仙草冰',
            imgUrl:'https://images.zi.org.tw/twpang/2020/08/23231857/1598195936-e6b38354452a59767cf656de9b9a712a-768x432.jpg',
            price:'55',
            count:'0',
            time:'5'
          },
          {
            id:'2',
            itemName:'綜合仙草冰',
            imgUrl:'https://images.zi.org.tw/twpang/2020/08/23231857/1598195936-e6b38354452a59767cf656de9b9a712a-768x432.jpg',
            price:'65',
            count:'0',
            time:'5'
          },
          {
            id:'3',
            itemName:'芋圓仙草凍',
            imgUrl:'https://images.zi.org.tw/twpang/2020/08/23231857/1598195936-e6b38354452a59767cf656de9b9a712a-768x432.jpg',
            price:'45',
            count:'0',
            time:'5'
          },
          {
            id:'4',
            itemName:'仙草甘茶',
            imgUrl:'https://www.yuanlin-1900.com/archive/image//%E8%8C%B6_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F%201.jpg',
            price:'35',
            count:'0',
            time:'2'
          },
          {
            id:'5',
            itemName:'花生綿綿冰',
            imgUrl:'https://cdn2.ettoday.net/images/4976/d4976677.jpg',
            price:'35',
            count:'0',
            time:'5'
          }, 
          {
            id:'6',
            itemName:'梅子綿綿冰',
            imgUrl:'https://cdn2.ettoday.net/images/4976/d4976677.jpg',
            price:'35',
            count:'0',
            time:'5'
          }, 
          {
            id:'7',
            itemName:'鳳梨綿綿冰',
            imgUrl:'https://cdn2.ettoday.net/images/4976/d4976677.jpg',
            price:'35',
            count:'0',
            time:'5'
          }, 
          {
            id:'8',
            itemName:'草莓綿綿冰',
            imgUrl:'https://cdn2.ettoday.net/images/4976/d4976677.jpg',
            price:'35',
            count:'0',
            time:'5'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum8 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum8;
        count_sum8 ++;
        document.getElementById("count").innerHTML = count_sum8;
        timesum8 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum8;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum8 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum8;
          count_sum8 --;
          document.getElementById("count").innerHTML = count_sum8;
          timesum8 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum8;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
})
function ShowMsgFromScript8(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*8);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal8.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m8[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal8.itemList[i].time) <= 20)
    {
      $("#meal").html(m8[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal8.itemList[i].time) <= 40)
    {
      $("#meal").html(m8[i]);
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
