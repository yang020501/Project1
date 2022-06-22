package com.example.Backend.repository;

import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.model.CartInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CartInfoRepo extends JpaRepository<CartInfo, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO CartInfo (cart_id, product_id, slug, color, size, amount, price) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)", nativeQuery = true)
    public void add(String cart_id, String product_id, String slug, String color, String size, int amount, long price);

    @Query("SELECT new com.example.Backend.dto.CartInfoDto(p.cart_id, p.product_id, p.slug, p.color, p.size, p.amount, p.price) FROM CartInfo p" +
            " WHERE p.cart_id = ?1")
    public List<CartInfoDto> getAll_byCartID(String cart_id);
}
