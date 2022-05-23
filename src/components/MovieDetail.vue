<template lang="">
  <div class="MovieDetail">
    <div class="MovieDetail__background" @click="clickMovieDetail($event)">
      <div class="MovieDetail__contentBox">
        <header>
          <span class="MovieDetail__title">
            {{ clickedMovieCopy.Title }}
          </span>
          <span class="MovieDetail__year">({{ clickedMovieCopy.Year }})</span>
        </header>
        <section>
          <article class="article1">
            <img :src="clickedMovieCopy.Poster" alt="movie-poster" />
          </article>
          <article class="article2">
            <div class="MovieDetail__released">
              Released : {{ clickedMovieCopy.Released }}
            </div>
            <div class="MovieDetail__runtime">
              Runtime : {{ clickedMovieCopy.Runtime }}
            </div>
            <div class="MovieDetail__genre">
              Genre : {{ clickedMovieCopy.Genre }}
            </div>
            <div class="MovieDetail__director">
              Director : {{ clickedMovieCopy.Director }}
            </div>
            <div>Writer :</div>
            <div class="MovieDetail__writer">{{ clickedMovieCopy.Writer }}</div>
            <div>Actors :</div>
            <div class="MovieDetail__actors">
              Actors : {{ clickedMovieCopy.Actors }}
            </div>
            <div class="MovieDetail__plot">
              <div>Plot :</div>
              {{ clickedMovieCopy.Plot }}
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieDetail",
  props: {
    clickedMovie: Object,
  },
  computed: {
    clickedMovieCopy: function () {
      return { ...this.clickedMovie };
    },
  },
  methods: {
    datacheck() {
      console.log(this.clickedMovieCopy);
    },
    clickMovieDetail(e) {
      console.log(e.target.className);
      if (e.target.className === "MovieDetail__background") {
        this.$emit("closeMovieDetail");
      }
    },
  },
};
</script>
<style lang="scss">
.MovieDetail__background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;

  .MovieDetail__contentBox {
    width: 50rem;
    height: 50rem;
    background-color: rgba(82, 82, 82, 0.9);
    color: rgba(255, 255, 255, 0.861);
    overflow: hidden;
    padding: 0 2rem;
    border-radius: 1rem;

    header {
      width: 100%;
      height: 6rem;
      padding-top: 3rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.495);
      .MovieDetail__title {
        font-size: 2rem;
        font-weight: 900;
        margin-right: 1rem;
        color: white;
      }
    }
    section {
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;

      article {
        width: 45%;
      }
      .article1 {
        font-size: 0.8rem;

        img {
          width: 100%;
          margin-bottom: 0.5rem;
        }
      }
      .article2 {
        div {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 500;
        }
        .MovieDetail__plot {
          margin-top: 4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.534);
        }
      }
    }
  }
}
</style>
