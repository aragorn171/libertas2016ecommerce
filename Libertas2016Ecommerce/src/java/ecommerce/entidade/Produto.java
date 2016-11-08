/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.entidade;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Usuario
 */

@Entity
   @Table (name = "PRODUTO")
public class Produto {
        
    @Id
    @Column(name = "idproduto") 
    @GeneratedValue
    private int idproduto;
    @Column(name = "descricao")
    private String descricao;
    @Column(name = "categoria")
    private Categoria categoria;
    @Column(name = "urlFoto")
    private String urlFoto;
    @Column(name = "preco")
    private double preco;
    @Column(name = "paginainicial")
    private boolean paginainicial;

    public Produto() {
    }

    public int getIdproduto() {
        return idproduto;
    }

    public void setIdproduto(int idproduto) {
        this.idproduto = idproduto;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public String getUrlFoto() {
        return urlFoto;
    }

    public void setUrlFoto(String urlFoto) {
        this.urlFoto = urlFoto;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public boolean isPaginainicial() {
        return paginainicial;
    }

    public void setPaginainicial(boolean paginainicial) {
        this.paginainicial = paginainicial;
    }
    
    
    
}
