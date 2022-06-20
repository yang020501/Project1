package com.example.Backend.dto;

import java.util.List;

public class CartRequestDto {

    private UserDto user;
    private List<CartInfoDto> list_product;
    private String address;

    public CartRequestDto(UserDto user, List<CartInfoDto> list_product, String address) {
        this.user = user;
        this.list_product = list_product;
        this.address = address;
    }

    public UserDto getUser() {
        return user;
    }

    public List<CartInfoDto> getList_product() {
        return list_product;
    }

    public String getAddress() {
        return address;
    }
}
