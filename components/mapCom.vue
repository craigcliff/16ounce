<template>

<div id="map-wrap" class="map"> 
 <no-ssr>
   <l-map :zoom=14 :center="[-33.9319799,18.4569253]">
     <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
     <l-marker :lat-lng="[-33.9319799,18.4569253]"></l-marker>
   </l-map>
 </no-ssr>
</div>
    
</template>



<script>
import logo from "@/components/Logo";
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

.map {
  width: 100%;
  height: 100%;
}


</style>
