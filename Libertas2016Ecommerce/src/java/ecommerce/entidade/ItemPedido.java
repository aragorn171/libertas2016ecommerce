/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.entidade;

/**
 *
 * @author Usuario
 */
public class ItemPedido {
    
    private int iditempedido;
    private Produto produto;
    private int quantidade;
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
