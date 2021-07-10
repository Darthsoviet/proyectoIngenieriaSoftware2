package com.github.Darthsoviet.proyecto.services.interfaces;

import com.github.Darthsoviet.proyecto.models.Producto;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductoService {

   Producto get(Long id);

   Page<Producto> list(Pageable pageable);

   Producto save(Producto producto);

   Producto update(Long id, Producto producto);

   void delete(Long id);

}
