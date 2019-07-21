new Vue({
    el:"#app",
    data:{
        name:"ThreeG",
        age:30 ,
        address:"山东" 
    },
    methods:{
        logAge:function(event){
            //通过事件对象获取dom属性
            this.age=event.currentTarget.value;
            console.log(event.keyCode);
        },
        logName:function(){
            //通过ref refs 来获取页面dom;
            this.name=this.$refs.name.value;
        }
    }
})