package com.example.wdt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class MainController {
    @GetMapping("test")
    public String test(@RequestParam(value = "title")String title) {
        return title + "Spring boot 공부 합시다!!!!";
    }
}
