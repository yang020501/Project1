package com.example.Backend.service;

import com.example.Backend.dto.CategoryDto;
import com.example.Backend.model.Category;

import java.util.List;

public interface CategoryService {
    public List<CategoryDto> getAll();
    public void add(Category category);
    public void update(Category category);
}
