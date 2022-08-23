<template>
  <div class="all-view">
    <div class="container">
      <div class="title-wrap">
        <h2 class="title">모든 MBTI 동물 유형</h2>
      </div>
      <ul>
        <li class="card" v-for="(item, idx) in GE_RESULT" :key="idx">
          <h3>{{ item.animal }}</h3>
          <div class="mbti">
            <span class="pr-10">{{ item.explain }}</span>
            <strong class="color-main">{{ item.mbti }}</strong>
          </div>

          <p>{{ item.features }}</p>
          <div class="img-wrap">
            <img :src="require(`@/assets/images/${item.img}`)" />
          </div>
        </li>
      </ul>
      <button class="button-grey" @click="$router.push({ name: 'main' })">
        뒤로가기
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "all-view",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("result", ["GE_RESULT"]),
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #e5e5e5;
  padding: 40px;
  margin-bottom: 20px;
}

.card .img-wrap {
  width: 150px;
  padding-top: 50px;
}
</style>
