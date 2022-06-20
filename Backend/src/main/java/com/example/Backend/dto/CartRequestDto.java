package com.example.Backend.dto;

public class CartRequestDto {
    private String slug;
    private String color;
    private String size;
    private int quantity;
    private long price;
    private String address;

    public String getSlug() {
        return slug;
    }

    public CartRequestDto(String slug, String color, String size, int quantity, long price, String address) {
        this.slug = slug;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
        this.price = price;
        this.address = address;
    }

    public String getColor() {
        return color;
    }

    public String getSize() {
        return size;
    }

    public int getQuantity() {
        return quantity;
    }

    public long getPrice() {
        return price;
    }

    public String getAddress() {
        return address;
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
