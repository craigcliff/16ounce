<template>

<section class = "container-about">

    <div class ="about-section-us">
 <h2 class = "about-section-us-heading">About Us</h2>
 <p class = "about-section-us-desc">Have you ever slipped on a pair of boxing gloves to spar? Worked a punch bag or on pads with a boxing coach?  If you have, you'll know how challenging, exhausting and technical boxing is, but also how much fun it is, too!</p><br>
<p class = "about-section-us-desc2">Based in Salt River, Cape Town, 16 Ounce Boxfit Gym specialises in boxing fitness and skills training in a friendly, non-threatening environment.</p>
<br>
<p class = "about-section-us-desc3">Everyone is welcome at 16 Ounce Boxfit Gym, especially complete beginners. Come to the club at any time and you'll find our friendly trainers who will assist and guide you.  Our aim is to bring the sweet science of boxing and boxing fitness training to the masses. </p>


       </div>

<h3 class = "training-section-us-heading">Our Trainers</h3>
<section class = "personnel">
<PersonnelCard class ="card1" 
:name="'Kessie Mkali'" 
:alias="'aka Kid Chocolate'"
:desc="'Kessie is light and nimble, and will work you fast and hard. He is a 2 time Western Cape amateur boxing champion, and tremendous coach. Kessie was a coach at The Armoury before moving to Renzo Gracie. His fast paced technical workouts are enjoyed by youth, men, and women alike.'"
:backgroundImage="'/images/gallery/img3.jpg'"
> </PersonnelCard>

<PersonnelCard class ="card2"
  :name="'Richard Makore'" 
:alias="'aka Mr Nice Guy'"
:desc="'Richard, a 3 time National, Senior Lightweight Champion and Gold medallist at Zimbabwe youth games, had his first competitive fight at age 11. After boxing for Thorn Hill Air Force, he moved to Cape Town and started coaching at the old Harrington Street Boxing Gym before joining the coaching team at The Armoury in 2010. You are guaranteed to leave one of Richards’ classes with a smile on your face!'"
:backgroundImage="'/images/gallery/img4.jpg'"
  >
  
   </PersonnelCard>
   </section>

    </section>

    
</template>



<script>
import PersonnelCard from '~/components/PersonnelCard.vue'


export default {
  components: {
    PersonnelCard
  }
}
</script>

<style scoped>

.card1{

display: flex;
justify-content: flex-end;
  
}

.container-about{


 height: auto; 
      display: flex;
   
      flex-direction: column;
        background:  linear-gradient(to bottom, rgba(255, 255, 255, 0.603) 0%, rgba(255, 254, 254, 0.986) 85%), url(~/images/bg/bg2.jpg);
  background-size: cover;
 background-repeat: no-repeat;
   /* background:  linear-gradient(to top, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%); */
    

   width: 100vw;
   flex-wrap: wrap;
     

}

.about-section-us{
height: 50%;

}

.personnel{
display: flex;
   height: 50%;
   flex-wrap:wrap;    
   padding-bottom: 4em;

}


.about-section-us-heading{
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

.training-section-us-heading{
  display:flex;
  justify-content: center;
align-items: center;
padding-top: 1em;
padding-bottom: 1em;
font-size: 2em;
line-height: 1.4em;
    font-weight: 400;
    text-rendering: optimizelegibility;
    letter-spacing: .03em;



}

.about-section-us-desc,
.about-section-us-desc2,
.about-section-us-desc3{

    width: 100%;
    
    letter-spacing: .105em;
    line-height: 1.8;
    font-size: 1.1em;
    padding-left: 4em;
    padding-right: 4em;
    color: black;
    font-weight: 500;
    

}

.about-section-us-desc:first-letter {
font-size:40px;
text-transform: uppercase;
font-weight:bold;
color: red;
padding-bottom: 43px;
  line-height: 0;
  height: 0;

}

@media (max-width: 400px){

.personnel{
flex-direction: column;

padding-top: 50px;

}

}

  @media (max-width: 1150px){

.personnel{
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 50px;

}

}

@media (max-width: 400px){

.personnel{
justify-content: flex-start;
align-items: flex-start;
}

}

</style>

