<template>
<body>
    
    <div v-show="OK_TRUE" class="push" >
        <div class="push_content">
        
        <div id="text_push_id" class="push_content_true">
            <span>{{info_push}}</span>     
<i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_TRUE = !OK_TRUE" ></i>
        </div>
        </div>
    </div>

    <div v-show="OK_FALSE" class="push" >
        <div class="push_content">
        
        <div id="text_push_id" class="push_content_false">
            <span>{{info_push}}</span>
            <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_FALSE = !OK_FALSE" ></i>
        </div>
        </div>
    </div>
    
    <div class="login" >
    <div class="registr" >
        <h2 style="padding-top: 15px;">Вход</h2>
        <b>
            <hr class="hrSt"></b>

        <p><input v-model="form.email" style="width:50%" placeholder="Email"> <br></p>
        <p><input v-model="form.password" type="password" style="width:50%" placeholder="Пароль"> <br></p>
        
        <p><button type="button" class="osnovnButton" @click="vhod()">Войти</button> <br></p>
        
        <hr class="hrSt">

        <p class="podskazka">Ещё не зарегистрированы?</p>
        <hr class="hrSt">
        <form action="registration" style="padding-bottom: 20px;">
            <button type="submit" class="osnovnButton">Зарегистрироваться</button>
        </form>
    </div>
    </div>
</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

@Component({
    components: {
    },
})
export default class Home extends Vue {
     data(){
        return {
OK_TRUE: false,
OK_FALSE: false,
info_push: "Успешная регистрация!!!",
        } 
        
    }


    form = {
        email : "leader@mail.ru",
        password: "123456"
    }

    response = "ожидание"
    token = "";

    OK_TRUE = false
    OK_FALSE = false
    info_push = ""
    


    async vhod() {
        const result = await this.$store.dispatch("login", this.form);
        this.token = result.token;
        // console.log(result.message)
        // console.log(result)


        
        console.log(this.token)
       
    //    if (result.message === "Ошибка при валидации данных.") {
    //         this.OK_FALSE = "true"
    //         this.info_push = result.message
    //     }

       if (result.success === true) {
            this.OK_TRUE = true
            this.info_push = result.message

            setTimeout(function () {
                window.location.href = 'profil'
            }, 1000);
        }

        else{
            this.OK_FALSE = true
            this.info_push = result.message
            
            let vm = this;
            setTimeout(function () {
                vm.OK_FALSE = false
            }, 4000);
        }
    console.log(result)
    console.log(result.success)
    }
}
</script>