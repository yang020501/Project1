package com.example.Backend.service.imple;

import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.model.Cart;
import com.example.Backend.model.CartInfo;
import com.example.Backend.repository.CartRepo;
import com.example.Backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class CartImplement implements CartService {
    @Autowired
    private CartRepo cartRepo;

    @Override
    public List<Cart> getAll() {
        return null;
    }

    @Override
    public void add(String cart_id, String customer_id, String address, List<CartInfo> list_product) {
        try{
            LocalDate create_date = LocalDate.now();
            long price = 0;
            for (CartInfo product : list_product) {
                price += product.getPrice() * product.getAmount();
            }
            cartRepo.add(cart_id, customer_id, address, create_date, price);

        }
        catch (Exception e){
            System.out.println("Error in cart");
            e.printStackTrace();
        }
    }

    @Override
    public List<String> getAll_Id() {
        return cartRepo.get_list_id();
    }

    @Override
    public List<String> getId_byCustomerID(String customer_id) {
        return cartRepo.getId_byCustomerID(customer_id);
    }
}
