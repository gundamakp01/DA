<template>
    <footer class="mt-5 py-5 ">
        <div class="row container mx-auto pt-5 p-0">
            <div class="footer-col col-lg-3 col-md-6">
                <a href="#"> <img src="../assets/img/logo2.png" alt="logo2"></a>
                <p class="pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quas eum laborum
                    sequi, facilis
                    ullam consequuntur iusto dicta culpa nobis</p>
            </div>
            <div class="footer-col col-lg-3 col-md-6">
                <h5 class="pb-2">Featured</h5>
                <ul class="text-uppercase ">
                    <li><a href="#featured">man</a> </li>
                    <li><a href="#cloths">woman</a></li>
                    <li><a href="#">boys</a></li>
                    <li><a href="#">girls</a></li>
                    <li><a href="#new">new arraivals</a></li>
                    <li><a href="#featured">shoes</a></li>
                    <li><a href="#">cloths</a></li>
                </ul>
            </div>
            <div class="footer-col col-lg-3 col-md-6">
                <h5 class="pb-2">Contact Us</h5>
                <div>
                    <h6 class="text-uppercase mt-2">Address</h6>
                    <p>235 Hoàng Quốc Việt, Cổ Nhuế, <br>Bắc Từ Liêm, Hà Nội</p>
                </div>
                <div>
                    <h6 class="text-uppercase mt-2">Phone</h6>
                    <a href="tel:+917048432374">0964563504</a>
                </div>
                <div>
                    <h6 class="text-uppercase mt-2">Email</h6>
                    <a href="mailto:yashborda123@gmail.com">kienblock2908@gmail.com
</a>
                </div>
            </div>
            <div class="footer-col col-lg-3 col-md-6">
                <h5 class="pb-2">Instagram</h5>
                <div class="row insta-img">
                    <a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="../assets/img/insta/1.jpg" alt="insta1">
                    </a>
                    <a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="../assets/img/insta/2.jpg" alt="insta2">
                    </a>
                    <a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="../assets/img/insta/3.jpg" alt="insta3">
                    </a>
                    <a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="../assets/img/insta/4.jpg" alt="insta4">
                    </a>
                    <a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="../assets/img/insta/5.jpg" alt="insta5">
                    </a>
                    <a href="#" class="w-25 h-100"><img class="img-fluid mb-3" src="../assets/img/insta/6.jpg" alt="insta6">
                    </a>
                </div>
            </div>
        </div>

        <div class=" mt-5">
            <div class="row container g-3 mx-auto">
                <div class="col-md-6 col-lg-4">
                    <img src="../assets/img/payment.png" alt="">
                </div>
                <div class="col-md-6 col-lg-4 ">
                    <p>Copyright © 2024 <a class="text-white" target="_blank" href="https://webdev531.000webhostapp.com/">Kiên Nguyễn</a>. Vue JS Developer.</p>
                </div>
                <div class="col-md-6 col-lg-4 text-lg-center copyright">
                    <a href="https://www.linkedin.com/in/yash-borda-8abb9124b/">
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </a>
                    <a href="https://github.com/yashborda7048">
                      <font-awesome-icon :icon="['fab', 'facebook']" />
                    </a>
                    <a href="mailto:yashborda123@gmail.com">
                      <font-awesome-icon :icon="['fas', 'envelope']" />
                    </a>
                    <a href="https://wa.me/7048432374">
                      <font-awesome-icon :icon="['fab', 'whatsapp']" />
                    </a>
                    <a href="https://www.facebook.com/yash.borda/">
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>