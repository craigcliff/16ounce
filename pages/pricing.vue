<template>

<section class="pricing-container">

 <h2 class = "pricing-heading">Pricing</h2>

<div class="pricing-cards">
        <card
        :heading="'Package Membership'"
        :items="items"
        :features="features"
        
        
        > </card>

                <card
        :heading="'Class Membership'"
        :items="items2"
        :features="features2"
        
        > </card>


        <card
        :heading="'Private Lessons'"
        :items="items3"
        :features="features3"
       
        > </card>

        </div>





    </section>
    

</template>

<script>
import card from '~/components/card.vue'

export default {
    
    components: {
        card

    },

    data: function() {
        return {

 items: [
      { price: '599', subs: 'Yearly Contract', text:'per month' },
      { price: '699', subs: 'Monthly Contract', text:'per month' }
      
    ],
    items2: [
      { price: '1000', subs: 'Yearly Contract', text:'per month' },
      { price: '1200', subs: 'Monthly Contract', text:'per month' }
      
    ],
    items3: [
      { price: '120', subs: '3 on 1', text:'per hour' },
      { price: '170', subs: '2 on 1', text:'per hour' },
      { price: '300', subs: '1 on 1', text: 'per hour' }
    ]

,
    features:[
    {text: 'Full access to classes'}
    ],

    features2:[
    {text: 'Full access to classes'},
    {text: 'Unsupervised'},
    {text: '4 private sessions'}
    
    ],
    features3:[
    {text: 'Customized training'},
    {text: 'Professional advise'}
    ]

        
}

    }

}
</script>



<style scoped>

.pricing-container{

 
min-width: 100vw;
  /* background:  linear-gradient(to bottom,  rgba(24,34,46,0.6) 30%, rgba(24,34,46,0.9) 100%), url(~/assets/images/bg2.jpg); */
  /* background:  linear-gradient(to bottom, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%),url(~/assets/images/bg2.jpg); */
    background:  linear-gradient(to bottom, rgba(24,34,46,0.9) 20%, rgba(24,34,46,0.6) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%);
  background-size: cover;
 background-repeat: no-repeat;
    background-position: left;
  display: flex;
  flex-direction: column;
}

.pricing-heading{

     display:flex;
  justify-content: center;
align-items: center;
padding-top: 1em;
padding-bottom:1em;
font-size: 3em;
line-height: 1.4em;
    font-weight: 400;
    text-rendering: optimizelegibility;
    letter-spacing: .03em;

}



.pricing-cards{
  display: flex;
  

min-width: 100vw;
  

  display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;



}


</style>

