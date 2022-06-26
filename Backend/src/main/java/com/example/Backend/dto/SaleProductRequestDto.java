package com.example.Backend.dto;

import java.io.Serializable;

public class SaleProductRequestDto implements Serializable {
    private final ProductDto sale_product;
    private final int sale;

    public SaleProductRequestDto(ProductDto sale_product, int sale) {
        this.sale_product = sale_product;
        this.sale = sale;
    }

    public ProductDto getSale_product() {
        return sale_product;
    }

    public int getSale() {
        return sale;
    }
}
