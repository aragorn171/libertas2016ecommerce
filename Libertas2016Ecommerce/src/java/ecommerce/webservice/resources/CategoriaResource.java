/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.webservice.resources;

import ecommerce.dao.CategoriaDao;
import ecommerce.entidade.Categoria;
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
@Path("/categoria")
public class CategoriaResource {
    private final CategoriaDao dao;

    public CategoriaResource (){
        this.dao = new CategoriaDao();
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Categoria> findAll() {
        return dao.listar();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Categoria find(@PathParam("id") Integer id) {
        return dao.consultar(id);
    }


    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String post(Categoria categoria) {
        dao.inserir(categoria);
        return "Categoria inserida!";
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String put(Categoria categoria) {        
        dao.alterar(categoria);
        return "Categoria alterada!";
    }
    
}
