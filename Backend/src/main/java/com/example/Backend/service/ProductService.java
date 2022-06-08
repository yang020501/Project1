package com.example.Backend.service;

import com.example.Backend.dto.ProductDto;
import com.example.Backend.model.Product;

import java.util.List;

public interface ProductService {
    public List<ProductDto> getAll();
    public ProductDto getDetail_byID(String id);
    public List<ProductDto> getAll_byCateID(String id_cate);
    public List<ProductDto> getProduct_byCateSlug(String categorySlug);
    public List<ProductDto> getProduct_bySlug(String slug);

    public void add(ProductDto product);
    public void update(ProductDto product);



}
