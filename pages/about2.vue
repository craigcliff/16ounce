<template>

<section class="about-section">

   <div class ="about-section-us">
 <h2 class = "about-section-us-heading">About Us</h2>
 <p class = "about-section-us-desc">Have you ever slipped on a pair of boxing gloves to spar? Worked a punch bag or on pads with a boxing coach?  If you have, you'll know how challenging, exhausting and technical boxing is, but also how much fun it is, too!
</p><br>
<p class = "about-section-us-desc2">Based in Salt River, Cape Town, 16 Ounce Boxfit Gym was established by boxing fanatic, Zane Udemans, specialising in  boxing fitness and skills training in a friendly, non-threatening environment.</p>
<br>
<p class = "about-section-us-desc3">Everyone is welcome at 16 Ounce Boxfit Gym, especially complete beginners. Come to the club at any time and you'll find our friendly trainers who will assist and guide you.  Our aim is to bring the sweet science of boxing and boxing fitness training to the masses. </p>


       </div>
   
   <h2 class = "about-section-team-heading">Our Trainers</h2>
   <div class ="about-section-team">
    
    <div class = "about-section-2">
        <div class ="about-section-2-image-con">
            <div class="about-section-2-image" > </div>
             </div>
        <div class ="about-section-2-desc-con"> 
            <div class= "about-section-2-desc">
                <h2 class = "about-section-2-desc-heading">Kessie Mkali</h2>
                <p class = "about-section-2-desc-heading-sub">aka Kid Chocolate</p>
                <p class = "about-section-2-desc-heading-par"> Kessie is light and nimble, and will work you fast and hard. He is a 2 time Western Cape amateur boxing champion, and tremendous coach. Kessie was a coach at The Armoury before moving to Renzo Gracie. His fast paced technical workouts are enjoyed by youth, men, and women alike.


                </p>

                </div>

        </div>
         </div> 
    <div class = "about-section-3"> 
        
          <div class ="about-section-3-image-con">
            <div class="about-section-3-image"> </div>
             </div>
        <div class ="about-section-3-desc-con"> 
<div class= "about-section-2-desc">
<h2 class = "about-section-3-desc-heading">Richard Makore</h2>
                <p class = "about-section-3-desc-heading-sub">aka Mr Nice Guy</p>
                <p class = "about-section-3-desc-heading-par">Richard, a 3 time National, Senior Lightweight Champion and Gold medallist at Zimbabwe youth games, had his first competitive fight at age 11. After boxing for Thorn Hill Air Force, he moved to Cape Town and started coaching at the old Harrington Street Boxing Gym before joining the coaching team at The Armoury in 2010. You are guaranteed to leave one of Richards’ classes with a smile on your face!

                </p>


            
              
          </div>      

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


 .about-section-us{
       
    height:40%; 
      display: flex;
      width: 100%;
      flex-direction: column;


   }


.about-section-team-heading, .about-section-us-heading{
   
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .105em;
    line-height: 1;
    font-size: 1.2em;
    padding-bottom: 2em;
}

.about-section-us-heading{
align-items: flex-start;
padding-top: 1em;
font-size: 1.5em;

}

.about-section-us-desc,
.about-section-us-desc2,
.about-section-us-desc3{

    width: 100%;
    
    letter-spacing: .105em;
    
    padding-left: 4em;
    padding-right: 4em;
   
    color: #777;
	font-size: 16px;
	font-family: "Roboto", Arial;
	line-height: 1.25em;

}

.about-section-us-desc:first-letter {
font-size:2em;
text-transform: uppercase;
font-weight:bold;
color: red;
}

   
   .about-section-team{
      height: 60%; 
      display: flex;
      width: 100%;



   }





.about-section-2,
.about-section-3 {
  height: 100%;
  width: 100%;

  display: flex;
}

.about-section-2{


background: rgba(24,34,46,0.02);
}

.about-section-3{

background: rgba(246,246,246,0.02);
}



.about-section-2-image-con,
.about-section-3-image-con {

  width:60%;
  display: flex;
    justify-content: center;
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
  height:80%;
  width:70%;
  
    background-clip: content-box;
 
}

.about-section-2-desc-con,
.about-section-3-desc-con {
 
  width: 40%;
  display: flex;
  margin-right: 4em;
  
   
  

 
}



.about-section-2-desc, 
.about-section-3-desc {

    width: 100%;
    color: rgba(24,34,46,1);
}



.about-section-2-desc-heading, .about-section-3-desc-heading{
padding-bottom: .5em;
font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .105em;
    line-height: 1;
    font-size: 1.2em;


}

.about-section-2-desc-heading,.about-section-2-desc-heading-sub,.about-section-2-desc-heading-par{
color: rgb(21, 32, 44);
}

.about-section-3-desc-heading,.about-section-3-desc-heading-sub,.about-section-3-desc-heading-par{
color: white;

}

.about-section-2-desc-heading-sub,.about-section-3-desc-heading-sub
{
color: red;
letter-spacing: .105em;
    line-height: 1;
    

}





.about-section-2-desc-heading-sub, .about-section-3-desc-heading-sub{
    padding-bottom: .8em;
}

.about-section-2-desc-heading-par, .about-section-3-desc-heading-par{

    font-size: .9em;
    line-height: 1.5;
}


</style>
