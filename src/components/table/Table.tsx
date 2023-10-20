import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { fetchPokemonListWithDetails } from "../../api/Api";
import { Conteiner } from "./Table.styled";

interface PokemonDetails {
  name: string;
  id: number;
  smallImage: string;
  largeImage: string;
}

export const Table: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonListWithDetails();
      setPokemonList(data);
    };

    fetchData();
  }, []);

  console.log(pokemonList);

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
