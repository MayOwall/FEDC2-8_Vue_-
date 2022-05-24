<template lang="">
  <SplashScreen />
  <!--splashScreen이 로딩 늦게되는 문제 있음..백그라운드 div를 하나 더 만들어 줘야 할 듯-->
  <Nav />
  <main>
    <div>
      <Searchbar
        @searchBarSubmit="
          searchBarSubmit($event);
          movieListSearch();
        "
      />
      <SearchList
        :searchWord="searchWord"
        :movieList="movieList"
        @moreMovieList="
          searchBarSubmit(searchWord);
          movieListSearch(searchWord);
        "
        @movieCardClick="movieCardClick($event)"
      />
      <MovieDetail
        :clickedMovie="clickedMovie"
        v-if="isMovieDetailShow"
        @closeMovieDetail="this.isMovieDetailShow = false"
      />
    </div>
  </main>
</template>
<script>
import SplashScreen from "./components/SplashScreen.vue";
import Nav from "./components/Nav.vue";
import Searchbar from "./components/Searchbar.vue";
import SearchList from "./components/SearchList.vue";
import MovieDetail from "./components/MovieDetail.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    SplashScreen,
    Nav,
    Searchbar,
    SearchList,
    MovieDetail,
  },
  data() {
    return {
      searchWord: "",
      movieList: [],
      moreMovieListBtnClick: 1,
      clickedMovie: {},
      isMovieDetailShow: false,
    };
  },
  methods: {
    searchBarSubmit(newWord = this.searchWord) {
      // console.log(newWord);
      // console.log(this.searchWord);
      // console.log(newWord !== this.searchWord);
      if (this.searchWord !== newWord) {
        this.moreMovieListBtnClick = 1;
        this.searchWord = newWord;
        this.movieList = [];
        console.log("moreMovieListBtnClick : ", this.moreMovieListBtnClick);
        console.log("newWord : ", newWord);
      } else {
        this.moreMovieListBtnClick += 1;
        console.log("moreMovieListBtnClick : ", this.moreMovieListBtnClick);
      }
    },
    movieListSearch() {
      console.log("this.searchWord : ", this.searchWord);
      console.log("this.moreMovieListBtnClick : ", this.moreMovieListBtnClick);
      axios
        .get(
          `https://www.omdbapi.com?apikey=7035c60c&s=${this.searchWord}&page=${this.moreMovieListBtnClick}`
        )
        .then((response) => {
          console.log(response.data);
          if (response.data.Response === "True") {
            console.log("response is true");
            this.movieList.push(...response.data.Search);
            console.log(this.movieList);
          } else if (response.data.Response === "False") {
            console.log("response is false");
            alert(
              "검색결과가 너무 많아 불러올 수 없어요! 다른 검색어를 써 보는 것이 어떨까요? : ("
            );
          }
        });
    },
    movieCardClick(movieId) {
      console.log(movieId);
      axios
        .get(`https://www.omdbapi.com?apikey=7035c60c&i=${movieId}&plot=short`)
        .then((response) => {
          console.log(response.data);
          this.clickedMovie = response.data;
          console.log("this.clickedMovie : ", this.clickedMovie);
        });
      this.isMovieDetailShow = true;
    },
  },
};
</script>
<style lang="scss">
main {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to bottom, rgb(70, 70, 70), rgb(40, 40, 40));
  padding-top: 4.5rem;
  color: white;
}
</style>
