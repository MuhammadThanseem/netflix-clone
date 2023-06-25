<template>
  <Navbar />
  <Banner />
  <RawPost/>
</template>
<script>
import Banner from "./components/Banner/banner.vue";
import Navbar from "./components/Navbar/navbar.vue";
import RawPost from './components/RawPost/raw_post.vue';
export default {
  components: { Navbar, Banner, RawPost },
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
