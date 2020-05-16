package com.example.pro.demopro.service;

import com.example.pro.demopro.domain.Cart;
import com.example.pro.demopro.domain.User;
import com.example.pro.demopro.repositary.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
@Autowired
    private CartRepository cartRepository;

    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public Iterable<Cart> getByUserAndDate(String user, String date) {
        return cartRepository.getByUserAndDate(user,date);
    }

    public Iterable<Cart> getByUser(String user){
        return cartRepository.getByUser(user);
    }

    public Iterable<Cart> findAll() {
        return cartRepository.findAll();
    }
}
