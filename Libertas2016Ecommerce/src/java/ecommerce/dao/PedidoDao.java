/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.dao;

import ecommerce.entidade.ItemPedido;
import ecommerce.entidade.Pedido;
import java.util.List;

/**
 *
 * @author Bruno
 */
public class PedidoDao extends Dao<Pedido>{

    public PedidoDao() {
        super(Pedido.class);
    }
    
   /*@Override
    public void alterar(Pedido objeto) {
        salvarOuAtualizar(objeto);
    }

    @Override
    public void inserir(Pedido objeto) {
        salvarOuAtualizar(objeto);
    }

    @Override
    protected void salvarOuAtualizar(Pedido objeto) {
        super.salvarOuAtualizar(objeto);
        
        ItemPedidoDao itemDao = new ItemPedidoDao();
        List<ItemPedido> itens = consultar(objeto.getIdPedido()).getItens();
        
        for (ItemPedido item : itens) {
            itemDao.excluir(item);
        }
        
        if (objeto.getItens()!= null) {
            for (ItemPedido item : objeto.getItens()) {
                itemDao.salvarOuAtualizar(item);
            }
        }
    }//*/
    
    @Override
    public void excluir(Pedido objeto) {
        
        ItemPedidoDao itemDao = new ItemPedidoDao();
        List<ItemPedido> itens = consultar(objeto.getIdPedido()).getItens();
        
        for (ItemPedido item : itens) {
            itemDao.excluir(item);
        }
        
        super.excluir(objeto);
    }
    
}
