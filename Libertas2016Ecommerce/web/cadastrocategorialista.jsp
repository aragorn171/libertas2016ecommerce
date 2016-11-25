<%@page import="ecommerce.entidade.Categoria"%>
<%@page import="ecommerce.dao.CategoriaDao"%>
<%@page import="java.util.List"%>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Cadastro de usuário - e-drinks</title>

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

                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    id
                                </th>
                                <th>
                                    Nome
                                </th>

                            </tr>
                            <tr>

                            </tr>
                            <tr>
                                <td><?php echo $list['id'] ?></td>
                                <td><?php echo $list['titulo'] ?></td>
                            </tr>	
                            <%
                                CategoriaDao dao = new CategoriaDao();
                                List<Categoria> lista = dao.listar();
                                for (int i = 0; i <= lista.size(); i++) {
                            %>
                            <tr>
                                <td><% lista.get(i).getIdCategoria(); %></td>
                                <td><% lista.get(i).getNome(); %></td>
                                <td><a href="##" class="btn btn-success">Alterar</a></td>
                                <td>   <a href="##" class="btn btn-danger">Excluir</a> </td>
                                <td>  <a href="##" class="btn btn-success">ConsultarCategoria</a></td>
                                <td>   <a href="##" class="btn btn-danger">Listar</a> </td>
                            </tr>
                            <%
                                }
                            %>

                         
                    </table>
                  <a href="formCategoria.jsp" class="btn btn-success">Novo</a>
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