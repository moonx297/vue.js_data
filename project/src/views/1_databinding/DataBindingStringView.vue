<template>
<div>
    <h1></h1>
    <p> b</p>
</div>    
    
</template>

<script>
export default {
    data(){
        return{
            userName: "HeeIn Moon",
            message: '',
            arr:{},
            obj:{}
        }
    }
}
</script>
<style scoped>  
/* scoped를 빼면 모든 컴포넌트에 red 컬러가 적용된다. 하지만 일반적으로 
전체에 적용할 컬러는 assets에 CSS를 작성해준다.*/
.text-red{
    color: red;
}
</style>