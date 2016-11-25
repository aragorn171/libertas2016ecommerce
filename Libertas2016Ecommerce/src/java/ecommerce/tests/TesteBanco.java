/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.tests;

//import ecommerce.HibernateUtil;
import ecommerce.dao.*;
import ecommerce.entidade.*;
import java.util.Calendar;
import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author Plinio Naves
 */
public class TesteBanco {


    public static void main(String[] args) {
        
        testaCliente();
        testaCategoria();
        testaProduto();
        testaCarrinho();
        testaPedido();
        
    }
    
    private static void testaCliente() {
        Cliente c = new Cliente();
        c.setNome("Ciclano");
        c.setCpf("000.000.555-00");
        c.setRg("555000000");
        c.setTelefone("(00) 0000-0555");
        
        c.setEndereco(new Endereco());
        c.getEndereco().setBairro("Centro");
        c.getEndereco().setCep("379650-000");
        c.getEndereco().setLogadouro("Rua das Flores");
        c.getEndereco().setNumero("666");
        c.getEndereco().setCidade(new Cidade());
        
        c.getEndereco().getCidade().setCidade("São Sebastião do Paraíso");
        c.getEndereco().getCidade().setEstado("MG");
        
        c.setUsuario(new Usuario());
        c.getUsuario().setEmail("teste@teste.com");
        c.getUsuario().setSenha("777");
        
        ClienteDao dao = new ClienteDao();
        dao.inserir(c);
        
        Cliente c2 = dao.consultar(c.getIdCliente());
        c2.setNome("Fulano Alterado");
        c2.getEndereco().setNumero("Rua alterada");
        c2.getEndereco().getCidade().setEstado("Minas Gerais");
        c2.getUsuario().setSenha("666");
        dao.alterar(c2);
        
        for (Cliente cliente : dao.listar()) {
            System.out.println("Cliente: " + cliente.getIdCliente() + " - " + cliente.getNome());
            System.out.println("Endereco: " + cliente.getEndereco().getIdEndereco() + " - " + cliente.getEndereco().getLogadouro());
            System.out.println("Cidade: " + cliente.getEndereco().getCidade().getIdCidade());
            System.out.println("Usuario: " + cliente.getUsuario().getIdUsuario() + " - " + cliente.getUsuario().getSenha());
            System.out.println("*********************************************************************");
        }
        
        dao.excluir(c2);
    }
    
    private static void testaCategoria() {
        Categoria c = new Categoria();
        c.setNome("Destilados");
        
        CategoriaDao dao = new CategoriaDao();
        dao.inserir(c);
        
        c.setNome("Destilados Alterado");
        dao.alterar(c);
        
        c = dao.consultar(c.getIdCategoria());
        
        System.out.println(c.getNome());
        
        for (Categoria cat : dao.listar()) {
            System.out.println(cat.getNome());
        }
        
        dao.excluir(c);
    }
    
    private static void testaProduto() {
        
        Categoria c = new Categoria();
        c.setNome("Destilados");
        CategoriaDao cDao = new CategoriaDao();
        cDao.inserir(c);
        
        Produto p = new Produto();
        p.setCategoria(c);
        p.setDescricao("Vodka");
        p.setPreco(25.87f);
        
        ProdutoDao dao = new ProdutoDao();
        dao.inserir(p);
        
        p.setDescricao("Vodka Especial");
        dao.alterar(p);
        
        p = dao.consultar(p.getIdProduto());
        
        System.out.println(p.getDescricao());
        
        for (Produto prod : dao.listar()) {
            System.out.println(prod.getDescricao());
        }
        
        dao.excluir(p);
    }
    
    private static void testaCarrinho() {
        
        Categoria c = new Categoria();
        c.setNome("Destilados");
        CategoriaDao cDao = new CategoriaDao();
        cDao.inserir(c);
        
        Produto p = new Produto();
        p.setCategoria(c);
        p.setDescricao("Vodka");
        p.setPreco(25.87f);
        
        ProdutoDao dao = new ProdutoDao();
        dao.inserir(p);
        
        Produto p2 = new Produto();
        p2.setCategoria(c);
        p2.setDescricao("Vodka Especial");
        p2.setPreco(35.99f);
        dao.inserir(p2);
        
        Cliente cli = new Cliente();
        cli.setNome("Teste Cliente");
        cli.setEndereco(new Endereco());
        cli.getEndereco().setLogadouro("Rua Teste");
        cli.getEndereco().setCidade((new CidadeDao()).listar().get(0));
        cli.setUsuario(new Usuario());
        cli.getUsuario().setEmail("teste user");
        ClienteDao cliDao = new ClienteDao();
        cliDao.inserir(cli);
        
        Carrinho car = new Carrinho();
        car.setCliente(cli);
        car.setProduto(p);
        car.setQuantidade(5);
        CarrinhoDao carDao = new CarrinhoDao();
        carDao.inserir(car);
        
        car.setProduto(p2);
        car.setQuantidade(3);
        carDao.alterar(car);
        
        car = carDao.consultar(car.getIdCarrinho());
        System.out.println(car.getProduto().getDescricao());
        
        for (Carrinho carrinho : carDao.listar()) {
            System.out.println(carrinho.getProduto().getDescricao());
            carDao.excluir(carrinho);
        }
        
    }
    
    private static void testaPedido() {
        
        Categoria c = new Categoria();
        c.setNome("Destilados");
        CategoriaDao cDao = new CategoriaDao();
        cDao.inserir(c);
        
        Produto p = new Produto();
        p.setCategoria(c);
        p.setDescricao("Vodka");
        p.setPreco(25.87f);
        
        ProdutoDao prodDao = new ProdutoDao();
        prodDao.inserir(p);
        
        Produto p2 = new Produto();
        p2.setCategoria(c);
        p2.setDescricao("Vodka Especial");
        p2.setPreco(35.99f);
        prodDao.inserir(p2);
        
        Cliente cli = new Cliente();
        cli.setNome("Teste Cliente");
        cli.setEndereco(new Endereco());
        cli.getEndereco().setLogadouro("Rua Teste");
        cli.getEndereco().setCidade((new CidadeDao()).listar().get(0));
        cli.setUsuario(new Usuario());
        cli.getUsuario().setEmail("teste user");
        ClienteDao cliDao = new ClienteDao();
        cliDao.inserir(cli);
        
        Pedido ped = new Pedido();
        ped.setCliente(cli);
        ped.setData(Calendar.getInstance().getTime());
        ped.setValorFrete(50);
        
        List<ItemPedido> itens = new LinkedList<ItemPedido>();
        
        ItemPedido item1 = new ItemPedido();
        item1.setPedido(ped);
        item1.setProduto(p);
        item1.setPrecoUnitario(p.getPreco());
        item1.setQuantidade(11);
        
        ItemPedido item2 = new ItemPedido();
        item2.setPedido(ped);
        item2.setProduto(p2);
        item2.setPrecoUnitario(p2.getPreco());
        item2.setQuantidade(22);
        
        itens.add(item1);
        itens.add(item2);
        ped.setItens(itens);
        
        PedidoDao pedDao = new PedidoDao();
        pedDao.inserir(ped);
        
        ped = pedDao.consultar(ped.getIdPedido());
        System.out.println(ped.getIdPedido());
        
        ped.setValorFrete(67.50f);
        pedDao.alterar(ped);
        System.out.println(ped.getIdPedido());
        
        ItemPedido item3 = new ItemPedido();
        item3.setPedido(ped);
        item3.setProduto(p2);
        item3.setPrecoUnitario(p2.getPreco());
        item3.setQuantidade(33);
        ped.getItens().add(item3);
        
        ped.getItens().remove(ped.getItens().get(1));
        pedDao.alterar(ped);
        
        Produto p3 = new Produto();
        p3.setCategoria(c);
        p3.setDescricao("Ipioca");
        p3.setPreco(38.5f);
        prodDao.inserir(p3);
        
        ped.getItens().get(0).setProduto(p3);
        pedDao.alterar(ped);
        
        List<Pedido> pedidos = pedDao.listar();
        for (Pedido pedido : pedidos) {
            System.out.println(pedido.getIdPedido());
            pedDao.excluir(pedido);
        }
        
    }

}
