<template>
    <div class="SignupView">
        <h1> Join Us!!</h1>
        <p >--------Or sign in with email--------</p>
        <form class="signup">
            <input type="text" v-model="name" placeholder="  Name">
            <input type="date" v-model=dateofBirth placeholder="  Date of Birth">
            <input type="tel" v-model="cnic" placeholder="  National ID" pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}">
            <input type="tel"  v-model="number" placeholder="  Phone Number">
            <input type="text" v-model="email" placeholder="  Email">
            <input type="password" v-model="password" placeholder="  Password"> 
           
           
                       
            <router-link to="signupsteptwo"><button>Continue</button></router-link> 
            <p>Already Have an account? 
              <router-link to="loginView">Login</router-link>  
            </p>
    
        </form>
    </div>
    <div class="Picture">
        <img src="../assets/login picture.jpg">
        <div class="text-block">
            <h2>Discover and Connect</h2>
            <p>Now for the fun part! Explore our curated events,join groups that spark your <br>
             interest, and don't hesitate to participate in discussions. [App Name] is your space <br>
              to explore,learn,and contribute.</p>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'SignupView',
        data(){
            return{
                 email:'',
                 password:'',
                 dateofBirth:'',
                 cnic:'',
                 number:'',
                 name:''
                
    
            }
        },
        methods:{
            login(){
                this.$router.push({name:''})
            }
        }
    }
    </script>
    
    <style  >
    
    
    body{
        background-color: black;
        overflow: hidden;
    }
    
    .SignupView h1,
    p {
        text-align: center;
        padding-right: 150px;
        color: white;
        padding-bottom: 10px;
        padding-top: 5px;
        height: 15px;
        
    }
    
    .SignupView {
        float: right;
        padding-top: 50px;
        padding-right: 20px;
    
        margin-bottom: 30px;
        width: 516px;
        height: 631px;
        top: 196px;
        left: 1273px;
        gap: 0px;
        opacity: 0px;
        
    
    }
    
    .signup button,
    .signup input  {
        width: 320px;
        height: 30px;
        border: 1px solid gray;
        border-radius: 5px;
        margin: 15px;
        background-color: black;
        color: white;
    
    }
    
    .signup button {
        background-color:rgb(65, 126, 240);
    }
    
    .Picture img {
        width: 800px;
        height: 750px;
        gap: 0px;
        opacity: 0px;
        float:left;
        border-radius: 30px;
    
    }
    .text-block {
      position: absolute;
      top: 8px;
      left: 16px;
      text-align: center;
      color: white;
      padding: 50px;
      padding-left: 40px;
      font-size: 18px;
      
      
    }
    .text-block h2{
        text-align: center;
        padding-left: 2px;
        padding-right: 9px;
    }
    
    checkbox{
       display: inline-block;
    }
    
    </style>
    