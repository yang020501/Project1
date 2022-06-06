package com.example.Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "CartInfo")
public class CartInfo {
    @Id
    private String id_cart;
    private String id_product;
    private int amount;


    public CartInfo(String id_cart, String id_product, int amount) {
        this.id_cart = id_cart;
        this.id_product = id_product;
        this.amount = amount;
    }

    public CartInfo() {

    }

    public String getId() {
        return id_cart;
    }

    public void setId(String id_cart) {
        this.id_cart = id_cart;
    }

    public String getId_product() {
        return id_product;
    }

    public void setId_product(String id_product) {
        this.id_product = id_product;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }
}
