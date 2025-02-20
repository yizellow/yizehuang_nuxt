<script setup>
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const log = ref(0);
const router = useRouter();

const changeLog = () => {
  if (log.value === 0) {
    log.value = 1;
  } else if (log.value === 1) {
    log.value = 0;
  }
  if (getAuth().currentUser) {
    closeLog();
    console.log("you alread log in");
    router.push("/Member/MemberPage");
  } else {
    console.log("You dont have access!");
  }
};
const closeLog = () => {
  log.value = 0;
};
</script>
<template>
  <div>
    <nav
      class="z-40 fixed top-0 left-0 right-0 flex flex-row w-full items-center justify-center h-14 drop-shadow-lg"
    >
      <NuxtLink to="/"><img src="../assets/img/logo.png" /></NuxtLink>

      <NuxtLink to="/"><div class="navtext">Home</div></NuxtLink>
      <NuxtLink to="/project"><div class="navtext">Projects</div></NuxtLink>
      <NuxtLink to="/about"><div class="navtext">About Me</div></NuxtLink>
      <NuxtLink to="/member"><div class="navtext">member(要改)</div></NuxtLink>


      <!-- <div class="navtext" @click="changeLog">Member</div> -->
    </nav>
  </div>
  <Login v-show="log === 1" :log="log" @close="closeLog" />
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto&display=swap");

.navtext {
  font-family: "Geo", sans-serif;
  font-style: normal;
  font-size: 1.6rem;
  margin: auto 30px;
  color: blueviolet;
  opacity: 0.8;
  cursor: pointer;
}
.navtext:hover {
  color: rgb(0, 223, 0);
}
img {
  width: 45px;
  height: 45px;
  margin-right: 100px; /* 相当于 mr-6 的间距 */
}
nav {
  background-color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 480px) {
  .navtext {
    font-size: 0.9rem;
    margin: auto 3px;
  }
  .logo {
    margin-right: 10px;
  }
  nav {
    height: auto;
  }
}
</style>
