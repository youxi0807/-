let sum10 = 0;
let count_sum10=0;
let timesum10 = 0;
var m10=['BBQ牛肉堡','起司牛肉醬漢堡','夏威夷牛肉堡','檸檬脆雞堡','墨西哥莎莎雞腿堡','塔塔豬排堡','日式胡麻豬排堡','蘋果豬排堡'];
var meal10 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'BBQ牛肉堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'90',
            count:'0',
            time:'10'
          },
          {
            id:'2',
            itemName:'起司牛肉醬漢堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0',
            time:'10'
          },
          {
            id:'3',
            itemName:'夏威夷牛肉堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0',
            time:'10'
          },
          {
            id:'4',
            itemName:'檸檬脆雞堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'90',
            count:'0',
            time:'10'
          },
          {
            id:'5',
            itemName:'墨西哥莎莎雞腿堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0',
            time:'10'
          }, 
          {
            id:'6',
            itemName:'塔塔豬排堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0',
            time:'10'
          }, 
          {
            id:'7',
            itemName:'日式胡麻豬排堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'95',
            count:'0',
            time:'10'
          }, 
          {
            id:'8',
            itemName:'蘋果豬排堡',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/10/20/realtime/14371138.jpg&x=0&y=0&sw=0&sh=0&exp=3600',
            price:'100',
            count:'0',
            time:'10'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum10 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum10;
        count_sum10 ++;
        document.getElementById("count").innerHTML = count_sum10;
        timesum10 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum10;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum10 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum10;
          count_sum10 --;
          document.getElementById("count").innerHTML = count_sum10;
          timesum10 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum10;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },

})
function ShowMsgFromScript10(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*8);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal10.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m10[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal10.itemList[i].time) <= 20)
    {
      $("#meal").html(m10[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal10.itemList[i].time) <= 40)
    {
      $("#meal").html(m10[i]);
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
