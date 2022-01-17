let sum = 0;
let count_sum=0;
var app = new Vue({
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
            sum += parseInt(item.price);
            document.getElementById("price").innerHTML = sum;
            count_sum ++;
            document.getElementById("count").innerHTML = count_sum;
        },
        handleSub: function(item){
            if(item.count>0){
              item.count--;
              sum -= parseInt(item.price);
              document.getElementById("price").innerHTML = sum;
              count_sum --;
              document.getElementById("count").innerHTML = count_sum;s               
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
    computed:{
        
    }
})