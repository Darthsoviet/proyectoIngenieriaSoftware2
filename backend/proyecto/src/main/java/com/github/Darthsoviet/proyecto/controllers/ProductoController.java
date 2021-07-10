package com.github.Darthsoviet.proyecto.controllers;

import com.github.Darthsoviet.proyecto.models.Producto;
import com.github.Darthsoviet.proyecto.services.ProductoServiceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/productos")

public class ProductoController {

   @Autowired
   private ProductoServiceImplementation productoService;



   @GetMapping
   public ResponseEntity<Page<Producto>> list(Pageable pageable ) {


      return ResponseEntity.ok(productoService.list(pageable));

   }


   @PostMapping
   public ResponseEntity<Producto> save(@RequestBody Producto producto ) {


      return new ResponseEntity<Producto>(productoService.save(producto),HttpStatus.CREATED);

   }

   @PutMapping("/{id}")
   public ResponseEntity<Producto> update(@RequestBody Producto producto,@PathVariable Long id ) {


      return new ResponseEntity<Producto>(productoService.update(id,producto),HttpStatus.CREATED);

   }


   @DeleteMapping("/{id}")
   public void update(@PathVariable  Long id ) {
      productoService.delete(id);

      

   }


   @GetMapping("/{id}")
   public ResponseEntity<Producto> get(@PathVariable Long id) {

      return ResponseEntity.ok(productoService.get(id));

   }



}
