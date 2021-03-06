package com.example.pro.demopro.service;

import com.example.pro.demopro.domain.WishList;
import com.example.pro.demopro.repositary.WishListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WishListService {
    @Autowired
    private WishListRepository wishListRepository;

    public WishList addToWishList(WishList wishList) {
        return wishListRepository.save(wishList);
    }

    public Iterable<WishList> getByName() {
        return wishListRepository.findAll();
    }

    public Iterable<WishList> getByUser(String user) {
        return wishListRepository.getByUser(user);
    }

    public WishList findById(String id){ return wishListRepository.getById(id); }

    public void delete(String id) {
        WishList wishList = findById(id);
        wishListRepository.delete(wishList);
    }

}
