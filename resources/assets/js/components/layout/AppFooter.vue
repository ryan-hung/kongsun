<template>
    <footer class="ks-footer">
        <div class="container">
            <p class="lead">合作伙伴</p>
            <div class="row">
                <div class="col-md-6 left-box">
                    <a href="#">
                        <img src="img/icon-1.jpg" alt="">
                    </a>
                    <a href="#">
                        <img src="img/icon-2.jpg" alt="">
                    </a>
                    <a href="#">
                        <img src="img/icon-3.jpg" alt="">
                    </a>
                </div>
                <div class="col-md-6 right-box">
                    <a href="#">
                        <img src="img/icon-4.jpg" alt="">
                    </a>
                    <a href="#">
                        <img src="img/icon-5.jpg" alt="">
                    </a>
                    <a href="#">
                        <img src="img/icon-6.jpg" alt="">
                    </a>
                </div>
            </div>
            <div class="friends">
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
                <a href="#">合作伙伴</a>
            </div>
        </div>
    </footer>
    <footer class="ks-foot">
        <div class="foot-qrcode">
            <img src="img/qrcode.png" alt="">
        </div>
        <div class="foot-icons">
            <a href="#">
                <img src="img/icon-weibo.png" alt="">
                
            </a>
            <a href="javascript:;" v-on:mouseenter="handleQrcode()" v-on:mouseout="hideQrcode()" class="weibo">
                <img src="img/icon-weixin.png" alt="">
            </a>
            <a href="#">
                <img src="img/icon-qzone.png" alt="">
            </a>
        </div>
        <div class="foot-links">
            <a href="#">产品中心</a>
            <a href="#">集团介绍</a>
            <a href="#">关于我们</a>
        </div>
        <div class="foot-desc">
            Copyright © Hunan kongsun Infomation Technology Limited  |   All rights reserved
        </div>
    </footer>
</template>
<script>
export default {
    methods: {
        handleQrcode() {
            $('.foot-qrcode').fadeIn();
        },
        hideQrcode() {
            $('.foot-qrcode').fadeOut();
        }
    }
}
</script>