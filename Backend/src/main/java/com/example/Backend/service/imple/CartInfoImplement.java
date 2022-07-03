package com.example.Backend.service.imple;

import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.dto.CartInfoResponeDto;
import com.example.Backend.dto.CartRequestDto;
import com.example.Backend.model.CartInfo;
import com.example.Backend.repository.CartInfoRepo;
import com.example.Backend.service.CartInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartInfoImplement implements CartInfoService {
    @Autowired
    private CartInfoRepo cartInfoRepo;

    @Override
    public List<CartInfoResponeDto> getAll_byCartID(List<String> list_cart_id) {
        try {
            List<CartInfoResponeDto> list_product_buy_by_customer = new ArrayList<>();
            for (String cart_id : list_cart_id) {
                CartInfoResponeDto cart_info = new CartInfoResponeDto(cart_id, cartInfoRepo.getAll_byCartID(cart_id));
                list_product_buy_by_customer.add(cart_info);
            }
            return list_product_buy_by_customer;
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void add(List<CartInfo> list, String cart_id) {
        try{
            for (CartInfo product : list) {
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
            System.out.println("Error in cartinfo");
            e.printStackTrace();
        }
    }

}
