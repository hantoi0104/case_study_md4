package com.codegym.repository;

import com.codegym.models.Account;
import com.codegym.models.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface IPostRepository extends PagingAndSortingRepository<Post, Long> {
    Page<Post> findAllByAccountOrderByDatePostDesc(Account account, Pageable pageable);


    @Query(nativeQuery = true,
            value = "select * from post \n" +
                    "WHERE account_id in(\tselect account1_id from relationship WHERE account2_id=:id \n" +
                    "\t\t\t\tunion \tselect account2_id from relationship WHERE account1_id=:id )\n" +
                    "or account_id=:id \n" +
                    "order by date_post desc")
    Page<Post> findPostOfFriend(@Param("id") long  id, Pageable pageable);

}
