<template>
    
<div class ="pricing-item">
    <h2 class = "pricing-header">{{type}}</h2>


         <div>
             <slot name ="pricing-price" >

                 </slot>
                 </div>


         

         <div class = "pricing-list">
             
        <ul>
            <slot name = "list-items"> </slot>
           

            </ul>

        </div>
        
<div class = "pricing-btn-con">
   
        <button class = "pricing-btn">Find Out More</button>

        </div>

    </div>


</template>

<script>
import Tickbox from "~/components/Tickbox.vue";

export default {
  components: {
    Tickbox
  },

  props: ["myText", "text", "type", "per", "contract", "contractArr"],
  data() {
    return {
      // internalMyText: this.myText,
      // internalText: this.text,
      // internalContract: this.contract,
      // internalContractArr:this.contractArr,

      //  myText: [699,599],

      index: 0
    };
  },

  mounted: function() {
    //  this.startInterval();
  },

  methods: {
    //  startInterval: function () {
    //                    setInterval(() => {
    //                         // this.myText = this.myText + 1
    //                         // for(var i = 0 ; ; i++){
    //                         //             this.text = this.myText[i];
    //                         // }
    //                         let numText= this.internalMyText.length;
    //                         this.internalText = this.internalMyText[this.index];
    //                         this.internalContract = this.internalContractArr[this.index];
    //                         this.index = (this.index + 1) % numText;
    //                    }, 5000);
    // }
  }
};
</script>


<style scoped>
.pricing-item {
  /* position: relative; */

  display: -webkit-flex;
  display: flex;
  flex-direction: column;

  min-width: 350px;

  margin: 1em;
  color: #fff;
  cursor: default;
  font-family: "Myriad Pro", Arial, sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.4);

  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;

  transition: border-color 0.3s, background 0.3s;
}

.pricing-item:hover {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.9);
}
.pricing-header {
  color: #fff;
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.pricing-header::after {
  content: "";
  position: absolute;
  width: 25%;
  height: 1px;
  background: #fff;
  left: 40%;
  bottom: 0;
}



.pricing-list {
  color: #fff;
  width: 100%;
  height: 20%;
  display: flex;

  justify-content: center;
  margin-bottom: 30px;
}

ul {
  font-size: 1em;
  margin: 0 2em;
  letter-spacing: 0;
  width: 100%;
}
li {
  list-style: none;
  font-size: 0.75em;
  display: flex;

  padding-top: 10px;
  width: 100%;
}

.list-text {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-left: 10px;
}

.pricing-btn-con {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.pricing-btn {
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 1em 1em;
  padding: 1em 3em;
  color: #18222e;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  cursor: pointer;
}

.pricing-btn:hover {
  background: rgba(255, 255, 255, 1);
}

.pricing-month {
  font-size: 0.25em;
  letter-spacing: 0px;
  font-weight: 500;
}

.pricing-div {
  font-size: 40px;
}

.pricing-text-con {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}

.pricing-text1 {
  font-size: 0.23em;
  margin-top: -5px;
  letter-spacing: 1px;
}

.pricing-div2 {
  width: 55px;
}

@media (max-width: 500px) {
  .pricing-item {
    /* position: relative; */

    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    height: 400px;
    min-width: 280px;
  }
}
</style>



