<template>
    <div class = "container">
  
  <div class = "heading-container">
    <h2>{{heading}} </h2>
    
  </div>


<ul class = "pricing-container">
  
  <li v-for="(item,index) in items" class = "pricing" :key="index"> 
    <div class = "price">
      <span class ="pricing-currency">R</span>{{item.price}}<span class ="pricing-month">{{item.text}}</span>
      
    </div>
    <div class ="pricing-subs">/{{item.subs}}</div>
    
  </li>
  
   
  
    
  </ul>
  
  
  <div class = "feature-container" >
    <ul class = "feature">
      <li class="feature-item" v-for="(feature,index) in features" :key="index" ><img class="list-image" src="~/assets/icons/checkmark.svg" fill="#000" height="15" width="15" align="top"><div class = "list-text"> {{feature.text}} </div> </li>

 
    
    </ul>
    
  </div>
  
    <div class = "button-container">
      <btn :text="'Find Out More'"
      :scrollto="'.contact-container'"
      >  </btn>
    
  </div>
  
  
</div>
  
</template>

<script>



import btn from '~/components/button.vue'

export default {
    components: {
      btn

        
    },

    props: ['heading', 'items', 'features']



}
</script>



<style scoped>
.container {
  display: flex;
  width: 350px;
  height: 520px;
  flex-direction: column;

  margin: 1em;
  color: #fff;
  cursor: default;
  font-family: "Myriad Pro", Arial, sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.4);

  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;

  transition: border-color 0.3s, background 0.3s;
}

/* Card heading */

.container:hover {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.heading-container {
  height: 12.5%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    padding-top:20px;
  padding-bottom: 15px;
}
.heading-container:after {

  content: "";
  display: block;
  width: 150px;
  border-bottom: 2px solid #fff;

  padding-bottom: 15px;
}

/* Card Pricing */

.pricing-container {
  display: flex;
  width: 100%;
  height: 47.5%;
  flex-direction: column;
   padding: 0;
   
   justify-content: center;
}

.pricing {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  /* padding-bottom: 6px; */
    list-style: none;
}

.price {
  width: 100%;
  height: 35%;
  font-size: 2em;
  font-weight: 300;
  /* padding: 0.9em 0 0 0; */
  text-align: center;
  letter-spacing: 3px;
}

.pricing:after {
  content: "";
  display: block;
  width: 75px;
  border-bottom: 2px solid red;
  padding-top: 0px;
  padding-bottom: 10px;
}

.pricing:last-child:after {
  content: "";
  display: block;
  width: 20px;
  border-bottom: none;
}
.pricing-currency {
  font-size: 0.28em;
  vertical-align: super;
  letter-spacing: 1px;
  font-weight: 400;
}
.pricing-month {
  font-size: 0.25em;
  letter-spacing: 0px;
  font-weight: 500;
}

.pricing-subs {
  font-size: 0.5em;
  font-weight: 500;
  letter-spacing: 1px;
  padding-top: 10px;
}

/* Pricing feature list  */

.feature-container {
  display: flex;
  height: 20%;
  width: 100%;
}

.feature {
  font-size: 1em;
  margin: 0 2em;
  letter-spacing: 0;
  width: 100%;
}
.feature-item {
  list-style: none;
  font-size: 0.75em;
  display: flex;
  align-items: center;
 
  padding-top: 10px;
  width: 100%;
}

.list-image {


}

.list-text{
padding-left: 15px;

}

/* Pricing CTA section */

.button-container {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-cta {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 1em 1em;
  padding: 1em 3em;
  color: #18222e;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  cursor: pointer;
}

.button-cta:hover {
  background: red;
    color: #fff;
}
</style>
