let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'炒三鮮',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/0ed810ca-8b3a-439e-97ef-dc45fc3b2632.jpeg',
            price:'200',
            count:'0'
          },
          {
            id:'2',
            itemName:'醬燒牛肉',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/49466e16-7dae-41a6-a01e-0872db3fbc2b.jpeg',
            price:'180',
            count:'0'
          },
          {
            id:'3',
            itemName:'雞腿排',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/9148e12e-7bc4-4e22-b92a-8ade69ea6396.jpeg',
            price:'200',
            count:'0'
          },
          {
            id:'4',
            itemName:'多利魚',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/a015e6bf-4101-4d17-ba8f-bda214d88362.jpeg',
            price:'200',
            count:'0'
          },
          {
            id:'5',
            itemName:'松阪豬',
            imgUrl:'https://d1ralsognjng37.cloudfront.net/5221d9ee-bbfc-443c-b60a-95a054a9f496.jpeg',
            price:'260',
            count:'0'
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
              document.getElementById("count").innerHTML = count_sum;
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