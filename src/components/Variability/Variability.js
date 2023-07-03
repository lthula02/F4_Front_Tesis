import axios from "axios";

const Variability = (user, projectIndex) => {
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

export default Variability;

/*import React, { useContext, useEffect } from "react";
import AppContext from "../../auth/context/context";
import axios from "axios";

function Variability() {
    console.log("Llegue a Variability");
    const { user, selectedProject } = useContext(AppContext);

    useEffect(() => {
        fetchData();
    }, [user.uid, selectedProject.projectIndex]);

    const fetchData = async () => {
        console.log("Entre en la línea antes de res");
        const res = await axios.put("/create_var_diagram/", {
            data: {
                user_id: user.uid,
                project_index: selectedProject.projectIndex,
            },
        });
    };

    return null;
}

export default Variability;
*/
