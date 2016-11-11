/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.tests;

//import ecommerce.HibernateUtil;
import ecommerce.dao.*;
import ecommerce.entidade.*;

/**
 *
 * @author Plinio Naves
 */
public class TesteBanco {


    public static void main(String[] args) {
        
        testaCliente();
        testaCategoria();
        testaProduto();
        
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

}
