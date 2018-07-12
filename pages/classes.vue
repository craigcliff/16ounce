<template>

<section class= "classes-container">

   <h2 class = "classes-heading">Classes</h2>
  
  <div class = "timetable">
    <Timetable/>
    </div>


 
    </section>
</template>

<script>

import Timetable from '~/components/Timetable.vue'


export default {
  components: {
    
    Timetable
  }
}
</script>


<style scoped>

.classes-container{

display: flex;
/* background:  linear-gradient(to bottom, rgba(24,34,46,9)  0%, rgba(246,246,246,0.3) 55%, rgba(255,255,255,1)  100%); */
/* background:  linear-gradient(to bottom, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%); */
/* background: linear-gradient(45deg, #18222E, rgb(109, 119, 131)); */
height: auto;
width: 100vw;
flex-direction: column;

}

.classes-heading{
 display:flex;
  justify-content: center;
align-items: center;
padding-top: 1em;
padding-bottom:1em;
font-size: 3em;
line-height: 1.4em;
    font-weight: 400;
    text-rendering: optimizelegibility;
    letter-spacing: .03em;

}








</style>
