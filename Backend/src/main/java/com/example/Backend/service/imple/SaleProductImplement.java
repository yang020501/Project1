package com.example.Backend.service.imple;

import com.example.Backend.dto.ProductDto;
import com.example.Backend.dto.SaleProductDto;
import com.example.Backend.dto.SaleProductRequestDto;
import com.example.Backend.repository.ProductRepo;
import com.example.Backend.repository.SaleProductRepo;
import com.example.Backend.service.SaleProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SaleProductImplement implements SaleProductService {
    @Autowired
    private SaleProductRepo saleProductRepo;

    @Autowired
    private ProductRepo productRepo;

    @Override
    public List<SaleProductRequestDto> getAll() {
        try{
            List<SaleProductDto> list_sale = saleProductRepo.getAll();
            List<SaleProductRequestDto> list_sale_product = new ArrayList<>();

            for(SaleProductDto sale : list_sale){
                ProductDto product = productRepo.getDetail_byID(sale.getProduct_id());
                SaleProductRequestDto sale_product = new SaleProductRequestDto(product, sale.getSale());
                list_sale_product.add(sale_product);
            }

            return list_sale_product;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }
}
