package com.example.pro.demopro.web;

import com.example.pro.demopro.domain.Cart;
import com.example.pro.demopro.domain.Reviews;
import com.example.pro.demopro.domain.User;
import com.example.pro.demopro.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping(value = "/add")
    public Cart addToCart(@RequestBody Cart cart){
        return cartService.addToCart(cart);
    }

    @GetMapping(value = "/get/{user}/{date}")
    public  Iterable<Cart> getByUserAndDate(@PathVariable String user, @PathVariable String date){
        return cartService.getByUserAndDate(user,date);
    }
    @GetMapping("/name/{user}")
    public Iterable<Cart> getByUser(@PathVariable String user){
        System.out.println(user);
         return cartService.getByUser(user);


    }
    @GetMapping("/all")
    public Iterable<Cart> getAll(){
        return cartService.findAll();
    }
}
