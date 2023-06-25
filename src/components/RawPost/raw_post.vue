<template>
  <div className="row">
    <h2>Netflix Originals</h2>
    <div className="posters">
      <img
        v-for="poster in posters"
        :key="poster.id"
        className="poster"
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
     name:"netflix-raw_post",
     data() {
    return {
      posters: "",
      image_url: constant.IMAGE_URl
    };
  },
  mounted() {
    this.getPosterMovie();
  },
  methods: {
    getPosterMovie() {
      axios
        .get(`/discover/movie?api_key=${constant.API_KEY}&with_genres=28`)
        .then((response) => {
          this.posters = response.data.results;
          console.log(this.posters);
        }).catch(error=>{
          console.log(error);
        });
    },
  }
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
.smallPoster{
  max-height: 100px;
}
</style>
