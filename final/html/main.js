let sum = 0;
let count_sum=0;
let timeSum = 0;
var m=['炒三鮮','醬燒牛肉','雞腿排','多利魚','松阪豬'];
var meal = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'炒三鮮',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/0ed810ca-8b3a-439e-97ef-dc45fc3b2632.jpeg',
            price:'200',
            count:'0',
            time:'20'
          },
          {
            id:'2',
            itemName:'醬燒牛肉',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/49466e16-7dae-41a6-a01e-0872db3fbc2b.jpeg',
            price:'180',
            count:'0',
            time:'20'
          },
          {
            id:'3',
            itemName:'雞腿排',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/9148e12e-7bc4-4e22-b92a-8ade69ea6396.jpeg',
            price:'200',
            count:'0',
            time:'20'
          },
          {
            id:'4',
            itemName:'多利魚',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/a015e6bf-4101-4d17-ba8f-bda214d88362.jpeg',
            price:'200',
            count:'0',
            time:'30'
          },
          {
            id:'5',
            itemName:'松阪豬',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/5221d9ee-bbfc-443c-b60a-95a054a9f496.jpeg',
            price:'260',
            count:'0',
            time:'20'
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
        timeSum += parseInt(item.time);
        document.getElementById("time").innerHTML = timeSum;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum;
          count_sum --;
          document.getElementById("count").innerHTML = count_sum;
          timeSum -= parseInt(item.time);
          document.getElementById("time").innerHTML = timeSum;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
})
function ShowMsgFromScript(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*5);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal.itemList[i].time) <= 20)
    {
      $("#meal").html(m[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal.itemList[i].time) <= 40)
    {
      $("#meal").html(m[i]);
      flag = 1;
    }
    else
    {
      book[i] = 1;
    }
    let temp = 1;
    for (let i = 0; i < 5; i++)
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