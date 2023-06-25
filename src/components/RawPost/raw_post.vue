<template>
  <div class="row">
    <h2>{{this.data.title ? this.data.title : ''}}</h2>
    <div class="posters">
      <img
        v-for="poster in posters"
        :key="poster.id"
        :class="this.data.isSmall ? 'smallPoster' : 'poster' "
        alt="poster"
        :src="poster ? this.image_url + poster.backdrop_path : ''"
      />
    </div>
  </div>
</template>

<script>
import axios from "../../shared/axios";
import constant from "../../constants/constants";
export default {
  name: "netflix-raw_post",
  props: {
    data: Object,
  },
  data() {
    return {
      posters: "",
      image_url: constant.IMAGE_URl,
    };
  },
  mounted() {
    this.getPosterMovie();
  },
  methods: {
    getPosterMovie() {
      axios
        .get(this.data.url)
        .then((response) => {
          this.posters = response.data.results;
          console.log(this.posters);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.row {
  margin-left: 20px;
  color: #fff;
}

.posters {
  display: flex;
  padding: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.posters::-webkit-scrollbar {
  display: none;
}

.poster {
  max-height: 250px;
  margin-right: 10px;
}
.smallPoster {
  max-height: 100px;
  margin-right: 10px;
}
</style>
