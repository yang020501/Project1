package com.example.Backend.service;

import com.example.Backend.dto.UserDto;

import java.util.List;

public interface UserService {

    public List<UserDto> getAll();
    public boolean checkLogin(String username, String password, List<UserDto> list);
    public boolean find_dublicate_username(String username, List<UserDto> list);
    public UserDto find_byUserName(String username);
    public UserDto find_byID(String id);
    public void add(String id, String username, String password, String customer_name, String phone,
                    String house_address, String address1, String address2, String address3);
    public void update(String customer_name, String phone, String house_address, String address1,
                       String address2, String address3, String id);
}
