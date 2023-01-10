<script setup>
import { ref, onMounted } from 'vue'

const form = ref([])


var myHeaders = new Headers();
myHeaders.append("AuthToken", "9BA68FF0-56CF-4E79-B18E-0B8D8F408353");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// fetch("https://clientapi.benchmarkemail.com/SignupForm/lbscript1710452/Code/Button", requestOptions)
// fetch("https://clientapi.benchmarkemail.com/SignupForm/1710452", requestOptions)
fetch("https://clientapi.benchmarkemail.com/SignupForm/1710452", requestOptions)
  .then(response => response.json())
//   .then(result => console.log(result))
    .then((result) => {
        form.value = result
        console.log(result)
    })
  .catch(error => console.log('error', error));

</script>

<template>
    <div class="" v-if="form.Response">
        <div class="btn btn-primary text-light" v-html="form.Response.Data"></div>
        <div class="" v-html="form.Response.Data.HTMLCode"></div>
        <!-- <a href="https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq%252BnuC4b%252BprMCP5pwVnAjsSIWFkuV4uvWyDtO5iNRn8gS049TyW7spdJ">Sign up</a> -->
    </div>
    
</template>
  
<style>

</style>