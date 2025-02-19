<template>
    <main>
      <p>Sorry, this Page does not exist!</p>
      <br />
      <RouterLink to="/"><div class="navtext">Back to Home</div></RouterLink>
    </main>
  </template>
  <script setup></script>
  <style scoped>
  main {
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 223, 0);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 56px;
    text-align: center;
    color: black;
  }
  .navtext {
    color: blueviolet;
    font-size: 36px;
  }
  .navtext:hover {
    color: white;
  }
  </style>