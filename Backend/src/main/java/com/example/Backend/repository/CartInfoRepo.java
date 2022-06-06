package com.example.Backend.repository;

import com.example.Backend.model.CartInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartInfoRepo extends JpaRepository<CartInfo, Integer> {
}
