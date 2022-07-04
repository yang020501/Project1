package com.example.Backend.service.imple;

import com.example.Backend.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Backend.repository.ProductRepo;
import com.example.Backend.service.ProductService;

import java.util.ArrayList;
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
    public List<ProductDto> getProduct_byCateSlug(String categorySlug) {
        return productRepo.getProduct_byCateSlug(categorySlug);
    }

    @Override
    public List<ProductDto> getProduct_bySlug(String slug) {
        return productRepo.getProduct_bySlug(slug);
    }

    @Override
    public List<ProductDto> getAll_SaleProduct() {
        return productRepo.getAllSaleProduct();
    }

    @Override
    public List<ProductDto> getClothes() {
        List<ProductDto> list = productRepo.getAll();
        List<ProductDto> clothes = new ArrayList<>();
        try{
            for(ProductDto product : list){
                if(product.getCategorySlug().contains("quan") || product.getCategorySlug().contains("ao")){
                    clothes.add(product);
                }
            }

            return clothes;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<ProductDto> getAccessory() {
        List<ProductDto> list = productRepo.getAll();
        List<ProductDto> accessory = new ArrayList<>();
        try{
            for(ProductDto product : list){
                if(!(product.getCategorySlug().contains("quan") || product.getCategorySlug().contains("ao"))){
                    accessory.add(product);
                }
            }

            return accessory;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void add(ProductDto product) {}

    @Override
    public void update(ProductDto product) {}

}
