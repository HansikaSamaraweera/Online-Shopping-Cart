package com.example.pro.demopro.repositary;

import com.example.pro.demopro.domain.Cart;
import com.example.pro.demopro.domain.Product;
import com.example.pro.demopro.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CartRepository extends MongoRepository<Cart,String> {

//    @Query("{'user' : ?0 , 'date' : ?1}")
    Iterable<Cart> getByUserAndDate(String user, String date);


     Iterable<Cart> getByUser(String user);

    Cart getById(String id);
}
