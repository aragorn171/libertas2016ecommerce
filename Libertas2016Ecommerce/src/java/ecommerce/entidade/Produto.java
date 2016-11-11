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
@Table(name = "produto")
public class Produto implements java.io.Serializable {

    @Id
    @Column(name = "idProduto")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProduto;
    
    @Column(name = "descricao")
    private String descricao;
    
    //@Column(name = "categoria")
    @ManyToOne
    @JoinColumn(name = "idCategoria")
    private Categoria categoria;
    
    @Column(name = "urlFoto")
    private String urlFoto;
    
    @Column(name = "preco")
    private double preco;
    
    @Column(name = "paginaInicial")
    private boolean paginaInicial;

    public Produto() {
    }

    public int getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(int idProduto) {
        this.idProduto = idProduto;
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

    public boolean isPaginaInicial() {
        return paginaInicial;
    }

    public void setPaginaInicial(boolean paginaInicial) {
        this.paginaInicial = paginaInicial;
    }

}
