package com.github.Darthsoviet.proyecto.services;


import java.time.LocalDateTime;

import com.github.Darthsoviet.proyecto.models.Producto;
import com.github.Darthsoviet.proyecto.repository.ProductoRepository;
import com.github.Darthsoviet.proyecto.services.interfaces.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class ProductoServiceImplementation implements ProductoService {

   @Autowired
   private ProductoRepository productoRepository;

   @Override
   public Producto get(Long id) {

      return productoRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "producto  no encontrado"));
   }

   @Override
   public Page<Producto> list(Pageable pageable) {

      var producto=productoRepository.findAll(pageable);
      return producto;
   }

   @Override

   public Producto save(Producto producto) {

      producto.setFechaCreacion(LocalDateTime.now());
      return productoRepository.save(producto);
   }

   @Override

   public Producto update(Long id, Producto producto) {
      producto.setId(id);
      return productoRepository.save(producto);
   }

   @Override

   public void delete(Long id) {

      productoRepository.deleteById(id);
   }

}
