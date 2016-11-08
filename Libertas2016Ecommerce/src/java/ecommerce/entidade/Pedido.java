/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.entidade;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 *
 * @author Usuario
 */
@Entity
@Table(name = "PEDIDO")
public class Pedido {

    @Id
    @Column(name = "idpedido")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idpedido;
    @Column(name = "clente")
    @OneToOne
    @JoinColumn(name = "idcliente")
    private Cliente cliente;
    @Column(name = "data")
    private Date data;
    @Column(name = "valorFrete")
    private double valorFrete;
    @Column(name = "dataPagto")
    private Date dataPagto;
    @Column(name = "pago")
    private boolean pago;

    public Pedido() {
    }

    public int getIdpedido() {
        return idpedido;
    }

    public void setIdpedido(int idpedido) {
        this.idpedido = idpedido;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public double getValorFrete() {
        return valorFrete;
    }

    public void setValorFrete(double valorFrete) {
        this.valorFrete = valorFrete;
    }

    public Date getDataPagto() {
        return dataPagto;
    }

    public void setDataPagto(Date dataPagto) {
        this.dataPagto = dataPagto;
    }

    public boolean isPago() {
        return pago;
    }

    public void setPago(boolean pago) {
        this.pago = pago;
    }

    public double getValorTotal() {
        double valorTotal = 0;
        return valorTotal;
    }

}
