import React, { Component } from 'react'
import Filtering from './Filtering'
import Topsmallboxes from './Topsmallboxes'


export default class Mainpage extends Component {
    render() {
        return (
            <div className = "content-wrapper"  >
                <div >
                    <Topsmallboxes/>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/images/background.jpg`} style={{width:"100%"}}/>
                        </div>
                    <Filtering/>
                </div>
            </div>
        )
    }
}
