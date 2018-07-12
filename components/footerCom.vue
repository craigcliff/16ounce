<template>
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



<!-- 


</div>
<div class="bottom">  -->
</div>
</template>

<script>
import logo from "@/components/logo2";
import burger from "@/components/navigation/burger";

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


.map-right {
  min-width: 100%;
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

.logo {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 60px;
}

.svgLogo {
  width: 200px;
}

.map-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  color: #fff;
  
  text-decoration: none;
  letter-spacing: 0.105em;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.6;
    padding-top: 40px;
}

.map-directions {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}



@media (max-width: 768px) {

    .svgLogo {
  width: 100px;
}

.logo {


  display: flex;
 

  padding-top: 0px;
}

.map-address {
 
    padding-top: 10px;
}

.map-directions {
  padding-bottom: 10px;
  padding-top: 0px;
 
}

    .map-right{



    }
.map-address, a,.copyright, .map-directions  {



}

}
</style>
