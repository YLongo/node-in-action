<template>
  <div class="about">
    <h3>{{ msg }}</h3>
    <p>全国城市信息查询系统</p>
    <p>Director : king</p>
    <p>Based on vue + node + webpack & web public api</p>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      msg: "about"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
