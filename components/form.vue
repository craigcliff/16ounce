<template>

<section class="contact-section">

        <form class="form">
            <div class="id">
                <div class="name">
                    <label for="name">Name</label>
                    <input id="name" type="text" name="name" v-model="name">
                </div>
                <div class="email">
                    <label for="email">Email</label>
                    <input id="email" type="text" name="email" v-model="email">
                </div>
                <div class="other">
                   
                    <input id="email" type="input" name="other" v-model="other" style="display: none" tabindex="-1" autocomplete="off">
                </div>
            </div>
            <div class="subject">
                <label for="subject">Subject</label>

                <input id="subject" type="text" name="subject">
            </div>
            <div class="content">
                <label id="contect" for="content">Content</label>

                <textarea name="content" id="" cols="30" rows="10" v-model="message"></textarea>

                <div class = 'btn-container' @click="submitForm"><btn :text="'Submit'" > </btn> </div>

            </div>
        </form>
    </section>
   
    
</template>

<script>
  const axios = require("axios");

import btn from '~/components/button.vue'
export default {
    components: {
        btn


    },
    data() {
    return {
      

      name: '',
      email: '',
      message: '',
      other: ''

     
    };
  },
  methods: {

    submitForm(){

      var postData = {
  
    "ses_address":this.email,
    "send_to":this.email,
        "subject": "Hello there",
        "name": this.name,
    "reply_to":this.email,
    "message": this.message
};

var test = {
  "body":
    "{\"ses_address\": \"amazonses@email.com\",\"send_to\": \"receiver@email.com\",\"subject\": \"Receiver Test subject\",\"name\": \"Sender Name\",\"reply_to\": \"sender@email.com\",\"message\": \"Sender message\",\"honeypot\": \"\"}"
}

  let axiosConfig = {
  
            headers: {
  
              "Content-Type": "application/json; charset=UTF-8",
  
              "Accept": "application/json; charset=utf-8"
  
              // "Access-Control-Allow-Origin": "*",
  
              // withCredentials: "true"
  
            }
  
          };

console.log(postData);



// axios.post(`https://umhwx0bo04.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer`,postData,axiosConfig)
//     .then(response => {console.log(response)})
//     .catch(e => {
//       this.errors.push(e)
//     })






    }


    }



  
    
}


</script>



<style scoped>


.contact-section {

  padding: 30px 0 50px 0;
  text-align: center;
}

.contact-section form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 880px;
  height: 575px;
  
  text-align: left;
  padding: 10px 0;
}
.contact-section form .subject,
.contact-section form .content {
  width: 80%;
  margin: 0 auto;
}
.contact-section form .subject label,
.contact-section form .content label {
  display: block;
  padding: 0;
  margin: 0;
  font-family: 'Varela Round';
}
.contact-section form .id {
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 80%;
  margin: 0 auto;
}
.contact-section form .id .name,
.contact-section form .id .email {
  display: inline-block;
  width: 45%;
  
}

.contact-section form .email {
  margin-left: auto;
  
}


.contact-section form .id .name label,
.contact-section form .id .email label {
  display: block;
  padding: 0;
  margin: 0;
  font-family: 'Varela Round';
}
.contact-section form .id .name input[name="email"],
.contact-section form .id .name input[name="name"],
.contact-section form .id .email input[name="email"],
.contact-section form .id .email input[name="name"] {
  width: 100%;
  height: 40px;
  
}
.contact-section form .subject {
  height: 62px;
  margin-bottom:10px;
}
.contact-section form .subject input[name="subject"] {
  width: 100%;
  height: 40px;
}
.contact-section form .content textarea {
  width: 100%;
  resize: none;
}
 /* .contact-section form .content button {
  margin: 0;
  float: right;
  background: #e74c3c;
  padding: 8px 77px;
  border: 1px solid #e74c3c;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  font-family: 'Varela Round';
  transition: all .3;
} 
/* .contact-section form .content button:hover {
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.7);
} */ 

.btn-container{

    margin-top: 20px;
    margin-left: -15px;
}

.name, .email, .subject, .content{
     letter-spacing: .105em;
    line-height: 1.8;
    font-size: 1.1em;
   
    color: #fff;
    font-weight: 500;
    

}






input[type="text"], textarea {

  background-color :rgba(177, 182, 189, 0.6);

}




</style>

