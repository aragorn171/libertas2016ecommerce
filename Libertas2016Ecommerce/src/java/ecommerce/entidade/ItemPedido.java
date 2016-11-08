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
import javax.persistence.Table;

/**
 *
 * @author Usuario
 */

@Entity
   @Table (name = "INTEMPEDIDO")
public class ItemPedido {
   
    @Id
    @Column(name = "idendereco") 
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int iditempedido;
    @Column(name = "produto")
    private Produto produto;
    @Column(name = "quantidade")
    private int quantidade;
    @Column(name = "precoUnitario")
    private double precoUnitario;

    public ItemPedido() {
    }

    public int getIditempedido() {
        return iditempedido;
    }

    public void setIditempedido(int iditempedido) {
        this.iditempedido = iditempedido;
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
