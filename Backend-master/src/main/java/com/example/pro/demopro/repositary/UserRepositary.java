package com.example.pro.demopro.repositary;


import com.example.pro.demopro.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepositary extends MongoRepository<User,Long> {
    User getById(String id);
    User getByName(String name);
    boolean existsByName(String name);
}
