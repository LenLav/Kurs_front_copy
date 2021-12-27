<template>
<body>
    <div class="analytics">

        <div>
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
            <div class="form-check form-check-inline">
                <input @click="check_all()" class="form-check-input" type="radio" name="inlineRadioOptions" id="all" value="option5">
                <label class="form-check-label" for="inlineRadio3">всё время</label>
            </div>
        </div>

        <div class="container_chart">
            <!-- <mdb-container> -->
            <mdb-bar-chart class="line_chart" :data="barChartData_salary" :options="barChartOptions_salary" :width="600" :height="300"></mdb-bar-chart>
            <!-- </mdb-container> -->
        </div>

        <table class="tabl_stat">
            <tr>
                <td class="TdLev_stat">
                    <div style="background-color: rgb(255, 255, 255);">
                        <p>Семейное положение</p>
                        <mdb-pie-chart class="line_chart" datalabels :data="pieChartData_marital" :options="pieChartOptions_marital" :width="300" :height="300" />
                    </div>
                </td>

                <td class="TdPrav_stat">
                    <div style="background-color: rgb(255, 255, 255);">
                        <p>Пол</p>
                        <mdb-doughnut-chart :data="doughnutChartData" :options="doughnutChartOptions" :width="300" :height="300" />
                    </div>
                </td>
            </tr>
        </table>

        <div class="container_chart">
            <!-- <mdb-container> -->
            <mdb-bar-chart class="line_chart" :data="barChartData_child" :options="barChartOptions_child" :width="600" :height="300"></mdb-bar-chart>
            <!-- </mdb-container> -->
        </div>

    </div>
</body>
</template>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="jquery.maskedinput.js" type="text/javascript"></script><script lang="ts">

</script><script>
// 
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    mdbBarChart,
    mdbContainer,
    mdbPieChart,
    mdbDoughnutChart,
} from "mdbvue";

@Component({
    components: {
        mdbBarChart,
        mdbContainer,
        mdbPieChart,
        mdbDoughnutChart,
    },
})
export default class Home extends Vue {
    data() {
        return {
            ADMIN: false,

            barChartData_salary: this.datacollection_salary,

            barChartOptions_salary: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }]
                }
            },

            barChartData_child: this.datacollection_children,

            barChartOptions_child: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }]
                }
            },

            pieChartData_marital: this.datacollection_marital,

            pieChartOptions_marital: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        color: "white",
                        align: "center",
                        font: {
                            size: 14
                        },
                        formatter: value => {
                            const [dataset] = this.pieChartData_marital.datasets;
                            const setValue = dataset.data.reduce((a, b) => a + b);

                            return `${Math.round((value / setValue) * 100)}%`;
                        }
                    }
                }
            },

        doughnutChartData:    this.datacollection_male,

        doughnutChartOptions: {
          responsive: false,
          maintainAspectRatio: false
        },

        };
    }

    async mounted() {
        this.token = localStorage.token;

        // this.GetDataChild()
        // console.log(this.datacollection_children)

        this.check_quarter()
    }

    async check_month() {
        console.log("check_month")
        this.form_analitic.time = "месяц"
        await this.GetAnalitic()

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
        this.GetDataMale()
    }

    async check_quarter() {
        console.log("check_quarter")
        this.form_analitic.time = "квартал"
        await this.GetAnalitic()

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
        this.GetDataMale()
    }

    async check_half_year() {
        console.log("check_half_year")
        this.form_analitic.time = "полгода"
        await this.GetAnalitic()

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
        this.GetDataMale()
    }

    async check_year() {
        console.log("check_year")
        this.form_analitic.time = "год"
        await this.GetAnalitic()

        console.log(this.salary_mass)
        console.log(this.children_mass)
        console.log(this.marital_mass)

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
        this.GetDataMale()
    }

    async check_all() {
        console.log("check_all")
        this.form_analitic.time = "за все время"
        await this.GetAnalitic()

        this.GetDataSalary()
        this.GetDataChild()
        this.GetDataMarital()
        this.GetDataMale()
    }

    form_analitic = {
        time: ""
    }

    async GetAnalitic() {
        await this.$store.dispatch("get_analitic", this.form_analitic)
            .then(result => {
                if (result.success === true) {

                    this.salary_mass = [result.data[2].less_20, result.data[2].c20_40, result.data[2].c40_60, result.data[2].c60_80, result.data[2].c80_100, result.data[2].c100_120, result.data[2].c120_150, result.data[2].more_150]

                    this.children_mass = [result.data[3].zero, result.data[3].one, result.data[3].two, result.data[3].three, result.data[3].more_three]

                    this.marital_mass = [result.data[1].genzm, result.data[1].holnz, result.data[1].razv, result.data[1].vdov]

                    this.male_mass = [result.data[0].g, result.data[0].m]

                } else {

                }

                // console.log(this.form_analitic)
                console.log(this.salary_mass)
                console.log(this.children_mass)
                console.log(this.marital_mass)
                console.log(this.male_mass)
                return result;
            })
            .catch(function (error) {
                console.log(this.form_analitic)
                console.log(error.response.status);
                return error;
            });
    }

    datacollection_salary = {}
    datacollection_children = {}
    datacollection_marital = {}
    datacollection_male = {}

    async GetDataSalary() {
        this.columnNames_salary = ["менее 20", "20-40", "40-60", "60-80", "80-100", "100-120", "120-150", "более 150"]

        this.datacollection_salary = {
            labels: this.columnNames_salary,
            datasets: [{
                label: "Заработная плата",
                data: this.salary_mass,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(149, 204, 22, 0.2)",
                    "rgba(204, 22, 174, 0.2)",
                ],

                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(149, 204, 22, 1)",
                    "rgba(204, 22, 174, 1)",
                ],

                borderWidth: 1
            }, ]
        }

        console.log(this.datacollection_salary)
        this.barChartData_salary = this.datacollection_salary

    }

    async GetDataChild() {
        this.columnNames_children = ["0", "1", "2", "3", "более 3"]

        this.datacollection_children = {
            labels: this.columnNames_children,
            datasets: [{
                label: "Количество детей",
                data: this.children_mass,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    // "rgba(255, 159, 64, 0.2)"
                ],

                borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    // "rgba(255, 159, 64, 1)"
                ],

                borderWidth: 1
            }, ]
        }

        console.log(this.datacollection_children)
        this.barChartData_child = this.datacollection_children

    }

    async GetDataMarital() {
        this.columnNames_marital = ["Жен/ЗМ", "Хол/НЗ", "Разв.", "Вдов."]

        this.datacollection_marital = {
            labels: this.columnNames_marital,
            datasets: [{
                data: this.marital_mass,
                backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1"
                ],
                hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5"
                ]
            }]
        }

        console.log(this.datacollection_marital)
        this.pieChartData_marital = this.datacollection_marital
    }

    async GetDataMale() {
        this.columnNames_male = ["женский", "мужской"]

        this.datacollection_male = {
          labels: this.columnNames_male,
          datasets: [
            {
              data: this.male_mass,
              backgroundColor: [
                "#e9a85e",
                "#8fe6c1",
              ],
              hoverBackgroundColor: [
                "#e9a85e",
                "#8fe6c1",
              ]
            }
          ]
        },

        console.log(this.datacollection_male)
        this.doughnutChartData = this.datacollection_male
    }

}
</script>
