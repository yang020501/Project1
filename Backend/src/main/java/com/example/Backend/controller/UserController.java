package com.example.Backend.controller;

import com.example.Backend.RandomGenerate;
import com.example.Backend.dto.UserDto;
import com.example.Backend.model.User;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;


    @Transactional
    @PostMapping("/login")
    public Object login(@RequestBody UserDto user){
        try {
            List<UserDto> list_user = userService.getAll();
            boolean find = userService.checkLogin(user.getUsername(), user.getPassword(), list_user);
            if(find){
                UserDto tmp = userService.find_byUserName(user.getUsername());
                User login_user = new User();
                login_user.setId(tmp.getId());
                login_user.setUsername(tmp.getUsername());
                login_user.setCustomer_name(tmp.getCustomer_name());
                login_user.setPhone(tmp.getPhone());
                login_user.setHouse_address(tmp.getHouse_address());
                login_user.setAddress1(tmp.getAddress1());
                login_user.setAddress2(tmp.getAddress2());
                login_user.setAddress3(tmp.getAddress3());
                return new ResponseEntity<User>(login_user, HttpStatus.ACCEPTED);
            }
            return new ResponseEntity<String>( "Login false", HttpStatus.FOUND);

        }
        catch (Exception e) {
            return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    @PostMapping("/sign_in")

    public Object sign(@RequestBody UserDto new_user){
        try {
            List<UserDto> list_user = userService.getAll();
            boolean find = userService.find_dublicate_username(new_user.getUsername(), list_user);
            if(find){
                return new ResponseEntity<String>("Can not sign in with this username", HttpStatus.BAD_REQUEST);
            }
            String id = RandomGenerate.GenerateId(5);
            String username = new_user.getUsername();
            String password = new_user.getPassword();
            String customer_name = new_user.getCustomer_name();
            String phone = new_user.getPhone();
            String house_address = new_user.getHouse_address();
            String address1 = new_user.getAddress1();
            String address2 = new_user.getAddress2();
            String address3 = new_user.getAddress3();
            userService.add(id, username, password, customer_name, phone, house_address, address1, address2, address3);

            return new ResponseEntity<String>("Add a user successfully" ,HttpStatus.CREATED);

        }
        catch (Exception e) {
            return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getAll")
    public Object getAll(){
        try {
            List<UserDto> userlist = userService.getAll();
            return new ResponseEntity<List<UserDto>>(userlist, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    @PatchMapping("/update")
    public Object update(@RequestBody UserDto userDto){
        try {
            String id = userDto.getId();
            String customer_name = userDto.getCustomer_name();
            String phone = userDto.getPhone();
            String house_address = userDto.getHouse_address();
            String address1 = userDto.getAddress1();
            String address2 = userDto.getAddress2();
            String address3 = userDto.getAddress3();
            userService.update_information(customer_name, phone, house_address, address1, address2, address3, id);
            return new ResponseEntity<UserDto>(userDto, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
        }
    }

}
