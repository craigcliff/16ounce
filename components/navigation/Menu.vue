<template>
	<div class="bg">
		  
		<div class="fixed" :class="{'fixed-after': (this.$store.state.navState == true)}">
	
			<header class="header" :class="{'class1': class1}">
	
				<div class="logo">
	
					<logo :class="{'changeSvg': changeSvg,'changeSvgBack': activeBurg }" />
	
				</div>
	
				<div class="burgWrapper">
        
        

         <burger />
		

				</div>
	
				<ul class="main-nav" :class="{'toggleNav': (this.$store.state.navState == true) }" @click="toggleBurger" >
	
					<li  ><a href="#"  :class="{'toggleNav': (this.$store.state.navState == true), 'main-nav-after': class1  }" v-scroll-to="'.header'">Home</a></li>
	
					<li><a href="#" :class="{'toggleNav': (this.$store.state.navState == true), 'main-nav-after': class1 }" v-scroll-to="'.container-about'">About Us</a></li>
	
					<li><a href="#" :class="{'toggleNav': (this.$store.state.navState == true), 'main-nav-after': class1 }" v-scroll-to="'.classes-container'">Classes</a></li>
	<li><a href="#" :class="{'toggleNav': (this.$store.state.navState == true), 'main-nav-after': class1 }" v-scroll-to="'.gallery-container'">Gallery</a></li>
        

					<li><a href="#" :class="{'toggleNav': (this.$store.state.navState == true), 'main-nav-after': class1 }" v-scroll-to="'.contact-container'">Contact</a></li>
	
				</ul>
	
	
	
			</header>
	
		</div>
	
	<div class ="cta">
	<cta/>
	</div>
	
	</div>
</template>


<script>
import logo from "@/components/logo2";
import cta from "@/components/cta";
import burger from "@/components/navigation/burger";

export default {
  components: {
    logo,
    cta,
    burger
  },

  data() {
    return {
      changeSvg: false,

      class1: false,

      scrolled: false,

      activeBurg: false,

      toggleNav: false,

      fixedAfter: false
    };
  },

  methods: {
    handleScroll: function(event) {
      if (event.target.scrollingElement.scrollTop > 120) {
        this.class1 = true;

        this.changeSvg = true;
      } else {
        this.class1 = false;

        this.changeSvg = false;
      }
    },

    // toggleBurger: function() {
    //   // this.$refs.burgers.toggleBurger()
    //   // this.activeBurg = !this.activeBurg;

    //   this.toggleNav = !this.toggleNav;

    //   this.fixedAfter = !this.fixedAfter;

    //   console.log("Burger");
    // },


// receives bool state change from parent via emit.

    toggleBurger: function(){

      this.$store.commit("toggleActive");
       this.toggleNav = !this.toggleNav;

      this.fixedAfter = !this.fixedAfter;
       console.log("hello " + this.$store.state.navState)
      


    }
  },

  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.svgLogo {
  width: 120px;

  transition: all 0.7s;
}

.changeSvg {
  width: 60px;
  
  

  /* fill: white; */

  /* fill-opacity: 0.5; */
}

.svgLogo > .svgText{
opacity: 0;

}



.bg {

  /* background:  linear-gradient(to bottom, rgba(24,34,46,9)  0%, rgba(246,246,246,0.3) 55%, rgba(24,34,46,0.9)  100%), url(~/assets/bg-large.jpg); */

	  background:  linear-gradient(to bottom, rgba(24,34,46,9)  0%, rgba(246,246,246,0.3) 55%, rgba(24,34,46,0.9)  100%), url(~/images/bg/bg3.jpg);
    
		/* background: linear-gradient(to top right, #020202, transparent), url("~/assets/bg4.jpg") ; */
		background-size: cover;
 background-repeat: no-repeat;
    background-position: left;
	
		
	
		height: 100vh;
		width: 100%;
	
	}

  

.menu {
  z-index: 1000;

  position: absolute;

  top: 0px;

  right: 0;

  width: 0%;

  height: 100%;

  background: #000;

  transition: 0.17s;
}

ul {
  margin: 0;

  padding: 0;

  list-style: none;
}

h2,
h3,
a {
  color: #34495e;
}

a {
  text-decoration: none;
}

.logo {
  margin: 0;

  height: 90px;
  padding-top: 6px;
  margin-right: 50px;
}

.logo2 {
  width: 200px;
}

.main-nav {
  margin-top: 5px;

  margin-left: 50px;

  display: none;
}

.logo a,
.main-nav a {
  padding: 15px 20px;

  text-transform: uppercase;

  text-align: center;
}

 a {
  color: white;

  font-size: 1em;

  

      font-weight: 400;
    line-height: 1.6;
}

 a:hover {
  color: red;
}

.main-nav-after{

  color: black;
}

.header {
  /* padding-top: 0.5em;

  padding-bottom: 0.5em; */

  

  transition: all 1.3s;
}

.fixed {
  position: fixed;
   z-index:1000;

  top: 0;

  left: 0;

  margin: auto;

  width: 100%;
  

}

 .cta{
 display: flex;
 align-items: center;
 justify-content: center;
 height: 100%;
 width: 100vw;
  }


 


/* ================================= 
	
	  Media Queries
	
	==================================== */
@media (max-width: 768px) {


  .bg {

  /* background:  linear-gradient(to bottom, rgba(24,34,46,9)  0%, rgba(246,246,246,0.3) 55%, rgba(24,34,46,0.9)  100%); */
	
		/* background: linear-gradient(to top right, #020202, transparent), url("~/assets/bg4.jpg") ; */
		
    background:  linear-gradient(to bottom, rgba(24,34,46,9)  0%, rgba(246,246,246,0.3) 55%, rgba(24,34,46,0.9)  100%), url(~/images/bg/bg3-small.jpg);
    
		/* background: linear-gradient(to top right, #020202, transparent), url("~/assets/bg4.jpg") ; */
background-repeat: no-repeat;
background-position: center center;
background-attachment: fixed;
background-size: cover;

	
	}

  .header{


  }

  .logo{

padding-top: 5px;


  }

   .burgWrapper {
    position: fixed;

  top: 30px;

  right: 25px;


  }

 .class1 {
    background-color: rgba(255, 255, 255);
 /* box-shadow: 0px 15px 10px -15px #111;  */
    height: 60px;
    z-index: 100000000;
  }

  .svgLogo {
    width: 100px;
    padding-left: 20px;
  }

  .changeSvg {
  width: 60px;
  
  

  /* fill: white; */

  /* fill-opacity: 0.5; */
}

.changeSvgBack{

  width: 100px;
  

  /* fill: white; */

  /* fill-opacity: 0.5; */
}

  .toggleNav {
  display: block;

  color: black;
}

.main-nav {
  margin-top: 40px;
  margin-left: 0px;


}


li{



  width: 100%;
  position: relative;
 border-bottom: 1px solid red;
}

a{

font-size: 30px;
font-weight: 600;

}

/* li:before {
 content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border-bottom: 4px solid red;
} */



}




@media (max-width: 768px) {
  .fixed-after {
    height: 100vh;
    background-color: white;
    

  
  }
}

@media (min-width: 769px) {

  


  .burgWrapper {
    padding: 20px 0;

    display: none;
  }

  .main-nav a {
    display: block;
  }

  .header,
  .main-nav {
    display: flex;
    align-items: center;
  }

  .header {
    display: flex;

   flex-direction: row-reverse;

    justify-content: space-between;
  }

  

  .class1 {
    background-color: rgba(255, 255, 255);
 box-shadow: 0px 15px 10px -15px #111; 
    height: 85px;
    z-index: 100000000;
  }

}
</style>



