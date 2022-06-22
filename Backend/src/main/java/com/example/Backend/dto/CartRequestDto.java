package com.example.Backend.dto;

import java.util.List;

public class CartRequestDto {

    private String user_id;
    private List<CartInfoDto> list_product;
    private String address;

    public CartRequestDto(String user_id, List<CartInfoDto> list_product, String address) {
        this.user_id = user_id;
        this.list_product = list_product;
        this.address = address;
    }

    public String getUserID() {
        return user_id;
    }

    public List<CartInfoDto> getList_product() {
        return list_product;
    }

    public String getAddress() {
        return address;
    }
}
