<template>
    <button class = "button-cta" :style="{ backgroundColor: bgColor, border: bder }" v-scroll-to='scrollto'>{{text}}</button>
</template>


<script>
export default {

    props: ['text','bgColor', 'bder', 'scrollto'],

    data(){
        return {

            // bgColor: 'blue'

        }



    }
    
}
</script>



<style scoped>

.button-cta {
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0.7em 0.7em;
  padding: 1em 2em;
  /* color: #18222e; */
  /* background: rgba(255, 255, 255, 0.7); */
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  -webkit-transition: background 0.3s;
  transition: background 0.3s;
  cursor: pointer;
  color: white;
}

.button-cta:hover {
  background: red;
    color: #fff;
}

@media (max-width: 768px) {

    .button-cta{

         margin: auto 0.7em 0.7em;
  padding: 0.5em 1em;
    }

}


</style>

