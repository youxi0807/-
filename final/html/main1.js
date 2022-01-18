let sum1 = 0;
let count_sum1=0;
let timesum1 = 0;
var m1=['蔬菜粥','皮蛋瘦肉粥','吻仔魚粥','海鮮粥','廣東皮蛋粥','鮑魚粥'];
var meal1 = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'蔬菜粥',
            imgUrl:'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.18169-9/11079061_912915145428060_8838409424821949629_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JQTgWalyW2YAX-pnrlp&tn=lIbeuvmfP5Eh-Rwk&_nc_ht=scontent.ftpe7-1.fna&oh=00_AT8DcSOIvrg_csiE_9Sq9mSCy2lvkEyIE2QWOGehlFexRA&oe=620B2C1C',
            price:'55',
            count:'0',
            time:'15'
          },
          {
            id:'2',
            itemName:'皮蛋瘦肉粥',
            imgUrl:'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.18169-9/11079061_912915145428060_8838409424821949629_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JQTgWalyW2YAX-pnrlp&tn=lIbeuvmfP5Eh-Rwk&_nc_ht=scontent.ftpe7-1.fna&oh=00_AT8DcSOIvrg_csiE_9Sq9mSCy2lvkEyIE2QWOGehlFexRA&oe=620B2C1C',
            price:'60',
            count:'0',
            time:'15'
          },
          {
            id:'3',
            itemName:'吻仔魚粥',
            imgUrl:'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.18169-9/11079061_912915145428060_8838409424821949629_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JQTgWalyW2YAX-pnrlp&tn=lIbeuvmfP5Eh-Rwk&_nc_ht=scontent.ftpe7-1.fna&oh=00_AT8DcSOIvrg_csiE_9Sq9mSCy2lvkEyIE2QWOGehlFexRA&oe=620B2C1C',
            price:'65',
            count:'0',
            time:'15'
          },
          {
            id:'4',
            itemName:'海鮮粥',
            imgUrl:'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.18169-9/11079061_912915145428060_8838409424821949629_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JQTgWalyW2YAX-pnrlp&tn=lIbeuvmfP5Eh-Rwk&_nc_ht=scontent.ftpe7-1.fna&oh=00_AT8DcSOIvrg_csiE_9Sq9mSCy2lvkEyIE2QWOGehlFexRA&oe=620B2C1C',
            price:'70',
            count:'0',
            time:'20'
          },
          {
            id:'5',
            itemName:'廣東皮蛋粥',
            imgUrl:'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.18169-9/11079061_912915145428060_8838409424821949629_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JQTgWalyW2YAX-pnrlp&tn=lIbeuvmfP5Eh-Rwk&_nc_ht=scontent.ftpe7-1.fna&oh=00_AT8DcSOIvrg_csiE_9Sq9mSCy2lvkEyIE2QWOGehlFexRA&oe=620B2C1C',
            price:'70',
            count:'0',
            time:'25'
          }, 
          {
            id:'6',
            itemName:'鮑魚粥',
            imgUrl:'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.18169-9/11079061_912915145428060_8838409424821949629_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JQTgWalyW2YAX-pnrlp&tn=lIbeuvmfP5Eh-Rwk&_nc_ht=scontent.ftpe7-1.fna&oh=00_AT8DcSOIvrg_csiE_9Sq9mSCy2lvkEyIE2QWOGehlFexRA&oe=620B2C1C',
            price:'75',
            count:'0',
            time:'20'
          }, 
    ]
    },
    methods:{
      handlePlus: function(item){
        item.count++;
        sum1 += parseInt(item.price);
        document.getElementById("price").innerHTML = sum1;
        count_sum1 ++;
        document.getElementById("count").innerHTML = count_sum1;
        timesum1 += parseInt(item.time);
        document.getElementById("time").innerHTML = timesum1;
      },
      handleSub: function(item){
        if(item.count>0){
          item.count--;
          sum1 -= parseInt(item.price);
          document.getElementById("price").innerHTML = sum1;
          count_sum1 --;
          document.getElementById("count").innerHTML = count_sum1;
          timesum1 -= parseInt(item.time);
          document.getElementById("time").innerHTML = timesum1;               
        }
      },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
})
function ShowMsgFromScript1(){
  let flag = 0, book = new Array(0, 0, 0, 0, 0, 0);
  while (!flag)
  {
    var i=Math.floor(Math.random()*6);
    let hungry = $("#typ").val();
    console.log(i);
    if (hungry == 10 && parseInt(meal1.itemList[i].time) <= 15)
    {
      document.getElementById("meal").innerHTML=m1[i];
      flag = 1;
    }
    else if (hungry <=9 && hungry>= 5 && parseInt(meal1.itemList[i].time) <= 20)
    {
      $("#meal").html(m1[i]);
      flag = 1;
    }
    else if (hungry <= 4 && hungry>= 0 && parseInt(meal1.itemList[i].time) <= 40)
    {
      $("#meal").html(m1[i]);
      flag = 1;
    }
    else
    {
      book[i] = 1;
    }
    let temp = 1;
    for (let i = 0; i < 6; i++)
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