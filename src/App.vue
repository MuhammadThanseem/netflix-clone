<template>
  <Navbar />
  <Banner />
  <RawPost :data="originalMovieData" />
  <RawPost :data="actionMovieData" />
</template>
<script>
import Banner from "./components/Banner/banner.vue";
import Navbar from "./components/Navbar/navbar.vue";
import RawPost from "./components/RawPost/raw_post.vue";
import URL from "./constants/urls";
export default {
  components: { Navbar, Banner, RawPost },
  data() {
    return {
      originalMovieData: {
        url: URL.originals,
        title: "Netflix Originals",
        isSmall:false
      },
      actionMovieData: {
        url: URL.action,
        title: "Action",
        isSmall:true
      },
    };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #111;
}
</style>
