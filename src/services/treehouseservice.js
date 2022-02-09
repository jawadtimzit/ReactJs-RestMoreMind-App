import React, { Component } from 'react'
import axios from 'axios';

const Treehouse_API_Base_URL="http://localhost:8080/api/v1/treehouses";
const User_API_Post_URL="http://localhost:8080/api/v1/saveUsers";

 class treehouseservice {
    //create method to fech all treehouses by passing the RestAPI url
    getTreehouses(){  
        //use axios library to connect backend-frontend
        return axios.get(Treehouse_API_Base_URL); 
    }
    //create a method to post users to user object
    createUser(user){ 
        return axios.post(User_API_Post_URL, user);
    }
    //create a method to get price of treehouse
    getPrices(){
        return axios.get("http://localhost:8080/api/v1/getPrices");
    }
    //create a method to get size of treehouse
    getSizes(){
        return axios.get("http://localhost:8080/api/v1/getTreeHouseSizes");
    }
    //create a method to get city of treehouse
    getCities(){
        return axios.get("http://localhost:8080/api/v1/getCities");
    }
}

{/*export the object of class*/}
export default new treehouseservice()  
