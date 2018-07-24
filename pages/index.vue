<template>
  <section class="container">
 
 <div class = "loader" v-if="loading===true">
    <loader/>
  </div>

  <div v-else>
 <Menu/>
 <about/>
    <classes/>
    <pricing/>
<gallery/>
<contact/>
</div>

  </section>
</template>

<script>

import Menu from '~/components/navigation/Menu.vue'
import classes from '~/pages/classes.vue'
import about from '~/pages/about.vue'
import gallery from '~/pages/gallery.vue'
import pricing from '~/pages/pricing.vue'
import contact from '~/pages/contact.vue'
import loader from '~/components/loader.vue'




export default {

  data: function() {
        return {

loading: true

        }

  },
  components: {
  Menu,
   loader,
    about,
   
    classes,
    gallery,
    pricing,
    contact
  },
  mounted: function() {

this.loading= false;
console.log(this.loading);

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

.loader{

display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
background: black;

}


</style>
