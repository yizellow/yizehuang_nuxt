<script setup>

import { Icon } from "@iconify/vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, onValue, set, push, update } from "firebase/database";
import { ref as dbRef } from "firebase/database";

//ref 沒有被登入

const isLoggedIn = ref(false);
const router = useRouter();
const userName = ref(""); // 用來存儲用戶名稱
const userEmail = ref(""); // 用來存儲用戶電子郵件
const userPhoto = ref("");

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      userName.value = user.displayName || "Anonymous"; // 使用者名稱，默認為匿名
      userEmail.value = user.email || "No Email"; // 使用者電子郵件，默認為空
      userPhoto.value =
        user.photoURL ||
        "https://cdna.artstation.com/p/assets/images/images/081/859/742/large/yize-huang-2024-11-12-11-54-14.jpg?1731427197"; // 使用者大頭貼，默認為占位圖
    } else {
      isLoggedIn.value = false;
      userName.value = "";
      userEmail.value = "";
      userPhoto.value = "";
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    console.log("sign out succefully");
    router.push("/");
  });
};

//處理登出//

const title = "";
const note = ref("");
const noteTag = ref(false);
const message = ref("");
const db = getDatabase();

const closeNote = () => {
  noteTag.value = false;
};

const submitMsg = () => {
  // 驗證訊息內容
  const sanitizedEmail = userEmail.value
    .replace(/[.#$[\]]/g, "_")
    .replace("@", "_");

  if (message.value.trim() === "") {
    note.value = "Please enter a message before submitting!";
    noteTag.value = true;
    return;
  }

  // 取得資料庫實例
  const db = getDatabase();

  // 設定主要節點名稱
  const mainNode = ref(""); // 使用 ref 來存儲主要節點名稱
  const isMainNode = () => {
    console.log(userName.value);
    if (userName.value !== "Anonymous") {
      mainNode.value = userName.value; // 如果 userName 有值，則使用 userName
    } else if (userEmail.value !== "") {
      mainNode.value = sanitizedEmail; // 如果 userName 為空，則使用 userEmail
    } else {
      mainNode.value = "Anonymous"; // 若兩者皆空，設為 Anonymous
    }
  };
  isMainNode(); // 設定 mainNode 的值

  // 獲取當前時間戳並格式化為可讀時間
  const now = new Date();
  const formattedDate = now.toLocaleString(); // 例如 "2025/1/24 下午8:46:19"

  // 使用 ISO 字符串並格式化為節點名稱
  const formattedKey = now
    .toISOString() // 獲取 ISO 字符串
    .replace(/T/, "_") // 替換日期與時間之間的 `T` 為 `_`
    .replace(/:/g, "-") // 替換時間中的冒號 `:` 為 `-`
    .replace(/\..+/, ""); // 去掉毫秒部分，最終結果為 "2025-01-24_20-46-19"

  // 使用格式化時間戳作為節點名稱
  const newMsgRef = dbRef(
    db,
    `messages_board/${mainNode.value}/${formattedKey}`
  );

  // 使用 `set()` 將資料儲存到資料庫
  set(newMsgRef, {
    text: message.value,
    timestamp: formattedDate,
    userName: userName.value || userEmail.value || "Anonymous", // 若 userName 空白則顯示 userEmail 或 Anonymous
    userEmail: userEmail.value || "No Email",
  })
    .then(() => {
      // 提交成功的回應
      note.value = "Successfully submitted!";
      message.value = ""; // 清空訊息輸入框
      noteTag.value = true;
    })
    .catch((error) => {
      // 錯誤處理
      console.error("Error details:", error); // 輸出錯誤訊息
      note.value = "Failed to submit message: " + error.message;
      noteTag.value = true;
    });
};

// const isComputer = useMediaQuery("(min-width: 481px)");
// const isMobile = useMediaQuery("(max-width: 480px)");
</script>
<template>
  <div >
    <main class="w-[100vw] h-[100vh]">
      <div
        v-if="noteTag"
        class="w-[25vw] h-[30vh] bg-green-400/80 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fon"
      >
        <Icon
          icon="material-symbols:close-rounded"
          color="gray"
          class="w-[2.5vw] m-[2vh] h-auto justify-self-end flex-row items-self-start icon"
          @click="closeNote"
        />
        <p
          class="text-2xl text-gray-500 poppins-medium font-black justify-self-center items-self-start tracking-widest"
        >
          {{ title }}
        </p>
        <p class="text-center poppins-medium text-purple-500 text-2xl mt-[6vh]">
          {{ note }}
        </p>
      </div>
      <div class="w-full h-full relative">
        <img
          src="https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058"
          class="w-full h-full object-cover object-top absolute z-1"
        />

        <section
          class="w-[30vw] h-[60vh] backdrop-blur-sm bg-white/70 border-green-300 border-2 flex flex-col justify-center items-center absolute z-2 top-[15vh] p-[3vh] left-[18vh] shadow-lg rounded-sm"
        >
          <p
            class="text-3xl m-[3vh] navtext text-center text-gray-500 underline underline-offset-4 decoration-purple-300"
          >
            Leave me a message!
          </p>
          <textarea
            v-model="message"
            rows="4"
            class="w-full h-1/2 bg-gray-100/60 border-gray-400 border-2 tracking-widest text-purple-400 outline-0 p-[2vh] text-xl resize-none"
            placeholder="Write your message here..."
          ></textarea>
          <button
            @click="submitMsg"
            class="icon w-3/12 h-4/12 text-lg mt-[6vh] border-2 border-purple-300 cursor-pointer navtext text-center text-gray-600 boder-2"
          >
            Submit
          </button>
        </section>
        <section
          class="w-[40vw] translate-x-1/2 right-1/2 h-[6vh] backdrop-blur-sm bg-purple-300/70 border-purple-300 border-2 flex flex-row justify-between items-center absolute z-2 bottom-[1vh] p-[3vh] shadow-lg rounded-sm"
        >
          <img
            :src="userPhoto"
            class="w-[4vh] h-[4vh] rounded-full border-2 border-green-300"
          />
          <p class="text-lg markazi-text text-center text-green-300">
            Name:{{ userName }}
          </p>
          <p class="text-lg markazi-text text-center text-green-300">
            Email:{{ userEmail }}
          </p>
          <button
            @click="handleSignOut"
            v-if="isLoggedIn"
            class="icon w-[10vh] h-[5vh] m-[1vh] text-xs border-2 border-green-300 cursor-pointer navtext text-center text-white boder-2 bg-purple-400/50"
          >
            Sign Out
          </button>
        </section>
      </div>
    </main>
  </div>
  <!-- <div v-if="isMobile">
    <main class="device w-[100dvw] h-[94dvh] mt-[6dvh] relative z-0">
      <div
        v-if="noteTag"
        class="w-[60vw] h-auto bg-green-400/80 fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Icon
          icon="material-symbols:close-rounded"
          color="gray"
          class="w-[6vw] m-[1vh] h-auto justify-self-end flex-row items-self-start icon"
          @click="closeNote"
        />
        <p
          class="text-xl text-gray-500 poppins-medium font-black justify-self-center items-self-start tracking-widest"
        >
          {{ title }}
        </p>
        <p
          class="text-center poppins-medium text-purple-500 text-md mb-[3vh] mx-[1vh]"
        >
          {{ note }}
        </p>
      </div>
      <div
        class="w-full h-full relative flex flex-col items-center justify-center"
      >
        <img
          src="https://cdna.artstation.com/p/assets/images/images/082/332/470/large/yize-huang-2024-11-27-5-48-00.jpg?1732701058"
          class="w-full h-full object-cover object-top absolute z-1"
        />
        <div
          class="w-[82vw] h-[60vh] backdrop-blur-sm bg-white/70 border-green-300 border-2 flex flex-col justify-center items-center absolute z-2 shadow-lg rounded-sm p-[3vh]"
        >
          <p
            class="text-xl m-[3vh] navtext text-center text-gray-500 underline underline-offset-4 decoration-purple-300"
          >
            Leave me a message!
          </p>
          <textarea
            v-model="message"
            rows="4"
            class="w-full h-1/2 bg-gray-100/60 border-gray-400 border-2 tracking-widest text-purple-400 outline-0 p-[2vh] text-sm resize-none"
            placeholder="Write your message here..."
          ></textarea>
          <button
            @click="submitMsg"
            class="icon w-3/12 h-4/12 text-base mt-[6vh] border-2 border-purple-300 cursor-pointer navtext text-center text-gray-600 boder-2"
          >
            Submit
          </button>
        </div>
        <section
          class="w-[97vw] max-h-[16vh] backdrop-blur-sm bg-purple-300/70 border-2 flex flex-row justify-between items-center z-2 bottom-[1vh] p-[0.5vh] shadow-lg rounded-sm fixed mb-[2vh] z-1"
        >
          <img
            :src="userPhoto"
            class="w-[5vh] h-[5vh] rounded-full border-2 border-green-300"
          />
          <p class="text-xs markazi-text text-center text-green-300">
            Name:{{ userName }}
          </p>
          <br />
          <p class="text-xs markazi-text text-center text-green-300">
            Email:{{ userEmail }}
          </p>
          <button
            @click="handleSignOut"
            v-if="isLoggedIn"
            class="icon w-auto text-[10px] border-2 border-red-300 cursor-pointer text-center text-white bg-green-400/50"
          >
            <p class="text-[8px]">Sign Out</p>
          </button>
        </section>
      </div>
    </main>
  </div> -->
</template> 
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto&display=swap");
html {
  height: -webkit-fill-available;
}

.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.markazi-text {
  font-family: "Markazi Text", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
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