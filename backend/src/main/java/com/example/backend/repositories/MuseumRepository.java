package com.example.backend.repositories;

import com.example.backend.models.Museum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MuseumRepository extends JpaRepository<Museum, Long> {
}
