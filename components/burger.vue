<template>


<div class="burg" ></div>
    
</template>


<script>
export default {


 data() {
    return {
      

    //   activeBurg: false

     
    };
  },

//   methods:{


//        toggleBurger: function() {
//       this.activeBurg = !this.activeBurg;

    

//       console.log("Burger");
//     }


//   }

    
}
</script>



<style scoped>



.burg {
 
  display: block;

  height: 5px;

  width: 30px;

  background: black;

  position: fixed;

  top: 35px;

  right: 25px;

  -moz-transition: 0.2s;

  -o-transition: 0.2s;

  -webkit-transition: 0.2s;

  transition: 0.2s;
}

.burg:before {
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

.burg:after {
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

.activeBurg {
  background: transparent;
}

.activeBurg:before {
  -webkit-transform: rotate(45deg);

  top: 0;
}

.activeBurg:after {
  -webkit-transform: rotate(-45deg);

  top: 0;
}





</style>
