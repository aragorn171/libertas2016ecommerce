/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.tests;

import ecommerce.HibernateUtil;
import ecommerce.entidade.Cliente;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

/**
 *
 * @author Plinio Naves
 */
public class TesteBanco {


    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        
        Cliente c = new Cliente();
        c.setNome("Fulano");
        //c.setEndereco("Rua 10");
        c.setCpf("000.000.000-00");
        c.setRg("000000000");
        c.setTelefone("(00) 0000-0000");

        try {
            session.beginTransaction();
            session.persist(c);
            session.getTransaction().commit();
        } catch (HibernateException e) {
            if (session.getTransaction() != null) {
                session.getTransaction().rollback();
            }
            e.printStackTrace();
        }

    }

}
