package com.example.Backend.dto;

import java.io.Serializable;
import java.util.Objects;

public class CartInfoDto implements Serializable {
    private final String id_cart;
    private final String id_product;
    private final int amount;

    public CartInfoDto(String id_cart, String id_product, int amount) {
        this.id_cart = id_cart;
        this.id_product = id_product;
        this.amount = amount;
    }

    public String getId_cart() {
        return id_cart;
    }

    public String getId_product() {
        return id_product;
    }

    public int getAmount() {
        return amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartInfoDto entity = (CartInfoDto) o;
        return Objects.equals(this.id_cart, entity.id_cart) &&
                Objects.equals(this.id_product, entity.id_product) &&
                Objects.equals(this.amount, entity.amount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id_cart, id_product, amount);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "id_cart = " + id_cart + ", " +
                "id_product = " + id_product + ", " +
                "amount = " + amount + ")";
    }
}
