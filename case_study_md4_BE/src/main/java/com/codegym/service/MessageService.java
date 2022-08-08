package com.codegym.service;

import com.codegym.models.Account;
import com.codegym.models.Message;
import com.codegym.repository.IMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MessageService {
    @Autowired
    IMessageRepository iMessageRepository;
    public List<Message> findMessageByFriend(long admin_id, long friend_id) {
      return iMessageRepository.findByAccountBeforeAndAccountAfter( admin_id, friend_id);
    }





    public void save( Message message){
        iMessageRepository.save( message);
    }
}