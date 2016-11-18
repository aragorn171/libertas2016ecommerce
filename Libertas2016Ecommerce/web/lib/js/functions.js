jQuery.noConflict();

jQuery(window).load(function(){
    jQuery("#header").html(
            '<div class="header-top padding-top-bottom">';
                    '<div class="row">';
                        '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">';
                            '<p>Seja Bem Vindo ao e-drinks Bebidas <b>Já é cadastrado?</b></p>';
                        '</div>';
                        '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">';
                            '<span class="pull-right"><i class="fa fa-phone" aria-hidden="true"></i> (35) 99999-9999</span>';
                        '</div>';
                        '<div class="col-xs-2 col-sm-4 col-md-4 col-lg-4">';
                            '<form class="form-header">';
                                '<div class="form-group">';
                                    '<div class="input-group">';
                                        '<input type="text" class="form-control">';
                                        '<span class="input-group-btn">';
                                            '<button class="btn btn-default" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>';
                                        '</span>';
                                    '</div>';
                                '</div>';
                            '</form>';
                        '</div>';
                    '</div>';
                '</div>';
                '<div class="header-center margin-bottom">';
                    '<div class="row">';
                        '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo">';
                            '<img src="imagens/logo.png" alt=""/>';
                        '</div>';
                        '<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 menu">';
                            '<ul>';
                                '<li><a>VINHOS</a></li>';
                                '<li><a>CEVAS</a></li>';
                                '<li><a>CHAMPAGNES</a></li>';
                                '<li><a>DESTILADOS</a></li>';
                                '<li><a>ENERGÉTICOS</a></li>';
                                '<li><a>RUM</a></li>';
                                '<li><a>LICOR</a></li>';
                                '<li><a>SAQUÊ</a></li>';
                            '</ul>';
                        '</div>';
                    '</div>';
                '</div>';
            );
});


