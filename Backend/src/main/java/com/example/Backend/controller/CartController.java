package com.example.Backend.controller;

import com.example.Backend.RandomGenerate;
import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.dto.CartRequestDto;
import com.example.Backend.repository.CartRepo;
import com.example.Backend.service.CartInfoService;
import com.example.Backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.GeneratedValue;
import java.util.List;
import java.util.Random;

@RequestMapping("/cart")
@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private CartInfoService cartInfoService;

    @PostMapping("/buy")
    private Object saveCart(@RequestBody CartRequestDto cartRequestDto){
        try{
            String cart_new_id = "";
            do{
                boolean is_duplicate = false;
                cart_new_id = RandomGenerate.GenerateId(9);
                for (String id : cartService.getAll_Id()) {
                    if(id == cart_new_id){
                        is_duplicate = true;
                    }
                }
                if(!is_duplicate){
                    break;
                }
            }
            while (true);
            String customer_id = cartRequestDto.getUser().getId();
            String address = cartRequestDto.getAddress();
            List<CartInfoDto> list = cartRequestDto.getList_product();
            cartService.add(cart_new_id, customer_id, address, list);
            cartInfoService.add(list, cart_new_id);
            return new ResponseEntity<String>("Success", HttpStatus.CREATED);
        }
        catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
        }

    }

}
