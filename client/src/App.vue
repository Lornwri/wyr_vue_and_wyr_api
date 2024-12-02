<script setup>

import { ref, onMounted } from 'vue'

import WouldYouRather from './components/WouldYouRather.vue'
import wyrService from './services/wyrService.js';

//Data for 'wyr' question and answers
const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

onMounted( () => {
  wyrService.getRandomWYR().then( wyrData => {
    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })
}

)


//stores user's answer selection

const userSelection = ref('') //empty string for user's answer

//Update user's selections
function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}`
}

</script>

<template>
  
  <div id="app">
  
  <h1>Hello! Would You Rather...</h1>
  
    <!--passing props to WouldYouRather component-->
  <WouldYouRather 
      v-bind:question="wyrQuestion" 
      v-bind:answer1="wyrAnswer1" 
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection"
  >
  </WouldYouRather>
  
  {{ userSelection }}
    
  </div>

</template>

<style scoped>

#app
{
  text-align: center;
  margin-top: 60px;
}
</style>
