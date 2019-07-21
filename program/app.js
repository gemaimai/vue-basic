var count=0;
new Vue({
    el:"#app",
    data:{
        changeColor:true,
        changeLength:false
    },
    methods:{
        changeColorFn:function(){
            this.changeColor=!this.changeColor;
            this.changeLength=!this.changeLength;
        }
    },
    computed:{
        getClassList:function(){

            return {
                changeColor:this.changeColor,
                changeLength:this.changeLength
            }
        },
        changeColorComputed:function(){
            this.changeColor=!this.changeColor;
        }
    }
})