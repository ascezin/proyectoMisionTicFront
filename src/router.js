import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Information from './components/Information.vue'
import Users from './components/Users.vue'
import Pacientes from './components/Pacientes.vue'

const routes = [{
  path: '/',
  name: 'root',
  component: App
},
{
  path: '/user/logIn',
  name: "logIn",
  component: LogIn
},
{
  path: '/user/signUp',
  name: "signUp",
  component: SignUp
},
{
  path: '/user/home',
  name: "home",
  component: Home
},
{
  path: '/user/account',
  name: "account",
  component: Account
},
{
  path: '/user/information',
  name: "information",
  component: Information
},
{
  path: '/user/Users',
  name: "users",
  component: Users
},
{
  path: '/user/Pacientes',
  name: "pacientes",
  component: Pacientes
}
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;