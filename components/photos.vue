
<template>

<div class="container">
  <div class = "imgs">
    <div
    v-lazy:background-image.container="image"
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
// import siteLoading from '../siteloading.gif'
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
          'images/gallery/img5.jpg',
          'images/gallery/img6.jpg',
          'images/gallery/img7.jpg',
          'images/gallery/img8.jpg',
          'images/gallery/img9.jpg',
          'images/gallery/img10.jpg',
           'images/gallery/img11.jpg'
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355053/16ounce/gallery/img1.jpg',
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355051/16ounce/gallery/img2.jpg',
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355057/16ounce/gallery/img5.jpg',
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355062/16ounce/gallery/img6.jpg',
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355054/16ounce/gallery/img7.jpg',
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355055/16ounce/gallery/img8.jpg',
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355052/16ounce/gallery/img9.jpg',
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355057/16ounce/gallery/img10.jpg',
          // 'https://res.cloudinary.com/dggxkgtfg/image/upload/v1532355059/16ounce/gallery/img11.jpg'
        ],
        index: null,
        filteredImages:[



        ]
      
    }
  },

  beforeMount() {
  this.getFilteredImages();
},
  methods: {

    getFilteredImages(){
      for (var i = 0; i < 5; i++){

          this.filteredImages.push(this.images[i]);

          


      }
console.log(this.filteredImages);


    }

   
   
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

