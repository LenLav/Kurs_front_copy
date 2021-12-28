<template>
  <body>
    <div v-show="OK_TRUE" class="push">
      <div class="push_content">
        <div id="text_push_id" class="push_content_true">
          <span>{{ info_push }}</span>
          <i
            class="bi bi-x-circle"
            style="padding-left: 10px"
            @click="OK_TRUE = !OK_TRUE"
          ></i>
        </div>
      </div>
    </div>

    <div v-show="OK_FALSE" class="push">
      <div class="push_content">
        <div id="text_push_id" class="push_content_false">
          <span>{{ info_push }}</span>
          <i
            class="bi bi-x-circle"
            style="padding-left: 10px"
            @click="OK_FALSE = !OK_FALSE"
          ></i>
        </div>
      </div>
    </div>

    <div
      v-show="ADMIN"
      class="push"
      style="top: 50px; z-index: 10"
      @click="add_person_TRUE = true"
    >
      <div class="push_content_news">
        <i class="bi bi-plus-circle" style="padding-right: 10px"></i>
        <span>Добавить сотрудника в базу</span>
      </div>
    </div>

    <div v-show="add_person_TRUE" class="add_news" style="top: 50px">
      <div class="add_content_news">
        <h4 class="h4_new">
          Форма добавления сотрудника<i
            class="bi bi-x-lg close_icon"
            style="top: 60px"
            @click="add_person_TRUE = !add_person_TRUE"
          ></i>
        </h4>

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
                <select
                  v-model="form.job"
                  selected="selected_JOB"
                  style="width: 80%"
                >
                  <option
                    v-for="option in options_JOB"
                    :value="option.text"
                    :key="option.text"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="TdLev">Паспортные данные</td>
              <td class="TdPrav">
                <input
                  v-model="form.pasport"
                  type="text"
                  placeholder="xx xx xxxx"
                  style="width: 80%"
                />
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
                <select
                  v-model="form.male"
                  selected="selected_MALE"
                  style="width: 80%"
                >
                  <option
                    v-for="option in options_MALE"
                    :value="option.text"
                    :key="option.text"
                  >
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
                <input
                  v-model="form.date_of_receipt"
                  type="date"
                  style="width: 80%"
                />
              </td>
            </tr>
            <tr>
              <td class="TdLev">Семейное положение:</td>
              <td class="TdPrav">
                <select
                  v-model="form.marital_status"
                  selected="selected_MARITAL_STATUS"
                  style="width: 80%"
                >
                  <option
                    v-for="option in options_MARITAL_STATUS"
                    :value="option.text"
                    :key="option.text"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="TdLev">Количество детей:</td>
              <td class="TdPrav">
                <select
                  v-model="form.amount_of_children"
                  selected="selected_AMOUNT_OF_CHILDREN"
                  style="width: 80%"
                >
                  <option
                    v-for="option in options_AMOUNT_OF_CHILDREN"
                    :value="option.text"
                    :key="option.text"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </td>
            </tr>
          </table>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="check_id" />
            <label class="custom-control-label" for="defaultUnchecked"
              >Является аминистратором</label
            >
          </div>
        </div>

        <p>
          <button
            type="button"
            class="osnovnButton"
            style=""
            @click="add_person()"
          >
            Добавить
          </button>
        </p>
      </div>
    </div>

    <div class="database">
      <h1 class="color_LB">Список сотрудников</h1>

      <div class="tableContainer">
        <table
          id="myTable"
          class="
            table
            tablesorter
            table-hover table-bordered table-striped table-light
          "
        >
          <thead>
            <tr class="tableSize">
              <th scope="col">id</th>
              <th v-show="ADMIN" scope="col"></th>
              <th scope="col">ФИО</th>
              <th v-show="ADMIN" scope="col">Паспорт</th>
              <th scope="col">Дата рождения</th>
              <th scope="col">Пол</th>
              <th scope="col">Должность</th>
              <th v-show="ADMIN" scope="col">Дата приема на работу</th>
              <th v-show="ADMIN" scope="col">Дата увольнения</th>
              <th v-show="ADMIN" scope="col">З/п</th>
              <th v-show="ADMIN" scope="col">Семейное положение</th>
              <th v-show="ADMIN" scope="col">Дети</th>
              <th v-show="ADMIN" scope="col">Логин</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tableSize" v-for="user in users_slice" :key="user.id">
              <td class="align-middle">{{ user.id }}</td>
              <td v-show="ADMIN" class="align-middle">
                <i class="bi bi-pencil-fill" @click="userEdit(user.id)"></i>
              </td>
              <td class="align-middle">
                {{ user.fio }}
                <i
                  v-show="user.isAdmin"
                  class="bi bi-check-circle"
                  style="color: green"
                  data-bs-toggle="tooltip"
                  title="Администратор"
                ></i>
              </td>
              <td v-show="ADMIN" class="align-middle">{{ user.pasport }}</td>
              <td class="align-middle">{{ user.birthday }}</td>
              <td class="align-middle">{{ user.male }}</td>
              <td class="align-middle">{{ user.job }}</td>
              <td v-show="ADMIN" class="align-middle">
                {{ user.date_of_receipt }}
              </td>

              <td
                v-show="ADMIN"
                v-if="user.date_of_dismissal !== null"
                class="align-middle"
              >
                <span class="badge rounded-pill bg-secondary">{{
                  new Date(user.date_of_dismissal)
                    .toLocaleString()
                    .split(",")[0]
                }}</span>
              </td>

              <td v-show="ADMIN" v-else class="align-middle">
                {{ user.date_of_dismissal }}
              </td>

              <td
                v-show="ADMIN"
                class="align-middle"
                name="ID"
                id="user.salary"
              >
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
              <select
                class="select_page"
                v-model="kolvo_lines"
                selected="selected_KOLVO_LINES"
                id="select_lines"
                @change="change_lines()"
              >
                <option
                  v-for="option in options_KOLVO_LINES"
                  :value="option.text"
                  :key="option.text"
                >
                  <p @click="click()">{{ option.text }}</p>
                </option>
              </select>
            </td>
            <td class="pagination_table_prav" id="btn_page">
              <button
                v-for="page in this.kolvo_pages"
                :key="page"
                class="btn_page"
                @click="change_page(page)"
                :class="{ 'page_selected': page === pageNumber }"
              >
                {{ page }}
              </button>
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

import { Component, Vue } from "vue-property-decorator";

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
      user_isAdmin: false,
      status: "",

      selected_KOLVO_LINES: this.kolvo_lines,
      options_KOLVO_LINES: [
        {
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
      ],

      selected_MARITAL_STATUS: this.MARITAL_STATUS,
      options_MARITAL_STATUS: [
        {
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
      options_AMOUNT_OF_CHILDREN: [
        {
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
      options_JOB: [
        {
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
      ],

      options_MALE: [
        {
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
    this.token = localStorage.token;
    const result = await this.$store.dispatch("usersList");
    this.users = result.data;

    this.func_me_inf();

    await this.pagination();
    await this.selected_page();
  }

  kolvo_lines = 10;
  pageNumber = 1;
  from = 0;
  to = 10;
  users_slice = [];
  kolvo_pages = 1;

  async pagination() {
    // await this.selected_page()

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

  async selected_page() {
    for (let i = 1; i <= this.kolvo_pages; i++) {
      var id = "page" + i;
      var checked_page = (<HTMLInputElement>document.getElementById(id))
        .checked;
      if (checked_page === true) {
        this.pageNumber = i;
        await this.pagination();
        console.log(id);
        return;
      }
    }
  }

  async change_lines() {
    console.log(this.kolvo_lines);

    this.kolvo_pages = Math.ceil(this.users.length / this.kolvo_lines);
    this.pageNumber = 1;
    console.log("количество страниц " + this.kolvo_pages);

    await this.pagination();
  }

  

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

  // async userDelete(id: any) {
  //     alert(`Удаление пользователя id:${id}`);
  //     // this.$router.push("/");
  // }

  async add_person() {
    this.form.isAdmin = (<HTMLInputElement>(
      document.getElementById("check_id")
    )).checked;
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
