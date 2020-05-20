package com.example.pro.demopro.repositary;
import com.example.pro.demopro.domain.Product;
import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepositary extends MongoRepository<Product,Long> {
    Product getById(String id);
    Product getByName(String name);
    Product getByPrice(String price);
    Product getByPhoto(String photo);
    Product getByCategory(String category);


}
