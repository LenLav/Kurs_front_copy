<template>
<body class="body">

    <div v-show="OK_TRUE" class="push">
        <div class="push_content">

            <div class="push_content_true">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_TRUE = !OK_TRUE"></i>
            </div>
        </div>
    </div>

    <div class="EditProfil">
        <div class="Profil">

            <div class="formaPolzovatelya">
                <div style="padding:  3% 0% 3% 0%;">
                    <img class="card-photo" src="../img/Profil.jpg" alt="Фото пользователя">
                </div>
                <h5 style="color: black; padding-bottom: 20px;">{{FIO}}
                    <i v-show="ADMIN" class="bi bi-check-circle" style="color: green;" data-bs-toggle="tooltip" title="Администратор"></i>
                </h5>

                <p class="Profil_info_blok">Основная информация</p>
                <hr class="Profil_info_Hr">


                <table class="TableCheck">
                    <tr>
                        <td class="TdLev">Должность:</td>
                        <td class="TdPrav"><input type="text" class="Input_edit_profil" v-model="JOB" autofocus></td>
                    </tr>
                    <tr>
                        <td class="TdLev">Паспортные данные:</td>
                        <td class="TdPrav"><input type="text" class="Input_edit_profil" v-model="PASPORT"></td>
                    </tr>
                    <tr>
                        <td class="TdLev">Дата рождения:</td>
                        <td class="TdPrav">{{BIRTHDAY}}</td>
                    </tr>
                    <tr>
                        <td class="TdLev">Email:</td>
                        <td class="TdPrav"><input type="text" class="Input_edit_profil" v-model="EMAIL"></td>
                    </tr>
                    <tr>
                        <td class="TdLev">Пол:</td>
                        <td class="TdPrav"><input type="text" class="Input_edit_profil" v-model="MALE"></td>
                    </tr>
                </table>

                <p class="Profil_info_blok">Дополнительная информация</p>
                <hr class="Profil_info_Hr">

                <table class="TableCheck">
                    <tr>
                        <td class="TdLev">Заработная плата:</td>
                        <td class="TdPrav"><input type="text" class="Input_edit_profil" v-model="SALARY"></td>
                    </tr>
                    <tr>
                        <td class="TdLev">Дата приема на работу:</td>
                        <td class="TdPrav"><input type="text" class="Input_edit_profil" v-model="DATE_OF_RECEIPT"></td>
                    </tr>
                    <tr>
                        <td class="TdLev">Семейное положение:</td>
                        <td class="TdPrav">
                            <select class="Input_edit_profil" v-model="selected_MARITAL_STATUS" selected="selected_MARITAL_STATUS">
                                <option v-for="option in options_MARITAL_STATUS" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Количество детей:</td>
                        <td class="TdPrav">
                            <select class="Input_edit_profil" v-model="selected_AMOUNT_OF_CHILDREN" selected="selected_AMOUNT_OF_CHILDREN">
                                <option v-for="option in options_AMOUNT_OF_CHILDREN" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                        <!-- <td class="TdPrav"><input type="text" class="Input_edit_profil" v-model="AMOUNT_OF_CHILDREN"></td> -->
                    </tr>
                    <tr>
                        <td class="TdLev">Новый пароль:</td>
                        <td class="TdPrav"><input type="text" class="Input_edit_profil" placeholder="Введите пароль"></td>
                    </tr>
                </table>

                <p><button type="button" class="osnovnButton" @click="delete_profil()">Сохранить изменения</button> <br></p>
                <!-- <p style="padding-bottom: 20px;"><button type="button" class="btn btn-outline-success" @click="edit()">Удалить профиль</button> <br></p> -->

            </div>
            
        </div>
    </div>
</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script><script lang="ts">
import axios from 'axios';
import {
    Component,
    Vue
} from "vue-property-decorator";

@Component({
    components: {},
})

export default class Home extends Vue {

    data() {
        return {
            OK_TRUE: false,
            ADMIN: false,
            LODIN_SHOW: true,
            EMAIL_SHOW: false,
            info_push: "Успешная аутентификация",

            selected_MARITAL_STATUS: this.MARITAL_STATUS,
            options_MARITAL_STATUS: [{
                    text: 'Жен/ЗМ'
                },
                {
                    text: 'Хол/НЗ'
                },
                {
                    text: 'Разв.'
                },
                {
                    text: 'Вдов.'
                },
            ],

            selected_AMOUNT_OF_CHILDREN: this.AMOUNT_OF_CHILDREN,
            options_AMOUNT_OF_CHILDREN: [{
                    text: '0'
                },
                {
                    text: '1'
                },
                {
                    text: '2'
                },
                {
                    text: '3'
                },
                {
                    text: 'более 3'
                },
            ]
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
    selected_MARITAL_STATUS = ""
    selected_AMOUNT_OF_CHILDREN = ""
    PASPORT = ""
    LODIN = ""

    OK_TRUE = false
    ADMIN = false
    info_push = ""

    form = {
        fio: "Петров Станислав Александрович",
        job: "Директор",
        birthday: "20.04.1985",
        email: "nikolaev27@mail.ru",
        male: "мужской",
        salary: "35 000",
        date_of_receipt: "25.08.2010",
        marital_status: "женат",
        amount_of_children: "1"
    }

    async mounted() {
        this.token = localStorage.token;

        const result = await this.$store.dispatch("me_inform");

        // this.OK_TRUE = true
        // let vm = this;
        // setTimeout(function () {
        //     vm.OK_TRUE = false
        // }, 2000);

        if (result.isAdmin === true) {
            this.ADMIN = true
        }

        this.FIO = result.fio
        this.BIRTHDAY = result.birthday
        this.MALE = result.male
        this.EMAIL = result.email
        this.JOB = result.job
        this.DATE_OF_RECEIPT = result.date_of_receipt
        this.AMOUNT_OF_CHILDREN = result.amount_of_children
        this.SALARY = result.salary
        this.MARITAL_STATUS = result.marital_status
        this.selected_MARITAL_STATUS = this.MARITAL_STATUS
        this.selected_AMOUNT_OF_CHILDREN = this.AMOUNT_OF_CHILDREN
        this.PASPORT = result.pasport

        var poi = this.EMAIL.split("@");
        console.log(poi[0])
        console.log(poi[1])
        var log = poi[0][0] + poi[0][1]

        for (let i = 2; i < poi[0].length; i++) {
            log += '*'
        }

        log += '@' + poi[1]
        console.log(log)
        this.LODIN = log
    }

}
</script>

<style lang="scss">

</style>
