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
   @Table (name = "CATEGORIA")
   
public class Categoria {
    
    @Id
    @Column(name = "idcategoria")
    @GeneratedValue
    private int idcategoria;
    @Column(name = "nome",length = 60,nullable = false)
    private String nome;

    public Categoria() {
    }

    public int getIdcategoria() {
        return idcategoria;
    }

    public void setIdcategoria(int idcategoria) {
        this.idcategoria = idcategoria;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    
    
    
}
