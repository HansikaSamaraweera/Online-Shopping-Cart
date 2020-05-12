package com.example.pro.demopro.service;

import com.example.pro.demopro.repositary.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {
@Autowired
    private CartRepository cartRepository;
}
