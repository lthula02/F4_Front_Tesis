import React, { useContext, useEffect } from "react";
import AppContext from "../../auth/context/context";
import axios from "axios";

const ProjectVariability = () => {
    console.log("llegue a variability.js");
    const { user, selectedProject } = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
            console.log("Entre en la línea antes de res");
            const res = await axios.put("/create_var_diagram/", {
                data: {
                    user_id: user.uid,
                    project_index: selectedProject.projectIndex,
                },
            });
        };

        fetchData();
    }, []); // Se lama fetchData() para que se ejecute

    return null;
};

const handleShowVariability = () => {
    ProjectVariability();
};

export { ProjectVariability, handleShowVariability };
