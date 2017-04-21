package com.quantum;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Created by alan on 20/04/17.
 */
@RestController
public class Controller {

    private final AtomicInteger users_counter = new AtomicInteger();
    List<User> users = new LinkedList<>();

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User getUser(@RequestParam(value = "id")int id){
       return users.get(id-1);
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> getUsers(){
        return users;
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public void createUser(@RequestParam(value = "name") String name){
        users.add(new User(users_counter.incrementAndGet(), name));
    }

    @RequestMapping(value = "/user", method = RequestMethod.PUT)
    public void updateUser(@RequestParam(value = "id") int id,
                         @RequestParam(value = "name") String name){
        users.get(id-1).setName(name);
    }

    @RequestMapping(value = "/user", method = RequestMethod.DELETE)
    public void deleteUser(@RequestParam(value = "id") int id){
        users.remove(id-1);
    }

}
