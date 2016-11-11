/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.dao;

import ecommerce.entidade.Cliente;
import ecommerce.entidade.Endereco;
import ecommerce.entidade.Usuario;

/**
 *
 * @author Bruno
 */
public class ClienteDao extends Dao<Cliente> {

    public ClienteDao() {
        super(Cliente.class);
    }

    @Override
    public void alterar(Cliente objeto) {
        salvarOuAtualizar(objeto);
    }

    @Override
    public void inserir(Cliente objeto) {
        salvarOuAtualizar(objeto);
    }

    @Override
    protected void salvarOuAtualizar(Cliente objeto) {
        if (objeto.getEndereco() != null) {
            EnderecoDao enderecoDao = new EnderecoDao();
            enderecoDao.salvarOuAtualizar(objeto.getEndereco());
        }

        if (objeto.getUsuario() != null) {
            UsuarioDao usuarioDao = new UsuarioDao();
            usuarioDao.salvarOuAtualizar(objeto.getUsuario());
        }

        super.salvarOuAtualizar(objeto);
    }

    @Override
    public void excluir(Cliente objeto) {
        
        Endereco e = objeto.getEndereco();
        Usuario u = objeto.getUsuario();
        
        super.excluir(objeto);
        
        if (e != null) {
            EnderecoDao enderecoDao = new EnderecoDao();
            enderecoDao.excluir(e);
        }

        if (u != null) {
            UsuarioDao usuarioDao = new UsuarioDao();
            usuarioDao.excluir(u);
        }
    }

}
