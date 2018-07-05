
<template>

<main class="grid">
  <img src="/images/kessie.jpg" alt="Sample photo">
  <img src="/images/richard.jpg" alt="Sample photo">

   <img src="/images/img1.jpg" alt="Sample photo">
  <img src="/images/img2.jpg" alt="Sample photo">
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
.grid img {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  max-width: 100%;
}

</style>

