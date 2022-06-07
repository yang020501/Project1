package com.example.Backend.service.imple;

import com.example.Backend.dto.CategoryDto;
import com.example.Backend.model.Category;
import com.example.Backend.repository.CategoryRepo;
import com.example.Backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryImplement implements CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public List<CategoryDto> getAll() {
        return categoryRepo.getAll();
    }

    @Override
    public void add(Category category) {

    }

    @Override
    public void update(Category category) {

    }
}
