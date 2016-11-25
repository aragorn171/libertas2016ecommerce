/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.entidade;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Usuario
 */
@Entity
@Table(name = "itemPedido")
public class ItemPedido  implements java.io.Serializable {

    @Id
    @Column(name = "idItemPedido")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idItemPedido;
    
    @ManyToOne
    @JoinColumn(name="idPedido", nullable = true)
    private Pedido pedido;
    
    //@Column(name = "produto")
    @ManyToOne
    @JoinColumn(name = "idProduto")
    private Produto produto;
    
    @Column(name = "quantidade")
    private int quantidade;
    
    @Column(name = "precoUnitario")
    private double precoUnitario;
    
    public ItemPedido() {
    }

    public int getIdItemPedido() {
        return idItemPedido;
    }

    public void setIdItemPedido(int idItemPedido) {
        this.idItemPedido = idItemPedido;
    }

    public Pedido getPedido() {
        return pedido;
    }

    public void setPedido(Pedido pedido) {
        this.pedido = pedido;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getPrecoUnitario() {
        return precoUnitario;
    }

    public void setPrecoUnitario(double precoUnitario) {
        this.precoUnitario = precoUnitario;
    }

}
