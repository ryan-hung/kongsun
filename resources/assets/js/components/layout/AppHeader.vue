<template>
    <header class="ks-header">
        <nav class="navbar navbar-default" role="navigation">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img src="/img/logo.png" alt="">
                    </a>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li class="phone"><i class="fa fa-phone m-r-xs"></i>400-960-6700</li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="#">首页</a></li>
                        <li><a href="#">产品中心</a></li>
                        <li><a href="#">集团介绍</a></li>
                        <li><a href="#">招贤纳士</a></li>
                        <li class="settled"><a href="#">申请入驻</a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </header>
</template>
<script>
export default {
    created() {
        this.setHeader()
    },
    data() {
        return {
            header: ''
        }
    },
    methods: {
        setHeader() {
            this.$set('header', 'this is header');
        }
    }
}
</script>