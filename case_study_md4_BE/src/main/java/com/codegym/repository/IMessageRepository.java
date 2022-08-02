package com.codegym.repository;

import com.codegym.models.Message;
import org.springframework.data.repository.CrudRepository;

public interface IMessageRepository extends CrudRepository<Message, Long> {
}
