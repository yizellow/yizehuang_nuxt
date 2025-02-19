<script setup>
import { Icon } from "@iconify/vue";

// const isComputer = useMediaQuery("(min-width: 481px)");
// const isMobile = useMediaQuery("(max-width: 480px)");
const showNote = ref(false);
const noteTitle = ref("");
const noteText = ref("");
const searchText = ref("");
const closeNote = () => {
  showNote.value = false;
};

const projects = ref([
  {
    name: "Chips",
    tag: "#Chips",
    img: "https://cdna.artstation.com/p/assets/images/images/081/914/924/large/yize-huang-2024-11-11-8-47-48.jpg?1731558884",
    link: "/Project/Chips",
  },
  {
    name: "Yizellow",
    tag: "#Yizellow",
    img: "https://cdna.artstation.com/p/assets/images/images/082/626/578/large/yize-huang-jj6.jpg?1733473089",
    link: "/Project/Yizellow",
  },
  {
    name: "3D Modeling",
    tag: "#3D Modeling",
    img: "https://cdnb.artstation.com/p/assets/images/images/082/499/223/large/yize-huang-2024-12-03-12-35-13.jpg?1733157350",
    link: "/Project/ddd",
  },
  {
    name: "Travel and my film camera",
    tag: "#Travel and my film camera",
    img: "https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058",
    link: "/Project/FilmCamera",
  },
  {
    name: "Light Installation",
    tag: "#Light Installation (Upcoming...)",
    img: "https://cdna.artstation.com/p/assets/images/images/082/499/478/large/yize-huang-2024-12-03-12-39-17.jpg?1733157609",
    link: "",
  },
]);

const filteredProjects = ref([...projects.value]); // 初始為全部專案

const filterProjects = () => {
  const searchQuery = searchText.value.trim().toLowerCase();
  showNote.value = false;

  if (!searchQuery) {
    showNote.value = true;
    noteTitle.value = "Please enter a search term";
    filteredProjects.value = [...projects.value];
    return;
  }

  const results = projects.value.filter((project) =>
    project.name.toLowerCase().includes(searchQuery)
  );

  if (results.length > 0) {
    filteredProjects.value = results;
  } else {
    showNote.value = true;
    filteredProjects.value = [...projects.value]; // 清空搜尋則顯示所有專案
    noteTitle.value = "No results were found";
  }
  searchText.value = "";
};
const microphone = () => {
  showNote.value = false;

  if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = (event) => {
      const speak = event.results[0][0].transcript;
      searchText.value = speak; // 正確賦值給 ref 變數
      console.log("語音辨識結果:", searchText.value); // 顯示結果
    };

    recognition.onerror = (event) => {
      console.log("語音辨識錯誤:", event.error);
      showNote.value = true;
      noteTitle.value = event.error;
    };

    recognition.onend = () => {
      console.log("語音辨識結束");
    };
  } else {
    showNote.value = true;
    noteTitle.value =
      "Your browser does not support speech recognition functionality.";
  }
};
</script>

<template>
  <div >
    <main
      class="scrollbar w-full h-[calc(100vh-60px)] mt-[56px] flex flex-col items-center justify-start relative"
    >
      <Note
        v-if="showNote"
        :title="noteTitle"
        :text="noteText"
        @close="closeNote"
      />
      <section
        class="w-full h-[8vh] fixed top-1/5 flex flex-row items-center justify-start p-[1vh]"
      >
        <div
          class="w-1/3 h-full p-1 border-2 border-purple-500/30 flex justify-between items-center px-5"
        >
          <input
            v-model="searchText"
            class="w-5/6 h-full border-gray-400/50 px-3 border-2 tracking-widest text-purple-400 outline-1 outline-green-400/50 text-base"
            placeholder="search here..."
          />
          <Icon
            icon="bitcoin-icons:search-filled"
            color="#87efad"
            class="w-[2vw] h-auto m-[0.8vh] justify-self-end flex-row items-self-start icon"
            @click="filterProjects"
          />
          <Icon
            icon="heroicons:microphone-solid"
            color="#87efad"
            class="w-[1.5vw] h-auto m-[0.8vh] justify-self-end flex-row items-self-start icon"
            @click="microphone"
          />
        </div>
      </section>
      <section
        class="w-auto min-h-[40dvh] flex flex-row absolute left-0 top-1/4"
      >
        <div v-for="project in filteredProjects" :key="project.name">
          <RouterLink :to="project.link">
            <div class="item">
              <div class="container">
                <img :src="project.img" alt="project.name" />
              </div>
              <p class="title">{{ project.tag }}</p>
            </div>
          </RouterLink>
        </div>
      </section>
    </main>
  </div>

  <!-- <div v-if="isMobile">
    <main>
      <section
        class="w-full h-[8vh] fixed top-1/5 flex flex-row items-center justify-start p-[1vh]"
      >
        <div
          class="opacity-90 w-full h-full p-1 border-2 bg-green-300 border-purple-500/30 flex justify-center items-center px-5"
        >
          <input
            v-model="searchText"
            class="w-5/6 h-full border-gray-400/50 px-3 border-2 tracking-widest text-purple-400 outline-1 outline-green-400/50 text-base"
            placeholder="search here..."
          />
          <Icon
            icon="bitcoin-icons:search-filled"
            color="#a685ff"
            class="opacity-80 w-[25px] h-auto mx-[0.8vh] justify-self-end flex-row items-self-start icon"
            @click="filterProjects"
          />
          <Icon
            icon="heroicons:microphone-solid"
            color="#a159e8"
            class="opacity-80 w-[25px] h-auto ml-[0.8vh] justify-self-end flex-row items-self-start icon"
            @click="microphone"
          />
        </div>
      </section>
      <Note
        v-if="showNote"
        :title="noteTitle"
        :text="noteText"
        @close="closeNote"
      />
      <div class="w-full h-[8vh]"></div>
      <div v-for="project in filteredProjects" :key="project.name">
        <RouterLink :to="project.link">
          <div class="item">
            <div class="container">
              <img :src="project.img" alt="project.name" />
            </div>
            <p class="title">{{ project.tag }}</p>
          </div>
        </RouterLink>
      </div>
    </main>
  </div> -->
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
@media (min-width: 481px) {
  .scrollbar {
    overflow-x: scroll; /* 確保元素能水平滾動 */
    height: calc(100vh - 100px); /* 確保有高度來顯示滾動條 */
  }
  .scrollbar::-webkit-scrollbar {
    height: 6px;
  }

  .scrollbar::-webkit-scrollbar-track {
    border-radius: 0px;
    border: 0.5px solid #cdd1d7;
    margin: 20px 130px;
  }

  .scrollbar::-webkit-scrollbar-thumb {
    background-color: #e5cdfd;
    cursor: pointer;
  }

  .item {
    height: 100%;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin: auto 20px;
    border: 1px solid #cdd1d7;
  }
  .container {
    width: 100%;
    height: 80%;
  }
  .container img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: fill;
    object-position: center;
  }
  .title {
    font-size: clamp(1rem, cal(1rem + 5dvh), 2rem);
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    margin: auto 0px;
    color: #62e28d;
  }
}

@media (max-width: 480px) {
  main {
    width: 100%;
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }
  .item {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin: 10px auto;
    border: 1px solid black;
  }
  .item img {
    margin: 0px auto;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
}
.icon {
  transition: transform 0.3s ease; /* 設定平滑過渡效果 */
  cursor: pointer;
}

.icon:hover {
  transform: scale(1.1); /* 當游標在上面時放大 */
}

.icon:active {
  transform: scale(1); /* 點擊時回到原始大小，視需求可調整 */
}
</style>