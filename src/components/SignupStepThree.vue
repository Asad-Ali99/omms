<template>
<div class="main-container">
    <div class="family-relation-dropdown">
        <label style="color: white;">Family Registration</label>
        <select name="Relation" id="family-relation" v-model="selectedRelation">
            <option value="" disabled selected> Your Relation</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="son">Son</option>
            <option value="daugther">Daughter</option>
            <option value="other">Other</option>
        </select>
    </div>
    <div>
        <p>Other Information</p>
    </div>
    <form class="other-details">
        <input type="text" v-model="name" placeholder="  Name">
        <input type="date" v-model=dateofBirth placeholder="  Date of Birth">
        <input type="tel" v-model="number" placeholder="  Phone Number">
        <input type="text" v-model="email" placeholder="  Email">
        <input type="password" v-model="password" placeholder="  Password">
        <button>Continue</button>
    </form>

</div>
</template>

<script>
export default {
    name: 'SignupStepThree',
    data() {
        return {
            selectedRelation:'',
            name:'',
            dateofBirth:'',
            number:'',
            email:'',
            password:'',

        }

    }
}
</script>

<style>
.main-container {
    text-align: center;
    padding-top: 120px;
}

.main-container p {
    padding-right: 200px;
    margin-bottom: 1px
}

.family-relation-dropdown label {
    padding-right: 195px;
    margin-top: 100px;
    margin: 5px;
    display: block;

}

.family-relation-dropdown select {
    height: 35px;
    width: 320px;
    margin: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: black;
    color: grey;
}

.other-details input,button {
    width: 320px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 15px;
    background-color: black;
    color: white;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;

}
.other-details button{
    background-color:rgb(65, 126, 240);

}
</style>
