(function ($) {

    $.noConflict();

    $.fn.banner2 = function (options)

    {

        /** FALTA IMPLEMENTAR BULLETS E LINKS COM EFEITO PARALLAX **/



        //AQUI SÃƒO DECLARADAS AS VARIÃVEIS DEFAULT DO PLUGIN

        var defaults = {

            //VARIÃVEL QUE ATRIBUI OS EFEITOS RANDOM

            effectsRandom: 'fade,drop,slide,size,bounce,clip,shake',

            //VARIÃVEL QUE GUARDA O EFEITO PADRÃƒO

            effect: 'fade',

            //VARIÃVEL QUE ATRIBUI O NOME DA CLASSE DA DIV QUE ENVOLVE AS IMAGENS

            wrapImgClass: 'wrap-divItem-banner',

            //VARIÃVEL QUE GUARDA O TEMPO QUE VAI TROCAR AS IMAGENS

            delay: 5000,

            //VARIÃVEL QUE GUARDA O TEMPO DE CADA EFEITO

            effectDelay: 500,

            //VARIÃVEL QUE MOSTRA SE O PLUGIN Ã‰ AUTOMATICO OU NÃƒO(TRUE = SIM | FALSE = NÃƒO)

            autoPlay: true,

            //VARIÃVEL QUE INDICA SE O EFEITO SERA OU NÃƒO SERA ALEATÃ“RIO(TRUE = SIM | FALSE = NÃƒO)

            randomEffect: true,

            //VARIÃVEL QUE INDICA SE O BANNER VAI TER OU NÃƒO VAI TER LINK(TRUE = SIM | FALSE = NÃƒO)

            link: false,

            //VARIÃVEL QUE GUSRDA A DIV QUE ESTA AS IMAGENS

            divItemClass: 'banner-item',

            //VARIÃVEL QUE GUARDA O NOME DA CLASSE QUE FAZ O EFEITO KEN BURNS

            kenBurnsClass: 'fx',

            kenBurnsClassImg: 'fx-img',

            //VARIÃVEL QUE GUARDA SE O BANNER VAI SER FULL WIDTH(TRUE = SIM | FALSE = NÃƒO)

            fullWidth: false,

            //VARIÃVEL QUE GUARDA A CLASSE DO EFFEITO FULL WIDTH PARA DIFERENCIAR A IMAGEM QUE ESTA ATIVA

            slideFullClass: 'active-item-slide',

            //VARIÃVEL QUE GUARDA SE O PLUGIN VAI TER OU NÃƒO SETAS(TRUE = SIM | FALSE = NÃƒO)

            arrows: false,

            //VARIÃVEL QUE GUARDA O NOME DA CLASSE DAS SETAS

            arrowsClass: 'arrows-banner-advanced',

            arrowRightClass: 'arrow-right-banner',

            arrowLeftClass: 'arrow-left-banner',

            //VARIÃVEL QUE GUARDA A POSIÃ‡ÃƒO DAS SETAS DO PLUGIN

            arrowPosition: 'center',

            arrowCenterBanner: 'arrow-center-banner',

            arrowRightDownBanner: 'arrow-right-down-banner',

            //VARIÃVEL QUE GUARDA SE O PLUGIN VAI OU NÃƒO TER THUMBS(CÃ“DIGO A IMPLEMENTAR) 

            bullets: true,

            //VARIABLE THAT SETS WHAT KIND OF BULLETS WILL TO BE 

            bulletsType: 'thumbs',

            //VARIÃVEL QUE GUARDA O NOME DA CLASSE DOS BULLETS

            bulletsClass: 'bullets-banner-advanced',

            //VARIÃVEL QUE GUARDA SE O BANNER TERÃ EFEITO PARALLAX OU NÃƒO(TRUE = SIM | FALSE = NÃƒO)

            parallax: false,

            //VARIÃVEL QUE GUARDA A CLASSE DO EFEITO PARALLAX

            parallaxClass: 'parallax',

            //VARIÃVEL QUE GUARDA O NOME DA CLASSE PARA REFERENCIA DA IMAGEM ATIVA NOS EFEITOS RAMDON

            randomClass: 'img-active-banner',

            //VARIÃVEL QUE GUARDA SE OS BULLETS TERÃ SETAS OU NÃƒO(TRUE = SIM | FALSE = NÃƒO)

            arrowsBullets: true,

            //VARIÃVEL QUE GUARDA O NOME DA CLASSE DAS SETAS DAS THUMBS

            arrowsBulletsClass: 'arrows-bullets',

            arrowBulletsRightClass: 'arrow-right-bullets',

            arrowBulletsLeftClass: 'arrow-left-bullets',

            //VARIÃVEL QUE GUARDA A POSIÃ‡ÃƒO DAS SETAS DAS THUMBS

            arrowBulletsPosition: 'center',

            //VARIÃVEL QUE ATRIBUI O NOME DA CLASSE DA DIV QUE ENVOLVE oS BULLETS

            wrapBulletsClass: 'wrap-bullets',

            //VARIÃVEL QUE INDICA QUANTOS BULLETS/THUMBS IRÃƒO APARECER

            qtdBullets: 5,

            //VARIABLE THAT SAVE THE MARGIN THAT WILL HAVE THE BULLETS ( VARIÃVEL QUE INDICA MARGIN QUE TERÃ OS BULLETS )

            bulletsMargin: 10,

            //VARIABLE THAT SAVE THE POSITION OF ARROWS OF BULLETS ( VARIÃVEL QUE GUARDA A POSIÃ‡ÃƒO DAS SETAS DAS BULLETS )

            arrowCenterBullets: 'arrow-center-bullets',

            arrowRightDownBullets: 'arrow-right-down-bullets',

            //VARIABLE THAT SAVE IF ARROW OF BANNER WILL BE SHOW ON HOVER OR NO ( VARIÃVEL QUE VAI GUARDAR SE ARROW DO BANNER VAI SER "SHOW ON HOVER" OU NÃƒO )

            arrowsBannerShowOnHover: true,

            //VARIABLE THAT SAVE THE SPEED OF ANIMATION OF BULLETS ( VARIÃVEL QUE SALVA A VELOCIDADE DA ANIMAÃ‡ÃƒO DAS ("BALAS"/IMAGENS PEQUENAS) )

            bulletsSpeedAnimation: 500,

            //VARIÃVEL QUE SALVE SE O BANNER TERÃ UMA ALTURA FIXA OU NÃƒO

            heightFixed: false,

            //VARIÃVEL QUE SALVE A ALTURA DO BANNER ( SE A OPÃ‡ÃƒO "heightFixed FOR TRUE" ) 

            heightFixedValue: 350

        };



        //EXTENDE AS OPÃ‡Ã•ES FORNECIDAS PELO USUÃRIO

        var opts = $.extend({}, defaults, options);



        //DECLARA VARIÃVEIS GLOBAL

        var _this = $(this);

        var _divItem = _this.find('.' + opts.divItemClass);

        var _wrapImg;

        var _img;

        var v_interval;



        //ENVOLVE TODAS AS IMAGENS

        _this.wrapInner('<div class=' + opts.wrapImgClass + '>');



        //ATRIBUI VALOR A VARIÃVEL

        _wrapImg = _this.find('.' + opts.wrapImgClass);



        if (opts.effect === 'kenBurns')

        {

            //ADICIONA A CLASSE QUE ESCONDE A IMAGEM E COLOCA O EFEITO

            _divItem.addClass(opts.kenBurnsClassImg);

        }



        function randomEffect()

        {

            //COLOCA OS EFEITOS NA VARIÃVEL   

            var _effects = opts.effectsRandom.split(',');

            //SORTEIA O EFEITO QUE VAI MOSTRAR

            var _random = Math.floor(Math.random() * (_effects.length - 1 + 1) + 1);



            //RETORNA O EFEITO QUE FOI SORTEADO

            return _effects[_random - 1];

        }



        function f_src()

        {

            //DECLARA AS VARIÃVEIS LOCAL

            var _array = [];



            _divItem.each(function (index) {

                //COLOCA O ELEMENTO NA VARIÃVEL

                var _this = jQuery(this);

                //COLOCA O ELEMENTO NA POSIÃ‡ÃƒO "INDEX" NO ARRAY

                _array[index] = _this;

                if (opts.parallax) {

                    _this.css({

                        backgroundImage: 'url(' + _array[index].find('img').attr('src') + ')',

                        backgroundRepeat: 'no-repeat',

                        minHeight: '100%'

                    }).addClass(opts.parallaxClass);

                    //REMOVE A IMAGEM

                    _this.find('img').remove();

                    //VERIFICA SE A IMAGEM TEM LINK

                    if (_this.find('a').length > 0) {

                        _this.find('a').css({

                            minHeight: '100%'

                        });

                        _this.wrap(_this.find('a'));

                        _this.find('a').remove();

                    }

                }

            });

            $(_divItem).eq(0).find('img').load(function () {

                if (opts.effect !== 'kenBurns' && opts.effect !== 'slideFull')

                {

                    //DEPOIS DE GUARDAR TODAS AS INFORMAÃ‡Ã•ES REMOVE TODAS AS IMAGENS

                    _divItem.remove();

                    //MOSTRA A PRIMEIRA IMAGEM

                    _wrapImg.prepend(_array[0]);

                } else if (opts.effect === 'kenBurns') {

                    _divItem.first().addClass(opts.kenBurnsClass);

                } else {

                    $('.wrap-divItem-banner .banner-item:first').next().addClass(opts.slideFullClass);

                }

            });
            //RETORNA O ARRAY
            return _array;
        }



        //DECLARA AS VARIÃVEIS LOCAL

        var _array = [];



        //ATRIBUI A FUNÃ‡ÃƒO QUE SEPARA AS IMAGENS NA VARIÃVEL ARRAY

        _array = f_src();

        //VARIÃVEL QUE GUARDA A POSIÃ‡ÃƒO DO ARRAY

        var _i = 0;

        //FUNÃ‡ÃƒO QUE INICIA O PLUGIN

        function play(p_direction, p_index)

        {

            //alert(p_index);

            if (typeof p_index === 'undefined' || p_index === '')

            {

                if (typeof p_direction === 'undefined') {

                    p_direction = 'next';

                }



                //IMG PASSA A SER A PRÃ“XIMA IMAGEM, SE O EFEITO FOR DIFERENTE DE SLIDEFULL

                if (p_direction === 'next') {

                    if (_i === _array.length - 1)

                    {

                        _i = 0;

                    } else {

                        _i++;

                    }

                    _divItem = _array[_i];

                } else {

                    if (opts.effect === 'kenBurns') {

                        if (_i === 0)

                        {

                            _divItem = $('.' + opts.kenBurnsClassImg).last();

                            _i = _array.length - 1;

                        } else {

                            _divItem = $('.' + opts.kenBurnsClass).prev();

                            _i--;

                        }

                    } else {

                        if (_i === 0)

                        {

                            _i = _array.length - 1;

                            _divItem = _array[_i];

                        } else {

                            _i--;

                            _divItem = _array[_i];

                        }

                    }

                }

            } else {

                _i = p_index;

                _divItem = _array[_i];

            }

            

            if (opts.bullets) {

                if (opts.bulletsType === 'thumbs') {

                    //RETIRA O EFEITO DAS IMAGENS IRMÃƒS DA CLICADA

                    $('.' + opts.bulletsClass).find('img').eq(_i).siblings().css({

                        opacity: 0.5

                    });

                    //COLOCA O EFEITO NA IMAGEN CLICADA

                    $('.' + opts.bulletsClass).find('img').eq(_i).css({

                        opacity: 1

                    });

                } else if (opts.bulletsType === 'circle') {

                    //RETIRA O EFEITO DAS IMAGENS IRMÃƒS DA CLICADA

                    $('.' + opts.bulletsClass).find('span').eq(_i).siblings().css({

                        opacity: 0.5

                    });

                    //COLOCA O EFEITO NA IMAGEN CLICADA

                    $('.' + opts.bulletsClass).find('span').eq(_i).css({

                        opacity: 1

                    });

                }

            }



            //DELCARA A VARIÃVEL LOCAL

            var _effect;



            if (opts.randomEffect)

            {

                //EFEITO SERÃ RANDOM

                _effect = randomEffect();

            } else {

                //EFEITO SERÃ O EFEITO DEFAULT OU SETADO PELO USUÃRIO

                _effect = opts.effect;

            }



            if (_effect !== 'kenBurns' && _effect !== 'slideFull')

            {

                //ADICIONA A CLASSE DE REFERENCIA PARA A IMAGEM ATIVA

                _divItem.addClass(opts.randomClass);

                //SOME COM A DIV

                $(_wrapImg).hide(_effect, opts.effectDelay, function () {



                    if (opts.randomEffect)

                    {

                        //EFEITO SERÃ RANDOM

                        _effect = randomEffect();

                    } else {

                        //EFEITO SERÃ O EFEITO DEFAULT OU SETADO PELO USUÃRIO

                        _effect = opts.effect;

                    }



                    //FAZ A TROCA DA IMAGEM E MOSTRA A DIV

                    _wrapImg.prepend(_divItem).show(_effect, function () {

//                             if(parseInt(_divItem.find('img').height()) > parseInt(_this.height())){

//                                //COLOCA AS DIVS COM HEIGHT 100 PARA A IMAGEM ADEQUAR AO BANNER

//                                _divItem.animate({

//                                   height: '100%'

//                                });

//                                _wrapImg.animate({

//                                   height: '100%'

//                                });

//                                _divItem.find('img').animate({

//                                   height: '100%'

//                                });

//                             }

                    }, opts.effectDelay);



                    //REMOVE A CLASSE DE REFERENCIA PARA A IMAGEM ATIVA

                    _divItem.siblings().remove();

                });

            } else if (_effect === 'kenBurns') {

                //ADICIONA A CLASSE DO EFEITO NDE TRANSIÃ‡ÃƒO  DIV

                _divItem.addClass(opts.kenBurnsClass);

                //REMOVE A CLASSE DO EFEITO NDE TRANSIÃ‡ÃƒO  DIV

                _divItem.siblings().removeClass(opts.kenBurnsClass);

            } else {

                //PEGA A POSIÃ‡ÃƒO QUE ESTA A DIV

                var v_left = _wrapImg.css('left').split('px');

                v_left = v_left[0];



                if (p_direction === 'next') {

                    if (v_left === 'auto') {

                        v_left = _divItem.width() * 2;

                    } else {

                        v_left = parseInt(v_left) - _divItem.width();

                    }

                } else {

                    if (v_left === 'auto') {

                        v_left = _divItem.width() * 2;

                    } else {

                        v_left = parseInt(v_left) + _divItem.width();

                    }

                }



                //FAZ O EFEITO PARA TROCAR A IMAGEM

                _wrapImg.animate({

                    left: v_left

                }, function () {

                    //COLOCA A ULTIMA IMAGEM ANTES DA PRIMEIRA

                    if (p_direction === 'next') {

                        $('.wrap-divItem-banner .banner-item:last').after($('.wrap-divItem-banner .banner-item:first'));

                    } else {

                        $('.wrap-divItem-banner .banner-item:first').before($('.wrap-divItem-banner .banner-item:last'));

                    }

                    _wrapImg.css({'left': -_divItem.width()});

                    //COLOCA A DIV DO EFEITO PARA MOSTRAR A IMAGEM QUE ESTA ATIVA

                    $('.wrap-divItem-banner .banner-item:first').next().addClass(opts.slideFullClass);

                });

                //REMOVE A DIV DO EFEITO

                $('.wrap-divItem-banner .banner-item:first').next().removeClass(opts.slideFullClass);

            }

            clearInterval(v_interval);

            if (opts.autoPlay) {

                v_interval = setInterval(play, opts.delay);

            }

        }



        //FUNCTION THAT CALCULATE WIDTH FOR BULLETS ( FUNÃ‡ÃƒO QUE CALCULA A LARGURA DAS ("BALAS"/IMAGENS PEQUENAS))

        function f_calcule_width_bullets(p_qtd_bullets_view) {

            //SET THE WIDTH OF ELEMENT IN VARIABLE ( SETA A LARGURA DO ELEMENTO NA VAIÃVEL )

            var v_width_this = _this.width();

            //VARIABLE WILL THAT SAVE RESULT OF CALCULATE WIDTH FOR BULLETS ( VARIÃVEL QUE IRÃ SALVAR O RESULTADO DO CALCULE DA LARGURA DAS ("BALAS"/IMAGENS PEQUENAS) )

            var v_width = ((v_width_this / p_qtd_bullets_view) - (opts.bulletsMargin * 2));

            //RETURN THE RESULT ( RETORNA O RESULTADO )

            return v_width;

        }



        //FUNCTION MAKES THE MOVEMENT OF BULLETS ( FUNÃ‡ÃƒO QUE FAZ O MOVIMENTO DAS ("BALAS"/IMAGENS PEQUENAS))

        function f_move_div_bullets(p_direction) {

            var v_left = $('.' + opts.wrapBulletsClass).css('left');

            v_left = v_left.split('px');

            v_left = parseFloat(v_left[0]);



            //MAKES A VERIFICATION IF PARAMETER IS "NEXT" OR IS "PREV" ( FAZ A VERIFICAÃ‡ÃƒO SE O PARÃ‚METROS Ã‰ NEXT OU PREV )

            if (p_direction === 'next') {

                if (v_left == -($('.' + opts.wrapBulletsClass).width() - _this.width())) {

                    v_left = 0;

                } else {

                    v_left = v_left - ($('.' + opts.bulletsClass).find('img').width() + (opts.bulletsMargin * 2));

                }

            } else if (p_direction === 'prev') {

                if (v_left == 0) {

                    v_left = -($('.' + opts.wrapBulletsClass).width() - _this.width());

                } else {

                    v_left = v_left + ($('.' + opts.bulletsClass).find('img').width() + (opts.bulletsMargin * 2));

                }

            }



            $('.' + opts.wrapBulletsClass).animate({

                "left": v_left

            }, opts.bulletsSpeedAnimation);

        }



        //RETORNA O PLUGIN

        return this.each(function () {

            //APLICA O ESTILO NA DIV QUE ENVOLVEU AS IMAGENS

            _divItem.css({

                overflow: 'hidden',

                width: '100%'

            });

            //$(_divItem).eq(0).find('img').load(function () {

                if (opts.fullWidth)

                {

                    _divItem.css({

                        float: 'left',

                        width: _divItem.width(),

                        marginRight: '0',

                        opacity: '0.5'

                    });



                    _wrapImg.css({

                        width: _divItem.width() * _divItem.length,

                        left: -_divItem.width(),

                        position: "relative"

                    });



                } else {

                    _wrapImg.css({

                        overflow: 'hidden',

                        width: '100%',

                        position: 'relative'

                    });

                }



                if (opts.parallax) {

                    _this.css({

                        height: '100%'

                    });

                }

                _this.css({

                    width: '100%',

                    height: _divItem.height(),

                    margin: '0 auto',

                    position: 'relative'

                });

                //VERIFIES IF OPTION "heightFixed" IS EQUALS TRUE ( VERIFICA SE A OPÃ‡ÃƒO Ã‰ IGUAL TRUE )

                if (opts.heightFixed) {

                    _this.height(opts.heightFixedValue);

                }







                //SE ARROWS FOR TRUE

                if (opts.arrows) {

                    //INSERE UMA DIV, NESSE CASO A DIV DE SETAS DENTRO DO ELEMENTO

                    _this.prepend('<div class="' + opts.arrowRightClass + '"></div><div class="' + opts.arrowLeftClass + '"></div>');

                    if (opts.arrowPosition === 'center') {

                        $('.' + opts.arrowRightClass).addClass(opts.arrowCenterBanner);

                        $('.' + opts.arrowLeftClass).addClass(opts.arrowCenterBanner);

                    } else if (opts.arrowPosition === 'rightDown') {

                        $('.' + opts.arrowRightClass).addClass(opts.arrowRightDownBanner);

                        $('.' + opts.arrowLeftClass).addClass(opts.arrowRightDownBanner);

                    }



                    $('.' + opts.arrowRightClass).click(function () {

                        clearInterval(v_interval);

                        play('next', '');

                    });



                    $('.' + opts.arrowLeftClass).click(function () {

                        clearInterval(v_interval);

                        play('left', '');

                    });



                    //IF OPTIONS( opts.arrowsBannerShowOnHover ) EQUALS TRUE, EXECUTE FUNCTION ( SE A OPÃ‡ÃƒO FOR IGUAL A TRUE, EXECUTA A FUNÃ‡ÃƒO )

                    if (opts.arrowsBannerShowOnHover) {

                        $('.' + opts.arrowsClass).hide();



                        _this.hover(function () {

                            $('.' + opts.arrowRightClass).fadeIn();

                            $('.' + opts.arrowLeftClass).fadeIn();

                        }, function () {

                            $('.' + opts.arrowRightClass).fadeOut();

                            $('.' + opts.arrowLeftClass).fadeOut();

                        });

                    }

                }



                //SE BULLETS FOR TRUE

                if (opts.bullets) {

                    //INSERE UMA DIV, NESSE CASO A DIV DE THUMBS DENTRO DO ELEMENTO

                    _this.append('<div class="' + opts.bulletsClass + '"></div>');

                    //SET THE RESULT OF FUNCTION IN VARIABLE

                    var v_width = f_calcule_width_bullets(opts.qtdBullets);

                    //RUNS ALL IMAGES AND CREATES A TAG IMG WHILE EXISTS IMAGES ( PERCORRE TODAS AS IMAGENS E CRIA AS TAGS IMG ENQUANTO EXISTEM IMAGENS )

                    _divItem.each(function (p_index) {

                        if (opts.bulletsType === 'thumbs') {

                            $('.' + opts.bulletsClass).append(jQuery(this).html());

                            if (!opts.parallax) {

                                $('.' + opts.bulletsClass).find('img').css({

                                    "cursor": "pointer",

                                    "width": Math.floor(v_width)

                                });

                            } else {

                                //FAZ O TRATAMENTO PARA PEGAR O BACKGROUND E COLOCAR NA TAG IMG

                                var v_background = $(this).css('background-image').split('(');

                                v_background = v_background[1];

                                v_background = v_background.split(')');

                                v_background = v_background[0];



                                $('.' + opts.bulletsClass).find('img').css({

                                    "cursor": "pointer",

                                    "width": Math.floor(v_width)

                                }).attr("src", v_background);

                            }

                        } else if (opts.bulletsType === 'circle') {

                            $('.' + opts.bulletsClass).append('<span></span>');

                        }

                    });



                    //VERIFICA SE OS BULLETS TERÃ SETAS OU NÃƒO

                    if (opts.arrowsBullets) {

                        if (opts.qtdBullets < $('.' + opts.bulletsClass).find('img').length) {

                            //INSERE A DIV DAS SETAS PARA O ELEMENTO

                            $('.' + opts.bulletsClass).prepend('<div class="' + opts.arrowBulletsRightClass + '"></div><div class="' + opts.arrowBulletsLeftClass + '"></div>');

                            if (opts.arrowBulletsPosition === 'center') {

                                $('.' + opts.arrowBulletsRightClass).addClass(opts.arrowCenterBullets);

                                $('.' + opts.arrowBulletsLeftClass).addClass(opts.arrowCenterBullets);

                            } else if (opts.arrowBulletsPosition === 'rightDown') {

                                $('.' + opts.arrowBulletsRightClass).addClass(opts.arrowRightDownBulets);

                                $('.' + opts.arrowBulletsLeftClass).addClass(opts.arrowRightDownBulets);

                            }

                            //FAZ O CALCULO DO TAMANHO NECESSARIO DA DIV PARA COMPORTAR TODAS AS THUMBS

                            $('.' + opts.bulletsClass).find('img').eq(0).one('load', function () {

                                var v_width = $('.' + opts.bulletsClass).find('img').outerWidth(true);

                                v_width = v_width * $('.' + opts.bulletsClass).find('img').length;

                                //INSERE DUAS DIVA QUE VAI ENVOLVER TODAS AS THUMBS/BULLETS

                                $('.' + opts.bulletsClass).wrapInner('<div style="overflow: hidden;">');

                                $('.' + opts.bulletsClass).find('img').wrapAll('<div class="' + opts.wrapBulletsClass + '" style="width:' + v_width + 'px; left: 0; position: relative;">');

                            });



                            $('.' + opts.arrowBulletsRightClass).click(function () {

                                f_move_div_bullets('next');

                            });



                            $('.' + opts.arrowBulletsLeftClass).click(function () {

                                f_move_div_bullets('prev');

                            });

                        }

                    }

                    if (opts.bulletsType === 'thumbs') {

                        $('.' + opts.bulletsClass).find('img').click(function () {

                            //PARA O PLUGIN

                            clearInterval(v_interval);

                            //ALTERA PARA IMAGEM CLICADA PASSANDO COM PARÃ‚METRO A POSIÃ‡ÃƒO DA IMAGEM PARA A FUNÃ‡ÃƒO PLAY

                            play('', $('.' + opts.bulletsClass).find('img').index(this));

                        });

                    } else if (opts.bulletsType === 'circle') {

                        $('.' + opts.bulletsClass).find('span').click(function () {

                            //PARA O PLUGIN

                            clearInterval(v_interval);

                            //ALTERA PARA IMAGEM CLICADA PASSANDO COM PARÃ‚METRO A POSIÃ‡ÃƒO DA IMAGEM PARA A FUNÃ‡ÃƒO PLAY

                            play('', $('.' + opts.bulletsClass).find('span').index(this));

                        });

                    }

                }

                //SE AUTO PLAY FOR TRUE

                if (opts.autoPlay) {

                    //FUNÃ‡ÃƒO QUE CHAMA EXECUTA O PLUGIN

                    v_interval = setInterval(play, 0);

                }

            //});
        });
    };
})(jQuery);