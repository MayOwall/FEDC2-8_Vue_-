<template lang="">
  <nav class="Nav">
    <div class="Nav__title">MOVIE</div>
    <div class="Nav__search :class={ }">SEARCH</div>
    <div class="Nav__etcs">ETCS</div>
    <div class="Nav__user">
      <i class="fa-solid fa-user"></i>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.Nav {
  width: 100vw;
  height: 4.5rem;
  background-color: rgb(40, 40, 40);
  display: flex;
  align-items: center;
  color: gold;
  padding: 0 2rem 0.2rem 2rem;
  position: fixed;
  top: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  .Nav__title {
    font-size: 2rem;
    font-weight: 900;
    text-decoration: underline;
  }
  .Nav__search,
  .Nav__etcs {
    opacity: 0.7;
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 1rem;
    padding-top: 0.1rem;
    color: darkgray;
    transition: all 0.2s ease-in-out;
  }
  .Nav__search {
    margin-left: 2rem;
  }
  .Nav__search:hover,
  .Nav__etcs:hover {
    color: gold;
  }
  .Nav__user {
    opacity: 0.7;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    position: fixed;
    right: 2rem;
    background-color: darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 1.5rem;
      color: rgb(40, 40, 40);
    }
    transition: all 0.5s ease-in-out;
  }
  .Nav__user:hover {
    background-color: white;
  }
  .Nav__user:active {
    background-color: gold;
  }
}
</style>
