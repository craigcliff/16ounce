
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
        {
          title: 'A YouYube video',
          href: 'https://res.cloudinary.com/dggxkgtfg/video/upload/v1531291880/VID-20180711-WA0002.mp4',
          type: 'text/html'
        }
        // {
        //   title: 'A YouYube video 2',
        //   href: 'https://www.youtube.com/watch?v=s5iUsaPPtnk',
        //   type: 'text/html',
        //   youtube: 's5iUsaPPtnk',
        //   poster: 'https://img.youtube.com/vi/s5iUsaPPtnk/maxresdefault.jpg'
        // },
        // {
        //   title: 'Image',
        //   href: 'https://dummyimage.com/1600/ffffff/000000',
        //   type: 'image/jpeg',
        //   poster: 'https://dummyimage.com/350/ffffff/000000'
      	// }
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

