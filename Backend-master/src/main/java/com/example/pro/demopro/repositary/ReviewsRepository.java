package com.example.pro.demopro.repositary;

import com.example.pro.demopro.domain.Reviews;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ReviewsRepository extends MongoRepository<Reviews,Integer> {

    Iterable<Reviews> getByP(String p);
}
