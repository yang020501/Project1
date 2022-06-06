package com.example.Backend.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

public class CartDto implements Serializable {
    private final String id;
    private final String customer_id;
    private final Date create_date;
    private final long total;

    public CartDto(String id, String customer_id, Date create_date, long total) {
        this.id = id;
        this.customer_id = customer_id;
        this.create_date = create_date;
        this.total = total;
    }

    public String getId() {
        return id;
    }

    public String getCustomer_id() {
        return customer_id;
    }

    public Date getCreate_date() {
        return create_date;
    }

    public long getTotal() {
        return total;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CartDto entity = (CartDto) o;
        return Objects.equals(this.id, entity.id) &&
                Objects.equals(this.customer_id, entity.customer_id) &&
                Objects.equals(this.create_date, entity.create_date) &&
                Objects.equals(this.total, entity.total);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, customer_id, create_date, total);
    }

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "id = " + id + ", " +
                "customer_id = " + customer_id + ", " +
                "create_date = " + create_date + ", " +
                "total = " + total + ")";
    }
}
