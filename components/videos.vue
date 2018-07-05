<template>

<main class="grid">
  <iframe src="http://www.facebook.com/video/embed?video_id=217485852365328" width="300" height="300" frameborder="0" allowfullscreen ></iframe>
    <iframe src="http://www.facebook.com/video/embed?video_id=217484275698819" width="300" height="300" frameborder="0" allowfullscreen ></iframe>
    <iframe src="http://www.facebook.com/video/embed?video_id=210726923041221" width="300" height="300" frameborder="0" allowfullscreen ></iframe>
    

</main>
    
</template>




<style scoped>
.grid { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  padding: 30px;
  }
.grid iframe {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  max-width: 100%;
}



</style>
