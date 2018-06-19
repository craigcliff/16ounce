<template>

<section class = "container-about">

    <div class ="about-section-us">
 <h2 class = "about-section-us-heading">About Us</h2>
 <p class = "about-section-us-desc">Have you ever slipped on a pair of boxing gloves to spar? Worked a punch bag or on pads with a boxing coach?  If you have, you'll know how challenging, exhausting and technical boxing is, but also how much fun it is, too!
</p><br>
<p class = "about-section-us-desc2">Based in Salt River, Cape Town, 16 Ounce Boxfit Gym was established by boxing fanatic, Zane Udemans, specialising in  boxing fitness and skills training in a friendly, non-threatening environment.</p>
<br>
<p class = "about-section-us-desc3">Everyone is welcome at 16 Ounce Boxfit Gym, especially complete beginners. Come to the club at any time and you'll find our friendly trainers who will assist and guide you.  Our aim is to bring the sweet science of boxing and boxing fitness training to the masses. </p>


       </div>

       
<section class = "personnel">
<PersonnelCard 
:name="'Kessie Mkali'" 
:alias="'aka Kid Chocolate'"
:desc="'Kessie is light and nimble, and will work you fast and hard. He is a 2 time Western Cape amateur boxing champion, and tremendous coach. Kessie was a coach at The Armoury before moving to Renzo Gracie. His fast paced technical workouts are enjoyed by youth, men, and women alike.'"
:backgroundImage="'/images/kessie.jpg'"
> </PersonnelCard>

<PersonnelCard
  :name="'Richard Makore'" 
:alias="'aka Mr Nice Guy'"
:desc="'Richard, a 3 time National, Senior Lightweight Champion and Gold medallist at Zimbabwe youth games, had his first competitive fight at age 11. After boxing for Thorn Hill Air Force, he moved to Cape Town and started coaching at the old Harrington Street Boxing Gym before joining the coaching team at The Armoury in 2010. You are guaranteed to leave one of Richards’ classes with a smile on your face!'"
:backgroundImage="'/images/richard.jpg'"
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

.container-about{


 height: 100vh; 
      display: flex;
   
      flex-direction: column;
        background:  linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(246,246,246,0.7) 65%), url(~/assets/images/bg2.jpg);
  background-size: cover;
   width: 100vw;
     

}

.about-section-us{
height: 50%;

}

.personnel{
display: flex;
   height: 50%;
      

}


.about-section-us-heading{
  display:flex;
  justify-content: center;
align-items: center;
padding-top: 1em;
font-size: 3em;

}

.about-section-us-desc,
.about-section-us-desc2,
.about-section-us-desc3{

    width: 100%;
    
    letter-spacing: .105em;
    line-height: .8;
    font-size: .9em;
    padding-left: 4em;
    padding-right: 4em;
    color: rgb(21, 32, 44);
    

}

.about-section-us-desc:first-letter {
font-size:3em;
text-transform: uppercase;
font-weight:bold;
color: red;
}


</style>

