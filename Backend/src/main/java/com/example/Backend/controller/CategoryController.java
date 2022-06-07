package com.example.Backend.controller;

import com.example.Backend.dto.CategoryDto;
import com.example.Backend.dto.ProductDto;
import com.example.Backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")

public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("/getAll")
    private Object getAll(){
        try {
            List<CategoryDto> categoryList = categoryService.getAll();
            return new ResponseEntity<List<CategoryDto>>(categoryList, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
        }
    }


}
