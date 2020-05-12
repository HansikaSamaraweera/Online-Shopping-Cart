package com.example.pro.demopro.repositary;

import com.example.pro.demopro.domain.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, String> {
    Category getById(String id);
}
