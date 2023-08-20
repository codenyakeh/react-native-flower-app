import React from 'react';
import { FlatList } from "react-native";
import Home from '../component/Home';
import Flower1 from "../../assets/images/flower 1.jpeg";
 import Flower2 from "../../assets/images/flower 2.jpg";
 import Flower3 from "../../assets/images/flower 3.jpeg";
 import Flower4 from "../../assets/images/flower 4.jpg";
import Flower5 from "../../assets/images/flower 5.jpeg";
 import Flower6 from "../../assets/images/flower 6.jpg";
import User1 from "../../assets/images/Profile 1.jpg";
import User2 from "../../assets/images/Profile 2.jpg";
import User3 from "../../assets/images/ProfileH.jpg";




const ListOfFlowers = () => {
    const minRead = ' mins read';
    const dot = '.';
    const db =[
      {
        id:1,
        img:Flower1,
        heading:"Exceptional Flower",
        owner:"Pharez L. Gbetu",
        time:`${11 + minRead}`,
        user:User1, 
        article:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
      },
      {
        id:2,
        img:Flower2,
        heading:"Underated clossy flower",
        owner:"Emrica D. Gbetu",
        time:`${9 + minRead}`,
        user:User2, 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },

      {
        id:3,
        img:Flower3,
        heading:"Chosen flower",
        owner:"Vincent",
        time:`${4 + minRead}`,
        user:User3, 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id:4,
        img:Flower4,
        heading:"Appealing Flower",
        owner:"Deso",
        time:`${3 + minRead}`,
        user:User2, 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id:5,
        img:Flower5,
        heading:"Favourite Flower",
        owner:"zitta",
        time:`${2 + minRead}`,
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        id:6,
        img:Flower6,
        heading:"Outstanding flower",
        owner:"Pa Deigh",
        time:`${1 + minRead}`,
        user:User2, 
        article:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ];

  return (
    <FlatList
      data={db}
      renderItem={({item})=> {
        return (
          <Home
            img= {item.img}
            Heading= {item.heading}
            Owner= {item.owner}
            User= {item.user}
            Time= {item.time}
            Article= {item.article}
            Id={item.id}
            Color= {item.color}
          />
        )
    }}
    keyExtractor={(item)=>item.id }
    />
);
}

export default ListOfFlowers;
