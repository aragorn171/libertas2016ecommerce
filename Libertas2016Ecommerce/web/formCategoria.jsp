<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Cadastro de Categorias - e-drinks</title>

        <!-- Bootstrap -->
        <link href="lib/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>

        <!-- HTML5 shim e Respond.js para suporte no IE8 de elementos HTML5 e media queries -->
        <!-- ALERTA: Respond.js não funciona se você visualizar uma página file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->        
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">         
                    <img src="imagens/logo.png" alt="" style="max-width: 100%">




                    <form method="post" action="inserirCategoria.jsp" name="inserirCategoria" >
                        <div class="form-group">
                            <label for="exampleInputEmail1">Nome da Categoria</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nome da Categoria" name="nome">
                        </div>                        

                        <input type="hidden" name="acao" value="frmcadastro">

                        <button type="submit" class="btn btn-default">Cadastrar</button> 

                    </form>
                </div>
            </div>
        </div>


        <!-- jQuery (obrigatório para plugins JavaScript do Bootstrap) -->
        <script src="lib/js/jquery-2.1.3.min.js" type="text/javascript"></script>
        <!-- Inclui todos os plugins compilados (abaixo), ou inclua arquivos separadados se necessário -->
        <script src="lib/js/bootstrap.min.js" type="text/javascript"></script>
    </body>
</html>
