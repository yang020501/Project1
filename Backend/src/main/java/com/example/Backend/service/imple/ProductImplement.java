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
    public ProductDto getDetail_byID(String id) {
        return productRepo.getDetail_byID(id);
    }

    @Override
    public List<ProductDto> getAll_byCateID(String id_cate) {
        return productRepo.getAll_byCateID(id_cate);
    }

    @Override
    public List<ProductDto> getProduct_byCateSlug(String slug) {
        return productRepo.getProduct_byCateSlug(slug);
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
