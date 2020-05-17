package com.example.pro.demopro.web;

import com.example.pro.demopro.domain.Cart;
import com.example.pro.demopro.domain.Reviews;
import com.example.pro.demopro.domain.User;
import com.example.pro.demopro.service.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping(value = "/get")
    public Iterable<Reviews> getByName( ){
        return reviewsService.getByName( );
    }
    @GetMapping("/name/{p}")
    public Iterable<Reviews> getByP(@PathVariable String p){
        System.out.println(p);
        return reviewsService.getByP(p);

    }
}
