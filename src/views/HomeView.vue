<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import { storeToRefs } from 'pinia'
import { useTextStore } from '../stores/text'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const { content, loading, error } = storeToRefs(useTextStore())
const { fetchData } = useTextStore()

fetchData();

onMounted(() => {
  AOS.init({
    offset: 0, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out-sine', // default easing for AOS animations
    mirror: true, // whether elements should animate out while scrolling past them
  })
})
  

// import { ref, reactive, onMounted } from 'vue'
// // let content = ref(null)
// let state = reactive({content:[]})
// // let content = []
// function getData() {
//   fetch('https://content.jenmasonconsulting.ca/cockpit/api/content/item/home_page')
//   .then(response => response.json())
//   .then(json => {
//     state.content = json
//     console.log(state.content
//     )})
// }

// onMounted(() => {
//   // getData();
//   fetchData();
// })

</script>

<template>
  <div>
    <main class="overflow-hidden">

      <!-- loading, error messages -->
        <h1 :key="1" v-if="loading" data-aos="fade" class='col-lg-12 center-center p-5 min-vh-100 text-secondary fw-light'>Welcome to Jen Mason Consulting</h1>
        <h1 :key="2" v-if="error" data-aos="fade" class="col-lg-12 center-center text-secondary p-5 min-vh-100 fw-light">{{ error.message }}</h1>

      <!-- main content -->
      <div class v-if="content.hero" data-aos="fade">
        <div class="container-fluid p-0">

          <!-- hero -->
          <div id="banner" class="row min-vh-100 mt-5 mx-0 w-100">
            <div class="col-lg-6 p-5 bg-sand d-flex flex-column justify-content-center align-items-stretch text-left mt-4 mt-lg-0 min-vh-75">
              <h1 data-aos="fade-up" class="up site-title font-weight-bold" v-html="content.hero.title"></h1>
              <h3 data-aos="fade-up" data-aos-delay="200" class="up site-subtitle text-dark my-3" v-html="content.hero.subtitle"></h3>
              <div data-aos="fade-up" data-aos-delay="400" class="up">
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
              data-aos="fade"
              width="1000"
              height="600"
              class="w-100 img-full min-vh-50 p-0" />
            </div>
          </div>

          <!-- mission -->
<!-- 
<div class="row">
  <div class="col-sm-6">
    <form action="https://lb.benchmarkemail.com//code/lbform/" name="frmLB_BLMLZ" method="POST">
      <label for="name">First name:</label><br>
      <input type="text" name="lname" placeholder="John"><br>
      <label for="email">Email:</label><br>
      <input type="email" name="lname" placeholder="youremail@gmail.com"><br><br>
      <input type="submit" value="Submit">
    </form> 
  </div>
</div> -->


<!-- END: Signup Form Popup Code from Benchmark Email Ver 4.0  -->


          <div class="row min-vh-100" id="mission">
            <div class="col-lg-8 offset-lg-2 min-vh-100 p-5 center-center">
              <h5 data-aos="fade-up" class="up text-uppercase font-weight-bold" v-html="content.mission.microtitle"></h5>
              <h2 data-aos="fade-up" data-aos-delay="200" class="section-title" v-html="content.mission.title"></h2>
              <div data-aos="fade-up" data-aos-delay="400" class="up mb-4" v-html="content.mission.text"></div>
              <a href="#services-intro">
                <button data-aos="fade-up" data-aos-delay="600" role="button" class="up btn btn-info" v-html="content.servicesIntro.btn"></button>
              </a>
            </div>
            <div class="col-lg-12 p-0 center-center">
              <img
                :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.mission.img.path}`"
                data-aos="fade"
                width="1000"
                height="600"
                class="img-full min-vh-50"
              />
            </div>
          </div>

          <!-- services intro -->

          <div class="row min-vh-100 bg-linen" id="services-intro">
            <div class="col-lg-8 offset-lg-2 min-vh-100 p-5 center-center">
              <h5 data-aos="fade-up" class="up text-uppercase font-weight-bold"
              v-html="content.servicesIntro.microtitle"
              ></h5>
              <h2 data-aos="fade-up" data-aos-delay="200" class="up section-title" v-html="content.servicesIntro.title"></h2>
              <div data-aos="fade-up" data-aos-delay="400" class="up mb-4" v-html="content.servicesIntro.text"></div>
              <a href="#services">
                <button data-aos="fade-up" data-aos-delay="600" role="button" class="up btn btn-info" v-html="content.servicesIntro.btn"></button>
              </a>
            </div>
          </div>

        <!-- services array -->

      <div class="row min-vh-100" id="services"
      v-for="(item, index) in content.services" :key="index">
      <div v-if="index % 2 === 0" class="w-100 d-flex flex-wrap flex-md-nowwrap">
        <div class="col-lg-6 min-50 align-left-center my-auto p-5 m-0 order-2 order-lg-1">
          <h6 data-aos="fade-up" class="text-uppercase small" v-html="item.microtitle"></h6>
          <h2 data-aos="fade-up" data-aos-delay="200" class="up section-title" v-html="item.title"></h2>
          <div data-aos="fade-up" data-aos-delay="400" class="up mb-4" v-html="item.text"></div>
          <div data-aos="fade-up" data-aos-delay="600">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="60" height="60" viewBox="0 0 24 24" stroke-width=".5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
          </div>
        </div>
        <div class="col-lg-6 min-vh-50 p-0 order-1 order-lg-12">
          <img data-aos="fade" width="1000" height="600" :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${item.img.path}`" class="w-100 h-100 object-fit" alt="" />
        </div>
      </div>
      <div v-else class="w-100 d-flex flex-wrap flex-md-nowwrap bg-linen">
        <div class="col-lg-6 min-vh-50 p-0">
          <img data-aos="fade" width="1000" height="600" :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${item.img.path}`" class="w-100 h-100 object-fit" alt="" />
        </div>
        <div class="col-lg-6 min-50 align-left-center my-auto p-5 m-0">
          <h6 data-aos="fade-up" class="text-uppercase small" v-html="item.microtitle"></h6>
          <h2 data-aos="fade-up" data-aos-delay="200" class="section-title" v-html="item.title"></h2>
          <div data-aos="fade-up" data-aos-delay="400" class="mb-4" v-html="item.text"></div>
          <div class="" data-aos="fade-up" data-aos-delay="600">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="60" height="60" viewBox="0 0 24 24" stroke-width=".5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
          </div>
          </div>
        </div>
      </div>

      <!-- Individual retreats section delete
        QUIET THE INNER NOISE
        Retreats in Natural Settings: Individuals
        Starting in the spring of 2023, I will be offering lodge-based wilderness retreats for individual registrants. Inspired and uplifted by beautiful natural settings, participants will develop their capacity to listen—to the non-human natural world, to others, and to themselves. More information to come. -->

      <!-- about -->

      <div id="about" class="row min-vh-100 bg-light">
        <div class="col-lg-8 offset-lg-2 min-vh-100 p-5 center-center">
          <h5 data-aos="fade-up" class="text-uppercase font-weight-bold" v-html="content.about.microtitle"></h5>
          <h2 data-aos="fade-up" data-aos-delay="200" class="up section-title" v-html="content.about.title"></h2>
          <div data-aos="fade-up" data-aos-delay="400" class="up" v-html="content.about.text"></div>
            <a href="#contact" data-aos="fade-up" data-aos-delay="600">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down" width="60" height="60" viewBox="0 0 24 24" stroke-width=".5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="18" y1="13" x2="12" y2="19" />
              <line x1="6" y1="13" x2="12" y2="19" />
            </svg>
            </a>
          </div>
          <div class="col-lg-12 p-0 center-center">
            <img data-aos="fade"
              :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.about.img.path}`"
              width="1000"
              height="600"
              class="img-full min-vh-50"
            />
          </div>
        </div>

        <!-- contact -->

        <div id="contact" class="row bg-dark text-light">
          <div class="col-lg-8 offset-lg-2 p-5 min-vh-75 center-center">
            <h5 data-aos="fade-up" class="text-uppercase font-weight-bold" v-html="content.contact.microtitle"></h5>
            <h1 data-aos="fade-up" data-aos-delay="200" class="section-title" v-html="content.contact.title"></h1>
            <p data-aos="fade-up" data-aos-delay="400" class="mb-4" v-html="content.contact.text"></p>
            <div data-aos="fade-up" data-aos-delay="600" class="d-flex">
              <a :href="content.contact.btnLink">
                <button role="button" class="btn btn-info me-2" v-html="content.contact.btn"></button>
              </a>
              <button class="btn btn-light"
              data-bs-toggle="modal" data-bs-target="#exampleModal">Newsletter</button>
            </div>
            </div>
          <div class="col-sm-12 p-0 position-relative">
            <img 
            data-aos="fade"
            width="1000" height="500" class="w-100 object-fit" 
            :src="`https://content.jenmasonconsulting.ca/cockpit/storage/uploads/${content.contact.img.path}`" alt="A group jumping on a beach at sunset signifying teamwork, joy, and cameraderie.">
          </div>
        </div>


<!-- Modal -->
<div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

        <!-- Benchmark newsletter signup Modal -->
        <!-- <div class="modal fade" id="signup2" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">JMC Newsletter Signup</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-2">
                <iframe style="width:100%; min-height:50vh;" allowfullscreen src="https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq%252BnuC4b%252BprMCP5pwVnAjsSIWFkuV4uvWyDtO5iNRn8gS049TyW7spdJ"></iframe>
              </div>
            </div>
          </div>
        </div> -->

        <!-- footer -->

        <footer>
          <div class="row p-0 m-0 bg-dark">
            <div class="col-lg-12 p-5 center-center">
              <button type="button" role="button" class="btn btn-outline-light" v-html="content.footer" disabled></button>
            </div>
          </div>
        </footer>


      </div><!--end main container-->
    </div>
  </main>
  </div>
</template>
