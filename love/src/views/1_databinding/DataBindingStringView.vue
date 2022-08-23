<template>
<div>
    <h1>Hello {{ userName }}.</h1>
    <p><i>{{ message }}</i></p>
</div>

</template>

<script>
export default {
  data() {
    return {
      userName: '문희인',
      message: 'Vue.js 의 세상으로 온 것을 환영해.',
      arr: {},
      obj: {}
    }
  }
}
</script>
<style scoped>
.text-red{
    color: red;
}
</style>
