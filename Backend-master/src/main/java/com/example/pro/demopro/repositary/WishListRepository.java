package com.example.pro.demopro.repositary;

import com.example.pro.demopro.domain.WishList;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WishListRepository extends MongoRepository<WishList,String> {

    Iterable<WishList> getByUser(String user);

    WishList getById(String id);
}
