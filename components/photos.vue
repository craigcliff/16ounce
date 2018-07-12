
<template>

<div class="container">
  <div class = "imgs">
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '250px',backgroundSize: 'cover' }"
    ></div></div>
  <no-ssr>  <gallery class="ïmgs" :images="images" :index="index" @close="index = null"></gallery></no-ssr>
    
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
          'images/gallery/img1.jpg',
          'images/gallery/img2.jpg',
          'images/gallery/img3.jpg',
          'images/gallery/img4.jpg',
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff'
          
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

