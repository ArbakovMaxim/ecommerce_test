import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchPokemonListWithDetails } from "../../api/Api";
import { Conteiner, WrapperModal } from "./Table.styled";
import PokemonModal from "../modal/Modal";

interface PokemonDetails {
  name: string;
  id: number;
  smallImage: string;
  largeImage: string;
}
export const Table: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonListWithDetails();
      setPokemonList(data);
    };

    fetchData();
  }, []);

  const getRowHeight = () => 100;

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "smallImage",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <img
          src={params.value}
          alt="Pokemon"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          onClick={() => openModal(params.value)}
        />
      ),
    },
    { field: "name", headerName: "Name", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
  ];

  return (
    <Conteiner>
      <DataGrid
        rows={pokemonList}
        columns={columns}
        autoPageSize
        columnHeaderHeight={70}
        getRowHeight={getRowHeight}
      />
      {selectedImage && (
        <PokemonModal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          contentLabel={""}
          style={{
            content: {
              width: "50%",
              maxWidth: "600px",
              maxHeight: "600px",
              margin: "auto",
              height: "50%",
              background: "#f0f0f0",
            },
          }}
        >
          <WrapperModal>
            <img
              src={selectedImage}
              alt="Selected Pokemon"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </WrapperModal>
        </PokemonModal>
      )}
    </Conteiner>
  );
};

export default Table;
