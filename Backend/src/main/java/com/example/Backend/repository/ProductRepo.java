package com.example.Backend.repository;

import com.example.Backend.dto.ProductDto;
import com.example.Backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
    @Query("SELECT new com.example.Backend.dto.ProductDto(p.id, p.name, p.id_cate, p.images, p.price, p.slug, p.color, " +
            "p.size, p.descriptions) FROM Product p, Category c WHERE p.id_cate = c.id ")
    List<ProductDto> getAll();

    @Query("SELECT new com.example.Backend.dto.ProductDto(p.id, p.name, p.id_cate, p.images, p.price, p.slug, p.color, p.size," +
            "p.descriptions) FROM Product p WHERE p.id = ?1")
    ProductDto getDetail_byID(String id);

    @Query("SELECT new com.example.Backend.dto.ProductDto(p.id, p.name, p.id_cate, p.images, p.price, p.slug, p.color, p.size," +
            "p.descriptions) FROM Product p WHERE p.id_cate = ?1")
    List<ProductDto> getAll_byCateID(String id_cate);

    @Query("SELECT new com.example.Backend.dto.ProductDto(p.id, p.name, p.id_cate, p.images, p.price, p.slug, p.color, p.size," +
            "p.descriptions) FROM Product p, Category c WHERE p.id_cate = c.id AND c.slug = ?1")
    List<ProductDto> getProduct_byCateSlug(String slug);




}
