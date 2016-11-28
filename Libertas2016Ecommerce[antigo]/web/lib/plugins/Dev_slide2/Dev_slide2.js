// JavaScript Document
jQuery.noConflict();
jQuery.fn.slide2 = function (options)
{
    var defaults = {
        //ITENS
        itens: 5,
        margin: 10,
        //VELOCIDADE
        delay: 700,
        //RESPONSIVE
        itensDesktopMiddle: 4,
        itensDesktopSmall: 3,
        itensTablet: 2,
        itensMobile: 1,
        //BULLETS
        bullets: true,
        bulletsImage: 'thumbs',
        thumbsSize: '60%',
        //SETAS
        arrows: true,
        arrowPosition: 'center',
        arrowLabelNext: '',
        arrowLabelPrev: '',
        arrowLabelImage: false,
        //AUTOPLAY
        autoPlay: false,
        autoPlayDelay: 3000,
        //PAUSE ON HOVER
        pauseOnHover: false
    };

    //DEFINE VARIÁVEL QUE PEGA TAMANHO DA ÁREA DE TRABALHO DA TELA
    var _resolution = jQuery('html').width();

    //EXTENDE AS OPÇÕES PASSADAS PELO USUÁRIO
    var settings = jQuery.extend({}, defaults, options);

    if (_resolution > 960 && _resolution <= 1280)
    {
        if (settings.itens > 4)
        {
            settings.itens = settings.itensDesktopMiddle;
        }
    }

    if (_resolution > 768 && _resolution <= 960)
    {
        if (settings.itens > 3)
        {
            settings.itens = settings.itensDesktopSmall;
        }
    }

    if (_resolution > 480 && _resolution <= 768)
    {
        if (settings.itens > 2)
        {
            settings.itens = settings.itensTablet;
        }
    }

    if (_resolution < 480)
    {
        if (settings.itens > 1)
        {
            settings.itens = settings.itensMobile;
        }
    }

    //DEFINE VARIÁVEIS GLOBAIS
    var _this = jQuery(this);
    var _widthThis = jQuery(this).width();
    var _heightThis = jQuery(this).height();
    var _gridSlide = _this.find('.grid-slide');
    var _gridSlideWidth = (_widthThis / settings.itens) - (settings.margin * 2);
    var _gridSlideHeight = _gridSlide.height();
    var _initial = (_gridSlideWidth * settings.itens) + ((settings.margin * 2) * settings.itens);

    //ENVOLVE DIVS GRID SLIDE
    _gridSlide.wrapAll('<div class="wrap-full-slide"></div>');

    if (_this.find('img'))
    {
        _this.find('img').css({
            maxWidth: '100%'
        });
    }

    //DEFINE VARIÁVEIS GLOBAIS
    var _wrapFullSlide = _this.find('.wrap-full-slide');
    var _wrapFullSlideWidth = ((_gridSlideWidth + (settings.margin * 2))) * _gridSlide.size();
    var _autoPlay;

    //ENVOLVE DIV WRAP
    _wrapFullSlide.wrap('<div class="general-slide"></div>').width(_wrapFullSlideWidth).css({
        left: '0',
        position: 'relative'
    });

    function slide2()
    {
        //DEFINE VARIÁVEIS LOCAIS
        var _generalSlide = _this.find('.general-slide');

        //APLICA CSS NA DIV
        _generalSlide.css({
            overflow: 'hidden',
            position: 'relative'
        });

        //CSS GRID SLIDER
        _gridSlide.width(_gridSlideWidth).css({
            display: 'inline-block',
            margin: settings.margin
        });

        if (settings.arrows && settings.itens < _gridSlide.size())
        {
            _generalSlide.append('<div class="arrows-slide"><div class="next-slide">' + settings.arrowLabelNext + '</div><div class="prev-slide">' + settings.arrowLabelPrev + '</div></div>');
            jQuery(".prev-slide").fadeOut();

            //DEFINE VARIÁVEIS PARA AS SETAS
            var _arrowsSlide = _this.find('.arrows-slide');
            var _nextSlide = _this.find('.next-slide');
            var _prevSlide = _this.find('.prev-slide');

            _arrowsSlide.css({
                position: 'absolute'
            });

            _prevSlide.css({
                cursor: 'pointer'
            });

            _nextSlide.css({
                cursor: 'pointer'
            });

            if (settings.arrowLabelImage)
            {
                _arrowsSlide.css({
                    fontSize: 0
                });

                _nextSlide.css({
                    display: 'block'
                });

                _prevSlide.css({
                    display: 'block'
                });

                _nextSlide.prepend('<img src="' + settings.arrowLabelImageNext + '" />');
                _prevSlide.prepend('<img src="' + settings.arrowLabelImagePrev + '" />');
            }

            if (settings.arrowPosition === 'center')
            {

                /************ PARTE QUE MUDA TAMANHO DAS DIVS POR CAUSA DAS SETAS ************/

                //CRIA UMA DIV PARA COLOCAR ESPAÇAMENTO DOS ELEMENTOS DAS SETAS
                _wrapFullSlide.wrapAll('<div style="margin: 0 ' + _nextSlide.width() + 'px; position: relative; overflow: hidden;"></div>');

                //APLICA UM NOVO TAMANHO PARA OS GRIDS
                _gridSlide.width(Math.round(parseFloat(_gridSlideWidth - ((_nextSlide.width() * 2) / settings.itens))));

                //APLICA NOVOS VALORES NAS VARIÁVEIS
                _gridSlideWidth = _gridSlide.width();

                _wrapFullSlideWidth = ((_gridSlideWidth + (settings.margin * 2)) * _gridSlide.size());
                _initial = (_gridSlideWidth * settings.itens) + ((settings.margin * 2) * settings.itens);

                _wrapFullSlide.width(_wrapFullSlideWidth);

                /************ FIM PARTE QUE MUDA TAMANHO DAS DIVS POR CAUSA DAS SETAS ************/

                _arrowsSlide.css({
                    top: '50%',
                    marginTop: -(_arrowsSlide.height() / 2),
                    width: '100%'
                });

                _nextSlide.css({
                    position: 'absolute',
                    right: '0'
                }).width();

                _prevSlide.css({
                    position: 'absolute',
                    left: '0'
                });
            }

            if (settings.arrowPosition === 'topLeft')
            {
                _gridSlide.css({
                    marginTop: 45
                });

                _arrowsSlide.css({
                    top: '0',
                    left: settings.margin
                });

                _nextSlide.css({
                    float: 'right',
                    marginLeft: 20
                });

                _prevSlide.css({
                    float: 'left'
                });
            }

            if (settings.arrowPosition === 'topRight')
            {
                _gridSlide.css({
                    marginTop: 45
                });

                _arrowsSlide.css({
                    top: '0',
                    right: settings.margin
                });

                _nextSlide.css({
                    float: 'right',
                    marginLeft: 20
                });

                _prevSlide.css({
                    float: 'left'
                });
            }

            if (settings.arrowPosition === 'bottomRight')
            {
                _gridSlide.css({
                    marginBottom: 45
                });

                _arrowsSlide.css({
                    bottom: '0',
                    right: settings.margin
                });

                _nextSlide.css({
                    float: 'right',
                    marginLeft: 20
                });

                _prevSlide.css({
                    float: 'left'
                });
            }

            if (settings.arrowPosition === 'bottomLeft')
            {
                _gridSlide.css({
                    marginBottom: 45
                });

                _arrowsSlide.css({
                    bottom: '0',
                    left: settings.margin
                });

                _nextSlide.css({
                    float: 'right',
                    marginLeft: 20
                });

                _prevSlide.css({
                    float: 'left'
                });
            }

            _nextSlide.click(function (e) {
                next();
            });

            _prevSlide.click(function (e) {
                prev();
            });
        }

        function next()
        {
            //VERIFICA SE AUTO PLAY É TRUE, CASO SEJA ENTRA E PARA O PLUGIN
            if (settings.autoPlay && settings.itens < _gridSlide.size())
            {
                clearInterval(_autoPlay);
            }

            //PEGA REFERÊNCIA DA POSIÇÃO ATUAL DA DIV PAI
            var _ref = _wrapFullSlide.css('left').split('px');
            _ref = parseInt(_ref[0]);
            //INCREMENTA A VARIÁVEL _INITIAL
            _initial = _initial + (_gridSlideWidth + (settings.margin * 2));
            //SE BULLETS FOR TRUE
            if (settings.bullets)
            {
                var _refBullets;

                if (_ref === -(_wrapFullSlideWidth - (_gridSlideWidth + (settings.margin * 2))))
                {
                    _refBullets = 0;
                } else if (_ref !== 0) {
                    _refBullets = _ref.toString();
                    _refBullets = _refBullets.split('-');
                    _refBullets = parseFloat(_refBullets[1]) + (_gridSlideWidth + (settings.margin * 2));
                } else {
                    _refBullets = (_ref + (_gridSlideWidth + (settings.margin * 2)));
                }

                //REMOVE A CLASSE ACTIVE DE TODAS AS DIVS
                _divBullets.find('div').removeClass('active-bs2');
                _this.find("#" + _refBullets).addClass('active-bs2');
            }

            //DECLARA VARIÁVEIS
            var left;

            if (_initial >= (_wrapFullSlideWidth + (_gridSlideWidth + (settings.margin * 2))))
            {
                left = 0;
                _initial = (_gridSlideWidth * settings.itens) + ((settings.margin * 2) * settings.itens);
            } else {
                left = _ref - (_gridSlideWidth + (settings.margin * 2));
                if (!settings.autoPlay) {
                    jQuery(".prev-slide").fadeIn();
                    if (_initial >= _wrapFullSlideWidth) {
                        jQuery(".next-slide").fadeOut();
                    }
                }
            }

            _wrapFullSlide.animate({
                left: left
            }, settings.delay);

            //VERIFICA SE AUTO PLAY É TRUE, CASO SEJA ENTRA E EXECUTA A FUNÇÃO
            if (settings.autoPlay && settings.itens < _gridSlide.size())
            {
                _autoPlay = setInterval(next, settings.autoPlayDelay);
            }
        }

        function prev()
        {

            //VERIFICA SE AUTO PLAY É TRUE, CASO SEJA ENTRA E PARA O PLUGIN
            if (settings.autoPlay && settings.itens < _gridSlide.size())
            {
                clearInterval(_autoPlay);
            }

            //PEGA REFERÊNCIA DA POSIÇÃO ATUAL DA DIV PAI
            var _ref = _wrapFullSlide.css('left').split('px');
            _ref = parseFloat(_ref[0]);

            //SE BULLETS FOR TRUE
            if (settings.bullets)
            {
                var _refBullets;

                if (_ref === 0)
                {
                    _refBullets = (_wrapFullSlideWidth - (_gridSlideWidth + (settings.margin * 2)));
                } else if (_ref !== 0) {
                    _refBullets = _ref.toString();
                    _refBullets = _refBullets.split('-');
                    _refBullets = parseFloat(_refBullets[1]) - (_gridSlideWidth + (settings.margin * 2));
                } else {
                    _refBullets = (_ref + (_gridSlideWidth + (settings.margin * 2)));
                }

                //REMOVE A CLASSE ACTIVE DE TODAS AS DIVS
                _divBullets.find('div').removeClass('active-bs2');
                _this.find("#" + _refBullets).addClass('active-bs2');
            }

            //INCREMENTA A VARIÁVEL _INITIAL
            _initial = _initial - (_gridSlideWidth + (settings.margin * 2));

            //DECLARA VARIÁVEIS
            var left;

            if (_initial === (_gridSlideWidth * (settings.itens)) + ((settings.margin * 2) * settings.itens) - (_gridSlideWidth + (settings.margin * 2)))
            {
                left = -(_wrapFullSlideWidth - _initial - (_gridSlideWidth + (settings.margin * 2)));
                _initial = _wrapFullSlideWidth;
            } else {
                left = _ref + (_gridSlideWidth + (settings.margin * 2));
                if (!settings.autoPlay) {
                    jQuery(".next-slide").fadeIn();
                    if (left == 0) {
                        jQuery(".prev-slide").fadeOut();
                    }
                }
            }

            _wrapFullSlide.animate({
                left: left
            }, settings.delay);

            //VERIFICA SE AUTO PLAY É TRUE, CASO SEJA ENTRA E EXECUTA A FUNÇÃO
            if (settings.autoPlay && settings.itens < _gridSlide.size())
            {
                _autoPlay = setInterval(next, settings.autoPlayDelay);
            }
        }

        function move(_refBullets)
        {
            //INCREMENTA A VARIÁVEL _INITIAL
            _initial = parseInt(_refBullets) + (_gridSlideWidth + (settings.margin * 2));

            _wrapFullSlide.animate({
                left: -_refBullets
            }, settings.delay);
        }

        if (settings.bullets)
        {
            //DECLARA VARIÁVEIS PARA RECEBER OS VALORES
            var i;
            var _divBullets;
            var _img = _gridSlide.find('img');
            var _width = 0;
            var _thisImg;
            var _img;

            //CRIA UMA NOVA DIV DENTRO DA DIV GENERAL SLIDE
            _generalSlide.append('<div class="bullets-slide2"></div>');
            //ATRIBUI A VARIÁVEL
            _divBullets = _this.find('.bullets-slide2');

            _img.each(function (i) {

                _thisImg = jQuery(this);
                if (settings.bulletsImage === 'thumbs')
                {
                    _img = _thisImg.attr('src');
                } else if (settings.bulletsImage !== '')
                {
                    _img = settings.bulletsImage;
                }

                //ADICIONA A DIV COM O ID PARA A DIV
                _divBullets.append('<div id="' + _width + '"><img src="' + _img + '" style="width:' + settings.thumbsSize + ';"></div>');
                _width = _width + (_gridSlide.width() + settings.margin * 2);

                //APLICA A CLASSE ACTIVE NA PRIMEIRA DIV
                _divBullets.children('div').first().addClass('active-bs2');

            });

            //ONCLICK DAS THUMBS
            _divBullets.find('div').click(function () {
                //REMOVE A CLASSE ACTIVE DE TODAS AS DIVS
                _divBullets.find('div').removeClass('active-bs2');
                //ADICIONA  CLASSE BULLETS NA DIV CLICADA
                jQuery(this).addClass('active-bs2');
                //CHAMA A FUNÇÃO QUE VAI MOVER A DIV, PASSANDO O ID DA DIV CLICADA COMO REFERENCIA
                move(jQuery(this).attr('id'));
            });
        }

        //VERIFICA A OPÇÃO AUTO PLAY, CASO FOR TRUE EXECUTA O CÓDIGO
        if (settings.autoPlay && settings.itens < _gridSlide.size())
        {
            //COLOCA A FUNÇÃO NA VARIAVEL PARA FACILITAR
            _autoPlay = setInterval(next, settings.autoPlayDelay);

            // VERIFICA SE A OPÇÃO PAUSE ON HOVER(PARA AO PASSAR O MOUSE EM CIMA) FOR TRUE ENTRA E EXECUTA O CÓDIGO
            if (settings.pauseOnHover)
            {
                //QUANDO COLOCA O MOUSE PARA O PLUGIN
                _gridSlide.mouseenter(function () {
                    clearInterval(_autoPlay);
                });

                //QUANDO TIRA O MOUSE VOLTA A EXECUTAR O AUTO PLAY
                _gridSlide.mouseleave(function () {
                    _autoPlay = setInterval(next, settings.autoPlayDelay);
                });
            }
        }
    }

    //INICIA O PLUGIN
    slide2();
};