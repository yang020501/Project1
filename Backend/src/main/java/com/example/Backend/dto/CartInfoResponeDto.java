package com.example.Backend.dto;

import java.io.Serializable;
import java.util.List;

public class CartInfoResponeDto implements Serializable {
    private String cart_id;
    private List<CartInfoDto> list_product;

    public CartInfoResponeDto(String cart_id, List<CartInfoDto> list_product) {
        this.cart_id = cart_id;
        this.list_product = list_product;
    }

    public String getCart_id() {
        return cart_id;
    }

    public void setCart_id(String cart_id) {
        this.cart_id = cart_id;
    }

    public List<CartInfoDto> getList_product() {
        return list_product;
    }

    public void setList_product(List<CartInfoDto> list_product) {
        this.list_product = list_product;
    }
}
