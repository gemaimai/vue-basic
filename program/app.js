new Vue({
    el:"#app",
    data:{
        name:"ThreeG",
        age:30,
        website:"http://threeg.com",
        newTager:"<p>new Tag by v-html</p>",
        x:0,
        y:0
    },
    methods:{
        helloBoy:function(time){
            return "hello "+time+" "+this.name;
        },
        addAge:function(step){
            this.age+=step;
        },
        substactAge:function(step){
            this.age-=step;
        },
        updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;
        },
        stopMoving:function(event){
             event.stopPropagation();
             event.stopPropagation();
        },
        stopFN:function(){
            
        }
    }
})