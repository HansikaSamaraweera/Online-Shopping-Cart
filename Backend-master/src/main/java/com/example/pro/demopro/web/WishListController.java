package com.example.pro.demopro.web;

import com.example.pro.demopro.domain.WishList;
import com.example.pro.demopro.service.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/wishList")
public class WishListController {
    @Autowired
    private WishListService wishListService;

    @PostMapping(value = "/add")
    public WishList addToWishList(@RequestBody WishList wishList){
        return wishListService.addToWishList(wishList);
    }

    @GetMapping(value = "/name")
    public Iterable<WishList> getByName( ){
        return wishListService.getByName( );
    }

    @GetMapping("/name/{user}")
    public Iterable<WishList> getByUser(@PathVariable String user){
        System.out.println(user);
        return wishListService.getByUser(user);
    }
}
