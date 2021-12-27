<template>
<body>
    <div class="home">
        <div class="pictures">

            <div id="carouselExampleSlidesOnly" class="carousel slide " data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="7000">
                        <img src="../img/Carousel2.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block   trickcenter">
                            <div>
                                <h1>Курский завод тракторных запчастей</h1>
                                <p style="font-size: 20px;">ОАО «Курский завод тракторных запчастей и агромашин» («Курскагромаш») - машиностроительное предприятие, специализирующееся на производстве запасных частей к сельскохозяйственной технике.</p>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="7000">
                        <img src="../img/Carousel1.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block   trickcenter" >
                            <div style="text-align: left;">
                                <h2>Основная продукция Курскагромаш:</h2>
                                <ul style="font-size: 20px;">
                                  <li>Запчасти к тракторам;</li>
                                  <li>Мотоблоки и мотокультиваторы;</li>
                                  <li>Средства малой механизации;</li>
                                  <li>Инвентарь садово-огородный и прочие.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="10000">
                        <img src="../img/Carousel4.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block trickcenter">
                            <div style="font-size: 20px;">
                                <p>Курский завод тракторных запчастей (КЗТЗ) — предприятие, территория которого раскинулась на 4 гектара. КЗТЗ был основан 25 октября 1953 года. На заводе работало около 10 000 человек.</p>
                                <p>Курский завод тракторных запчастей и агромашин также производил и реализовал оборудование и механизмы для коммунального хозяйства, в том числе водомеры. Изготавливлял отливки из серого чугуна и алюминиевых сплавов.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Предыдущий</span>
                </a> -->

               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>

            </div>

        </div>
        <!-- <div>
<h2>Курский завод тракторных запчастей</h2>
    <h3>Самый крупный завод города Курска</h3>
    </div> -->

    </div>
</body>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";
import "bootstrap/dist/css/bootstrap.min.css";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
    components: {
        // HelloWorld,
    },
})
export default class Home extends Vue {}
</script>

<style lang="scss">

</style>
