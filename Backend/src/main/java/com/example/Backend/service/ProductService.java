package com.example.Backend.service;

import com.example.Backend.dto.ProductDto;
import com.example.Backend.model.Product;

import java.util.List;

public interface ProductService {
    public List<ProductDto> getAll();
    public void add(ProductDto product);
    public void update(ProductDto product);

    public List<ProductDto> getProductsByCategory(String categorySlug);

}
