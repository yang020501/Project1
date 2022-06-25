package com.example.Backend.dto;

import java.io.Serializable;
import java.util.Objects;

public class SaleProductDto implements Serializable {
    private final String product_id;
    private final String product_title;
    private final String slug;
    private final int sale;

    public SaleProductDto(String product_id, String product_name, String slug, int sale) {
        this.product_id = product_id;
        this.product_title = product_name;
        this.slug = slug;
        this.sale = sale;
    }

    public String getProduct_id() {
        return product_id;
    }

    public String getProduct_title() {
        return product_title;
    }

    public String getSlug() {
        return slug;
    }

    public int getSale() {
        return sale;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SaleProductDto entity = (SaleProductDto) o;
        return Objects.equals(this.product_id, entity.product_id) &&
                Objects.equals(this.product_title, entity.product_title) &&
                Objects.equals(this.slug, entity.slug) &&
                Objects.equals(this.sale, entity.sale);
    }

    @Override
    public int hashCode() {
        return Objects.hash(product_id, product_title, slug, sale);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "product_id = " + product_id + ", " +
                "product_title = " + product_title + ", " +
                "slug = " + slug + ", " +
                "sale = " + sale + ")";
    }
}
