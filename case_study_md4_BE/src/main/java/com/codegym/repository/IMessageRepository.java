package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Message;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IMessageRepository extends CrudRepository<Message, Long> {
    @Query(value = "select * from message where sender_id =:admin_id and receiver_id =:friend_id\n" +
            "UNION\n" +
            "select * from message where sender_id =:friend_id and receiver_id =:admin_id\n "+
            "order by date ASC", nativeQuery = true)
    List<Message> findByAccountBeforeAndAccountAfter( @Param("admin_id") long admin_id, @Param("friend_id") long friend_id );

    List<Message> findAllBySenderAndReceiver(Account sender,Account receiver);


}
