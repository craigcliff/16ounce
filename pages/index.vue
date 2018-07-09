<template>
  <section class="container">
 
 <Menu/>
 <about/>
    <classes/>
    <pricing/>
<gallery/>
<contact/>
<mapSection/>

  </section>
</template>

<script>

import Menu from '~/components/navigation/Menu.vue'
import classes from '~/pages/classes.vue'
import about from '~/pages/about.vue'
import gallery from '~/pages/gallery.vue'
import pricing from '~/pages/pricing.vue'
import contact from '~/pages/contact.vue'
import mapSection from '~/pages/mapSection.vue'


export default {
  components: {
  Menu,
   
    about,
   
    classes,
    gallery,
    pricing,
    contact,
    mapSection
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
