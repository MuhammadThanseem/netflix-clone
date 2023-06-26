<template>
  <div>
    <div
      class="banner"
      :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
    >
      <div class="content">
        <h1 class="title">{{ bannerMovie ? bannerMovie.title : "" }}</h1>
        <div class="banner_buttons">
          <button class="button" @click="getVideoId(bannerMovie.id)">
            <font-awesome-icon icon="fa-solid fa-play" /> Play
          </button>
          <button class="button">
            <font-awesome-icon icon="fa-solid fa-list" /> My list
          </button>
        </div>
        <h1 class="description">
          {{ bannerMovie.overview }}
        </h1>
      </div>
      <div class="fade_bottom"></div>
    </div>
    <YoutubeVue3 ref="youtube" :videoid="videoId.key" :width="width" v-if="videoId"/>
  </div>
</template>

<script>
import axios from "../../shared/axios";
import constant from "../../constants/constants";
import { YoutubeVue3 } from "youtube-vue3";
export default {
  name: "netflix-banner",
  components: {
    YoutubeVue3,
  },
  data() {
    return {
      bannerMovie: "",
      backgroundImage: "",
      videoId: "",
      width: 0,
    };
  },
  mounted() {
    this.width = screen.width;
    this.getBannerMovie();
  },
  methods: {
    getBannerMovie() {
      axios
        .get(`/trending/all/week?api_key=${constant.API_KEY}&language=en-US`)
        .then((response) => {
          this.bannerMovie = response.data.results[0];
          this.backgroundImage =
            constant.IMAGE_URl + this.bannerMovie.backdrop_path;
        });
    },
    getVideoId(id) {
      axios
        .get(`/movie/${id}/videos?api_key=${constant.API_KEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            this.videoId = response.data.results[0];
          } else {
            console.log("Empty Array");
          }
        });
      this.playCurrentVideo();
    },
    playCurrentVideo() {
      this.$refs.youtube.player.playVideo();
    },
  },
};
</script>

<style scoped>
.banner {
  background-size: cover;
  height: 448px;
  color: white;
}

.content {
  padding-top: 140px;
  height: 190px;
  padding-left: 15px;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
}

.button {
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  cursor: pointer;
  margin-right: 1rem;
}

.button:hover {
  color: black;
  background-color: #e6e6e6;
}

.description {
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1rem;
  height: 80px;
  max-width: 360px;
}

.fade_bottom {
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
}
</style>
