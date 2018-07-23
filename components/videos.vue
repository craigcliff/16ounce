
<template>

<div class="container">
  <div class = "imgs">
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image.poster + ')', width: '300px', height: '250px',backgroundSize: 'cover' }"
    ></div></div>
  <no-ssr>  <gallery class="ïmgs" :images="images" :index="index" :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}" @close="index = null"></gallery></no-ssr>
    
  </div>
    
</template>

<script>
// import LightBox from 'vue-image-lightbox'
import images from '../dummy'
import siteLoading from '../siteloading.gif'
//  import VueGallery from 'vue-gallery';
// VueGallery = require('vue-gallery')

 let VueGallery;
 if (process.browser) {
   VueGallery = require('vue-gallery')
 }

export default {
  
   components: {
    
    'gallery': VueGallery
  },

  

  data () {
    return {

        images: [
        {
          title: 'Boxing Training 1',
          href: 'https://www.youtube.com/watch?v=3IVyUTxVLl8',
          type: 'text/html',
           youtube: '3IVyUTxVLl8',
            poster: 'https://img.youtube.com/vi/3IVyUTxVLl8/hqdefault.jpg'
        },
         
         {
          title: 'Boxing Training 2',
          href: 'https://www.youtube.com/watch?v=hvPIvK_2bdQ',
          type: 'text/html',
           youtube: 'hvPIvK_2bdQ',
            poster: 'https://img.youtube.com/vi/hvPIvK_2bdQ/hqdefault.jpg'
        },
         {
          title: 'Mitt Work 1',
          href: 'https://www.youtube.com/watch?v=IIL5LQq2fTU',
          type: 'text/html',
           youtube: 'IIL5LQq2fTU',
            poster: 'https://img.youtube.com/vi/IIL5LQq2fTU/hqdefault.jpg'
        },
         {
          title: 'Mitt Work 2',
          href: 'https://www.youtube.com/watch?v=RDGR88vvTho',
          type: 'text/html',
           youtube: 'RDGR88vvTho',
            poster: 'https://img.youtube.com/vi/RDGR88vvTho/hqdefault.jpg'
        },
         {
          title: 'Mitt Work 3',
          href: 'https://www.youtube.com/watch?v=BcxnHCL5DyE',
          type: 'text/html',
           youtube: 'BcxnHCL5DyE',
            poster: 'https://img.youtube.com/vi/BcxnHCL5DyE/hqdefault.jpg'
        }
      ],
        index: null
      
    }
  },
  methods: {

   
   
    }
  }




</script>



<style scoped>

.container{

max-width: 100%;

height: auto;
padding-bottom: 40px;




}

.imgs { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: center; 
  padding-left:10px; 
  cursor: pointer;
   ; 
  /* align-items: stretch;
  padding: 30px; */
  }
.imgs img {

display:block; width:100%; height:250px
  /* 
  max-width: 100%; */
}



@media (max-width: 768px)

{
.container{

  display: flex;
 
    justify-content: center;


}

}

</style>

