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
