import React, { useContext } from "react";
import { putMetrics, combineMetrics } from "../../api/metrics/metrics.js";

import AppContext from "../../auth/context/context.js"
import { ModalMessage } from "../../components/ModalMessage/ModalMessage";




const ManageMetrics = async (user, selectedProject, umbralName) => {
    // setReloadSidebar(true);
        await putMetrics(user,
        selectedProject.projectIndex,
        selectedProject.arcIndex,
        selectedProject.verIndex,
        umbralName);

      // ModalMessage(
      //   "¡Metricas calculadas con exito!",
      //   " ",
      //   "success",
      //   false,
      //   4000
      // );
    //window.location.reload()
  };


  const ManageCombineMetrics = async (user, selectedProject, weighing) => {
    await combineMetrics(
      user,
      selectedProject.projectIndex,
      selectedProject.arcIndex,
      selectedProject.verIndex,
      weighing
    );
  }
  export { ManageMetrics, ManageCombineMetrics };
