import axios from "axios";

/**
 * Llamada al Backend
 * Se encarga de generar el diagrama de componentes del proyecto
 * @param user referencia al usuario que está utilizando el proyecto
 * @param projectIndex referencia al índice del proyecto seleccionado
 */
const ManageComponentDiagram = (user, projectIndex) => {
    axios
        .put("/create_comp_diagram/", {
            data: {
                user_id: user.uid,
                project_index: projectIndex,
            },
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    return null;
};

/**
 * Llamada al Backend
 * Se encarga de generar el diagrama de variabilidad del proyecto
 */
const ManageVariability = (user, projectIndex) => {
    axios
        .put("/create_var_diagram/", {
            data: {
                user_id: user.uid,
                project_index: projectIndex,
            },
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    return null;
};

export { ManageComponentDiagram, ManageVariability };
