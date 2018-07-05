<template>

<section class ="container">
<galleryCom/>
    </section>
</template>


<script>
import galleryCom from '~/components/galleryCom.vue'



export default {
  components: {
   
    galleryCom
  }
}
</script>


<style scoped>


.container{

display: flex;

height: auto;
min-width: 100vw;
flex-direction: column;
/* background:  linear-gradient(to bottom, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%); */
background:  linear-gradient(to top, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 60%, rgba(24,34,46,0.9) 100%);

}

</style>



