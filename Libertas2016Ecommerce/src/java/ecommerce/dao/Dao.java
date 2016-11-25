/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ecommerce.dao;

import ecommerce.HibernateUtil;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

/**
 *
 * @author Bruno
 */
public abstract class Dao<T> {
    private Class classe;

    public Dao(Class classe) { 
        this.classe = classe;
    }
    
    protected void salvarOuAtualizar(T objeto) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        session.saveOrUpdate(objeto);
        session.getTransaction().commit();
    }
    
    public void inserir(T objeto) {
        salvarOuAtualizar(objeto);
    }
    
    public void alterar(T objeto) {
        salvarOuAtualizar(objeto);
    }
    
    public void excluir(T objeto) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.getTransaction().begin();
        session.delete(objeto);
        session.getTransaction().commit();
    }
    
    public T consultar(Object chave) {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        T objeto = (T)session.createCriteria(classe).add(Restrictions.idEq(chave)).uniqueResult();
        session.getTransaction().commit();
        return objeto;
    }
    
    public List<T> listar() {
        Session session = HibernateUtil.getSessionFactory().getCurrentSession();
        session.beginTransaction();
        Criteria criteria = session.createCriteria(classe);
        criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
        List<T> lista = criteria.list();
        session.getTransaction().commit();
        return lista;
    }
    
}
