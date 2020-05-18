package com.example.pro.demopro.repositary;

import com.example.pro.demopro.domain.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartRepository extends MongoRepository<Cart,String> {

//    @Query("{'user' : ?0 , 'date' : ?1}")
    Iterable<Cart> getByUserAndDate(String user, String date);


     Iterable<Cart> getByUser(String user);

    Cart getById(String id);
}
