package com.example.pro.demopro.web;

import com.example.pro.demopro.domain.Category;
import com.example.pro.demopro.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("")
    public ResponseEntity<?> addCategory(@Valid @RequestBody Category category,BindingResult result){
        if (result.hasErrors()){
            Map<String,String> errorMap=new HashMap<>();

            for (FieldError error:result.getFieldErrors()){
                errorMap.put(error.getField(),error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String,String>>(errorMap,HttpStatus.BAD_REQUEST);
        }
        Category newCategory=categoryService.saveOrUpdateCategory(category);

        return new ResponseEntity<Category>(newCategory,HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Category> getAllCategories(){
        return categoryService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable String id){
        Category category=categoryService.findById(id);
        return new ResponseEntity<Category>(category,HttpStatus.OK);
    }

    @PostMapping("/updateCategory")
    public ResponseEntity<?> updateCategory(@RequestBody Category category) {
        Category upCategory ;
        upCategory=categoryService.saveOrUpdateCategory(category);
        return new ResponseEntity<Category>(upCategory, HttpStatus.OK);

    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable String id){
        categoryService.delete(id);

        return new ResponseEntity<String>("Category deleted",HttpStatus.OK);
    }
}
