let sum2 = 0;
let count_sum2=0;
let timesum2 = 0;
var m2=['香腸飯','糖醋排骨飯','排骨飯','宮保雞丁飯','三杯G腿飯','烤鯖魚飯','黑胡椒豬柳飯'];
var meal2 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'香腸飯',
            imgUrl:'https://pic.pimg.tw/anoli/1625419138-3241307493-g_wn.jpg',
            price:'60',
            count:'0',
            time:'20'
          },
          {
            id:'2',
            itemName:'糖醋排骨飯',
            imgUrl:'https://lh5.googleusercontent.com/p/AF1QipOgOA3oappd2JvoAuBnA2L23xvclFyPK65doZSj=w1080-k-no',
            price:'60',
            count:'0',
            time:'20'
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
            count:'0',
            time:'20'
          },
          {
            id:'5',
            itemName:'三杯G腿飯',
            imgUrl:'https://pic.pimg.tw/anoli/1599835888-559413632-g_wn.jpg',
            price:'60',
            count:'0',
            time:'20'
          }, 
          {
            id:'6',
            itemName:'烤鯖魚飯',
            imgUrl:'https://pic.pimg.tw/anoli/1625419138-3241307493-g_wn.jpg',
            price:'65',
            count:'0',
            time:'20'
          }, 
          {
            id:'7',
            itemName:'黑胡椒豬柳飯',
            imgUrl:'https://pic.pimg.tw/anoli/1625419138-3241307493-g_wn.jpg',
            price:'70',
            count:'0',
            time:'25'
          }, 
          {
            id:'8',
            itemName:'蒲燒魚飯',
            imgUrl:'https://lh5.googleusercontent.com/p/AF1QipOgOA3oappd2JvoAuBnA2L23xvclFyPK65doZSj=w1080-k-no',
            price:'70',
            count:'0',
            time:'25'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum2 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum2;
        count_sum2 ++;
        document.getElementById("count").innerHTML = count_sum2;
        timesum2 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum2;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum2 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum2;
          count_sum2 --;
          document.getElementById("count").innerHTML = count_sum2;
          timesum2 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum2;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },

})
function ShowMsgFromScript2(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*7);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal2.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m2[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal2.itemList[i].time) <= 20)
    {
      $("#meal").html(m2[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal2.itemList[i].time) <= 40)
    {
      $("#meal").html(m2[i]);
      flag = 1;
    }
    else
    {
      book[i] = 1;
    }
    let temp = 1;
    for (let i = 0; i < 7; i++)
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