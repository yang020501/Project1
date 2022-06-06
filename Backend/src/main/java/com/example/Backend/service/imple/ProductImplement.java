package com.example.Backend.service.imple;

import com.example.Backend.dto.ProductDto;
import com.example.Backend.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Backend.repository.ProductRepo;
import com.example.Backend.service.ProductService;

import java.util.List;

@Service
public class ProductImplement implements ProductService {
    @Autowired
    private ProductRepo productRepo;

    @Override
    public List<ProductDto> getAll() {
        return productRepo.getAll();
    }

    @Override
    public void add(ProductDto product) {

    }
    @Override
    public void update(ProductDto product) {

    }

    @Override
    public List<ProductDto> getProductsByCategory(String categorySlug) {
        return null;
    }
}
