/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.webservice.resources;


import ecommerce.dao.EnderecoDao;
import ecommerce.entidade.Endereco;
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
@Path("/endereco")
public class EnderecoResource {
    private final EnderecoDao dao;

    public EnderecoResource (){
        this.dao = new EnderecoDao();
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Endereco> findAll() {
        return dao.listar();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Endereco find(@PathParam("id") Integer id) {
        return dao.consultar(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String post(Endereco endereco) {
        dao.inserir(endereco);
        return "Endereco inserido!";
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String put(Endereco endereco) {        
        dao.alterar(endereco);
        return "Endereco alterado!";
    }
    
}
