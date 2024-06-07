package com.disaster_recovery_system.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/register")
    public   String getRegisterPage(){
        return "register_page";
    }
    @GetMapping("/login")
    public   String getloginPage(){
        return "login_page";
    }
}
