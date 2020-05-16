package com.example.pro.demopro.web;

import com.example.pro.demopro.domain.Cart;
import com.example.pro.demopro.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
