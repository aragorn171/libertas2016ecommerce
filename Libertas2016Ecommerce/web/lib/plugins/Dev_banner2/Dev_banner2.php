<html>
    <link href="Dev_banner2.css" rel="stylesheet" type="text/css"/>
    <body>
        <div style="margin: 0 auto; overflow: hidden; width: 100%;">
            <div id="banner2">
                <div class="banner-item">
                    <a href="teste">
                        <img src="imagens/img1.jpg">
                    </a>
                </div>
                <div class="banner-item">
                    <img src="imagens/img2.jpg">
                </div>
                <div class="banner-item">
                    <img src="imagens/img4.jpg">  
                </div>
                <div class="banner-item">
                    <img src="imagens/img2.jpg">
                </div>
                <div class="banner-item">
                    <img src="imagens/img2.jpg">
                </div>
                <div class="banner-item">
                    <img src="imagens/img4.jpg">  
                </div>
                <div class="banner-item">
                    <img src="imagens/img2.jpg">
                </div>
                <div class="banner-item">
                    <img src="imagens/img2.jpg">
                </div>
                <div class="banner-item">
                    <img src="imagens/img4.jpg">  
                </div>
                <div class="banner-item">
                    <img src="imagens/img2.jpg">
                </div>
                <div class="banner-item">
                    <img src="imagens/img2.jpg">
                </div>
                <div class="banner-item">
                    <img src="imagens/img4.jpg">  
                </div>
                <div class="banner-item">
                    <img src="imagens/img2.jpg">
                </div>
            </div>
        </div>
    </body>
</html>
<!-- JS -->
<script src="../../jQuery/jquery-1.11.1.min.js" type="text/javascript"></script>
<script src="../../jQuery/jquery-ui.min.js" type="text/javascript"></script>
<script src="Dev_banner2.js" type="text/javascript"></script>
<script>
    jQuery.noConflict();
    jQuery(document).ready(function(){
            jQuery('#banner2').banner2({
            randomEffect: false,
            effect: 'clip',
            autoPlay: false,
            qtdBullets: 5,
            heightFixedValue: 500
        });
    })
    
</script>
<!--<style>
    #bannerAdvanced{
        border: 2px solid #000;
    }
</style>-->