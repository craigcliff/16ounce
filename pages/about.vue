<template>

<section class="about-section">

    <div class = "about-section-1"> </div> 
    <div class = "about-section-2">
        <div class ="about-section-2-image-con">
            <div class="about-section-2-image" > </div>
             </div>
        <div class ="about-section-2-desc-con"> 
            <div class= "about-section-2-desc">
                Kid Chocolate

Kessie Mkali, is light and nimble, and will work you fast and hard. He is a 2 time Western Cape amateur boxing champion, and tremendous coach. Kessie was a coach at The Armoury before moving to Renzo Gracie. His fast paced technical workouts are enjoyed by youth, men, and women alike.

                </div>

        </div>
         </div> 
    <div class = "about-section-3"> 
        
          <div class ="about-section-3-image-con">
            <div class="about-section-3-image"> </div>
             </div>
        <div class ="about-section-3-desc-con"> 
            <div class= "about-section-3-desc">
                Mr Nice Guy

Richard Makore, 3 time National, Senior Lightweight Champion and Gold medallist at Zimbabwe youth games, had his first competitive fight at age 11. After boxing for Thorn Hill Air Force, he moved to Cape Town and started coaching at the old Harrington Street Boxing Gym before joining the coaching team at The Armoury in 2010. You are guaranteed to leave one of Richards’ classes with a smile on your face!

                </div>
              
                

        </div>
        
        
        
        
        
        
        </div> 



    </section>
    


</template>


<script>
export default {};
</script>


<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background:  linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,246,246,0.7) 45%, rgba(24,34,46,0.9) 100%), url(~/assets/images/bg2.jpg);
  background-size: cover;
 
}

.about-section-1 {
  height: 10%;
  width: 100%;
 
}

.about-section-2,
.about-section-3 {
  height: 45%;
  width: 100%;

  display: flex;
}

.about-section-3 {
  flex-direction: row-reverse;
}

.about-section-2-image-con,
.about-section-3-image-con {
  padding-right: 5em;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.about-section-3-image-con {
  
  justify-content: flex-start;
}

.about-section-2-image{

    background-image: radial-gradient(closest-side, transparent, transparent 80%, white), url('~/assets/images/kessie.jpg');
background-size: cover;
 background-repeat: no-repeat;
    background-position: center center;


}

.about-section-3-image{
background-image: radial-gradient(closest-side, transparent, transparent 80%, rgba(24,34,46,0.67)), url('~/assets/images/richard.jpg');
background-size: cover;
 background-repeat: no-repeat;
    background-position: center center;

}


.about-section-2-image,
.about-section-3-image {
  border-radius: 50%;
  height: 80%;
  width: 50%;
  
    background-clip: content-box;
 
}

.about-section-2-desc-con,
.about-section-3-desc-con {
  padding-right: 5em;
  width: 50%;
  display: flex;
  padding-top: 2.5em;
}

.about-section-3-desc-con {
  justify-content: flex-end;
}

.about-section-2-desc, 
.about-section-3-desc {

    width: 50%;
    color: rgba(24,34,46,1);
}

.about-section-3-desc{
color:white;

}


</style>
