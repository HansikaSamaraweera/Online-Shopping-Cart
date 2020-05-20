package com.example.pro.demopro.web;
import com.example.pro.demopro.domain.Product;
import com.example.pro.demopro.service.ProductService;
import com.example.pro.demopro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.validation.Valid;
import java.util.Date;
import java.util.Properties;

@CrossOrigin
@RestController
@RequestMapping("/api/Products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("")
    public ResponseEntity<?>addProduct(@Valid @RequestBody Product product, BindingResult result){

        if(result.hasErrors()){
            Map<String, String > errorMap = new HashMap<>();

            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        Product newProduct = productService.saveOrUpdateProduct(product);
        return new ResponseEntity<Product>(newProduct,HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<Product> getAllPTs(){
        return productService.findAll();
    }

    @GetMapping("/{p_id}")
    public ResponseEntity<?> getPbyId(@PathVariable String p_id){
        Product product = productService.findById(p_id);
        return new ResponseEntity<Product>(product, HttpStatus.OK);

    }


    @DeleteMapping("/{p_id}")
    public ResponseEntity<?> delete(@PathVariable String p_id){
        productService.delete(p_id);
        return new ResponseEntity<String>("Product Deleted", HttpStatus.OK);
    }
}
