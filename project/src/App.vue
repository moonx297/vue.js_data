<template>
  <nav>
    <!-- router-link to=""와 index.js의 path 가 일치해야 한다. -->
    <router-link to="/">Home</router-link> |   
     <!-- /를 검색하면 router/index.js에 있는 path:/를 찾는다. -->
    <router-link to="/about">About</router-link>  
    <!-- /about 을 검색하면 router/index.js에 있는 똑같은 값이 있는 path:/about으로 타고 들어간다. -->
  </nav>
  <router-view/>  
  <!-- 이 부분만 변화가 일어난다. -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
