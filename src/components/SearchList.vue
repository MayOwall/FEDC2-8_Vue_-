<template lang="">
  <div class="SearchList">
    <div class="SearchList__List">
      <div
        v-for="movie in movieListCopy"
        :key="movie.imdbID"
        class="SearchList__movie"
        @click="$emit('movieCardClick', movie.imdbID)"
      >
        <div class="dark"></div>
        <img class="poster" :src="movie.Poster" alt="movieposter" />
        <div class="title">
          {{ movie.Title }}
        </div>
        <div class="more">... click to more</div>
      </div>
    </div>
    <button class="moreMovieListBtn" @click="$emit('moreMovieList')">more</button>
  </div>
</template>
<script>
export default {
  name: "SearchList",
  props: {
    searchWord: String,
    movieList: Array,
  },
  data() {
    return {};
  },
  computed: {
    searchWordCopy: function () {
      return [...this.searchWord];
    },
    movieListCopy: function () {
      return [...this.movieList];
    },
  },
  methods: {},
  watch: {},
};
</script>
<style lang="scss">
.SearchList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.SearchList__List {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 100vw;
  padding: 1rem 1rem;

  .SearchList__movie {
    width: 15vw;
    height: 25vw;
    margin: 1rem;
    border-radius: 0.5rem;
    position: relative;
    transition: all 0.5s ease-in-out;
    box-shadow: 0rem 0.2rem 0.5rem rgba(21, 21, 21, 0.622);
    .dark {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      background-color: black;
      opacity: 0;
      transition: all 0.6s ease-in-out;
      z-index: 2;
    }
    .poster {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      transition: all 0.5s ease-in-out;
      z-index: 1;
    }
    .title {
      position: absolute;
      top: 2rem;
      left: 0.7rem;
      color: white;
      border-bottom: 1px solid white;
      max-width: 85%;
      overflow: hidden;
      font-size: 1.5rem;
      font-weight: 700;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      z-index: 3;
    }
    .more {
      position: absolute;
      bottom: 1rem;
      right: 0.7rem;
      opacity: 0;
      transition: all 0.5s ease-in-out;
      z-index: 3;
    }
  }
}
.SearchList__movie:hover {
  transform: scale(1.05);
}
.SearchList__movie:hover > .dark {
  opacity: 0.8;
}
.SearchList__movie:hover > .poster {
  transform: rotateY(180deg);
}
.SearchList__movie:hover > .title {
  opacity: 1;
}
.SearchList__movie:hover > .more {
  opacity: 1;
}
.SearchList__movie:hover > .SearchList__movie__front {
  // display: none;
  transform: rotateY(180deg);
}
.SearchList__movie:hover > .SearchList__movie__back {
  // display: block;
  transform: rotateY(0deg);
}
</style>
