package com.quantum;

import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by alan on 20/04/17.
 */
@RestController
public class GreetingController {

    final String template = "Hello %s, from Spring!";

    @RequestMapping("/greeting")
    public String greetings(@RequestParam(value = "name", defaultValue = "world")String name){
        return String.format(template, name);
    }
}
