<template>
    <div>   
        <!-- <div class="row">
            <div class="col-lg-12 p-5 center-center min-vh-100">
                <h1 id="heading">This is a heading</h1>
                <p class="up">Et exercitation incididunt velit veniam non ad amet laborum et amet eiusmod ut in deserunt. Consectetur cillum magna veniam qui ea aliqua nulla ex est irure. Ex magna magna culpa ullamco adipisicing eu cillum commodo sunt consequat laborum aliquip.</p>
                <p class="up">Et exercitation incididunt velit veniam non ad amet laborum et amet eiusmod ut in deserunt. Consectetur cillum magna veniam qui ea aliqua nulla ex est irure. Ex magna magna culpa ullamco adipisicing eu cillum commodo sunt consequat laborum aliquip.</p>
            </div>
        </div>
        <div class="row bg-light">
            <div class="col-lg-12 p-5 center-center min-vh-100 bg-info">
                <h1 class="up">Section 2</h1>
                <p class="up">Et exercitation incididunt velit veniam non ad amet laborum et amet eiusmod ut in deserunt. Consectetur cillum magna veniam qui ea aliqua nulla ex est irure. Ex magna magna culpa ullamco adipisicing eu cillum commodo sunt consequat laborum aliquip.</p>
                <p class="up">Et exercitation incididunt velit veniam non ad amet laborum et amet eiusmod ut in deserunt. Consectetur cillum magna veniam qui ea aliqua nulla ex est irure. Ex magna magna culpa ullamco adipisicing eu cillum commodo sunt consequat laborum aliquip.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 p-5 center-center min-vh-100 bg-warning">
                <h1 class="up">Section 2</h1>
                <p class="up">Et exercitation incididunt velit veniam non ad amet laborum et amet eiusmod ut in deserunt. Consectetur cillum magna veniam qui ea aliqua nulla ex est irure. Ex magna magna culpa ullamco adipisicing eu cillum commodo sunt consequat laborum aliquip.</p>
                <p class="up">Et exercitation incididunt velit veniam non ad amet laborum et amet eiusmod ut in deserunt. Consectetur cillum magna veniam qui ea aliqua nulla ex est irure. Ex magna magna culpa ullamco adipisicing eu cillum commodo sunt consequat laborum aliquip.</p>
            </div>
        </div> -->

        <div class="container-fluid p-0" v-if="content.hero">

          <!-- hero -->
          <div id="banner" class="row min-vh-100 mt-5 mx-0 w-100">
            <div class="col-lg-6 p-5 bg-sand d-flex flex-column justify-content-center align-items-stretch text-left mt-4 mt-lg-0 min-vh-75">
              <h1 
              data-aos="fade-up"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
              class="up site-title font-weight-bold" v-html="content.hero.title"></h1>
              <h3 data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="100"
                data-aos-easing="ease-in-sine"
                class="up site-subtitle text-dark my-3" v-html="content.hero.subtitle"></h3>
              <div class="up">
                <a :href="'#' + content.hero.btn1Link">
                  <button class="btn btn-dark cta px-4 me-2" 
                  role="button" v-html="content.hero.btn1"></button>
                </a>
                <a :href="'#' + content.hero.btn2link">
                  <button class="btn btn-dark cta px-4" role="button" v-html="content.hero.btn2"></button>
                </a>
              </div>
            </div>
            <div class="col-lg-6 bg-sand p-0">
              <img :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.hero.img.path}`"
              width="1000"
              height="600"
              class="w-100 img-full min-vh-50 p-0" />
            </div>
          </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted } from "vue"
import AOS from 'aos'
import { storeToRefs } from 'pinia'
import { useTextStore } from '../stores/text'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const { content, loading, error } = storeToRefs(useTextStore())
const { fetchData } = useTextStore()

fetchData()

onMounted(() => {
    AOS.init({
        offset: 0, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out-cubic', // default easing for AOS animations
        mirror: true, // whether elements should animate out while scrolling past them
    })

gsap.utils.toArray(".up").forEach(layer => {
            gsap.from(layer, {
                y: 70,
                opacity: 0,
                duration: 1,
                stagger: 0.5,
                ease: "power2.inOut",
                scrollTrigger: {
                trigger: layer,
                // scrub: true,
                toggleActions: 'play none none reverse',
                start: "top bottom",
                // start:"top 100%",
                end:"bottom top",
            }
            });
        })
})
</script>

<style lang="scss" scoped>

</style>