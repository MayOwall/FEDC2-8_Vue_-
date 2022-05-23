<template lang="">
  <div class="Searchbar">
    <form
      class="Searchbar__form"
      @submit.prevent="$emit('searchBarSubmit', searchWord)"
    >
      <input type="text" class="Searchbar__input" v-model="searchWord" />
      <button class="Searchbar__button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Searchbar",
  data() {
    return {
      searchWord: "",
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.Searchbar {
  width: 100vw;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  

  .Searchbar__form {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .Searchbar__input {
      width: 40rem;
      height: 4rem;
      border-radius: 3rem;
      outline: none;
      transition: all 0.3s ease-out;
      background: none;
      background-color: rgba(255, 255, 255, 0.292);
      border: none;
      box-shadow: none;
      font-size: 1.5rem;
      color: rgb(74, 74, 74);
      padding: 0 5rem 0 2rem;
    }
    .Searchbar__input:focus {
      outline: 0.1rem solid gold;
      background-color: rgba(255, 255, 255, 0.799);
      // box-shadow: 0 0 0.5rem goldenrod;
    }
    .Searchbar__button {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 2rem;
      background-color: gold;
      color: rgb(74, 74, 74);
      border: none;
      position: absolute;
      right: 0.5rem;
      font-size: 1.5rem;
      transition: all 0.2s ease-in-out;
    }
    .Searchbar__button:hover {
      background-color: goldenrod;
      color: black;
    }
  }
  .Searchbar__form:focus {
    outline: 2px solid gold;
  }
}
</style>
