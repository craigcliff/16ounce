<template>
<section class = "gallery-container">
  <h2 class = "gallery-section-heading">Gallery</h2>
  <div class = "gallery-options-container">
    <ul>  
      <li @click="toggle=true" >Photos</li>
      <li @click="toggle=false">Videos</li>
        </ul>
</div>

 <div v-if="toggle==true">
  <photos/>
   </div>
<div v-else>

<videos/>
  </div> 




</section>
</template>

<script>
  import photos from "@/components/photos";
    import videos from "@/components/videos";
  
  export default {

  

    data: function () {
      return {
        toggle: true
        
        
      }
    },

    components: {
     photos,
     videos
    },
  }
</script> 


<style scoped>

.gallery-section-heading{
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

ul{
display: flex;
list-style-type: none;

}

li{
  margin-right: 15px;
  cursor: pointer;
  font-size: 1.5em;
}



</style>
