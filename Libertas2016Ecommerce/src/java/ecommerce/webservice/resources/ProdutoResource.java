/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.webservice.resources;

import ecommerce.dao.ProdutoDao;
import ecommerce.entidade.Produto;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Marcilene
 */
@Path("/produto")
public class ProdutoResource {
    private final ProdutoDao dao;

    public ProdutoResource (){
        this.dao = new ProdutoDao();
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Produto> findAll() {
        return dao.listar();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Produto find(@PathParam("id") Integer id) {
        return dao.consultar(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String post(Produto produto) {
        dao.inserir(produto);
        return "Produto inserido!";
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String put(Produto produto) {        
        dao.alterar(produto);
        return "Produto alterado!";
    }
    
}
