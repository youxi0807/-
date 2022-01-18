let sum7 = 0;
let count_sum7=0;
let timesum7 = 0;
var m7=['傳統刈包','客家鹹豬肉','日式燒肉(豬肉)','日式燒肉(牛肉)','韓式泡菜(豬肉)','韓式泡菜(牛肉)','古早冬瓜茶'];
var meal7 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'傳統刈包',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/311595/97e8d13bba79323f.jpg',
            price:'40',
            count:'0',
            time:'5'
          },
          {
            id:'2',
            itemName:'客家鹹豬肉',
            imgUrl:'https://live.staticflickr.com/65535/49724688232_b21921ff7c_h.jpg',
            price:'50',
            count:'0',
            time:'10'
          },
          {
            id:'3',
            itemName:'日式燒肉(豬肉)',
            imgUrl:'https://live.staticflickr.com/65535/49724688232_b21921ff7c_h.jpg',
            price:'50',
            count:'0',
            time:'10'
          },
          {
            id:'4',
            itemName:'日式燒肉(牛肉)',
            imgUrl:'https://live.staticflickr.com/65535/49724688232_b21921ff7c_h.jpg',
            price:'55',
            count:'0',
            time:'10'
          },
          {
            id:'5',
            itemName:'韓式泡菜(豬肉)',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpiOwBgcvJZUhzvY1B8nQ1FaOd0Isgo3nBA&usqp=CAU',
            price:'50',
            count:'0',
            time:'10'
          }, 
          {
            id:'6',
            itemName:'韓式泡菜(牛肉)',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpiOwBgcvJZUhzvY1B8nQ1FaOd0Isgo3nBA&usqp=CAU',
            price:'55',
            count:'0',
            time:'10'
          }, 
          {
            id:'7',
            itemName:'古早冬瓜茶',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbFzzroJR7zZZx7jHV2feOdaZxfrRakdKmw&usqp=CAU',
            price:'20',
            count:'0',
            time:'2'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum7 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum7;
        count_sum7 ++;
        document.getElementById("count").innerHTML = count_sum7;
        timesum7 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum7;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum7 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum7;
          count_sum7 --;
          document.getElementById("count").innerHTML = count_sum7;
          timesum7 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum7;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
})
function ShowMsgFromScript7(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*7);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal7.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m7[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal7.itemList[i].time) <= 20)
    {
      $("#meal").html(m7[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal7.itemList[i].time) <= 40)
    {
      $("#meal").html(m7[i]);
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