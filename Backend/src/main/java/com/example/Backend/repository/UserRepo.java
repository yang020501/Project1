package com.example.Backend.repository;

import com.example.Backend.dto.UserDto;
import com.example.Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    @Query("SELECT new com.example.Backend.dto.UserDto(p.id, p.username, p.password, p.customer_name, p.phone, p.house_address, " +
            "p.address1, p.address2, p.address3) FROM Users p")
    public List<UserDto> getAll();

    @Query("SELECT new com.example.Backend.dto.UserDto(p.id, p.username, p.password, p.customer_name, p.phone, p.house_address, " +
            "p.address1, p.address2, p.address3) FROM Users p WHERE p.username = ?1")
    public UserDto find_byUserName(String username);

    @Query("SELECT new com.example.Backend.dto.UserDto(p.id, p.username, p.password, p.customer_name, p.phone, p.house_address, " +
            "p.address1, p.address2, p.address3) FROM Users p WHERE p.id = ?1")
    public UserDto find_byID(String id);

    @Modifying
    @Query(value = "INSERT INTO Users(id, username, password, customer_name, phone, house_address, address1, address2, address3) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9)", nativeQuery = true)
    public void add(String id, String username, String password, String customer_name, String phone,
                    String house_address, String address1, String address2, String address3);

    @Modifying
    @Query(value = "UPDATE Users SET password = ?1, customer_name = ?2, phone = ?3, house_address = ?4, address1 = ?5, address2 = ?6, address3 = ?7 " +
            "WHERE id = ?8" )
    public void update(String password, String customer_name, String phone, String house_address, String address1,
                       String address2, String address3, String id);

}
