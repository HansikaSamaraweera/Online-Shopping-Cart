package com.example.pro.demopro.service;

import com.example.pro.demopro.domain.Reviews;
import com.example.pro.demopro.domain.User;
import com.example.pro.demopro.repositary.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ReviewsService {
    @Autowired
    private ReviewsRepository reviewsRepository;

    public Reviews addComment(Reviews reviews) {
        return reviewsRepository.save(reviews);
    }

    public Iterable<Reviews> getByName() {
        return reviewsRepository.findAll();
    }
}
