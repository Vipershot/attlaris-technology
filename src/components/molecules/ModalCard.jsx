import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import { UserContext } from "../../context/useContext";
import SelectInput from "../atoms/SelectInput";
import { InputMain } from "../atoms/InputMain";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  minWidth: "260px",
  height: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function ModalCard({
  item,
  open,
  onClose,
  handleClose,
  handleEdit,
  handleNewItem,
}) {
  const { crud } = useContext(UserContext);
  const { title, description, active, id, info, name, doctor } = item;
  const [change, setChange] = useState({
    title,
    description,
    active,
    id,
    info,
    doctor,
    name,
  });
  const [moreInfo, setMoreInfo] = useState(false);

  const handleInfo = () => {
    setMoreInfo(!moreInfo);
  };
  const handleSave = () => {
    handleEdit(id, change);
  };
  const changeState = (state) => {
    setChange({ ...change, active: state });
  };
  const handleCreate = () => {
    handleNewItem(change);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ overflow: "auto", height: "90%", overflowX: "hidden" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "column",
                  sm: "column",
                  xs: "column",
                },
                alignItems: {
                  lg: "center",
                  md: "flex-start",
                  sm: "flex-start",
                  xs: "flex-start",
                },
                gap: { lg: 4, md: 2, sm: 2, xs: 2 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "column",
                    sm: "column",
                    xs: "column",
                  },
                  alignItems: "center",
                  gap: 1
                }}
              >
                <Typography
                  fontSize={14}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Titulo*
                </Typography>
                <InputMain
                  disabled={crud === "view" ? true : false}
                  value={change.title}
                  onChange={(e) => {
                    setChange({ ...change, title: e.target.value });
                  }}
                />
              </Box>
              <Button
                sx={{
                  fontSize: { lg: "14px", md: "12px", sm: "12px", xs: "12px" },
                  textTransform: "none",
                }}
                onClick={handleInfo}
              >
                Ver Marcadores
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "column-reverse",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },
                alignItems: {
                  lg: "center",
                  md: "flex-start",
                  sm: "flex-start",
                  xs: "flex-start",
                },
                gap: { lg: 4, md: 2, sm: 2, xs: 2 },
              }}
              marginY={1}
            >

              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "column",
                    sm: "column",
                    xs: "column",
                  },
                  alignItems: {
                    lg: "center",
                    md: "flex-start",
                    sm: "flex-start",
                    xs: "flex-start",
                  },
                  gap: 1
                }}
              >
                <Typography fontSize={14}>Estado</Typography>
                <SelectInput
                  disabled={crud === "view" ? true : false}
                  value={change.active}
                  changeState={changeState}
                /></Box>
              <Box                 sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "column",
                    sm: "column",
                    xs: "column",
                  },
                  alignItems: {
                    lg: "center",
                    md: "flex-start",
                    sm: "flex-start",
                    xs: "flex-start",
                  },
                  gap: 1
                }} marginY={2}>
                <Typography
                  fontSize={14}
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                >
                  Sub Tipos Examen*
                </Typography>
                <InputMain
                  disabled={crud === "view" ? true : false}
                  value={change.description}
                  onChange={(e) =>
                    setChange({ ...change, description: e.target.value })
                  }
                />
              </Box>
            </Box>
            {crud === "view" ? (
              <></>
            ) : (
              <>
                <Box                 sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "column",
                    sm: "column",
                    xs: "column",
                  },
                  alignItems: {
                    lg: "center",
                    md: "flex-start",
                    sm: "flex-start",
                    xs: "flex-start",
                  },
                  gap: 1
                }} marginY={2}>
                  <Typography
                    fontSize={14}
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                  >
                    Doctor
                  </Typography>

                  <InputMain
                    disabled={crud === "view" ? true : false}
                    value={change.doctor}
                    onChange={(e) =>
                      setChange({ ...change, doctor: e.target.value })
                    }
                  />
                </Box>
                <Box                 sx={{
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "column",
                    sm: "column",
                    xs: "column",
                  },
                  alignItems: {
                    lg: "center",
                    md: "flex-start",
                    sm: "flex-start",
                    xs: "flex-start",
                  },
                  gap: 1
                }} marginY={2}>
                  <Typography
                    fontSize={14}
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                  >
                    Paciente
                  </Typography>

                  <InputMain
                    disabled={crud === "view" ? true : false}
                    value={change.name}
                    onChange={(e) =>
                      setChange({ ...change, name: e.target.value })
                    }
                  />
                </Box>
              </>
            )}
            <Box marginY={2}>
              {moreInfo === true && (
                <Box>
                  <Typography fontSize={14}>
                    Utilice los siguientes marcadores, para indicar el tipo de
                    informacion a incluir en el macro.
                  </Typography>
                  <Typography fontSize={14}>
                    <b>ees</b> Descripcion del estudio
                  </Typography>
                  <Typography fontSize={14}>
                    <b>ssp</b> Nombre y apellidos del especialista que informa
                  </Typography>
                  <Typography fontSize={14}>
                    <b>pce</b> Nombres, apellido y edad del paciente
                  </Typography>
                </Box>
              )}
            </Box>
            {crud === "view" && (
              <Box marginY={1}>
                <Typography fontSize={14}>Informacion</Typography>
                <Typography
                  fontSize={14}
                >{`Este es un macro de diagnostico de prueba del especialista ${item.doctor} que informa el estudio ${item.title} y del paciente ${item.name}`}</Typography>
              </Box>
            )}
          </Box>
          <Box
            position={"absolute"}
            bottom={8}
            right={10}
            display={"flex"}
            gap={4}
          >
            <Button
              sx={{ fontSize: "16px", textTransform: "none" }}
              onClick={handleClose}
            >
              Cerrar
            </Button>
            {crud === "edit" && (
              <Button
                sx={{ fontSize: "16px", textTransform: "none" }}
                onClick={handleSave}
              >
                Editar
              </Button>
            )}
            {crud === "crea" && (
              <Button
                sx={{ fontSize: "16px", textTransform: "none" }}
                onClick={handleCreate}
              >
                Crear
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
