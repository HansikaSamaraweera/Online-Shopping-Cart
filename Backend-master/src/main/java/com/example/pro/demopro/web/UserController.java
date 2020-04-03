package com.example.pro.demopro.web;
import com.example.pro.demopro.domain.User;
import com.example.pro.demopro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/api/Users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("")
    public ResponseEntity<?> addCustomer(@RequestBody User user){
        String x=user.getName();
        boolean check=userService.checkName(x);
        System.out.println(check);
        if(check==false) {
            User newCus = userService.saveOrUpdateCustomer(user);
            return new ResponseEntity<User>(newCus, HttpStatus.CREATED);
        }else{
            Map<String ,String> er=new HashMap<>();
            er.put("error","user name existed");
            return new ResponseEntity<Map<String ,String>>(er, HttpStatus.BAD_REQUEST);
        }

    }
    @GetMapping("/all")
    public Iterable<User> getAllPts(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPTById(@PathVariable String id){
        User user=userService.findById(id);
        return new ResponseEntity<User>(user,HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getName(@PathVariable String name){
        User user=userService.findByName(name);
        return new ResponseEntity<User>(user,HttpStatus.OK);
    }
}
