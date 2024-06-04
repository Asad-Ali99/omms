import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '@/components/SignupView.vue';
import LoginView from '@/components/LoginView.vue'; 
import SignupStepTwo from '@/components/SignupStepTwo.vue';
import SignupStepThree from '@/components/SignupStepThree.vue';




const routes = [
{
  name:'Signup',
  component: SignupView,
  path:'/signupView'
},
{
  name:'login',
  component:LoginView,
  path: '/'
},
{
  name:'signuptwo',
  component: SignupStepTwo,
  path:'/signupsteptwo'
},
{
  name:'signupstepthree',
  component: SignupStepThree,
  path:'/signupstepthree'


}
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
