import React, { useState, useContext, useEffect, useId } from "react";
import Navbar from "../molecules/Navbar";
import ListTest from "../molecules/ListTest";
import { Macros } from "../molecules/Macros";
import useToggle from "../../hooks/useToggle";
import ModalCard from "../molecules/ModalCard";
import tests from "../../utils/test";
import { UserContext } from "../../context/useContext";
import { Test } from "../molecules/Test";

export const Home = () => {
  const { items, setItems, setCrud } = useContext(UserContext);
  const [open, handleOpen] = useToggle();
  const [selectedMacros, setSelectedMacros] = useState({});
  const id = useId()
  useEffect(() => {
    setItems([...tests]);
  }, []);

  const handleClose = () => {
    handleOpen()
    setSelectedMacros({})
  }
  const handleOpenMacro = (item) => {
    setSelectedMacros(item);
    setCrud("view")
    handleOpen();
  };

  const handleEditMacro = (item) => {
    setSelectedMacros(item);
    setCrud("edit")
    handleOpen();
  };

  const handleCreate = () => {
    setCrud("crea")
    handleOpen()
  }

   /* Funcion de editar */

  const handleEdit = (id,change) => {
    setItems(prevState => (
       prevState.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: change.title,
            active: change.active,
            description: change.description,
            info: change.info,
            doctor: change.doctor,
            name: change.name
          }
        }
        
        return item;
      })
     ));
  }

  /* Funcion de Borrar */

  const handleDelete = (id) => {
    setItems(items.filter(item=> item.id !== id))
  }

  /* Funcion de Borrar */

  const handleNewItem = (item) => {
    setItems([...items,{...item, id}])
  }

  return (
    <>
      <Navbar />
      <Macros
        handleNewItem={handleCreate}
        childen={
          <ListTest
            children={items.map((item) => (
              <Test
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                active={item.active === true ? "Activo" : "No Activo"} 
                openMacros={() => handleOpenMacro(item)}
                editMacros={() => handleEditMacro(item)}
                delteMacros={() => handleDelete(item.id)}
              />
            ))}
          />
        }
      />
      {open && (
        <ModalCard
          open={open}
          handleClose={handleClose}
          item={selectedMacros}
          handleEdit={handleEdit}
          handleNewItem={handleNewItem}
        />
      )}
    </>
  );
};
