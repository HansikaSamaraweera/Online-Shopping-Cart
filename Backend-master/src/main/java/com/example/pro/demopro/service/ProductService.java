package com.example.pro.demopro.service;

import com.example.pro.demopro.domain.Product;
import com.example.pro.demopro.repositary.ProductRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepositary productRepositary;

    public Product saveOrUpdateProduct(Product product)
    {
        return productRepositary.save(product);
    }

    public Iterable<Product> findAll(){ return productRepositary.findAll();}


    public Product findById(String id){ return productRepositary.getById(id); }

    public void delete(String id){
        Product product = findById(id);
        productRepositary.delete(product);
    }
}
