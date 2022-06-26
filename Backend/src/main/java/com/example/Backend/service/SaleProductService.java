package com.example.Backend.service;

import com.example.Backend.dto.SaleProductDto;
import com.example.Backend.dto.SaleProductRequestDto;

import java.util.List;

public interface SaleProductService {
    public List<SaleProductRequestDto> getAll();
}
