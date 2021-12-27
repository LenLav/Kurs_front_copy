<template>
<body>

    <div v-show="list_problem_TRUE" class="push" @click="add_new()">
        <div class="push_content">
            <div class="push_content_news">
                <span>Показать список проблем</span>
            </div>
        </div>
    </div>


    <div v-show="OK_TRUE" class="push">
        <div class="push_content">

            <div id="text_push_id" class="push_content_true">
                <span>{{info_push}}</span>
                <i class="bi bi-x-circle" style="padding-left: 10px;" @click="OK_TRUE = !OK_TRUE"></i>
            </div>
        </div>
    </div>



    <div v-show="false" class="add_news">

        <div class="add_content_news">
            <h4 class="h4_new">Опишите свою проблему<i class="bi bi-x-lg close_icon" @click="add_news_TRUE = !add_news_TRUE"></i></h4>

            <div class="container_add_new">
              
                <!-- <p class="p_add_new">Поле для ввода текса новости</p> -->
                <p><textarea class="info_add_new" v-model="form.info"></textarea></p>
            </div>

            <p><button type="button" class="osnovnButton" style="" @click="save_new()">Отправить</button></p>
        </div>
    </div>



    <div class="news">
      <div class="block_news color_DB">
                <h4>Опишите свою проблему</h4>
                <p><textarea class="tekh_input" v-model="form.info"></textarea></p>
                <p><button type="button" class="osnovnButton" style="" @click="save_new()">Отправить</button></p>
            </div>


        </div>

</body>
</template>

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
            add_news_TRUE: false,
            Block_news_TRUE: true,
            list_problem_TRUE: false,
        }
    }

    token = "";

    OK_TRUE = false
    add_news_TRUE = "false"
    Block_news_TRUE = "true"
    list_problem_TRUE = "false"
    news = []

    form = {
        info: ""
    }

    info_push = ""
    

    async mounted() {
        this.token = localStorage.token;

        const result = await this.$store.dispatch("me_inform");

       

        if (result.isAdmin === true) {
            this.OK_TRUE = false
            this.info_push = "Успешно отправлено"
            this.list_problem_TRUE = "true"
        }
        else{
          this.list_problem_TRUE = "false"
        }
    }

    

    
    
}
</script>
