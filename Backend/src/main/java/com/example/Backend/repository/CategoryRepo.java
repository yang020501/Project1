package com.example.Backend.repository;

import com.example.Backend.dto.CategoryDto;
import com.example.Backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {
    @Query("SELECT new com.example.Backend.dto.CategoryDto(p.id, p.name, p.slug) FROM Category p")
    List<CategoryDto> getAll();
}
