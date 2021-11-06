import React, { Component } from 'react'
import axios from 'axios';


const Treehouse_API_Base_URL = "http://localhost:8080/api/v1/treehouses";

 class treehouseservice {
    
    getTreehouses(){       {/*create a method to fech all tree houses by passing the RestAPI url*/}
        return axios.get(Treehouse_API_Base_URL);  {/*use axios library to connect to backend-frontend*/}
    }
}

export default new treehouseservice()
