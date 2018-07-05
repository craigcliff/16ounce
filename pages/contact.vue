<template>

<section class= "contact-container">



    <h2 class = "contact-heading">Contact us</h2>

<div class="contact-form">
<formCom/>
</div>
    
     
    </section>
    
</template>

<script>
import formCom from '~/components/form.vue'

export default {

    

     components: {

         formCom
    
    },

     data: function() {

         return{

            
        
    }
     }
    
}
</script>



<style scoped>

.contact-container{

display: flex;

height:auto;
width: 100vw;
flex-direction: column;

/* background:  linear-gradient(to bottom, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%); */
background:  linear-gradient(to top, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 60%, rgba(24,34,46,0.9) 100%);

}


.contact-heading{
   display:flex;
  justify-content: center;
align-items: center;
padding-top: 1em;
/* padding-bottom:1em; */
font-size: 3em;
line-height: 1.4em;
    font-weight: 400;
    text-rendering: optimizelegibility;
    letter-spacing: .03em;
    height: 10%;

}


.contact-form{
height: 45%;

}

</style>




