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

  console.log(pokemonList);

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

// import React, { useEffect, useState } from "react";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import { Conteiner } from "./Table.styled";
// import { getRandomStyle, getRandomColor } from "../../utils/dateUtils";

// interface PokemonDetails {
//   name: string;
//   id: number;
//   smallImage: string;
//   largeImage: string;
// }

// export const Table: React.FC = () => {
//   const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchPokemonListWithDetails();
//       setPokemonList(data);
//     };

//     fetchData();
//   }, []);

//   const getCellStyle = (params: any) => {
//     const name = params.value.toLowerCase();
//     const dynamicStyle = getRandomStyle();
//     return {
//       background: dynamicStyle,
//       color: getRandomColor(),
//       fontWeight: 600,
//     };
//   };

//   const columns: GridColDef[] = [
//     { field: "id", headerName: "ID", width: 100 },
//     {
//       field: "smallImage",
//       headerName: "Image",
//       width: 150,
//       renderCell: (params) => (
//         <img
//           src={params.value}
//           alt="Pokemon"
//           style={{ width: "100%", height: "100%", objectFit: "contain" }}
//         />
//       ),
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 150,
//       cellClassName: getCellStyle,
//     },
//     { field: "date", headerName: "Date", width: 150 },
//   ];

//   return (
//     <Conteiner>
//       <DataGrid
//         rows={pokemonList}
//         columns={columns}
//         autoPageSize
//         columnHeaderHeight={70}
//       />
//     </Conteiner>
//   );
// };

// export default Table;
