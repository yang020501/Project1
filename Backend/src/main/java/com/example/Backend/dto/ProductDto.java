package com.example.Backend.dto;

import java.io.Serializable;
import java.util.Objects;

public class ProductDto implements Serializable {
    private final String id;
    private final String name;
    private final String id_cate;
    private final String images;
    private final long price;
    private final String slug;
    private final String color;
    private final String size;
    private final String descriptions;

    public ProductDto(String id, String name, String id_cate, String image, long price, String slug, String color, String size, String description) {
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

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getId_cate() {
        return id_cate;
    }

    public String getImage() {
        return images;
    }

    public long getPrice() {
        return price;
    }

    public String getSlug() {
        return slug;
    }

    public String getColor() {
        return color;
    }

    public String getSize() {
        return size;
    }

    public String getDescription() {
        return descriptions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductDto entity = (ProductDto) o;
        return Objects.equals(this.id, entity.id) &&
                Objects.equals(this.name, entity.name) &&
                Objects.equals(this.id_cate, entity.id_cate) &&
                Objects.equals(this.images, entity.images) &&
                Objects.equals(this.price, entity.price) &&
                Objects.equals(this.slug, entity.slug) &&
                Objects.equals(this.color, entity.color) &&
                Objects.equals(this.size, entity.size) &&
                Objects.equals(this.descriptions, entity.descriptions);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, id_cate, images, price, slug, color, size, descriptions);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "id = " + id + ", " +
                "name = " + name + ", " +
                "id_cate = " + id_cate + ", " +
                "image = " + images + ", " +
                "price = " + price + ", " +
                "slug = " + slug + ", " +
                "color = " + color + ", " +
                "size = " + size + ", " +
                "description = " + descriptions + ")";
    }
}
