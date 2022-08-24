<template>
<div>
    <button @click="increaseCounter">클릭하시오</button>
    <!-- @click =" 실행될 함수 네임 " -->
    <p> {{ counter }} </p>
    <!-- 버튼을 누르면 버튼 밑에 카운트가 증가하는 것을 문자열 형태로 보여주기 -->
</div>
</template>
<script>

export default{
    name:'',
    components:{},
    data(){
        return{
            counter:0
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    //등록할 함수는 methods 안에 입력 function(){} 와 같은 형식으로
    methods:{
        increaseCounter(){
            this.counter += 1
        }
    }
}
</script>