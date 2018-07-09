<template>


	<div class="burger" :class="{'activeBurger': burgerBool}" @click="toggleBurger"></div>
    
</template>


<script>
export default {


 data() {
    return {
      

      burgerBool: false

     
    };
  },

  methods:{


       toggleBurger: function() {

         this.burgerBool =! this.burgerBool;
     
     this.$emit("changeBool", this.burgerBool )

    

      console.log(this.burgerBool);
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
