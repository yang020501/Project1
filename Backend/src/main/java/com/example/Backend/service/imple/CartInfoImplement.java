package com.example.Backend.service.imple;

import com.example.Backend.dto.CartRequestDto;
import com.example.Backend.repository.CartInfoRepo;
import com.example.Backend.service.CartInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartInfoImplement implements CartInfoService {
    @Autowired
    CartInfoRepo cartInfoRepo;

    public CartInfoImplement() {
        super();
    }

    @Override
    public List<CartRequestDto> getAll() {
        return null;
    }

    @Override
    public void add(List<CartRequestDto> list) {

    }
}
