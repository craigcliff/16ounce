<template>
    <button class = "button-cta">{{text}}</button>
</template>


<script>
export default {

    props: ['text']
    
}
</script>



<style scoped>

.button-cta {
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

.button-cta:hover {
  background: red;
    color: #fff;
}


</style>

