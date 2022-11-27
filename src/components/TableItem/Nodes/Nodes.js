import React, { useContext, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';


import AppContext from "../../../auth/context/context";
import Loader from "../../Loader/Loader";
import nodeHelper from "../../../helpers/nodes/nodes";

/**
 * Componente que representa
 * la tabla de nodos del proyecto selecionado
 */
const NodesTable = () => {
  const {
    selectedProject,
    selectedNodes, setSelectedNodes,
    selectionModel, setSelectionModel,
    cy
  } = useContext(AppContext);
  let [loader, setLoader] = useState(true);

  let rows = selectedProject.elements.nodes.map(node => {
    return { id: node.data.id, name: node.data.name,
             isInterface: !node.data.incomompleteProperties ? node.data.isInterface ? 'Si' : 'No' : '-',
             isAbtsract: node.data.hasOwnProperty('isAbstract') ? node.data.isAbtsract ? 'Si' : 'No' : '-',
             module: node.data.hasOwnProperty('module') ? node.data.module : "-",
             incomompleteProperties: node.data.incomompleteProperties ? "No" : "Si",
            composite:node.data.hasOwnProperty('composite') ? node.data.composite : "-" };
  });

  const columns = [
    { field: 'name', headerName: 'Nombre', width: 230 },
    { field: 'isInterface', headerName: 'Es Interfaz?', width: 160 },
    { field: 'isAbstract', headerName: 'Es Abstracto?', width: 165 },
    { field: 'module', headerName: 'Modulo', width: 130 },
    {
      field: 'incompleteProperties',
      headerName: 'Propiedades Completas',
      width: 230,
    },
    { field: 'composite', headerName: 'Componente Compuesto', width: 235 },
    {
      field: 'action',
      headerName: 'Acción',
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <IconButton aria-label="edit" size="large">
              <EditIcon
                fontSize="inherit"
                color="secondary"
                onClick={(e) => onClick(e, params)}
              />
            </IconButton>
          </>
        );
      },
    },
  ];

  const onClick = (e, params) => {
    e.stopPropagation(); // don't select this row after clicking

    const api = params.api;
    const thisRow = {};

    api
      .getAllColumns()
      .filter((c) => c.field !== '__check__' && !!c)
      .forEach((c) => (thisRow[c.field] = params.getValue(params.id, c.field)));

    return alert(JSON.stringify(thisRow, null, 4));
    //TODO (EDIT CASE) LLAMAR A LA FUNCION QUE RECIBA LOS DATOS (thisRow) Y MUESTRE UN MODAL DONDE DEJE EDITAR LAS RELACIONES
    //TODO (DELETE CASE) LLAMAR A LA FUNCION QUE RECIBA LOS DATOS (thisRow) AGARRE EL ID Y BORRE ESE NODO Y QUITE LAS RELACIONES SALIENTES QUE TENÍA
  };


  useEffect(() => {
    setLoader(false);
  }, [selectedProject.elements]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {!loader ? (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          onCellClick={params => {
            nodeHelper.manageCellClick(params.row.name, selectedNodes, setSelectedNodes, cy, setSelectionModel);
          }}
          onColumnHeaderClick={param => {
            if (param.field === '__check__') {
              nodeHelper.manageCheckSelection(selectedNodes, setSelectedNodes, cy, setSelectionModel);
            }
          }}
          selectionModel={selectionModel}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default NodesTable;
