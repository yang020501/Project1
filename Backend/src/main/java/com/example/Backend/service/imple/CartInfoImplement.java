package com.example.Backend.service.imple;

import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.dto.CartRequestDto;
import com.example.Backend.model.CartInfo;
import com.example.Backend.repository.CartInfoRepo;
import com.example.Backend.service.CartInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartInfoImplement implements CartInfoService {
    @Autowired
    private CartInfoRepo cartInfoRepo;

    @Override
    public List<CartInfoDto> getAll_byCartID(String cart_id) {
        try {
            return cartInfoRepo.getAll_byCartID(cart_id);
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void add(List<CartInfoDto> list, String cart_id) {
        try{
            for (CartInfoDto product : list) {
                String product_id = product.getProduct_id();
                String slug = product.getSlug();
                String color = product.getColor();
                String size = product.getSize();
                int amount = product.getAmount();
                long price= product.getPrice();
                cartInfoRepo.add(cart_id, product_id, slug, color, size, amount, price);
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }

}
