package com.example.Backend.controller;

import com.example.Backend.dto.ProductDto;
import com.example.Backend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.Backend.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/getAll")
    public Object getAll() {
        try {
            List<ProductDto> productList = productService.getAll();
            return new ResponseEntity<List<ProductDto>>(productList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
        }
    }



}
