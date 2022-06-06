package com.example.Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product")
public class Product {
    @Id
    private String id;
    private String name;
    private String id_cate;
    private String images;
    private long price;
    private String slug;
    private String color;
    private String size;
    private String descriptions;

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public Product(String id, String name, String id_cate,String image, long price, String slug, String color, String size, String description) {
        this.id = id;
        this.name = name;
        this.id_cate = id_cate;
        this.images = image;
        this.price = price;
        this.slug = slug;
        this.color = color;
        this.size = size;
        this.descriptions = description;
    }

    public Product() {
    }

    public String getId() {
        return id;
    }

    public void setId(String  id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return images;
    }

    public void setImage(String image) {
        this.images = image;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getDescription() {
        return descriptions;
    }

    public void setDescription(String description) {
        this.descriptions = description;
    }

    public String getId_cate() {
        return id_cate;
    }
    public void setId_cate(String id_cate) {
        this.id_cate = id_cate;
    }
}
