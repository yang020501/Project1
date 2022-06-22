package com.example.Backend.service;

import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.dto.CartRequestDto;
import com.example.Backend.model.CartInfo;
import org.springframework.stereotype.Service;

import java.util.List;


public interface CartInfoService {
    public void add(List<CartInfo> list, String cart_id);
    public List<CartInfoDto> getAll_byCartID(List<String> list_card_id);

}
