<template>


	<div class="burger" :class="{'activeBurger': (this.$store.state.navState == true)}" @click="toggleBurger"></div>
    
</template>


<script>

import { mapState } from "vuex";
export default {


 data() {
    return {
      

      // burgerBool: false

     
    };
  },
  

  // computed: {
  //   navState() {
  //     console.log(this.$store.state.navState);
  //     return this.$store.state.navState;
  //   }
  // },

  methods:{


       toggleBurger: function() {

        //  this.burgerBool =! this.burgerBool;
     
    //  this.$emit("changeBool", this.burgerBool )

    //  this.$store.commit("toggleActive");

    //   console.log(this.burgerBool);

    // this.$store.commit("navStateFalse");
    this.$store.commit("toggleActive");
    console.log(this.$store.state.navState)
    },

     setNavToFalse: function() {
      this.$store.commit("navStateFalse");
      // this.moveBackground();
      // this.tl.play();
      console.log("hello " + this.$store.state.navState)
      
    },
    setNavToTrue: function() {
      this.$store.commit("navStateTrue");
      
      // this.tl.stop();
   
    }

    


  }

    
}
</script>



<style scoped>



.burger {
 
  display: block;

  height: 5px;

  width: 30px;

  background: black;

  

  -moz-transition: 0.2s;

  -o-transition: 0.2s;

  -webkit-transition: 0.2s;

  transition: 0.2s;
}

.burger:before {
  content: "";

  position: absolute;

  top: -10px;

  width: 30px;

  height: 5px;

  background: #000;

  -moz-transition: 0.2s;

  -o-transition: 0.2s;

  -webkit-transition: 0.2s;

  transition: 0.2s;
}

.burger:after {
  content: "";

  position: absolute;

  top: 10px;

  width: 30px;

  height: 5px;

  background: #000;

  -moz-transition: 0.2s;

  -o-transition: 0.2s;

  -webkit-transition: 0.2s;

  transition: 0.2s;
}

.activeBurger {
  background: transparent;
}

.activeBurger:before {
  -webkit-transform: rotate(45deg);

  top: 0;
}

.activeBurger:after {
  -webkit-transform: rotate(-45deg);

  top: 0;
}





</style>
