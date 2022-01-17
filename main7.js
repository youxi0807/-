let sum = 0;
let count_sum=0;
var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'傳統刈包',
            imgUrl:'https://tokyo-kitchen.icook.network/uploads/recipe/cover/311595/97e8d13bba79323f.jpg',
            price:'40',
            count:'0'
          },
          {
            id:'2',
            itemName:'客家鹹豬肉',
            imgUrl:'https://live.staticflickr.com/65535/49724688232_b21921ff7c_h.jpg',
            price:'50',
            count:'0'
          },
          {
            id:'3',
            itemName:'日式燒肉(豬肉)',
            imgUrl:'https://live.staticflickr.com/65535/49724688232_b21921ff7c_h.jpg',
            price:'50',
            count:'0'
          },
          {
            id:'4',
            itemName:'日式燒肉(牛肉)',
            imgUrl:'https://live.staticflickr.com/65535/49724688232_b21921ff7c_h.jpg',
            price:'55',
            count:'0'
          },
          {
            id:'5',
            itemName:'韓式泡菜(豬肉)',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpiOwBgcvJZUhzvY1B8nQ1FaOd0Isgo3nBA&usqp=CAU',
            price:'50',
            count:'0'
          }, 
          {
            id:'6',
            itemName:'韓式泡菜(牛肉)',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpiOwBgcvJZUhzvY1B8nQ1FaOd0Isgo3nBA&usqp=CAU',
            price:'55',
            count:'0'
          }, 
          {
            id:'7',
            itemName:'古早冬瓜茶',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbFzzroJR7zZZx7jHV2feOdaZxfrRakdKmw&usqp=CAU',
            price:'20',
            count:'0'
          }, 
          {
            id:'8',
            itemName:'桂花酸梅汁',
            imgUrl:'https://lh3.ggpht.com/-vPZYLcKwn_c/UiI1RTV37NI/AAAAAAAAMf8/WPrnmv9aHds/s1600/QAU2enWi8goygSyeLiO_FQ.jpg',
            price:'40',
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