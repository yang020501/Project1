package com.example.Backend.repository;

import com.example.Backend.model.CartInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CartInfoRepo extends JpaRepository<CartInfo, Integer> {


    @Modifying
    @Query(value = "INSERT INTO CartInfo (cart_id, product_id, slug, color, size, amount, price) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)")
    public void add(String cart_id, String product_id, String slug, String color, String size, int amount, long price);
}
