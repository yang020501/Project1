package com.example.Backend.service;

import com.example.Backend.dto.CartRequestDto;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CartInfoService {
    public List<CartRequestDto> getAll();

    public void add(List<CartRequestDto> list);

}
