package com.example.wdt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("api")
public class WdtApplication {

	@GetMapping("test")
	public String test() {
		return "start platformance, fighting!";
	}
	public static void main(String[] args) {
		SpringApplication.run(WdtApplication.class, args);
	}

}

