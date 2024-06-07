package com.disaster_recovery_system.Service;

import com.disaster_recovery_system.Model.UserModel;
import com.disaster_recovery_system.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    public UserModel registerUser(String login,String password,String email){
        if(login==null || password==null){
            return null;
        }
        else {
            UserModel userModel= new UserModel();
            userModel.setLogin(login);
            userModel.setPassword(password);
            userModel.setEmail(email);
            return userRepository.save(userModel);
        }
    }
    public UserModel authenticate(String login, String password){
        return userRepository.findByLoginAndPassword(login,password).orElse(null);
    }
}
