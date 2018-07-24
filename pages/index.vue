<template>
  <section class="container">
 
 <Menu/>
 <about/>
    <classes/>
    <pricing/>
<gallery/>
<contact/>


  </section>
</template>

<script>

import Menu from '~/components/navigation/Menu.vue'
import classes from '~/pages/classes.vue'
import about from '~/pages/about.vue'
import gallery from '~/pages/gallery.vue'
import pricing from '~/pages/pricing.vue'
import contact from '~/pages/contact.vue'



export default {
  components: {
  Menu,
   
    about,
   
    classes,
    gallery,
    pricing,
    contact
  }

   
}
</script>

<style scoped>
.container
{
  
  width: 100%;
  /* overflow-x:hidden; */
  height: 100vh;
}


</style>
