let sum9 = 0;
let count_sum9=0;
let timesum9 = 0;
var m9=['濃郁布朗尼','濃郁香蕉布朗尼','提拉米蘇','原味鬆餅(蜂蜜)','原味鬆餅(焦糖)','原味鬆餅(巧克力)','原味貝果','果醬貝果(花生)'];
var meal9 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'濃郁布朗尼',
            imgUrl:'https://cf.shopee.tw/file/72804cfb3ce900c73445bbebd00b3c64',
            price:'80',
            count:'0',
            time:'2'
          },
          {
            id:'2',
            itemName:'濃郁香蕉布朗尼',
            imgUrl:'https://cf.shopee.tw/file/72804cfb3ce900c73445bbebd00b3c64',
            price:'85',
            count:'0',
            time:'2'
          },
          {
            id:'3',
            itemName:'提拉米蘇',
            imgUrl:'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/8a067f7f-156f-4893-ae1d-c7eb7dfc6576/Derivates/56bae163-8f59-4350-92fc-97a6ad4903a3.jpg',
            price:'90',
            count:'0',
            time:'2'
          },
          {
            id:'4',
            itemName:'原味鬆餅(蜂蜜)',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/361937/214857932a831d0a.jpg',
            price:'90',
            count:'0'
          },
          {
            id:'5',
            itemName:'原味鬆餅(焦糖)',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/361937/214857932a831d0a.jpg',
            price:'90',
            count:'0',
            time:'2'
          }, 
          {
            id:'6',
            itemName:'原味鬆餅(巧克力)',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/361937/214857932a831d0a.jpg',
            price:'90',
            count:'0',
            time:'2'
          }, 
          {
            id:'7',
            itemName:'原味貝果',
            imgUrl:'https://eshop.pasadena.com.tw/upload/product/images/202010081419491.JPG',
            price:'40',
            count:'0',
            time:'2'
          }, 
          {
            id:'8',
            itemName:'果醬貝果(花生)',
            imgUrl:'https://eshop.pasadena.com.tw/upload/product/images/202010081419491.JPG',
            price:'60',
            count:'0',
            time:'2'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum9 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum9;
        count_sum9 ++;
        document.getElementById("count").innerHTML = count_sum9;
        timesum9 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum9;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum9 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum9;
          count_sum9 --;
          document.getElementById("count").innerHTML = count_sum9;
          timesum9 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum9;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },

})
function ShowMsgFromScript9(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*8);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal9.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m9[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal9.itemList[i].time) <= 20)
    {
      $("#meal").html(m9[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal9.itemList[i].time) <= 40)
    {
      $("#meal").html(m9[i]);
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
