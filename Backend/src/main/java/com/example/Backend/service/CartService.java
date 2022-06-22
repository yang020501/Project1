package com.example.Backend.service;

import com.example.Backend.dto.CartInfoDto;
import com.example.Backend.model.Cart;
import com.example.Backend.model.CartInfo;

import java.util.Date;
import java.util.List;

public interface CartService {
    public List<Cart> getAll();
    public void add(String cart_id, String customer_id, String address ,List<CartInfo> list_product);
    public List<String> getAll_Id();
    public List<String> getId_byCustomerID(String customer_id);
}
