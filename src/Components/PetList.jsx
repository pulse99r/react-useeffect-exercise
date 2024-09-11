import { useState,useEffect } from "react";

export const PetList = ({pet}) => {
    const {name, kind, breed, } = pet
    return (
      <aside className="pets-list">
        <p>{name}, {kind}, {breed}</p>
      </aside>
    );
  };
  
  export default PetList;