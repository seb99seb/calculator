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
            result = number1 + number2
        }
    }
}).mount("#app")