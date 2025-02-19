<script setup>
import { gsap } from "gsap";
import { Icon } from "@iconify/vue";

// const isComputer = useMediaQuery("(min-width: 481px)");

// const isMobile = useMediaQuery("(max-width: 480px)");
if (import.meta.server) {
  console.log("server.....");
} else {
  console.log("client.....");
}
</script>

<template>
  <div>
    <main class="w-full h-[93vh] mt-[7vh]">
      <div class="wrapper">
        <div class="about">
          <p>
            EXHIBITION:<br />
            12.2023 Painting Comfort Zone, North and South Gallery
            <br />04-05.2023 If the World Had No Maps, Underground Experimental
            Field <br />08.2021 2021GenieLab TNUA, online exhibition. (Third
            Place) <br />12.2020 Picking up Color Project: Pocket book for
            Autumn, North and South Gallery <br />07.2020 ALIA (workshop),
            KdMoFA <br />12.2019 Myself, 8 and one-half Gallery
          </p>
        </div>

        <div class="wrapper-img">
          <div>
            <img
              class="image"
              src="https://cdna.artstation.com/p/assets/images/images/082/490/490/small/yize-huang-about-pic.jpg?1733143558"
            />
          </div>
        </div>
        <div class="sub-header">
          <RouterLink to="/Project">
            <a href="#" class="contact-link">&#8618; Project</a>
          </RouterLink>

          <a href="#" class="work-link">yize0926@gmail.com</a>
          <div href="#" class="work-link flex flex-row">
            <a href="https://www.artstation.com/yizehuang">
              <img
                class="iconTag"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Artstation_logo_logos-512.png"
              />
            </a>

            <a href="https://www.instagram.com/yizellow/">
              <img
                class="iconTag"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              />
            </a>
          </div>
          <a href="#" class="aboutme"
            >Hi, my name is Yize Huang. I am from Hualien, Taiwan. I enjoy
            poetry and traveling the world, i believe engaging in different
            cultures gives a different perspective of the world and its people.
            Fun fact about myself is that I have a deep fear of boredom, thus
            the reason why I like to stay engaged in fun stuff.
          </a>
        </div>
      </div>
    </main>
  </div>
  <!-- <div>
    <div v-if="isMobile">
      <div class="wrapper">
        <div class="wrapper-img">
          <div>
            <img
              class="image"
              src="https://cdna.artstation.com/p/assets/images/images/082/490/490/small/yize-huang-about-pic.jpg?1733143558"
            />
          </div>
        </div>

        <div class="about">
          <p>
            Hi, my name is Yize Huang. I am from Hualien, Taiwan. I enjoy poetry
            and traveling the world, i believe engaging in different cultures
            gives a different perspective of the world and its people. Fun fact
            about myself is that I have a deep fear of boredom, thus the reason
            why I like to stay engaged in fun stuff.
          </p>
          <hr />
          <p>
            EXHIBITION:<br />
            12.2023 Painting Comfort Zone, North and South Gallery
            <br />04-05.2023 If the World Had No Maps, Underground Experimental
            Field <br />08.2021 2021GenieLab TNUA, online exhibition. (Third
            Place) <br />12.2020 Picking up Color Project: Pocket book for
            Autumn, North and South Gallery <br />07.2020 ALIA (workshop),
            KdMoFA <br />12.2019 Myself, 8 and one-half Gallery
          </p>
        </div>
        <div class="sub-header">
          <RouterLink to="/Project">
            <a href="#" class="contact-link"> > Projects</a>
          </RouterLink>
          <br />
          <div class="work-link">
            <a href="#">yize0926@gmail.com</a>
            <a href="https://www.artstation.com/yizehuang">
              <img
                class="iconTag"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Artstation_logo_logos-512.png"
              />
            </a>

            <a href="https://www.instagram.com/yizellow/">
              <img
                class="iconTag"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style>
@media (min-width: 1025px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rocinante Titling", Arial, Helvetica, sans-serif;
  }

  .iconTag {
    width: 30px;
    height: 30px;
    margin: 10px;
  }

  .wrapper {
    background: white;
    position: absolute;
    width: 100% !important;
    height: 94vh;
    z-index: 2;
  }

  .about p {
    width: 30%;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    color: black;
    margin: 1.6em;
  }

  .wrapper-img {
    overflow: hidden;
    position: absolute;
    top: 15% !important;
    right: 10%;
    transform: translate(-50%, 0%);
    width: 20%;
    height: 60vh;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 1;
  }

  .sub-header {
    position: absolute;
    bottom: 2em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .sub-header a {
    text-decoration: none;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    color: black;
  }

  a.contact-link {
    color: rgb(0, 223, 0);
    letter-spacing: -3px;
    font-family: "Rocinante Titling", Arial, Helvetica, sans-serif;
    font-size: 24px;
    margin-left: 1em;
  }

  a.aboutme {
    width: 30%;
    padding-right: 30px;
    font-size: 1rem;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2vw;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rocinante Titling", Arial, Helvetica, sans-serif;
  }

  .iconTag {
    width: 30px;
    height: 30px;
    margin: 10px;
  }

  .wrapper {
    background: rgb(217, 217, 217);
    position: absolute;
    width: 100% !important;
    height: 94dvh;
    z-index: 2;
  }

  .about p {
    width: 30%;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    color: black;
    margin: 1.6em;
  }

  .wrapper-img {
    overflow: hidden;
    position: absolute;
    top: 15% !important;
    right: 10%;
    transform: translate(-50%, 0%);
    width: 20%;
    height: 60vh;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: 1;
  }

  .sub-header {
    position: absolute;
    bottom: 2em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .sub-header a {
    text-decoration: none;
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    color: black;
  }

  a.contact-link {
    color: rgb(0, 223, 0);
    letter-spacing: -3px;
    font-family: "Rocinante Titling", Arial, Helvetica, sans-serif;
    font-size: 24px;
    margin-left: 1em;
  }

  a.aboutme {
    width: 30%;
    padding-right: 30px;
    font-size: 1rem;
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2vw;
  }
}

@media (max-width: 480px) {
  .wrapper {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 1000px;
  }
  .wrapper-img {
    max-width: 85%;
    padding: 20px;
  }
  .about {
    max-height: auto;
    max-width: 85%;
    padding: 20px;
  }
  .about p {
    font-family: Helvetica, sans-serif;
    font-weight: 300;
    color: black;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .about hr {
    border-top: 1px solid rgb(0, 223, 0);
  }
  .sub-header {
    min-width: 85%;
  }
  .sub-header a {
    text-decoration: none;
    font-family: Helvetica, sans-serif;
    font-weight: 200;
    color: black;
  }

  a.contact-link {
    color: rgb(0, 223, 0);
    letter-spacing: -3px;
    font-family: "Rocinante Titling", Arial, Helvetica, sans-serif;
    font-size: 24px;
    margin-left: 1em;
  }
  .iconTag {
    max-width: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
  .work-link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
}
</style>