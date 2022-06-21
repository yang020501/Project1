package com.example.Backend.service;

import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.dto.CartRequestDto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CartInfoService {
    public void add(List<CartInfoDto> list, String cart_id);
    public List<CartInfoDto> getAll_byCartID(String cart_id);

}
