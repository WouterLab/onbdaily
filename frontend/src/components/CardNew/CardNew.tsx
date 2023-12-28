import { Container, Image } from "./styled";
import AddPng from "#assets/plus.png";
import { Modal } from "#components/Modal";
import { useContext, useState } from "react";
import { Tabs } from "#components/Tabs";
import { Button } from "#components/Button";
import { Option } from "#types/types";
import axios from "#services/axios";
import { RefetchContext } from "#contexts/refetchContext";

export function CardNew() {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentSelection, setCurrentSelection] = useState<Option | null>(null);
  const updateObject = useContext(RefetchContext);

  const addNewUser = () => {
    const token = localStorage.getItem("token");

    axios
      .post("/daily", currentSelection, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setIsModalOpened(false);
        if (updateObject) updateObject.setUpdated(!updateObject.updated);
      })
      .catch(() => {
        alert("Failed to add presenter.");
      });
  };

  return (
    <>
      <Container onClick={() => setIsModalOpened(true)}>
        <Image src={AddPng} />
      </Container>
      <Modal opened={isModalOpened} setOpened={setIsModalOpened}>
        <Tabs selection={currentSelection} setSelection={setCurrentSelection} />
        <Button onClick={addNewUser}>Добавить</Button>
      </Modal>
    </>
  );
}
