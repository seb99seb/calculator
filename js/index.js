const app = Vue.createApp({
    data() {
        return {
            number1: 0,
            number2: 0,
            result: 0
        }
    },
    computed:{
        
    },
    methods:{
        calculate(){
            this.result = this.number1 + this.number2
            
        }
    }
}).mount("#app")