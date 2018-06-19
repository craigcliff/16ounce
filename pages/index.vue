<template>
  <section class="container">
 
 <Menu/>
 <about/>
    <classes/>
    <pricing/>

  </section>
</template>

<script>

import Menu from '~/components/Menu.vue'
import classes from '~/pages/classes.vue'
import about from '~/pages/about.vue'


export default {
  components: {
  Menu,
   
    about,
   
    classes
  }
}
</script>

<style scoped>
.container
{
  
  width: 100%;
  height: 100vh;
}


</style>
