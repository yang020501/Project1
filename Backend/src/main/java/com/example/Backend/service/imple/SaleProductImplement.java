package com.example.Backend.service.imple;

import com.example.Backend.dto.SaleProductDto;
import com.example.Backend.repository.SaleProductRepo;
import com.example.Backend.service.SaleProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SaleProductImplement implements SaleProductService {
    @Autowired
    private SaleProductRepo saleProductRepo;

    @Override
    public List<SaleProductDto> getAll() {
        try{
            return saleProductRepo.getAll();
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
