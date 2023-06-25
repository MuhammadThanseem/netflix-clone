<template>
  <div className="navbar">
    <img
      className="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
      alt="Netflix Logo"
    />
    <img
      className="avatar"
      src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
      alt="Avatar"
    />
  </div>
</template>

<script>
export default {
    name:"netflix-navbar"
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.logo {
  position: fixed;
  left: 20px;
  width: 80px;
}

.avatar {
  position: fixed;
  right: 20px;
  width: 30px;
}
</style>
