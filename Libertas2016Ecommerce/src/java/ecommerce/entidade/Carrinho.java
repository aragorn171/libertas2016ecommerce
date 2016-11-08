/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.entidade;

import javax.persistence.*;

/**
 *
 * @author Usuario
 */
@Entity
@Table(name = "carrinho")
public class Carrinho implements java.io.Serializable {

    @Id
    @Column(name = "idCarrinho")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCarrinho;
    
    //@Column(name = "produto", length = 60, nullable = false)
    @ManyToOne
    @JoinColumn(name = "idProduto")
    private Produto produto;
    
    //@Column(name = "cliente", length = 60)
    @ManyToOne
    @JoinColumn(name = "idCliente")
    private Cliente cliente;
    
    @Column(name = "quantidade")
    private int quantidade;

    public Carrinho() {
    }

    public int getIdCarrinho() {
        return idCarrinho;
    }

    public void setIdCarrinho(int idCarrinho) {
        this.idCarrinho = idCarrinho;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

}
