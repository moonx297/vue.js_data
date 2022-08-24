<template>
  <div id="app">
    <!-- vue 에서는 컴포넌트의 이름을 두 개 이상의 단어를 조합하여 만드는 것을 추천한다.
         HTML 요소와 혼동을 일으킬 수 있는 요소를 제거하기 위해. -->
    <router-view />
    <!-- elements에서 변화가 일어나는 곳이 여기? -->
  </div>
</template>

<script>
import "@/assets/css/badge.css";

export default {};
</script>
