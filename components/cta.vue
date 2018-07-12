<template>


<main>

    <div class="container">
      <h2>Want it? Work for it!</h2>
      <p class="subtitle">Welcome to 16ounce Boxfit Gym</p>
      <div class = "button-container">
      <btn class ="btn1" :text="'ABOUT'" :scrollto="'.container-about'" >  </btn>
      <btn class ="btn2" :text="'MEMBERSHIPS'" :bgColor="'red'" :bder="'2px solid red'" :scrollto="'.pricing-container'">  </btn>
  </div>



      
    </div>
 
 
  
</main>
    
</template>


<script>

import btn from '~/components/button.vue'
// import {
//     TweenMax
//   } from "gsap";
import { TweenMax, TimelineMax, Linear } from 'gsap'
  // import TimelineMax from "gsap/TimelineMax";
  // import { TweenMax } from "gsap";

export default {


  components:{

btn


  },

    data() {
    return {
      tl: new TimelineMax({
        
        // onComplete: this.animateCta2()
      }),

      
      
      

    }
    },
    mounted: function() {
this.animateCta();

    },
    methods:{

       animateCta: function(){

         
         this.tl.set('.container', {visibility:"visible"})
         .staggerFrom('h2', 1.2, {opacity: 0, x:200})
         .staggerFrom('.subtitle', 1.2, {opacity: 0, x:200})
         .staggerFrom('.btn1', 1.2, {opacity: 0, y:20})
          .staggerFrom('.btn2', 1.2, {opacity: 0, y:20});


      }

    }


    
}
</script>


<style scoped>

.container{

  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility:hidden;
}

h2 {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 3rem !important;
  color: rgb(197, 4, 4);
 padding-bottom: 10px;

}

p.subtitle {
    font-family: "Open Sans", sans-serif;
  font-size: 1.8rem;
  max-width: 80%;
  /* border-bottom: 1px solid white; */

  color: rgb(230, 230, 230);
  padding-bottom: 25px;
}

.button-container{

display: flex;

}


@media (max-width: 768px) {

h2 {
  font-family: "Open Sans", sans-serif;
  font-weight: 00;
  text-transform: uppercase;
  font-size: 1.5rem !important;
  color: rgb(197, 4, 4);
 padding-bottom: 10px;

}

p.subtitle {
    font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  max-width: 80%;
  /* border-bottom: 1px solid white; */

  color: rgb(230, 230, 230);
  padding-bottom: 25px;
}

}






</style>


