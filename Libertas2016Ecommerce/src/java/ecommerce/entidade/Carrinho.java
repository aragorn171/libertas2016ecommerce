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
   @Table (name = "CARRINHO")
   

public class Carrinho {
    
    @Id
    @Column(name = "idcarrinho")
    @GeneratedValue 
    private int idcarrinho;
    @Column(name = "produto",length = 60,nullable = false)
    private Produto produto;
    @Column(name = "cliente",length = 60 )
    private Cliente cliente;
    @Column(name = "quantidade")
    private int quantidade;

    public Carrinho() {
    }

    public int getIdcarrinho() {
        return idcarrinho;
    }

    public void setIdcarrinho(int idcarrinho) {
        this.idcarrinho = idcarrinho;
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
