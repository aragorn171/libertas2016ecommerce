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
public class Carrinho {
    
    private int idcarrinho;
    private Produto produto;
    private Cliente cliente;
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
