package com.example.Backend.controller;

import com.example.Backend.dto.ProductDto;
import com.example.Backend.dto.SaleProductDto;
import com.example.Backend.repository.SaleProductRepo;
import com.example.Backend.service.SaleProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product/sale")
public class SaleProductController {
    @Autowired
    private SaleProductService saleProductService;

    @GetMapping
    public Object getAll() {
        try {
            List<SaleProductDto> productList = saleProductService.getAll();
            return new ResponseEntity<List<SaleProductDto>>(productList, HttpStatus.OK);
        }
        catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
        }
    }
}
