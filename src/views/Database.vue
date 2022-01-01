<template>
<body>
    <div v-show="OK_TRUE" class="push">
        <div class="push_content">
            <div id="text_push_id" class="push_content_true">
                <span>{{ info_push }}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px" @click="OK_TRUE = !OK_TRUE"></i>
            </div>
        </div>
    </div>

    <div v-show="OK_FALSE" class="push">
        <div class="push_content">
            <div id="text_push_id" class="push_content_false">
                <span>{{ info_push }}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px" @click="OK_FALSE = !OK_FALSE"></i>
            </div>
        </div>
    </div>

    <div v-show="ADMIN" class="push" style="top: 50px; z-index: 10" @click="add_person_TRUE = true">
        <div class="push_content_news">
            <i class="bi bi-plus-circle" style="padding-right: 10px"></i>
            <span>Добавить сотрудника в базу</span>
        </div>
    </div>

    <div v-show="add_person_TRUE" class="add_news" style="top: 50px">
        <div class="add_content_news">
            <h4 class="h4_new">
                Форма добавления сотрудника<i class="bi bi-x-lg close_icon" style="top: 60px" @click="add_person_TRUE = !add_person_TRUE"></i>
            </h4>

            <hr>

            <div class="container_add_new">
                <table class="TableCheck">
                    <tr>
                        <td class="TdLev">Фамилия Имя Отчество</td>
                        <td class="TdPrav">
                            <input v-model="form.fio" type="text" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Должность</td>
                        <td class="TdPrav">
                            <select v-model="form.job" selected="selected_JOB" style="width: 80%">
                                <option v-for="option in options_JOB" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Паспортные данные</td>
                        <td class="TdPrav">
                            <input v-model="form.pasport" type="text" placeholder="xx xx xxxx" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Дата рождения</td>
                        <td class="TdPrav">
                            <input v-model="form.birthday" type="date" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Пол</td>
                        <td class="TdPrav">
                            <select v-model="form.male" selected="selected_MALE" style="width: 80%">
                                <option v-for="option in options_MALE" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Заработная плата</td>
                        <td class="TdPrav">
                            <input v-model="form.salary" type="number" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Дата приема на работу:</td>
                        <td class="TdPrav">
                            <input v-model="form.date_of_receipt" type="date" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Семейное положение:</td>
                        <td class="TdPrav">
                            <select v-model="form.marital_status" selected="selected_MARITAL_STATUS" style="width: 80%">
                                <option v-for="option in options_MARITAL_STATUS" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Количество детей:</td>
                        <td class="TdPrav">
                            <select v-model="form.amount_of_children" selected="selected_AMOUNT_OF_CHILDREN" style="width: 80%">
                                <option v-for="option in options_AMOUNT_OF_CHILDREN" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div class="custom-control custom-checkbox" style="padding-top: 15px; padding-bottom: 15px;">
                    <input type="checkbox" class="custom-control-input" id="check_id" />
                    <label class="custom-control-label" for="defaultUnchecked">Является аминистратором</label>
                </div>
            </div>

            <p>
                <button type="button" class="osnovnButton" style="" @click="add_person()">
                    Добавить
                </button>
            </p>
        </div>
    </div>

    <div v-show="edit_person_TRUE" class="add_news" style="top: 50px">
        <div class="add_content_news">
            <h4 class="h4_new">
                Редактирование информации о сотруднике<i class="bi bi-x-lg close_icon" style="top: 60px" @click="edit_person_TRUE = !edit_person_TRUE"></i>
            </h4>

            <hr>

            <div class="container_add_new">
                <table class="TableCheck">
                    <tr>
                        <td class="TdLev">Фамилия Имя Отчество</td>
                        <td class="TdPrav">
                            <input v-model="person.fio" type="text" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Должность</td>
                        <td class="TdPrav">
                            <select v-model="person.job" selected="selected_JOB" style="width: 80%">
                                <option v-for="option in options_JOB" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Паспортные данные</td>
                        <td class="TdPrav">
                            <input v-model="person.pasport" type="text" placeholder="xx xx xxxx" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Дата рождения</td>
                        <td class="TdPrav">
                            <input v-model="person.birthday" type="date" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Пол</td>
                        <td class="TdPrav">
                            <select v-model="person.male" selected="selected_MALE" style="width: 80%">
                                <option v-for="option in options_MALE" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Заработная плата</td>
                        <td class="TdPrav">
                            <input v-model="person.salary" type="number" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Дата приема на работу:</td>
                        <td class="TdPrav">
                            <input v-model="person.date_of_receipt" type="date" style="width: 80%" />
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Семейное положение:</td>
                        <td class="TdPrav">
                            <select v-model="person.marital_status" selected="selected_MARITAL_STATUS" style="width: 80%">
                                <option v-for="option in options_MARITAL_STATUS" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td class="TdLev">Количество детей:</td>
                        <td class="TdPrav">
                            <select v-model="person.amount_of_children" selected="selected_AMOUNT_OF_CHILDREN" style="width: 80%">
                                <option v-for="option in options_AMOUNT_OF_CHILDREN" :value="option.text" :key="option.text">
                                    {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div class="custom-control custom-checkbox" style="padding-top: 15px; padding-bottom: 15px;">
                    <input type="checkbox" class="custom-control-input" id="edit_checkbox" />
                    <label class="custom-control-label" for="defaultUnchecked">Является администратором</label>
                </div>
            </div>

            <p>
                <button type="button" class="osnovnButton" style="" @click="save_edit_person()">
                    Сохранить изменения
                </button>
            </p>
        </div>
    </div>

    <div class="database">
        <h2 class="color_LB">Список сотрудников</h2>

        <div class="tableContainer">
            <table id="myTable" class="
            table
            tablesorter
            table-hover table-bordered table-striped table-light
          ">
                <thead>
                    <tr class="tableSize">
                        <th scope="col">id</th>
                        <th v-show="ADMIN" scope="col"></th>

                        <th scope="col" @click="SortByName()">ФИО
                            <i v-if="countName % 2 != 0 && countName != 0" class="bi bi-sort-alpha-down"></i>
                            <i v-else-if="countName % 2 == 0 && countName != 0" class="bi bi-sort-alpha-down-alt"></i>
                            <i v-else class="bi bi-arrow-down-up" style="color: gray;"></i>
                        </th>

                        <th v-show="ADMIN" scope="col">Паспорт</th>
                        <th scope="col" @click="SortByBirthday()">Дата рождения</th>

                        <th scope="col" @click="SortByMale()">Пол
                            <i v-if="countMale % 2 != 0 && countMale != 0" class="bi bi-sort-alpha-down"></i>
                            <i v-else-if="countMale % 2 == 0 && countMale != 0" class="bi bi-sort-alpha-down-alt"></i>
                            <i v-else class="bi bi-arrow-down-up" style="color: gray;"></i>
                        </th>

                        <th scope="col" @click="SortByJob()">Должность
                            <i v-if="countJob % 2 != 0 && countJob != 0" class="bi bi-sort-alpha-down"></i>
                            <i v-else-if="countJob % 2 == 0 && countJob != 0" class="bi bi-sort-alpha-down-alt"></i>
                            <i v-else class="bi bi-arrow-down-up" style="color: gray;"></i>
                        </th>

                        <th v-show="ADMIN" scope="col">Дата приема на работу</th>
                        <th v-show="ADMIN" scope="col">Дата увольнения</th>

                        <th v-show="ADMIN" scope="col" @click="SortBySalary()">З/п
                            <i v-if="countSalary % 2 != 0 && countSalary != 0" class="bi bi-sort-down-alt"></i>
                            <i v-else-if="countSalary % 2 == 0 && countSalary != 0" class="bi bi-sort-down"></i>
                            <i v-else class="bi bi-arrow-down-up" style="color: gray;"></i>
                        </th>

                        <th v-show="ADMIN" scope="col">Семейное положение</th>
                        <th v-show="ADMIN" scope="col">Дети</th>
                        <th v-show="ADMIN" scope="col">Логин</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="tableSize" v-for="user in users_slice" :key="user.id">
                        <td class="align-middle">{{ user.id }}</td>

                        <td v-show="ADMIN" class="align-middle">
                            <i class="bi bi-pencil-fill pencil_hover" @click="userEdit(user.id)" style="font-size: 16px;"></i>
                        </td>

                        <td class="align-middle">
                            {{ user.fio }}
                            <i v-show="user.isAdmin" class="bi bi-check-circle" style="color: green" data-bs-toggle="tooltip" title="Администратор"></i>
                        </td>
                        <td v-show="ADMIN" class="align-middle">{{ user.pasport }}</td>
                        <td class="align-middle">{{ user.birthday }}</td>
                        <td class="align-middle">{{ user.male }}</td>
                        <td class="align-middle">{{ user.job }}</td>
                        <td v-show="ADMIN" class="align-middle">
                            {{ user.date_of_receipt }}
                        </td>

                        <td v-show="ADMIN" v-if="user.date_of_dismissal !== null" class="align-middle">
                            <span class="badge rounded-pill bg-secondary">{{
                  new Date(user.date_of_dismissal)
                    .toLocaleString()
                    .split(",")[0]
                }}</span>
                        </td>

                        <td v-show="ADMIN" v-else class="align-middle">
                            {{ user.date_of_dismissal }}
                        </td>

                        <td v-show="ADMIN" class="align-middle" name="ID" id="user.salary">
                            {{ user.salary }}
                        </td>
                        <td v-show="ADMIN" class="align-middle">
                            {{ user.marital_status }}
                        </td>
                        <td v-show="ADMIN" class="align-middle">
                            {{ user.amount_of_children }}
                        </td>
                        <td v-show="ADMIN" class="align-middle">{{ user.email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="page">
            <table class="pagination_table">
                <tr>
                    <td class="pagination_table_lev">
                        Количество строк
                        <select class="select_page" v-model="kolvo_lines" selected="selected_KOLVO_LINES" id="select_lines" @change="change_lines()">
                            <option v-for="option in options_KOLVO_LINES" :value="option.text" :key="option.text">
                                <p @click="click()">{{ option.text }}</p>
                            </option>
                            <option :value="this.users.length" id="option_all">{{this.users.length}} (все)</option>
                            <!-- <option value="" id="option_all">{{this.users.length}}</option> -->
                        </select>
                    </td>
                    <td class="pagination_table_prav" id="btn_page">
                        <button class="btn_page" @click="previous()"><i class="bi bi-caret-left"></i></button>
                        <button v-for="page in this.kolvo_pages" :key="page" class="btn_page" @click="change_page(page)" :class="{ 'page_selected': page === pageNumber }">
                            {{ page }}
                        </button>
                        <button class="btn_page" @click="next()" id="btn_next"><i class="bi bi-caret-right"></i></button>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p class="P_table_page">
                            Показано с {{ this.from + 1 }} по {{ this.to }} запись из
                            {{ this.users.length }}.
                        </p>
                    </td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="jquery.maskedinput.js" type="text/javascript"></script>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css";

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
            OK_FALSE: false,
            ADMIN: false,
            add_person_TRUE: false,
            edit_person_TRUE: false,
            user_isAdmin: false,
            status: "",

            selected_KOLVO_LINES: this.kolvo_lines,
            options_KOLVO_LINES: [{
                    text: "5",
                },
                {
                    text: "10",
                },
                {
                    text: "15",
                },
                {
                    text: "20",
                },
                // {
                //     text: "все",
                // },
            ],

            selected_MARITAL_STATUS: this.MARITAL_STATUS,
            options_MARITAL_STATUS: [{
                    text: "Жен/ЗМ",
                },
                {
                    text: "Хол/НЗ",
                },
                {
                    text: "Разв.",
                },
                {
                    text: "Вдов.",
                },
            ],

            selected_AMOUNT_OF_CHILDREN: this.AMOUNT_OF_CHILDREN,
            options_AMOUNT_OF_CHILDREN: [{
                    text: "0",
                },
                {
                    text: "1",
                },
                {
                    text: "2",
                },
                {
                    text: "3",
                },
                {
                    text: "более 3",
                },
            ],

            selected_JOB: this.JOB,
            options_JOB: [{
                    text: "директор",
                },
                {
                    text: "заместитель директора",
                },
                {
                    text: "ведущий инженер",
                },
                {
                    text: "инженер",
                },
                {
                    text: "менеджер по персоналу",
                },
                {
                    text: "слесарь",
                },
                {
                    text: "электрослесарь",
                },
                {
                    text: "бухгалтер",
                },
                {
                    text: "экономист",
                },
                {
                    text: "начальник смены",
                },
                {
                    text: "контролер",
                },
                {
                    text: "заведующий хозяйством",
                },
            ],

            options_MALE: [{
                    text: "мужской",
                },
                {
                    text: "женский",
                },
            ],
        };
    }

    response = "Сервер с базой данных не запущен";
    users = [];
    users_message = [];
    token = "";
    ADMIN = false;
    add_person_TRUE = false;
    FIO = "";
    BIRTHDAY = "";
    MALE = "";
    EMAIL = "";
    JOB = "";
    SALARY = "";
    DATE_OF_RECEIPT = "";
    AMOUNT_OF_CHILDREN = "";
    selected_MARITAL_STATUS = "";
    selected_AMOUNT_OF_CHILDREN = "";
    MARITAL_STATUS = "";
    PASPORT = "";
    user_isAdmin = false;
    OK_TRUE = false;
    OK_FALSE = false;
    info_push = "";

    form = {
        fio: "",
        pasport: "",
        birthday: "",
        male: "",
        job: "",
        date_of_receipt: "",
        salary: "",
        marital_status: "",
        amount_of_children: "",
        isAdmin: true,
    };

    async mounted() {
        console.log(new Date("01.01.1929").getTime())

        this.token = localStorage.token;
        const result = await this.$store.dispatch("usersList");
        console.log(result)
        this.users = result.data;
        console.log(result.data)
        console.log(result.data.id)
        console.log(result.data[3].date_of_dismissal)

        this.func_me_inf();

        await this.pagination();
        // await this.selected_page();
    }

    kolvo_lines = 10;
    pageNumber = 1;
    from = 0;
    to = 10;
    users_slice = [];
    kolvo_pages = 1;

    async pagination() {
        // await this.selected_page()
        await this.reset_sorting()

        this.kolvo_pages = Math.ceil(this.users.length / this.kolvo_lines);

        this.from = (this.pageNumber - 1) * this.kolvo_lines;
        this.to = this.pageNumber * this.kolvo_lines;

        console.log(this.from + " до " + this.to);

        this.users_slice = this.users.slice(this.from, this.to);
        // console.log(this.users_slice)
    }

    async change_page(page: number) {
        this.pageNumber = page;
        await this.pagination();
    }

    async change_lines() {
        console.log("проверка " + this.kolvo_lines);

        this.kolvo_pages = Math.ceil(this.users.length / this.kolvo_lines);

        this.pageNumber = 1;
        console.log("количество страниц " + this.kolvo_pages);

        await this.pagination();
    }

    async next() {
        this.pageNumber++
        if (this.pageNumber > this.kolvo_pages) {
            this.pageNumber--
            console.log(this.pageNumber)
            return
        }
        console.log(this.pageNumber)
        await this.pagination();
    }

    async previous() {
        this.pageNumber--
        if (this.pageNumber < 1) {
            this.pageNumber++
            console.log(this.pageNumber)
            return
        }
        console.log(this.pageNumber)
        await this.pagination();
    }

    /////////////////сортировка/////////////////////
    countName = 0
    async SortByName() {
        this.countMale = 0
        this.countJob = 0
        this.countSalary = 0

        if (this.countName % 2 == 0) {
            this.users_slice.sort((a, b) => a.fio.localeCompare(b.fio))
        } else {
            this.users_slice.reverse();
        }

        this.countName++
    }

    countMale = 0
    async SortByMale() {
        this.countName = 0
        this.countJob = 0
        this.countSalary = 0

        if (this.countMale % 2 == 0) {
            this.users_slice.sort((a, b) => a.male.localeCompare(b.male))
        } else {
            this.users_slice.reverse();
        }

        this.countMale++
    }

    countJob = 0
    async SortByJob() {
        this.countName = 0
        this.countMale = 0
        this.countSalary = 0

        if (this.countJob % 2 == 0) {
            this.users_slice.sort((a, b) => a.job.localeCompare(b.job))
        } else {
            this.users_slice.reverse();
        }

        this.countJob++
    }

    countSalary = 0
    async SortBySalary() {
        this.countName = 0
        this.countMale = 0
        this.countJob = 0

        if (this.countSalary % 2 == 0) {
            this.users_slice.sort(function (a, b) {
                return a.salary - b.salary
            })
        } else {
            this.users_slice.reverse();
        }

        this.countSalary++
    }

    countBirthday = 0
    async SortByBirthday() {
        this.countName = 0
        this.countMale = 0
        this.countJob = 0

        if (this.countBirthday % 2 == 0) {
            alert(new Date(a.birthday).getTime())
            var dateA = new Date(a.birthday).getTime();
            var dateB = new Date(b.birthday).getTime();
            
            return dateA - dateB;

            // this.users_slice.sort(function (a, b) {
            //     var c = new Date(a.birthday);
            //     var d = new Date(b.birthday);
            //     return c - d;

                // return new Date(a.birthday) - new Date(b.birthday);
            // });

        } else {
            this.users_slice.reverse();
        }

        this.countBirthday++
    }

    async reset_sorting() {
        this.countName = 0
        this.countMale = 0
        this.countJob = 0
        this.countSalary = 0
    }

    ////////////редактирование///////////////
    edit_person_TRUE = false
    person_fio = ''
    person_job = ''
    person_salary = ''
    person_pasport = ''
    person_marital_status = ''
    person_male = ''
    person_date_of_receipt = ''
    person_birthday = ''
    person_amount_of_children = ''

    ID_edit_person = ''

    person = {
        fio: "",
        pasport: "",
        birthday: "",
        male: "",
        job: "",
        date_of_receipt: "",
        salary: "",
        marital_status: "",
        amount_of_children: "",
        isAdmin: false
    };

    async userEdit(id: any) {
        this.ID_edit_person = id

        const result = await this.$store.dispatch("inform_person", id);
        console.log(result)

        this.edit_person_TRUE = true

        this.person.fio = result.fio
        this.person.job = result.job
        this.person.salary = result.salary
        this.person.pasport = result.pasport
        this.person.marital_status = result.marital_status
        this.person.male = result.male
        this.person.amount_of_children = result.amount_of_children

        var poi = result.date_of_receipt.split(".")
        this.person.date_of_receipt = poi[2] + '-' + poi[1] + '-' + poi[0]

        var poi2 = result.birthday.split(".")
        this.person.birthday = poi2[2] + '-' + poi2[1] + '-' + poi2[0]

        console.log(this.person_date_of_receipt)
        console.log(this.person_birthday)

        if (result.isAdmin == true) {
            ( < HTMLInputElement > (document.getElementById("edit_checkbox"))).checked = true;
            ( < HTMLInputElement > (document.getElementById("edit_checkbox"))).disabled = true;
        } else {
            ( < HTMLInputElement > (document.getElementById("edit_checkbox"))).checked = false;
            ( < HTMLInputElement > (document.getElementById("edit_checkbox"))).disabled = false;
        }

        // alert("2017.07.04".replace(/\./g, "-"));

    }

    async save_edit_person() {
        var poi = this.person.date_of_receipt.split("-")
        this.person.date_of_receipt = poi[2] + '.' + poi[1] + '.' + poi[0]

        var poi2 = this.person.birthday.split("-")
        this.person.birthday = poi2[2] + '.' + poi2[1] + '.' + poi2[0]

        this.person.isAdmin = ( < HTMLInputElement > (document.getElementById("edit_checkbox"))).checked;

        // console.log(poi)

        console.log(this.person)

        const result = await this.$store.dispatch("edit_inform_person", {
            params: this.ID_edit_person,
            form: this.person
        });
        console.log(result)

        if (result.success === true) {
            this.OK_TRUE = true;
            this.info_push = "Изменения успешно внесены";
            this.edit_person_TRUE = false;

            let vm = this;
            setTimeout(function () {
                vm.OK_TRUE = false;
                window.location.reload();
            }, 2000);
        } else {
            this.OK_FALSE = true;
            this.info_push = result.message;

            let vm = this;
            setTimeout(function () {
                vm.OK_FALSE = false;
            }, 4000);
        }

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    async func_me_inf() {
        const result = await this.$store.dispatch("me_inform");

        if (result.isAdmin === true) {
            this.ADMIN = true;
        }

        this.FIO = result.fio;
        this.BIRTHDAY = result.birthday;
        this.MALE = result.male;
        this.EMAIL = result.email;
        this.JOB = result.job;
        this.DATE_OF_RECEIPT = result.date_of_receipt;
        this.AMOUNT_OF_CHILDREN = result.amount_of_children;
        this.SALARY = result.salary;
        this.MARITAL_STATUS = result.marital_status;
        this.PASPORT = result.pasport;
        this.user_isAdmin = result.isAdmin;

        console.log(result.date_of_dismissal);
    }

    async add_person() {
        var poi = this.form.date_of_receipt.split("-")
        this.form.date_of_receipt = poi[2] + '.' + poi[1] + '.' + poi[0]

        var poi2 = this.form.birthday.split("-")
        this.form.birthday = poi2[2] + '.' + poi2[1] + '.' + poi2[0]

        this.form.isAdmin = ( < HTMLInputElement > (document.getElementById("check_id"))).checked;
        console.log(this.form);
        // const result = await this.$store.dispatch("create_person", this.form);

        let vm = this;
        await this.$store
            .dispatch("create_person", this.form)
            .then((result) => {
                if (result.success === true) {
                    this.OK_TRUE = true;
                    this.info_push = result.message;
                    this.add_person_TRUE = false;

                    setTimeout(function () {
                        vm.OK_TRUE = false;
                        window.location.reload();
                    }, 2000);
                } else {
                    this.OK_FALSE = true;
                    this.info_push = result.message;

                    let vm = this;
                    setTimeout(function () {
                        vm.OK_FALSE = false;
                    }, 4000);
                }

                console.log(result);
                console.log(result.success);

                return result;
            })
            .catch(function (error) {
                // let s = vm;
                // if (error.response.status === 500) {
                //     s.Error_push("Данный email уже успользуется")
                // }
                // if (error.response.status === 400) {
                //     s.Error_push("Неверная длина пароля")
                // }
                console.log(error.response.status); // getting here
                return error;
            });
    }

    async Error_push(info: string) {
        this.OK_FALSE = true;
        this.info_push = info;

        let vm = this;
        setTimeout(function () {
            vm.OK_FALSE = false;
        }, 4000);
    }
}
</script>

<style lang="scss">
</style>
