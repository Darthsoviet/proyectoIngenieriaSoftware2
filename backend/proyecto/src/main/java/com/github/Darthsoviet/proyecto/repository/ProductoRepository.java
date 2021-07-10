package com.github.Darthsoviet.proyecto.repository;

import com.github.Darthsoviet.proyecto.models.Producto;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends PagingAndSortingRepository<Producto,Long> {
   
}
