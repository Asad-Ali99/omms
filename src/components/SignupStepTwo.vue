<template>
<div class="signup-form">
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26910.391859000287!2d73.95176111687852!3d32.531515353279445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f11007578623f%3A0x549a2efeb5c893bd!2sKunjah%2C%20Gujrat%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716355213534!5m2!1sen!2s"></iframe>
    </div>
    <div class="address-details">
        <input type="text" placeholder="  Your address" v-model="address">
    </div>
    <div class="checkbox-container">
        <label style="color: white;">Are you interested in event invitations?</label>
        <input type="checkbox" name="event-invitations" v-model="selected">

    </div>
    <div class="dropdown-container">
        <label style="color: white;">Referred By</label><br>
        <select id="referrel-options" v-model="selectedReference">
            <option value="" disabled selected> Referred By</option>
            <option>Friend</option>
            <option>Collegue</option>
            <option>Advertisement</option>
            <option>Others</option>
        </select>
    </div>
    <div class="continue-btn">
        <router-link to="signupstepthree"><button>Continue</button></router-link>
    </div>

</div>
</template>

<script>
export default {
    name: 'SignupStepTwo',
    data() {
       return{
          address:'',
          selected:'',
          selectedReference:'',

       }

    }
}
</script>

<style scoped>
.signup-form {
    text-align: center;
    padding-left: 50px;
    padding-top: 130px;
    font-size: medium;
}

.map iframe {
    width: 320px;
    height: 75px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.address-details input {
    height: 40px;
    width: 320px;

    border: 1px solid gray;
    border-radius: 5px;
    margin: 15px;
    background-color: black;
    color: white;

}

.checkbox-container label {
    margin: 30px;
    margin-right: 30px;

}

.checkbox-container input {
    padding-right: 10px;
    margin: 25px;
    margin-bottom: 35px;

}

.dropdown-container label {
    padding-right: 240px;
    margin-top: 100px;
    margin: 50px;

}

.dropdown-container select {
    height: 40px;
    width: 320px;
    margin: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: black;
    color: grey;
}

.continue-btn button {
    width: 320px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 5px;

    background-color: rgb(65, 126, 240);
    color: white;
    margin: 50px;
    margin-left: auto;
    margin-right: auto;
}
</style>
