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
                    <form v-on:submit.prevent="processCreatePaciente">
                        <div class="form-group">
                            <label for="exampleInputPassword1">Nombre:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Nombre" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Apellido:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Apellido" placeholder="Apellido">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Cedula:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Cedula" placeholder="Cedula">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Celular:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Celular" placeholder="Celular">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Direccion:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Direccion" placeholder="Direccion">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">usuario_id:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.usuario_id" placeholder="usuario_id">
                        </div>
                        <br>
                        <br>
                        <br>
                        <button type="submit" class="btn btn-primary">Agregar</button>
                    </form>
                </div>
            </div>
            <div class="col">
                <h2>Consultar Paciente</h2>
                <form v-on:submit.prevent="processGetPaciente">
                    <input type="text" class="form-control" v-model="elementP.id_paciente" placeholder="Ingresa ID del paciente">
                    <br>
                    <p>
                        <p>Nombre:
                        <span>{{ onlyOneU.Nombre}}</span>
                        <br /></p>
                        <p>Apellido:
                        <span>{{ onlyOneU.Apellido}}</span></p>
                        <p>Cedula:
                        <span>{{ onlyOneU.Cedula}}</span>
                        <br /></p>
                        <p>Celular:
                        <span>{{ onlyOneU.Celular}}</span>
                        <br /></p>
                        <p>Direccion:
                        <span>{{ onlyOneU.Direccion}}</span>
                        <br /></p>
                        <p>Usuario ID:
                        <span>{{ onlyOneU.usuario_id}}</span>
                        <br /></p>
                        
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
                            <input type="text" class="form-control" v-model="elementP.usuario_id" placeholder="Id del paciente">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Nombre:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Nombre" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Apellido:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Apellido" placeholder="Apellido">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Cedula:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Cedula" placeholder="Cedula">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Celular:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Celular" placeholder="Celular">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Direccion:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.Direccion" placeholder="Direccion">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">usuario_id:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.usuario_id" placeholder="usuario_id">
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary">Actualizar</button>
                    </form>
                </div>
            </div>
            <div class="col">
                <h2>Eliminar Paciente</h2>
                <div class="formularioactualizarUser">
                    <form v-on:submit.prevent="processDelete">
                        <div class="form-group">
                            <label for="id">Id:</label>
                            <br>
                            <input type="text" class="form-control" v-model="elementP.id_paciente" placeholder="Id del paciente">
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

</template>

<script>
import axios from "axios";
export default {
    name: "Pacientes",
    data: function () {
        return {
            paciente: localStorage.getItem('paciente') || "none",
            elementP:{
                id_paciente: "",
                Nombre: "",
                Apellido: "",
                Cedula: "",
                Celular: "",
                Direccion: "",
                usuario_id: "",

            },
        }
    },
    methods: {
        processData: function () {
            axios.get("https://hos-pi-tal-tic-5.herokuapp.com/paciente/", {
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
        processCreatePaciente: function(){
            axios.post("https://hos-pi-tal-tic-5.herokuapp.com/paciente/",
            this.elementP,
            {
                headers:{},
            }
            ).then((result)=>{
                alert("Paciente creado exitosamente...");
            })
            .catch((error)=>{
                alert(error);
            });
        },
        processGetPaciente: function(){
            axios.get(`https://hos-pi-tal-tic-5.herokuapp.com/paciente/${this.elementP.id_paciente}/`,
            this.elementP,
            {
                headers: {},
            })
            .then((result)=>{
                this.onlyOneU.Nombre = result.data.Nombre;
                this.onlyOneU.Apellido = result.data.Apellido;
                this.onlyOneU.Cedula = result.data.Cedula;
                this.onlyOneU.Celular = result.data.Celular;
                this.onlyOneU.Direccion = result.data.Direccion;
                this.onlyOneU.usuario_id = result.data.usuario_id;
            })
            .catch((error)=>{
                alert(error)
            })
        },

        processUpgrade: function(){
            axios.put(`https://hos-pi-tal-tic-5.herokuapp.com/paciente/${this.elementP.id_paciente}/`,
            this.elementP,
            {
                headers: {},
            })
            .then((result)=>{
                alert("Actualizado correctamente el paciente");
            })
            .catch((error)=>{
                alert(error)
            })
        },
        processDelete: function(){
            axios.delete(`https://hos-pi-tal-tic-5.herokuapp.com/paciente/${this.elementP.id_paciente}/`,
            this.elementP,
            {
                headers: {},
            })
            .then((result)=>{
                alert("paciente eliminado correctamente");
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