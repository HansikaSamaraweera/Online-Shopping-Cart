package com.example.pro.demopro.service;
import com.example.pro.demopro.domain.User;
import com.example.pro.demopro.repositary.UserRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepositary userRepositary;

    public User saveOrUpdateCustomer(User user)
    {
        return userRepositary.save(user);
    }

    public Iterable<User> findAll(){
        return userRepositary.findAll();
    }

    public User findById(String id){
        return userRepositary.getById(id);
    }

    public User findByName(String name){
        return userRepositary.getByName(name);
    }

    public boolean checkName(String name){return userRepositary.existsByName(name);}

    public void delete(String id){
        User user = findById(id);
        userRepositary.delete(user);
    }

}
