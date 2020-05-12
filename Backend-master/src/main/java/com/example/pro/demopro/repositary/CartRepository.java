package com.example.pro.demopro.repositary;

import com.example.pro.demopro.domain.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartRepository extends MongoRepository<Cart,String> {
}
