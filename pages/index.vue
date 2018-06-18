<template>
  <section class="container">
 
    <Timetable/>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Timetable from '~/components/Timetable.vue'

export default {
  components: {
    Logo,
    Timetable
  }
}
</script>

<style>
.container
{
  
  margin: 0 auto;
  height: 100vh;
}


</style>
