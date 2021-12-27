<template>
<body>
    
    <div v-show="OK_TRUE" class="push">
        <div class="push_content">

            <div id="text_push_id" class="push_content_true">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_TRUE = !OK_TRUE"></i>
            </div>
        </div>
    </div>

    <div v-show="page_TRUE" class="push_edit_page">
        <div class="push_content_page">
            <span style="margin: auto; text-align: center;">Эта страница находится в разработке</span>
        </div>
    </div>

    <div id="app">
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light" style="height: 40px; border-bottom: 1px solid #cacfd6">
            <a class="navbar-brand" href="/" style="padding-left: 40px"><i class="bi bi-gear-fill" style="padding-right: 10px"></i>КЗТЗ</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav w-100 justify-content-end">
                    <div>
                        <div v-if="!token">
                            <li class="nav-item" style="padding-top: 16px">
                                <a class="nav-link" href="login">Вход и регистрация </a>
                            </li>
                        </div>

                        <div v-else></div>
                    </div>

                    <div>
                        <div v-if="token">
                            <li class="nav-item">
                                <a class="nav-link" href="profil" id="LKab">
                                    <i class="bi bi-person" style="font-size: 1.9rem; color: grey"></i>{{ FiO }}<i v-show="ADMIN" class="bi bi-check-circle" style="color: green; padding-left: 5px;" data-bs-toggle="tooltip" title="Администратор"></i></a>
                            </li>
                        </div>

                        <div v-else></div>
                    </div>

                    <div>
                        <div v-if="token">
                            <li class="nav-item">
                                <a class="nav-link" @click="logout()">
                                    <i class="bi bi-box-arrow-right" style="font-size: 1.9rem; color: grey"></i>
                                </a>
                            </li>
                        </div>

                        <div v-else></div>
                    </div>
                </ul>
            </div>
        </nav>

        <router-view />
        <!-- <p><button type="button" class="btn btn-outline-success" @click="register()">Кнопка</button> <br></p> -->
    </div>

    <div class="LeftNavbar">
        <div v-if="!token">
            <p style="padding-top: 25px">Дла получения более полной информации необходимо авторизоваться</p>
            <form action="login">
                <button type="submit" class="LeftNavbarButton">
                    <i class="bi bi-box-arrow-in-right" style="padding-right: 5%"></i>
                    Войти
                </button>
            </form>
            <form action="registration">
                <button type="submit" class="LeftNavbarButton">
                    <i class="bi bi-person-plus" style="padding-right: 5%"></i>
                    Регистрация
                </button>
            </form>
        </div>
        <div v-if="token">
            <form action="news">
                <button type="submit" class="LeftNavbarButton">
                    <i class="bi bi-newspaper" style="padding-right: 5%"></i>
                    Новости
                </button>
            </form>

            <form action="analytics">
                <button type="submit" class="LeftNavbarButton">
                    <i class="bi bi-graph-up" style="padding-right: 5%"></i>
                    Аналитика
                </button>
            </form>

            <form action="database">
                <button type="submit" class="LeftNavbarButton">
                    <i class="bi bi-people" style="padding-right: 5%"></i>
                    Сотрудники
                </button>
            </form>

            <!-- <form > -->
            <button type="submit" class="LeftNavbarButton" @click="show_error_page()">
                <i class="bi bi-envelope-check" style="padding-right: 5%;"></i>
                Мессенджер</button>
            <!-- </form> -->

            <!-- <form > -->
            <button type="submit" class="LeftNavbarButton" @click="show_error_page()">
                <i class="bi bi-calendar3" style="padding-right: 5%"></i>
                Календарь
            </button>
            <!-- </form> -->

            <form action="tekhpodderzhka">
                <button type="submit" class="LeftNavbarButton">
                    <i class="bi bi-question-octagon" style="padding-right: 5%"></i>
                    Техподдержка
                </button>
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
    components: {},
})
export default class Home extends Vue {
    data() {
        return {
            fio: "",
            ADMIN: false,
            page_TRUE: false,
            OK_TRUE: false,
        };
    }

    async mounted() {
        this.token = localStorage.token;
        console.log(this.token);

        this.token = localStorage.token;
        const result = await this.$store.dispatch("me_inform");

        if (result.isAdmin === true) {
            this.ADMIN = true
        }

        this.FIO = result.fio;
        var poi = this.FIO.split(" ");
        this.FiO = poi[0] + " " + poi[1][0] + "." + poi[2][0] + ".";
    }

    async logout() {
        const result = await this.$store.dispatch("logout");
        this.token = "";

        if (result.success === true) {
            this.OK_TRUE = true
            this.info_push = result.message

            setTimeout(function () {
                window.location.href = 'login'
            }, 1500);
        }
        
    }

    async show_error_page() {
        this.page_TRUE = true
        let vm = this;
        setTimeout(function () {
            vm.page_TRUE = false
        }, 2000);
    }

    response = "";
    poi = "";
    token = "";
    FIO = "";
    FiO = "";
    ADMIN = false
    page_TRUE = false
    OK_TRUE = false
    info_push = ""
}
</script>

<style lang="scss">
.LeftNavbar {
    background-color: #f8f9fa;
    width: 17%;
    height: 100%;
    border-right: 1px solid #cacfd6;
    text-align: center;

    position: fixed;
    top: 40px;
    z-index: 100;
}

.LeftNavbarButton {
    background-color: #e5ebf1;
    border: none;
    border-radius: 3px;
    width: 85%;
    height: 35px;
    color: #55677d;
    font-size: 15px;
    margin-top: 10px;
    text-align: left;
    padding-left: 10%;
}

.LeftNavbarButton:hover {
    background-color: #c2ced8;
}

.centr {
    vertical-align: middle;
}

nav {
    height: 40px;
    padding: 0 0 0 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    // background-color: #eae7dc;
    // background-color: #a3b3c3;
}

#navb {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #b9c6d3;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
