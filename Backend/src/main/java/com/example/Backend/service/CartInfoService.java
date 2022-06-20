package com.example.Backend.service;

import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.dto.CartRequestDto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CartInfoService {
    public List<CartRequestDto> getAll_byCardId(String id);

    public void add(List<CartInfoDto> list, String cart_id);

}
