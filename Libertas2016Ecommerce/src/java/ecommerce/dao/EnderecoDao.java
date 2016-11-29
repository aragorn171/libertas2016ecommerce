/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.dao;

import ecommerce.entidade.Endereco;

/**
 *
 * @author Bruno
 */
public class EnderecoDao extends Dao<Endereco> {

    public EnderecoDao() {
        super(Endereco.class);
    }

    @Override
    public void alterar(Endereco objeto) {
        salvarOuAtualizar(objeto);
    }

    @Override
    public void inserir(Endereco objeto) {
        salvarOuAtualizar(objeto);
    }

    @Override
    protected void salvarOuAtualizar(Endereco objeto) {
        if (objeto.getCidade() != null) {
            CidadeDao cidadeDao = new CidadeDao();
            cidadeDao.salvarOuAtualizar(objeto.getCidade());
        }

        super.salvarOuAtualizar(objeto);
    }

}
