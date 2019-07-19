new Vue({
    el:"#app",
    data:{
        name:"ThreeG",
        age:30,
        website:"http://threeg.com",
        newTager:"<p>new Tag by v-html</p>"
    },
    methods:{
        helloBoy:function(time){
            return "hello "+time+" "+this.name;
        }
    }
})