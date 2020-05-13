package com.example.pro.demopro.service;

import com.example.pro.demopro.domain.Category;
import com.example.pro.demopro.repositary.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin
@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Category saveOrUpdateCategory(Category category){
    if(category.getcType()==null || category.getcType()==""){
                category.setcType("PREMIUM COLLECTION");
            }
        return categoryRepository.save(category);
    }

    public Iterable<Category> findAll(){
        return categoryRepository.findAll();
    }

    public Category findById(String id){
        return categoryRepository.getById(id);
    }

    public void delete(String id){
        Category category=findById(id);
        categoryRepository.delete(category);
    }
}
