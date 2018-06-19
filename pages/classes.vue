<template>

<section class= "classes-container">

   <h2 class = "classes-heading">Classes</h2>
  
  <div class = "timetable">
    <Timetable/>
    </div>


 <h2 class = "pricing-heading">Pricing</h2>
<div class = "pricing">

 

<pricing-card :myText="[699,599]" :text="599" :type="'Class Membership'"  :per="'pm'" :contractArr="['Monthly Contract', 'Yearly Contract']" :contract= "'Yearly Contract'">
   
     <li slot = "list-items"><img src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text"> Full access to classes </div> </li>
     
     </pricing-card>
<pricing-card :myText="[1200,1000]" :text="1000" :type="'Pro Membership'" :per="'pm'" :contractArr="['Monthly Contract', 'Yearly Contract']" :contract= "'Yearly Contract'">
    <li slot = "list-items"><img src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text"> Full access to classes </div> </li>
    <li slot = "list-items"><img src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text"> Unsupervised </div> </li>
    
    
     </pricing-card>
<pricing-card :myText="[1750,1500]" :text="1500" :type="'Package Membership'"  :per="'pm'" :contractArr="['Monthly Contract', 'Yearly Contract']" :contract= "'Yearly Contract'">
    <li slot = "list-items"><img src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text"> Full access to classes </div> </li>
    <li slot = "list-items"><img src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text"> Unsupervised </div> </li>
    <li slot = "list-items"><img src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text"> 4 Private sessions </div> </li>
    
     </pricing-card>

     <pricing-card :myText="[300,170,120]" :text="120" :type="'Private Lessons'"  :per="'per hour'" :contractArr="['1 on 1','2 on 1', '3 on 1']" :contract= "'3 on 1'">
    <li slot = "list-items"><img src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text"> Customized training </div> </li>
    <li slot = "list-items"><img src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text">Professional advice  </div> </li>
 
    
     </pricing-card>

   


    
   


    </div>

    </section>
</template>

<script>
import PricingCard from '~/components/pricingCard.vue'
import Timetable from '~/components/Timetable.vue'


export default {
  components: {
    PricingCard,
    Timetable
  }
}
</script>


<style scoped>

.classes-container{

display: flex;
/* background:  linear-gradient(to bottom, rgba(24,34,46,9)  0%, rgba(246,246,246,0.3) 55%, rgba(255,255,255,1)  100%); */
background:  linear-gradient(to bottom, rgba(246,246,246,0.7)0%, rgba(24,34,46,0.4) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%);
/* background: linear-gradient(45deg, #18222E, rgb(109, 119, 131)); */
height: auto;
width: 100vw;
flex-direction: column;

}

.classes-heading,.pricing-heading{
  display:flex;
  justify-content: center;
align-items: center;
padding-top: 1em;
padding-bottom: 1em;
font-size: 3em;

}

.pricing{
display: flex;
flex-wrap: wrap;
height: 50%;
width: 100vw;

 color: #C3E9F5;
    
    align-items: center;
    justify-content: center;



}
.timetable{

height: 50%;
width: 100%;

}




</style>
