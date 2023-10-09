import { RestorePageRounded } from "@material-ui/icons";
import axios from "axios";

/**
 * Agregar/reemplazar nuevos elementos a una arquitectura
 * en la base de datos del usuario
 * @param {FormData} formData objeto form-data con la información de los elementos
 */
const postElements = async (formData) => {
    try {
        const response = await axios.post("/elementos/", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        return error.response.status;
    }
};

const postUpdatedElements = async (formData) => {
    try {
        const response = await axios.post("/updated-elements/", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        return error.response.status;
    }
};

const ManageCreateCCBoard = async (user, selectedProject) => {
    try {
        const response = await axios.put("/create_cc_board/", {
            data: {
                user_id: user.uid,
                project_index: selectedProject.projectIndex,
                arch_index: selectedProject.arcIndex,
                ver_index: selectedProject.verIndex,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.status;
    }
};

const ManageEditCCDescription = async (user, selectedProject, name, description) => {
    try {
        const response = await axios.put("/edit_cc_description/", {
            data: {
                user_id: user.uid,
                project_index: selectedProject.projectIndex,
                arch_index: selectedProject.arcIndex,
                ver_index: selectedProject.verIndex,
                name: name,
                description: description,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.status;
    }
};

const ManageEditCCName = async (user, selectedProject, name, inputValue) => {
    try {
        const response = await axios.put("/edit_cc_name/", {
            data: {
                user_id: user.uid,
                project_index: selectedProject.projectIndex,
                arch_index: selectedProject.arcIndex,
                ver_index: selectedProject.verIndex,
                old_name: name,
                new_name: inputValue,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.status;
    }
};

const ManageEditNodeCC = async (user, selectedProject, id, compositeComponent) => {
    try {
        const response = await axios.put("/edit_node_cc/", {
            data: {
                user_id: user.uid,
                project_index: selectedProject.projectIndex,
                arch_index: selectedProject.arcIndex,
                ver_index: selectedProject.verIndex,
                node: id,
                new_name: compositeComponent,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.status;
    }
};

/**
 * Agregado en la 4ta fase para editar la descripción de cada nodo
 */
const ManageEditNodeDesc = async (user, selectedProject, node_id, inputValue) => {
    try {
        const response = await axios.put("/edit_node_desc/", {
            data: {
                user_id: user.uid,
                project_index: selectedProject.projectIndex,
                arch_index: selectedProject.arcIndex,
                ver_index: selectedProject.verIndex,
                node_id: node_id,
                new_name: inputValue,
            },
        });
        return response.data;
    } catch (error) {
        return error.response.status;
    }
};

export {
    postElements,
    postUpdatedElements,
    ManageCreateCCBoard,
    ManageEditCCDescription,
    ManageEditCCName,
    ManageEditNodeCC,
    ManageEditNodeDesc,
};
