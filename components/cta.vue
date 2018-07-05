<template>


<main>

    <div class="container">
      <!-- <h3>Nulla condimentum convallis.</h3> -->
      <p class="subtitle">{{sub}}</p>
      <a class="btn call-to-action" href="#"><span class="glyphicon glyphicon-play-circle"></span>Click me. Now.</a>
  
    </div> <!-- /.container inside .jumbotron -->
 
  <section class="content">
  </section> <!-- /.content -->
  
</main> <!-- /main -->
    
</template>


<script>
// import {
//     TweenMax
//   } from "gsap";
import { TweenMax, TimelineMax, Linear } from 'gsap'
  // import TimelineMax from "gsap/TimelineMax";
  // import { TweenMax } from "gsap";

export default {

    data() {
    return {
      tl: new TimelineMax({
        
        // onComplete: this.animateCta2()
      }),

      tl2: new TimelineMax({
        
      }),

     tl3: new TimelineMax({
       repeat: -1, repeatDelay: 4,
        
      }),
      
      sub: 'testing',
       arraySub : ['testing1', 'testing2', 'testing3']
      
      

    }
    },

    mounted(){

        
this.animateCta3();

    },

methods: {

  // beforeEnter(el) {
  //     TweenMax.set(el, {
  //       repeat: -1, repeatDelay: 4
  //     });
  // },
  //   enter(el, done) {
   
  //         tl = new TimelineMax({
  //           repeat: -1, repeatDelay: 4,
  //         });
      
  //     for (var i = 0; i < arraySub.length; i++) {
  //       console.log(arraySub[i]);
  //     }
  //   },



    animateCta: function() {

      // var tl= new TimelineMax({  })
     
    this.sub="test1" 
      
    
this.tl.staggerFrom('p', 0.5, {opacity: 0, x:200, delay:0.6}, 0.2);
// this.tl.staggerFrom('.call-to-action', 0.5, {opacity: 0, x:200, delay:0.6}, 0.2);

return this.tl;
},

animateCta2: function(){

 this.sub="test2" 

    
// this.tl2.staggerFrom('p', 0.5, {opacity: 0, x:200, delay:0.6}, 0.2);
this.tl2.staggerFrom('.call-to-action', 0.5, {opacity: 0, x:200, delay:0.6}, 0.2);
return this.tl2;



},

animateCta3: function(){

  // this.tl3.add(this.animateCta())
  
  // .add(this.animateCta2(),3);

}

      



// // this.tl.add(this.tl2)

      
//     },

//     animateCta2: function() {

      

// this.sub = "testing2"
//       // this.tl2.staggerFrom('h3', 0.5, {opacity: 0, x:200, delay:0.5}, 0.2);
      
// this.tl2.staggerFrom('p', 0.5, {opacity: 0, x:200, delay:0.6}, 0.2);
// this.tl2.staggerFrom('.call-to-action', 0.5, {opacity: 0, x:200, delay:0.6}, 0.2);

      
//     }



}
    
}
</script>


<style scoped>

h1 {
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem !important;

}

p.subtitle {
  font-family: "Gentium Basic", serif;
  font-size: 2.2rem;
  max-width: 80%;
  border-bottom: 1px solid white;
  padding-bottom: 4rem;
}

/*===== /TYPOGRAPHY =====*/
nav.navbar {
  background: rgba(0, 0, 0, 0);
  border: none;
  max-width: 60% !important;
  margin: 0 auto;
}

nav.navbar .container {
  max-width: 85%;
}

nav .navbar-brand {
  font-weight: 700;
}

nav a {
  color: white !important;
  font-weight: 300;
  font-size: 1.4rem;
}

nav ul li a {
  text-transform: uppercase;
  letter-spacing: .2rem;
  padding: 0 !important;
  margin-right: 3rem;
  margin-top: 1.5rem;
}

.glyphicon {
  margin-right: 1rem;
}



.container {
  max-width:80%;
}

.btn.call-to-action {
  border: .3rem solid white;
  font-size: 1rem;
  margin-top: 2rem;
  margin-right: 1rem;
  padding: 1rem 4rem;
  background: rgba(0, 0, 0, 0);
  transition: all 0.2s ease;
}

.btn.call-to-action:hover {
  background: #2CC4FC;
}

.btn.call-to-action:active {
  border-color: white !important;
}

section.content {
  height: 20rem;
}

</style>


