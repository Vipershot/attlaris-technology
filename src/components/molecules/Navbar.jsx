import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{ background: "#1d7ada", height: 70 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          {menu === true && (
            <Box
              position="absolute"
              sx={{
                top: 70,
                left: 0,
                width: {lg:"20%",md:"70%"},
                background:"#1d7ada",
                height:"auto",
                display:"flex",
                justifyContent:"center",
                zIndex:9
              }}
            >
              <ul style={{ height: "100%" }}>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Gestion de Equipos
                    </a>
                  </Typography>
                </li>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Salas
                    </a>
                  </Typography>
                </li>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Modelo
                    </a>
                  </Typography>
                </li>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Tipo de Equipo Radiológicos
                    </a>
                  </Typography>
                </li>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Fabricante
                    </a>
                  </Typography>
                </li>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Modalidades
                    </a>
                  </Typography>
                </li>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Gestion de Estudios
                    </a>
                  </Typography>
                </li>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Personal Asistencial
                    </a>
                  </Typography>
                </li>
                <li onClick={handleMenu} style={{height:"50%", listStyle:"none", margin:"6px 12px"}}>
                  <Typography
                    sx={{
                      textTransform: "inherit",
                      fontSize: 16,
                      marginX: 4,
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "var(--color-text-secundary)",
                      }}
                      href="#"
                    >
                      Configuraciones Generales
                    </a>
                  </Typography>
                </li>
              </ul>
            </Box>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            INFAST
          </Typography>
          <Button color="inherit">Administrador</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}