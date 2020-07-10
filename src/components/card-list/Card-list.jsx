import React from "react";
import {Card} from "../card/Card"
import "./Card-list.css";


export const Cardlist = (props) => {
    return (
        <div className ="card-list"> 
          {props.monsters.map(monster => 
            <Card key = {monster.id} monster = {monster} />
          )}
        </div>
    )
}
