package br.com.viajato.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Contrato.
 */
@Entity
@Table(name = "contrato")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Contrato implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "numero", nullable = false)
    private Integer numero;

    @NotNull
    @Column(name = "valor", nullable = false)
    private Integer valor;

    @NotNull
    @Column(name = "descricao", nullable = false)
    private String descricao;

    @ManyToOne
    @JsonIgnoreProperties("contratoes")
    private Cliente cliente;

    @ManyToOne
    @JsonIgnoreProperties("contratoes")
    private Seguradora seguradora;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumero() {
        return numero;
    }

    public Contrato numero(Integer numero) {
        this.numero = numero;
        return this;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public Integer getValor() {
        return valor;
    }

    public Contrato valor(Integer valor) {
        this.valor = valor;
        return this;
    }

    public void setValor(Integer valor) {
        this.valor = valor;
    }

    public String getDescricao() {
        return descricao;
    }

    public Contrato descricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public Contrato cliente(Cliente cliente) {
        this.cliente = cliente;
        return this;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Seguradora getSeguradora() {
        return seguradora;
    }

    public Contrato seguradora(Seguradora seguradora) {
        this.seguradora = seguradora;
        return this;
    }

    public void setSeguradora(Seguradora seguradora) {
        this.seguradora = seguradora;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Contrato contrato = (Contrato) o;
        if (contrato.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), contrato.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Contrato{" +
            "id=" + getId() +
            ", numero=" + getNumero() +
            ", valor=" + getValor() +
            ", descricao='" + getDescricao() + "'" +
            "}";
    }
}
