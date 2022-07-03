package com.example.Backend.repository;

import com.example.Backend.dto.CartDto;
import com.example.Backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface CartRepo extends JpaRepository<Cart, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Cart(id, customer_id, address ,create_date, total) VALUES (?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    public void add(String id, String customer_id, String address, LocalDate create_date, long total);

    @Query(value = "SELECT id FROM Cart")
    public List<String> get_list_id();

    @Query(value = "SELECT id FROM Cart p WHERE p.customer_id = ?1")
    public List<String> getId_byCustomerID(String customer_id);

    @Query("SELECT new com.example.Backend.dto.CartDto(p.id, p.customer_id, p.address, p.create_date, p.total, p.status) FROM Cart p Where " +
            "p.customer_id = ?1")
    public List<CartDto> getCart_byCustomerID(String customer_id);

}
