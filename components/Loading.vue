<template>
  <div
    class="w-[100vw] h-[100vh] fixed loadingbg justify-center items-center pl-10 bg-white"
  >
    <p class="poppins-medium text-2xl animate-bounce">Loading ...</p>
    <!-- Box 容器 -->
  </div>

</template>

<script setup>

onMounted(async () => {
  // 確保 DOM 已完全渲染
  await nextTick();

  // 選取 loadingbg 容器
  const loadingbg = document.querySelector(".loadingbg");
  if (!loadingbg) {
    console.error("Loading background not found!");
    return;
  }

  // 動態創建 Box
  function createBox() {
    const box = document.createElement("div");
    box.classList.add("qq");
    loadingbg.append(box);
  }

  // 生成多個 Box
  // for (let i = 0; i < 100; i++) {
  //   createBox();
  // }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Roboto&display=swap");

/* 全局樣式 */
.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

/* 背景容器樣式 */
.loadingbg {
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  position: relative;
}

/* 動態 Box 樣式 */
.qq {
  width: 80px;
  height: 80px;
  background-color: gainsboro;
  animation: fadeIn 1.5s ease-in-out infinite alternate;
}

/* 動畫效果 */
@keyframes fadeIn {
  from {
    transform: scale(0.5);
    opacity: 0.5;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
