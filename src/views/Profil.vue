<template>
<body>

    <div v-show="OK_TRUE" class="push">
        <div class="push_content">

            <div class="push_content_true">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_TRUE = !OK_TRUE"></i>
            </div>
        </div>
    </div>

    <div v-show="OK_FALSE" class="push">
        <div class="push_content">

            <div id="text_push_id" class="push_content_false">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_FALSE = !OK_FALSE"></i>
            </div>
        </div>
    </div>

    <div v-show="question_TRUE" class="add_news">

        <div class="add_content_news">
            <h4 class="h4_new">Вы уверены, что хотите удалить профиль? <i class="bi bi-x-lg close_icon" @click="question_TRUE = !question_TRUE"></i></h4>

            <p><button type="button" class="osnovnButton But_Yes" style="" @click="delete_profil()">Да</button>
                <button type="button" class="osnovnButton But_No" style="" @click="question_TRUE = !question_TRUE">Нет</button></p>
        </div>

    </div>

    <div class="profil">
        <div class="formaPolzovatelya">
            <div style="padding:  3% 0% 3% 0%;">
                <img class="card-photo" src="../img/Profil.jpg" alt="Фото пользователя">
            </div>
            <h5 style="color: black; padding-bottom: 20px;">{{FIO}}
                <i v-show="ADMIN" class="bi bi-check-circle-fill" style="color: green;" data-bs-toggle="tooltip" title="Администратор"></i>
            </h5>

            <p class="Profil_info_blok">Основная информация</p>
            <hr class="Profil_info_Hr">

            <table class="TableCheck">
                <tr>
                    <td class="TdLev">Должность:</td>
                    <td class="TdPrav">{{JOB}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Паспортные данные:</td>
                    <td class="TdPrav">{{PASPORT}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Дата рождения:</td>
                    <td class="TdPrav">{{BIRTHDAY}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Email:</td>
                    <td v-show="LODIN_SHOW" class="TdPrav">{{LODIN}} <i class="bi bi-eye-slash" style="padding-left: 10px;" @click="LODIN_SHOW = !LODIN_SHOW"></i></td>
                    <td v-show="!LODIN_SHOW" class="TdPrav">{{EMAIL}} <i class="bi bi-eye-slash" style="padding-left: 10px;" @click="LODIN_SHOW = !LODIN_SHOW"></i></td>
                </tr>
                <tr>
                    <td class="TdLev">Пол:</td>
                    <td class="TdPrav">{{MALE}}</td>
                </tr>
            </table>

            <div class="editDiv">
                <a v-show="edit_log" class="edit" @click="edit_log_TRUE = !edit_log_TRUE; edit_log = !edit_log;">Изменить логин<i class="bi bi-pencil-fill"></i></a>
                <a v-show="!edit_log" class="edit" @click="edit_log_TRUE = !edit_log_TRUE; edit_log = !edit_log;">Отмена</a>
            </div>

            <div v-show="!edit_log">
                <hr class="Profil_info_Hr">
                <table class="TableCheck">
                    <tr>
                        <td class="TdLev">Новый логин</td>
                        <td class="TdPrav"><input v-model="new_login" type="text"></td>
                    </tr>
                </table>
                <p style="margin-bottom: 0; margin-top: 10px;"><button type="button" class="osnovnButton" @click="save_log()">Сохранить</button></p>
                <hr class="Profil_info_Hr" style="margin-bottom: 10px;">
            </div>

            <p class="Profil_info_blok">Дополнительная информация</p>
            <hr class="Profil_info_Hr">

            <table class="TableCheck">
                <tr>
                    <td class="TdLev">Заработная плата:</td>
                    <td class="TdPrav">{{SALARY}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Дата приема на работу:</td>
                    <td class="TdPrav">{{DATE_OF_RECEIPT}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Семейное положение:</td>
                    <td class="TdPrav">{{MARITAL_STATUS}}</td>
                </tr>
                <tr>
                    <td class="TdLev">Количество детей:</td>
                    <td class="TdPrav">{{AMOUNT_OF_CHILDREN}}</td>
                </tr>
            </table>

            <div class="editDiv">
                <a v-show="edit_pass" class="edit" @click="edit_TRUE = !edit_TRUE; edit_pass = !edit_pass;">Изменить пароль<i class="bi bi-pencil-fill"></i></a>
                <a v-show="!edit_pass" class="edit" @click="edit_TRUE = !edit_TRUE; edit_pass = !edit_pass;">Отмена</a>
            </div>

            <div v-show="!edit_pass">
                <hr class="Profil_info_Hr">
                <table class="TableCheck">
                    <tr>
                        <td class="TdLev">Старый пароль</td>
                        <td class="TdPrav"><input v-model="old_password" type="password"></td>
                    </tr>
                    <tr>
                        <td class="TdLev">Новый пароль</td>
                        <td class="TdPrav"><input v-model="new_password" type="password"></td>
                    </tr>
                    <tr>
                        <td class="TdLev">Повторите пароль</td>
                        <td class="TdPrav"><input v-model="new_password_2" type="password"></td>
                    </tr>
                </table>
                <p style="margin-bottom: 0; margin-top: 10px;"><button type="button" class="osnovnButton" @click="save_password()">Сохранить</button></p>
                <hr class="Profil_info_Hr" style="margin-bottom: 10px;">
            </div>

            <p><button type="button" class="osnovnButton" @click="question_TRUE = !question_TRUE">Удалить профиль <i class="bi bi-trash-fill"></i></button></p>

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

@Component({
    components: {},
})

export default class Home extends Vue {

    data() {
        return {
            OK_TRUE: false,
            OK_FALSE: false,
            ADMIN: false,
            LODIN_SHOW: true,
            edit_pass: true,
            edit_log: true,
            question_TRUE: false,
            info_push: "Успешная аутентификация",
        }
    }

    token = "";
    FIO = ""
    BIRTHDAY = ""
    MALE = ""
    EMAIL = ""
    JOB = ""
    SALARY = ""
    DATE_OF_RECEIPT = ""
    AMOUNT_OF_CHILDREN = ""
    MARITAL_STATUS = ""
    PASPORT = ""
    LODIN = ""
    ID = ""

    OK_TRUE = false
    OK_FALSE = false
    ADMIN = false
    question_TRUE = false
    info_push = ""

    form_pass = {
        password: ""
    }

    form_log = {
        email: "",
    }

    new_login = ""
    old_password = ""
    new_password = ""
    new_password_2 = ""

    async mounted() {
        this.token = localStorage.token;

        const result = await this.$store.dispatch("me_inform");

        this.OK_TRUE = true
        let vm = this;
        setTimeout(function () {
            vm.OK_TRUE = false
        }, 2000);

        if (result.isAdmin === true) {
            this.ADMIN = true
        }

        this.ID = result.id
        this.FIO = result.fio
        this.BIRTHDAY = result.birthday
        this.MALE = result.male
        this.EMAIL = result.email
        this.JOB = result.job
        this.DATE_OF_RECEIPT = result.date_of_receipt
        this.AMOUNT_OF_CHILDREN = result.amount_of_children
        this.SALARY = result.salary
        this.MARITAL_STATUS = result.marital_status
        this.PASPORT = result.pasport

        this.new_login = this.EMAIL

        var poi = this.EMAIL.split("@");
        var log = poi[0][0] + poi[0][1]

        for (let i = 2; i < poi[0].length; i++) {
            log += '*'
        }

        log += '@' + poi[1]
        console.log(log)
        this.LODIN = log
    }

    async logout() {
        const result = await this.$store.dispatch("logout");
        this.token = "";
        window.location.href = 'login'

    }

    async delete_profil() {
        const result = await this.$store.dispatch("delete_profil", this.ID);

        if (result.success === true) {
            this.OK_TRUE = true
            this.info_push = result.message
            this.question_TRUE = false

            setTimeout(function () {
                window.location.href = 'login'
            }, 1500);
        }

        console.log(this.ID)
        console.log(result)
        // const result = await this.$store.dispatch("logout");
        // this.token = "";
        // window.location.href = 'login'

    }

    async Error_push(info: string) {
        this.OK_FALSE = true
        this.info_push = info

        let vm = this;
        setTimeout(function () {
            vm.OK_FALSE = false
        }, 4000);
    }

    edit_pass = true
    edit_log = true

    async success_save() {
        this.old_password = ""
        this.new_password = ""
        this.new_password_2 = ""
        this.new_login = ""
        this.edit_pass = true;
        this.edit_log = true;
    }

    async save_password() {
        if (this.new_password === this.new_password_2 && this.new_password !== '') {
            this.form_pass.password = this.new_password
            this.save_pass_log(this.form_pass);

        } else {
            this.OK_FALSE = true
            this.info_push = "Пароли не совпадают"

            let vm = this;
            setTimeout(function () {
                vm.OK_FALSE = false
            }, 4000);
        }
    }

    async save_log() {
        if (this.new_login !== '') {
            this.form_log.email = this.new_login
            this.save_pass_log(this.form_log);

        } else {
            this.OK_FALSE = true
            this.info_push = "Некорректные данные"

            let vm = this;
            setTimeout(function () {
                vm.OK_FALSE = false
            }, 4000);
        }

    }

    async save_pass_log(edit_info: {}) {
        let vm = this;
        await this.$store.dispatch("edit_pass", edit_info)
            .then(result => {
                if (result.success === true) {
                    this.OK_TRUE = true
                    this.info_push = "Изменения успешно внесены"
                    this.success_save();

                    setTimeout(function () {
                        vm.OK_TRUE = false
                        window.location.reload();
                    }, 2000);
                } else {
                    this.OK_FALSE = true
                    this.info_push = result.message

                    let vm = this;
                    setTimeout(function () {
                        vm.OK_FALSE = false
                    }, 4000);
                }
                return result;
            })
            .catch(function (error) {
                let s = vm;
                if (error.response.status === 500) {
                    s.Error_push("Данный email уже успользуется")
                }
                if (error.response.status === 400) {
                    s.Error_push("Неверная длина пароля")
                }
                console.log(error.response.status);
                return error;
            });
    }

}
</script>

<style lang="scss">

</style>
