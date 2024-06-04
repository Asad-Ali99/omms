<template>
<div class="body">
    <div class="container">
        <h1> Welcome back</h1>
        <p>--------Or sign in with email--------</p>
        <form class="login">
            <input type="text" v-model="email" placeholder="  Email">
            <input type="password" v-model="password" placeholder="  Password">
            <button v-on:click="login">Log in</button>
            <p>Don't Have an account?
                <router-link to="/signupView">Sign in</router-link>
            </p>

        </form>
    </div>
    <div class="Picture">
        <img src="../assets/login picture.jpg">
        <div class="text-block">
            <h2>Welcome to Our Community!</h2>
            <p>Congratulations on joining lApp Namel! You're about to embark on a journey <br>
                filled with opportunities to connect, learn, and grow. Lets make sure you get the <br>
                most out of your new community from day one.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',

        }
    },
    methods: {
        login() {
            this.$router.push({
                name: ''
            })
        }
    }
}
</script>

<style >
.body{
    background-color: black;
}
.container h1 {
    text-align: center;
    padding-right: 150px;
    color: white;
    padding-bottom: 15px;
    padding-top: 15px;
    height: 10px;

}

.container p {
    text-align: center;
    padding-right: 150px;
    color: white;
    padding-bottom: 20px;
    color: grey;

}

.container {
    float: right;
    padding-top: 110px;
    padding-right: 20px;

    margin-bottom: 30px;
    width: 516px;
    height: 631px;
    top: 196px;
    left: 1273px;
    gap: 0px;
    opacity: 0px;


}

.login button,
.login input {
    width: 320px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 15px;
    background-color: black;
    color: white;

}

.login button {
    background-color: rgb(65, 126, 240);
    cursor: pointer;
}

.Picture img {
    width: 800px;
    height: 800px;
    gap: 0px;
    opacity: 0px;
    float: left;
    border: top right radius 5%;
    ;
    border: bottom right radius 5px;
   

}

.text-block {
    position: absolute;
    top: 8px;
    left: 16px;
    text-align: center;
    color: white;
    padding: 50px;
    padding-left: 40px;
    font-size: 20px;

}

.text-block h2 {
    text-align: center;
    padding-left: 20px;
    height: 10px;
}

.text-block p {
    text-align: center;
    padding-left: 20px;
    height: 30px;
    padding-top: 30px;
}
</style>
