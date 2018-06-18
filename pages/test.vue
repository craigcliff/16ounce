<template>

<section class = "container">

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

.container{


 height: 100%; 
      display: flex;
      width: 100%;
     

}


</style>

