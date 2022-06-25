package com.example.Backend.repository;

import com.example.Backend.dto.SaleProductDto;
import com.example.Backend.model.SaleProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SaleProductRepo extends JpaRepository<SaleProduct, Integer> {
    @Query("SELECT new com.example.Backend.dto.SaleProductDto(p.product_id, p.product_title, p.slug, p.sale) FROM SaleProduct p")
    public List<SaleProductDto> getAll();

}
