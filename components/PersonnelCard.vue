<template>
   <div class = "personnel-container">
        <div class ="personnel-image-con">
            <div class="personnel-image" :style="style" > </div>
             </div>
        <div class ="personnel-desc-con"> 
            <div class= "personnel-desc">
                <h2 class = "personnel-desc-heading">{{name}}</h2>
                <p class = "personnel-desc-heading-sub">{{alias}}</p>
                <p class = "personnel-desc-heading-par">{{desc}}


                </p>

                </div>

        </div>
         </div> 
</template>

<script>
export default {
  
props:[
        'name',
        'alias',
        'desc',
        'backgroundImage'


    ],

    computed: {
     style() {
       return 'background-image:radial-gradient( closest-side, transparent, transparent 80%, white), url(' + this.backgroundImage + ')';
     },



}
}
</script>



<style scoped>


  .personnel-container {
  
    height: auto;
    width: 50vw;

  
    display: flex;
   
   
    /* background: rgba(24, 34, 46, 0.02); */
    
  }
  
  
  
 
  
  
  
  .personnel-image-con {
  
    width: 20vw;
    
  
    display: flex;
  
    justify-content: center;
  
  }
  
  
  
  .personnel-image {

/*   
    background-image: radial-gradient( closest-side, transparent, transparent 80%, white) */
  
    background-size: cover;
  
    background-repeat: no-repeat;
  
    background-position: center center;
  
  }
  
  
  
  .personnel-desc-con {
  
    width: 30vw;
  /* height: auto; */
    display: flex;
  
    /* margin-right: 4em; */
  
  }
  
  .personnel-image {
  border-radius: 50%;
  height:300px;
  width:280px;
  
    background-clip: content-box;
 
}
  
  .personnel-desc {
    padding-left:30px;
    max-width: 50%;
  
    color: rgba(24, 34, 46, 1);
  
  }
  
  
  
  .personnel-desc-heading {
  
    padding-bottom: 0.5em;
  
    font-weight: 500;
  
    text-transform: uppercase;
  
    letter-spacing: 0.105em;
  
    line-height: 1;
  
    font-size: 1.2em;
  
  }
  
  
  
  .personnel-desc-heading,.personnel-desc-heading-sub,.personnel-desc-heading-par {
  
    color: rgb(21, 32, 44);
  
  }
  
  
  
  .personnel-desc-heading-sub {
  
    color: red;
  
    letter-spacing: 0.105em;
  
    line-height: 1;
  
  }
  
  
  
  .personnel-desc-heading-sub {
  
    padding-bottom: 0.8em;
  
  }
  
  
  
  .personnel-desc-heading-par {
  
    font-size: 0.9em;
  
    line-height: 1.5;
  
  }


  @media (max-width: 1150px){

    .personnel-container{
      padding-bottom: 40px;

    }

.personnel-desc {
    padding-left:30px;
    max-width: 100%;
  
  

}


}


@media (max-width: 880px){

  .personnel-container {
  
    height: auto;
    width: 100vw;

  
    display: flex;
    padding: 0 20px 0 20px ;
    padding-bottom: 40px;
   
   
    /* background: rgba(24, 34, 46, 0.02); */
    
  }

    .personnel-image-con{

     width: 40%;

   }

 .personnel-desc-con {
  
    width: 60%;
  /* height: auto; */
    display: flex;
  
    /* margin-right: 4em; */
  
  }

   .personnel-image-con{

     width: 40%;

   }

   .personnel-desc {
    padding-left:30px;
    width: 100%;
  
    color: rgba(24, 34, 46, 1);
  
  }

    .personnel-image {
  border-radius: 50%;
  height:200px;
  width:250px;
  
    background-clip: content-box;
 
}

 

}
  
</style>




