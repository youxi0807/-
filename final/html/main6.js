let sum66 = 0;
let count_sum6=0;
let timesum6 = 0;
var m6=['半雞','帶翅雞胸','雞腿','雞冠','雞心','雞胗','高麗菜','青花菜','甜不辣','吉古拉'];
var meal6 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'半雞',
            imgUrl:'https://www.frozenfoods.com.tw/upload/catalog_product_m/ALL_catalog_product_20E26_ut53mvvqms.jpg',
            price:'110',
            count:'0',
            time:'10'
          },
          {
            id:'2',
            itemName:'帶翅雞胸',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxX9zpx0nnpXVMqURXDVQTSZZ59Iu4djHuxg&usqp=CAU',
            price:'60',
            count:'0',
            time:'10'
          },
          {
            id:'3',
            itemName:'雞腿',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/whk095-051a.jpg',
            price:'60',
            count:'0',
            time:'10'
          },
          {
            id:'4',
            itemName:'雞冠',
            imgUrl:'https://cf.shopee.tw/file/f486b36408143d5c0e0b965c3c84f582',
            price:'20',
            count:'0',
            time:'2'
          },
          {
            id:'5',
            itemName:'雞心',
            imgUrl:'http://2.bp.blogspot.com/-upAGjsYB1iY/VIlQsKYW72I/AAAAAAAAIBQ/AUHOqAaJFHs/s1600/IMG_3936.JPG',
            price:'20',
            count:'0',
            time:'2'
          }, 
          {
            id:'6',
            itemName:'雞胗',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/248487/63f98fb1ab94d40c.jpg',
            price:'20',
            count:'0',
            time:'2'
          }, 
          {
            id:'7',
            itemName:'高麗菜',
            imgUrl:'https://img-global.cpcdn.com/recipes/2bef77b26572c1f8/1200x630cq70/photo.jpg',
            price:'20',
            count:'0',
            time:'2'
          }, 
          {
            id:'8',
            itemName:'青花菜',
            imgUrl:'https://d3l76hx23vw40a.cloudfront.net/recipe/yqn04-020b.jpg',
            price:'20',
            count:'0',
            time:'2'
          }, 
          {
            id:'9',
            itemName:'甜不辣',
            imgUrl:'https://cf.shopee.tw/file/b3ce99fc1d7829d474c57af09ff35719',
            price:'20',
            count:'0',
            time:'5'
          }, 
          {
            id:'10',
            itemName:'吉古拉',
            imgUrl:'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/04/10/99/6158586.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=800',
            price:'20',
            count:'0',
            time:'2'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum6 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum6;
        count_sum6 ++;
        document.getElementById("count").innerHTML = count_sum6;
        timesum6 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum6;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum6 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum6;
          count_sum6 --;
          document.getElementById("count").innerHTML = count_sum6;
          timesum6 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum6;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
})
function ShowMsgFromScript6(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*10);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal6.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m6[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal6.itemList[i].time) <= 20)
    {
      $("#meal").html(m6[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal6.itemList[i].time) <= 40)
    {
      $("#meal").html(m6[i]);
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