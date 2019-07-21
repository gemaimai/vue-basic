var count=0;
new Vue({
    el:"#app",
    data:{
        HP:100,
        ended:false
    },
    methods:{
        impact:function(){
            this.HP-=10;
            if(this.HP<=0){
                this.ended=true;
            }
        },
        reset:function(){
            this.HP=100;
            this.ended=false;
        }
    },
    computed:{
        getClass:function(){

        }
    }
})