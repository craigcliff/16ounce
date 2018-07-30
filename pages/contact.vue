<template>

<div class= "contact-container">

    <h2 class = "contact-heading">Contact us</h2>

    <div class="contact-content-container">

<section class="contact-a">

    

<div class="contact-form">
<formCom/>
</div>
    
</section>
<section class="contact-b">
       
      
                <footerCom/>
            
    </section> 
    </div>

    <div class = "bottom">
    <div class="copyright" ><span>16Ounce Boxfit Gym.</span>© <span >2018</span>
     </div>


</div>
    </div>
    
</template>

<script>
import formCom from '~/components/form.vue'

import footerCom from "@/components//footerCom";
export default {

    

     components: {

         formCom,
  
         footerCom
    
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


/* background:  linear-gradient(to bottom, rgba(182, 159, 159, 0.603) 0%, rgba(139, 159, 170, 0.466) 85%), url(~/images/bg/bg5.jpg); */
 background:  linear-gradient(to bottom, rgba(24,34,46,0.9) 20%, rgba(24,34,46,0.6) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%), url(~/images/bg/bg5.jpg);
/* background:  linear-gradient(to bottom, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%); */
/* background:  linear-gradient(to top, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 60%, rgba(24,34,46,0.9) 100%); */
background-size: cover;
 background-repeat: no-repeat;
}



.contact-a{
width: 50%;
height: 400px;
display: flex;
align-items: center;
justify-content: center;
}

.contact-b{
width: 50%;
height: 100%;

display: flex;



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
color: #fff;
}

.contact-content-container{
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 80%;


}


.contact-form{
height: 45%;


}

.bottom{

    display: flex;
    flex-direction: flex-end;
    justify-content: flex-end;
    height: 10%;
}

.copyright{
    width: 100%;
    height: 100%;
display: flex;
align-items: flex-end;
justify-content: center;
padding-bottom: 5px;
letter-spacing: 0.105em;
  font-size: .7em;
  font-weight: 400;
  line-height: 1.6;
   color: #fff;

}

@media (max-width: 768px) {
.contact-container{

    flex-direction: column;

}

.contact-a{
height: 70%;
width: 100%;
}

.contact-b{
width: 100vw;
height: 20%;
flex-direction: column;




}

.bottom{

   
    height: 10%;
}

.copyright{
/* color: #111; */
}



}



</style>




