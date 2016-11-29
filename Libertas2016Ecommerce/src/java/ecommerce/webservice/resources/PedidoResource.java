/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.webservice.resources;

import ecommerce.dao.PedidoDao;
import ecommerce.entidade.Pedido;
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
@Path("/pedido")
public class PedidoResource {
    private final PedidoDao dao;

    public PedidoResource (){
        this.dao = new PedidoDao();
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Pedido> findAll() {
        return dao.listar();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Pedido find(@PathParam("id") Integer id) {
        return dao.consultar(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String post(Pedido pedido) {
        dao.inserir(pedido);
        return "Pedido inserido!";
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String put(Pedido pedido) {        
        dao.alterar(pedido);
        return "Pedido alterado!";
    }
    
}
