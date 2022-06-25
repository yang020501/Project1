package com.example.Backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SaleProduct")
public class SaleProduct {
    @Id
    private String product_id;
    private String product_title;
    private String slug;
    private int sale;

    public SaleProduct() {
    }

    public SaleProduct(String product_id, String product_title, String slug, int sale) {
        this.product_id = product_id;
        this.product_title = product_title;
        this.slug = slug;
        this.sale = sale;
    }

    public String getProduct_id() {
        return product_id;
    }

    public void setProduct_id(String product_id) {
        this.product_id = product_id;
    }

    public String getProduct_title() {
        return product_title;
    }

    public void setProduct_title(String product_name) {
        this.product_title = product_name;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public int getSale() {
        return sale;
    }

    public void setSale(int sale) {
        this.sale = sale;
    }
}
