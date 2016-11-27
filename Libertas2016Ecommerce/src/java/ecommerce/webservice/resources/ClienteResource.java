/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.webservice.resources;

import ecommerce.dao.ClienteDao;
import ecommerce.entidade.Cliente;
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
 * @author Plinio Naves
 */
@Path("/cliente")
public class ClienteResource {

    private final ClienteDao dao;

    public ClienteResource() {
        this.dao = new ClienteDao();
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Cliente> findAll() {
        return dao.listar();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Cliente find(@PathParam("id") Integer id) {
        return dao.consultar(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String post(Cliente cliente) {
        //return (dao.inserir(cliente)) ? "Cliente '" + cliente.getNome() + "' inserido!" : "Erro ao inserir cliente'" + cliente.getNome() + "'!";
        dao.inserir(cliente);
        return "Cliente inserido!";
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String put(Cliente cliente) {
        //return (dao.update(cliente)) ? "Operacao '" + cliente.getNome() + "' alterada!" : "Erro ao alterar operacao'" + cliente.getNome() + "'!";
        dao.alterar(cliente);
        return "Cliente alterado!";
    }

}
