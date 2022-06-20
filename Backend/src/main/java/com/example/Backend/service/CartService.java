package com.example.Backend.service;

import com.example.Backend.model.Cart;

import java.util.Date;
import java.util.List;

public interface CartService {

    public List<Cart> getAll();
    public void add(String customer_id, Date create_date, long total);
}
