import React, { Component } from 'react'
import axios from 'axios';


const Treehouse_API_Base_URL = "http://localhost:8080/api/v1/treehouses";
const User_API_Post_URL = "http://localhost:8080/api/v1/saveUsers";

 class treehouseservice {
    
    getTreehouses(){       {/*create a method to fech all tree houses by passing the RestAPI url*/}
        return axios.get(Treehouse_API_Base_URL);  {/*use axios library to connect to backend-frontend*/}
    }

    createUser(user){ {/* */}
        return axios.post(User_API_Post_URL, user);
    }
}

{/*export the object of class*/}
export default new treehouseservice()  
