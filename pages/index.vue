<script setup>
import { gsap } from "gsap";

if (import.meta.server) {
  console.log("server.....");
} else {
  console.log("client.....");
}

if (import.meta.server) {
  console.log("server.....");
} else {
  console.log("client.....");
}

onMounted(() => {
  gsap.to("#overlay-dark", {
    duration: 1.5,
    top: "-100%",
    ease: "power3.inOut",
    delay: 4,
  });
  gsap.from(".divider", {
    duration: 1,
    scaleX: 0,
    ease: "power3.inOut",
    delay: 0.5,
    stagger: {
      amount: 1,
    },
  });

  gsap.from(".row > .col", {
    duration: 1,
    opacity: 0,
    y: 40,
    ease: "power3.inOut",
    delay: 2,
    stagger: {
      amount: 1.5,
    },
  });
});

// import { useMediaQuery } from "@vueuse/core";
// const isComputer = useMediaQuery("(min-width: 481px)");
// const isMobile = useMediaQuery("(max-width: 480px)");

// if (isComputer) {
//   onMounted(() => {
//     gsap.to("#overlay-dark", {
//       duration: 1.5,
//       top: "-100%",
//       ease: "power3.inOut",
//       delay: 4,
//     });
//     gsap.from(".divider", {
//       duration: 1,
//       scaleX: 0,
//       ease: "power3.inOut",
//       delay: 0.5,
//       stagger: {
//         amount: 1,
//       },
//     });

//     gsap.from(".row > .col", {
//       duration: 1,
//       opacity: 0,
//       y: 40,
//       ease: "power3.inOut",
//       delay: 2,
//       stagger: {
//         amount: 1.5,
//       },
//     });
//   });
// }
</script>
<template>
  <div>
    <main class="mainbox">
      <section class="note flex items-center justify-center">
        <p>The layout for tablets is currently being updated.</p>
      </section>
      <section class="top">
        <div id="overlay-light" class="overlay"></div>

        <div id="overlay-dark" class="overlay"></div>
        <div class="content">
          <div class="nav row">
            <div class="col">(background)</div>
            <div class="col">(contact)</div>
            <div class="col">(My Passion)</div>
            <div class="col">(skills)</div>
            <div class="col">(Projects)</div>
          </div>
          <div class="divider nav-divider"></div>
          <div class="row">
            <div class="col">Taipei National University of the Arts</div>
            <div class="col">whatsApp:</div>
            <div class="col">Art History</div>
            <div class="col">Front-End</div>
            <div class="col">Chips</div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col">Fine Art Dept.</div>
            <div class="col">+886 981488850</div>
            <div class="col">Art Theory</div>
            <div class="col">Vue</div>
            <div class="col">Yizellow</div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col">Major in Art History and Visual Culture</div>
            <div class="col"></div>
            <div class="col">Curating</div>
            <div class="col">Blender</div>
            <div class="col">DDD</div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">Unity</div>
            <div class="col">Travel and my film camera</div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col"></div>
            <div class="col">Email:</div>
            <div class="col">3D Modeling</div>
            <div class="col"></div>
            <div class="col">Upcoming...</div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col"></div>
            <div class="col">yize0926@gmail.com</div>
            <div class="col"></div>
            <div class="col">HTML CSS JS</div>
            <div class="col"></div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">Ｗriting</div>
            <div class="col">PS AE AI PR</div>
            <div class="col"></div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col">Hualien Senior High School, Taiwan</div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col">Science track</div>
            <div class="col"></div>
            <div class="col">Literature</div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">Philosophy</div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
          <div class="divider"></div>
        </div>
      </section>
      <section class="banBox opacity-">
        <div class="part1">
          <video
            class="w-auto h-full grayscale contrast-200"
            src="@/assets/img/loadingLogo.mp4"
            autoplay
            loop
            muted
          ></video>
          <p class="ban">RANDOM</p>
        </div>
        <div class="part2">
          <video
            class="w-auto h-full grayscale contrast-200"
            src="@/assets/img/loadingLogo.mp4"
            autoplay
            loop
            muted
          ></video>
          <p class="ban">EVALUATION</p>
        </div>
      </section>
    </main>
  </div>

  <!-- <div v-if="isMobile">
    <main>
      <section class="note poppins-medium bg-purple-600 opacity-65">
        <p class="text-green-300">
          The layout for tablets is currently being updated.
        </p>
      </section>
      <section class="w-[100dvw] h-auto fixed z-10"></section>
      <div id="overlay-light" class="overlay opacity-85"></div>

      <div id="overlay-dark" class="overlay opacity-85"></div>
      <div class="content">
        <div class="nav row">
          <div class="col">(background)</div>
          <div class="col">(contact)</div>
          <div class="col">(My Passion)</div>
          <div class="col">(skills)</div>
        </div>
        <div class="divider nav-divider"></div>
        <div class="row">
          <div class="col">Taipei National University</div>
          <div class="col">whatsApp:</div>
          <div class="col">Art History</div>
          <div class="col">Front-End</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">of the Arts Fine Art Dept.</div>
          <div class="col">+886</div>
          <div class="col">Art Theory</div>
          <div class="col">Vue</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">Major in Art History</div>
          <div class="col">981488850</div>
          <div class="col">Curating</div>
          <div class="col">Blender</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">and Visual Culture</div>
          <div class="col"></div>
          <div class="col"></div>
          <div class="col">Unity</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col"></div>
          <div class="col">Email:</div>
          <div class="col">3D Modeling</div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">Hualien Senior</div>
          <div class="col">yize0926@gmail.com</div>
          <div class="col"></div>
          <div class="col">tailwinds</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">High School</div>
          <div class="col"></div>
          <div class="col">Ｗriting</div>
          <div class="col">PS AE</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">, Taiwan</div>
          <div class="col"></div>
          <div class="col">Literature</div>
          <div class="col">AI PR</div>
        </div>
        <div class="divider"></div>
        <div class="row">
          <div class="col">Science track</div>
          <div class="col"></div>
          <div class="col">Philosophy</div>
          <div class="col"></div>
        </div>
        <div class="divider"></div>
      </div>
      <section class="w-[100dvw] h-[100dvh] fixed z-0 opacity-80">
        <div class="w-full h-full group">
          <div class="card w-[100dvw] h-1/4 flex items-center justify-center">
            <div>
              <p class="ban1 w-full h-full text-center text-[3rem] font-black">
                RANDOM
              </p>
            </div>
          </div>
          <div class="card w-[100dvw] h-1/4">
            <video
              class="w-full h-full grayscale contrast-200 invert object-fill"
              src="@/assets/img/loadingLogo.mp4"
              autoplay
              loop
              muted
            ></video>
          </div>
          <div class="card w-[100dvw] h-1/4 flex items-center justify-center">
            <div>
              <p class="ban w-full h-full text-center text-[3rem] font-black">
                EVALUATION
              </p>
            </div>
          </div>
          <div class="card w-[100dvw] h-1/4">
            <video
              class="w-full h-full grayscale contrast-200 invert object-fill"
              src="@/assets/img/loadingLogo.mp4"
              autoplay
              loop
              muted
            ></video>
          </div>
        </div>
        <div class="w-full h-full group">
          <div class="card w-[100dvw] h-1/4 flex items-center justify-center">
            <div>
              <p class="ban1 w-full h-full text-center text-[3rem] font-black">
                RANDOM
              </p>
            </div>
          </div>
          <div class="card w-[100dvw] h-1/4">
            <video
              class="w-full h-full grayscale contrast-200 invert object-fill"
              src="@/assets/img/loadingLogo.mp4"
              autoplay
              loop
              muted
            ></video>
          </div>
          <div class="card w-[100dvw] h-1/4 flex items-center justify-center">
            <div>
              <p class="ban w-full h-full text-center text-[3rem] font-black">
                EVALUATION
              </p>
            </div>
          </div>
          <div class="card w-[100dvw] h-1/4">
            <video
              class="w-full h-full grayscale contrast-200 invert object-fill"
              src="@/assets/img/loadingLogo.mp4"
              autoplay
              loop
              muted
            ></video>
          </div>
        </div>
      </section>
    </main>
  </div> -->
</template>

<style scoped>
.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}
@media (min-width: 481px) {
  .note {
    width: 100vw;
    height: 5vh;
    background-color: red;
    color: white;
  }

  .banBox {
    width: 100%;
    overflow: hidden;
    height: calc(45vh - 56px);
    display: flex;
    position: relative;
    filter: invert(100%);
  }

  .part1,
  .part2 {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .part1 {
    background-color: black;
    animation: marquee-animation 30s linear infinite;
    animation-delay: -15s; /* 延遲啟動 */
  }

  .part2 {
    background-color: black;
    animation: marquee-animation 30s linear infinite;
  }

  @keyframes marquee-animation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .ban {
    text-align: center;
    margin-left: 140px;
    font-size: 6rem;
    font-family: "Neue Montreal";
    text-align: center;
    font-weight: 800;
    letter-spacing: 6px;
    color: black;
    opacity: 0.8;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .mainbox {
    font-family: "Neue Montreal", sans-serif;
    display: block;
    margin-top: 56px;
  }

  #overlay-light {
    position: absolute;
    width: 100vw;
    height: 50vh;
    background: white;
    z-index: 1;
  }

  #overlay-dark {
    position: absolute;
    width: 100vw;
    height: 50vh;
    background: #ad46ff;
    z-index: 2;
  }

  .content {
    width: 100%;
    height: 50vh;
    padding: 1em 0;
  }

  .content > * {
    position: relative;
    z-index: 3;
    mix-blend-mode: difference;
    color: #fff;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: #fff;
    margin: 0.2em 0;
  }

  .nav {
    text-transform: uppercase;
  }

  .nav-divider {
    margin-top: 1em;
  }

  .row {
    width: 100%;
    height: 20px;
    display: flex;
    padding: 0 2em;
  }

  .row > .col {
    position: relative;
    flex: 1;
  }

  .row > .col:first-child {
    flex: 2;
  }
}
@media (max-width: 480px) {
  html {
    height: -webkit-fill-available;
    width: -webkit-fill-available;
  }
  main {
    margin-top: 6dvh;
    width: 100%;
    height: 94dvh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #overlay-light {
    position: absolute;
    width: 100%;
    height: 60dvh;
    background: #adefc0;
    z-index: 1;
  }

  #overlay-dark {
    position: absolute;
    width: 100%;
    height: 60dvh;
    background: #ad46ff;
    z-index: 2;
  }

  .content {
    width: 100%;
    height: 60vh;
    padding: 4em 0;
  }

  .col {
    font-size: 10px;
  }
  .content > * {
    position: relative;
    z-index: 3;
    mix-blend-mode: difference;
    color: #fff;
    backdrop-filter: blur(var(--blur-2xl)); /* 40px */
  }

  .divider {
    width: 100%;
    height: 1px;
    background: #fff;
    margin: 0.2em 0;
  }

  .nav {
    text-transform: uppercase;
  }

  .nav-divider {
    margin-top: 1em;
  }

  .row {
    width: 100%;
    height: 20px;
    display: flex;
    padding: 0.1em;
  }

  .row > .col {
    position: relative;
    flex: 1;
  }

  .row > .col:first-child {
    flex: 2;
  }

  .ban1 {
    text-align: center;
    font-family: "Neue Montreal";
    text-align: center;
    letter-spacing: 4.3dvw;
    color: white;
    opacity: 0.8;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  .ban {
    text-align: center;
    font-family: "Neue Montreal";
    text-align: center;
    letter-spacing: 1px;
    color: white;
    opacity: 0.8;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  .group {
    /* ... */
    will-change: transform; /* 我們應該告訴瀏覽器我們要動畫化什麼。 */
    animation: scrolling 30s linear infinite;
  }

  @keyframes scrolling {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  .note {
    position: fixed;
    z-index: 5;
    display: flex;
    align-items: center;
    top: 10vh;
  }
  .note p {
    border: 1px solid blueviolet;
    text-align: center;
  }
}
</style>
