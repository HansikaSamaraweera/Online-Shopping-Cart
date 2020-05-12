package com.example.pro.demopro.web;

import com.example.pro.demopro.domain.Reviews;
import com.example.pro.demopro.service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/reviews")
public class ReviewsController {
    @Autowired
    private ReviewsService reviewsService;

    @PostMapping(value = "/add")
    public Reviews addComment(@RequestBody Reviews reviews){
        return reviewsService.addComment(reviews);
    }
}
