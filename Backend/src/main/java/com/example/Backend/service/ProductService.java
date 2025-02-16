package com.example.Backend.service;

import com.example.Backend.dto.ProductDto;
import com.example.Backend.repository.ProductRepo;

import java.util.List;

public interface ProductService {
    public List<ProductDto> getAll();
    public ProductDto getDetail_byID(String id);
    public List<ProductDto> getAll_byCateID(String id_cate);
    public List<ProductDto> getProduct_byCateSlug(String categorySlug);
    public List<ProductDto> getProduct_bySlug(String slug);
    public List<ProductDto> getAll_SaleProduct();
    public List<ProductDto> getClothes();
    public List<ProductDto> getAccessory();
    public boolean check_Title_duplicate(ProductDto product);
    public ProductDto add(ProductDto product);
    public ProductDto update(ProductDto product);
    public ProductDto delete(ProductDto product);



}
