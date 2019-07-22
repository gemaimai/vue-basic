Vue.component("newtag",{
    data:function(){
        return {
            name:"TG",
            count:0
        }
    },
    template:"<p v-on:click='impact'>this is new tag for component template! auther:{{name}}{{count}}</p>",
    methods:{
        impact:function(){
            this.count++;
        }
    }
})

new Vue({
    el:"#app_1"    
})

new Vue({
    el:"#app_2"
})