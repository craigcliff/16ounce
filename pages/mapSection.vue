<template>

<section class= " map-container">



  
    <div class="map-section">

    <div class = "map-left">

<div id="map-wrap" class="map"> 
 <no-ssr>
   <l-map :zoom=14 :center="[-33.9319799,18.4569253]">
     <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
     <l-marker :lat-lng="[-33.9319799,18.4569253]"></l-marker>
   </l-map>
 </no-ssr>
</div>
</div>

<div class ="map-right">


<div class = "top">
    <div class = "logo">
        
    <logo/>
    </div>
    <div class="map-address">
    <h5> Unit A5 Salt Orchard, Shannon Rd, Salt River</h5>
<h5 class>Cape Town, Western Cape</h5>
</div>
<div class="map-directions"><a href="https://wego.here.com/directions/mix//16-Ounce-Boxfit-Gym,-Unit-A5-Salt-Orchard,-Shannon-Rd,-Salt-River,,-Cape-Town:e-eyJuYW1lIjoiMTYgT3VuY2UgQm94Zml0IEd5bSIsImFkZHJlc3MiOiJVbml0IEE1IFNhbHQgT3JjaGFyZCwgU2hhbm5vbiBSZCwgU2FsdCBSaXZlciwsIENhcGUgVG93biwgV2VzdGVybiBDYXBlIiwibGF0aXR1ZGUiOi0zMy45MzIsImxvbmdpdHVkZSI6MTguNDU5MTEsInByb3ZpZGVyTmFtZSI6ImZhY2Vib29rIiwicHJvdmlkZXJJZCI6MjA5NTg5NzQ5ODIxNjA1fQ==?map=-33.932,18.45911,15,normal&fb_locale=en_GB">Get Directions</a></div>
     
     

</div>

<div class = "bottom">
    <div class="copyright" ><span>16Ounce Boxfit Gym.</span>© <span >2018</span> </div>


</div>

<!-- 


</div>
<div class="bottom">  -->
</div>

</div>
     
    </section>
    
</template>

<script>
import logo from "@/components/Logo";
import burger from "@/components/burger";

export default {
  components: {
    logo,
    burger
  },

  data: function() {
    return {};
  }
};
</script>



<style scoped>
.map-container {
  display: flex;

  height: 75%;
  width: 100vw;


  /* background:  linear-gradient(to bottom, rgba(145, 141, 141, 0.7) 10%, rgba(255,255,255,1) 45%, rgba(24,34,46,0.6) 80%, rgba(24,34,46,0.9) 100%); */
  background: rgba(24, 34, 46, 0.9);
}

.map-section {
  display: flex;

  height: 100%;
  width: 100vw;
  flex-wrap: wrap;

}

.map-left {
  min-width: 50%;
  height: 100%;
}

.map-right {
  min-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.105em;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.6;
    
}

.top {
  height: 90%;
  display: flex;
  flex-direction: column;

}

.bottom {
  height: 10%;


  display: flex;
  flex-direction: column;

}

.map {
  width: 100%;
  height: 100%;
}

.logo {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 60px;
  padding-top: 60px;
}

.svgLogo {
  width: 200px;
}

.map-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: -50px;
  color: white;
  
  text-decoration: none;
  letter-spacing: 0.105em;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.6;
}

.map-directions {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

a {
  color: white;
  text-decoration: none;
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
   color: white;

}
</style>




