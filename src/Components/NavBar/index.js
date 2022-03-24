import React from "react";
import { 
NavTab,
NavTabContainer
} from "./style";

import navbar from '../Assets/navbar.png'

export default function Navbar(){
        return(
                <NavTabContainer>
                    <NavTab source={navbar}/>
                </NavTabContainer>
    )
}