<template>

<div class = "pricing-container">

 

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
</template>

<script>
import PricingCard from '~/components/PricingCard.vue'


export default {
  components: {
    PricingCard
  }
}
</script>


<style scoped>

.pricing-container{
display: flex;
flex-wrap: wrap;
width: 100%;
min-height: 100vh;
 color: #C3E9F5;
    background: linear-gradient(45deg, #18222E, rgb(109, 119, 131));
    align-items: center;
    justify-content: center;



}




</style>
