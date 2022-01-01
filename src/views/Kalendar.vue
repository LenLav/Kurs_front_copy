<template>
<body>

    <div class="news">

        

        <button @click="poi()">qwe</button>

        <!-- <div v-show="Block_news_TRUE"> -->

        <div class="form-check form-check-inline">
            <input @click="check_month()" class="form-check-input" type="radio" name="inlineRadioOptions" id="month" value="option1">
            <label class="form-check-label" for="inlineRadio1">месяц</label>
        </div>
        <div class="form-check form-check-inline">
            <input @click="check_quarter()" class="form-check-input" type="radio" name="inlineRadioOptions" id="quarter" value="option2" checked>
            <label class="form-check-label" for="inlineRadio2">квартал</label>
        </div>
        <div class="form-check form-check-inline">
            <input @click="check_half_year()" class="form-check-input" type="radio" name="inlineRadioOptions" id="half_year" value="option3">
            <label class="form-check-label" for="inlineRadio3">полугодие</label>
        </div>
        <div class="form-check form-check-inline">
            <input @click="check_year()" class="form-check-input" type="radio" name="inlineRadioOptions" id="year" value="option4">
            <label class="form-check-label" for="inlineRadio3">год</label>
        </div>

        <!-- <div>
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </div> -->

        <div class="alert alert-primary" role="alert">
            A simple primary alert—check it out!
        </div>

        <!-- <template>
            <v-data-table item-key="name" class="elevation-1" loading loading-text="Loading... Please wait"></v-data-table>
        </template> -->

        <div>
            Таблица
            <b-table></b-table>
        </div>

    </div>

</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="jquery.maskedinput.js" type="text/javascript"></script>
<script src="https://unpkg.com/v-data-table/dist/v-data-table.js"></script>
<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";

import 'v-data-table'
import 'v-data-table/dist/v-data-table.js'
import 'v-data-table/src/main.js'
import 'v-data-table/dist-module/main.js'
// import 'v-data-table/dist-module/main.js.map'
import 'v-data-table/src/Components/v-data-table.vue'

// import DataTable from 'v-data-table'

// import {    mdbBarChart,    mdbContainer} from "mdbvue";

@Component({
    components: {
        // DataTable
    },
})

export default class Home extends Vue {
    data() {
        return {
            ADMIN: false,

            fields: [{
                    key: 'last_name',
                    sortable: true
                },
                {
                    key: 'first_name',
                    sortable: false
                },
                {
                    key: 'age',
                    label: 'Person age',
                    sortable: true,
                    // Variant applies to the whole column, including the header and footer
                    variant: 'danger'
                }
            ],
            items: [{
                    isActive: true,
                    age: 40,
                    first_name: 'Dickerson',
                    last_name: 'Macdonald'
                },
                {
                    isActive: false,
                    age: 21,
                    first_name: 'Larsen',
                    last_name: 'Shaw'
                },
                {
                    isActive: false,
                    age: 89,
                    first_name: 'Geneva',
                    last_name: 'Wilson'
                },
                {
                    isActive: true,
                    age: 38,
                    first_name: 'Jami',
                    last_name: 'Carney'
                }
            ]
        }
    }

    token = "";

    async mounted() {

        // this.token = localStorage.token;
        // var rates = document.getElementById('inlineRadio2')
        // var monthChecked = ( < HTMLInputElement > document.getElementById('month')).checked;
        // var monthQuarter = ( < HTMLInputElement > document.getElementById('quarter')).checked;
        // var monthHalf_year = ( < HTMLInputElement > document.getElementById('half_year')).checked;
        // var monthYear = ( < HTMLInputElement > document.getElementById('year')).checked;

        // console.log(monthChecked)
        // console.log(monthQuarter)
        // console.log(monthHalf_year)
        // console.log(monthYear)

    }

    async check_month() {
        var monthChecked = ( < HTMLInputElement > document.getElementById('month')).checked;
        var monthQuarter = ( < HTMLInputElement > document.getElementById('quarter')).checked;
        var monthHalf_year = ( < HTMLInputElement > document.getElementById('half_year')).checked;
        var monthYear = ( < HTMLInputElement > document.getElementById('year')).checked;

        console.log(monthChecked)
        console.log(monthQuarter)
        console.log(monthHalf_year)
        console.log(monthYear)
    }

    push_ = ''

    async poi() {
        await this.$store.dispatch("show_push", true);
        await this.$store.dispatch("add_info_push", "Успешно");

        let vm = this;
        setTimeout(function () {
            vm.$store.dispatch("show_push", false);
            vm.$store.dispatch("add_info_push", "");
        }, 2000);

        // const result = await this.$store.dispatch("show_push", false);
        // const result2 = await this.$store.dispatch("add_info_push", "");
        // // console.log(result)
        // // this.token = localStorage.token;
        // this.push_ = localStorage.push;
        // // console.log(this.token)
        // console.log(this.push_)
    }

}
</script>
