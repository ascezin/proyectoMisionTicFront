<template>
    <div class="Titulos">
        <h1>¡Bienvenido <span class="user"> {{username}} </span>! a Pacientes</h1>
        <h4>En esta seccion podras agregar, consultar, elminar, actualizar Pacientes</h4>
    </div>
    <br>
    <br>
    <div class="cantainer">
        <div class="row">
            <div class="col">
                <h2>Crear Paciente</h2>
                <div class="formularioCrearPaciente">
                    <form v-on:submit.prevent="processCreateUser">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Nombre:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.Nombre" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Apellido:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.Apellido" placeholder="Apellido">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Cedula:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.Cedula" placeholder="Cedula">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Celular:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.Celular" placeholder="Celular">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Direccion:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.Direccion" placeholder="Direccion">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">usuario_id:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.usuario_id" placeholder="usuario_id">
                        </div>
                        <br>
                        <br>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Rol Usuario</label>
                        <select class="form-control" id="exampleFormControlSelect1" v-model="elementU.rol_usuario">
                                <option>paciente</option>
                                <option>familiar</option>
                                <option>medico</option>
                                <option>enfermero</option>
                            </select>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
            <div class="col">
                <h2>Consultar Usuario</h2>
                <form v-on:submit.prevent="processGetUsuario">
                    <input type="text" class="form-control" v-model="elementU.usuario_id" placeholder="Ingresa ID de usuario">
                    <br>
                    <p>
                        <p>Correo:
                        <span>{{ onlyOneU.email}}</span>
                        <br /></p>
                        <p>Rol:
                        <span>{{ onlyOneU.rol_usuario}}</span></p>
                    </p>
                    <br>
                    <button type="submit" class="btn btn-primary">Consultar</button>
                </form>
            </div>
            <div class="col">
                <h2>Actualizar Usuario</h2>
                <div class="formularioactualizarUser">
                    <form v-on:submit.prevent="processUpgrade">
                        <div class="form-group">
                            <label for="id">Id:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.usuario_id" placeholder="Id del usuario">
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="Correo">Correo:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.email" placeholder="Correo">
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="Contraseña">Contraseña:</label>
                            <br>
                            <input type="password" class="form-control" v-model="elementU.Contraseña" placeholder="Contraseña">
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Rol Usuario</label>
                        <select class="form-control" id="exampleFormControlSelect1" v-model="elementU.rol_usuario">
                                <option>paciente</option>
                                <option>familiar</option>
                                <option>medico</option>
                                <option>enfermero</option>
                            </select>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary">Actualizar</button>
                    </form>
                </div>
            </div>
            <div class="col">
                <h2>Eliminar Usuario</h2>
                <div class="formularioactualizarUser">
                    <form v-on:submit.prevent="processDelete">
                        <div class="form-group">
                            <label for="id">Id:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementU.usuario_id" placeholder="Id del usuario">
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Eliminar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <button type="submit" class="btn btn-secondary" v-on:click="processData">Actualizar tabla usuarios</button>
    <table class="table table-dark">
        <thead>
            <tr>
                <th>Correo</th>
                <th>Rol</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in user" :key="user.id">
                <td>{{ user.usuario_id}}</td>
                <td>{{user.email}}</td>
                <td>{{ user.rol_usuario}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from "axios";
export default {
    name: "Users",
    data: function () {
        return {
            username: localStorage.getItem('username') || "none",
            elementU:{
                usuario_id: "",
                email: "",
                Contraseña: "",
                rol_usuario: "",
            },
            user: [],
            onlyOneU:{
                email: "",
                rol_usuario: "",
            },
        }
    },
    methods: {
        processData: function () {
            axios.get("https://hos-pi-tal-tic-5.herokuapp.com/usuario/", {
                headers: {},
            })
                .then((result) => {
                    console.log(result.data)
                    this.user = result.data
                })
                .catch((error) => {
                    alert(error)
                });
        },
        processCreateUser: function(){
            axios.post("https://hos-pi-tal-tic-5.herokuapp.com/usuario/",
            this.elementU,
            {
                headers:{},
            }
            ).then((result)=>{
                alert("Usuario creado exitosamente...");
            })
            .catch((error)=>{
                alert(error);
            });
        },
        processGetUsuario: function(){
            axios.get(`https://hos-pi-tal-tic-5.herokuapp.com/usuario/${this.elementU.usuario_id}/`,
            this.elementU,
            {
                headers: {},
            })
            .then((result)=>{
                this.onlyOneU.email = result.data.email;
                this.onlyOneU.rol_usuario = result.data.rol_usuario
            })
            .catch((error)=>{
                alert(error)
            })
        },

        processUpgrade: function(){
            axios.put(`https://hos-pi-tal-tic-5.herokuapp.com/usuario/${this.elementU.usuario_id}/`,
            this.elementU,
            {
                headers: {},
            })
            .then((result)=>{
                alert("Actualizado correctamente el usuario");
            })
            .catch((error)=>{
                alert(error)
            })
        },
        processDelete: function(){
            axios.delete(`https://hos-pi-tal-tic-5.herokuapp.com/usuario/${this.elementU.usuario_id}/`,
            this.elementU,
            {
                headers: {},
            })
            .then((result)=>{
                alert("Usuario eliminado correctamente");
            })
            .catch((error)=>{
                alert(error)
            })
        }
    },
    created: function () {
        this.processData();
    }
}
</script>
<style>
.user {
    color: red;
}

.Titulos {
    text-align: center;
}
</style>