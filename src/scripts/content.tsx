import "../styles/content.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { App, SignList } from "./components/App";

const renderApp = () => {
  const raceTableAreaList = document.getElementsByClassName("RaceTableArea");
  if (raceTableAreaList.length > 0) {
    const urlParams = new URLSearchParams(window.location.search);
    const raceId = urlParams.get("race_id");
    if (raceId != null) {
      const raceTableAreaEl = raceTableAreaList[0];

      const ticketSupporterEl = document.createElement("div");
      ticketSupporterEl.id = "ticketSupporter-root";
      raceTableAreaEl.prepend(ticketSupporterEl);

      const root = ReactDOM.createRoot(ticketSupporterEl);
      root.render(<App raceId={raceId} />);
    }
  }
};

const renderTicketRecommender = () => {
  if (location.href.includes("odds/myodds")) {
    const urlParams = new URLSearchParams(window.location.search);
    const ticketObjString = urlParams.get("ticketObj");
    if (ticketObjString !== null) {
      const pageEl = document.getElementById("page");
      if (pageEl !== null) {
        const ticketObj: SignList = JSON.parse(ticketObjString);
        const ticketSupporterEl = document.createElement("div");
        ticketSupporterEl.id = "ticketSupporter-root";
        pageEl.prepend(ticketSupporterEl);

        const root = ReactDOM.createRoot(ticketSupporterEl);
        root.render(
          <ul className="ticketSupporter-sign">
            {Object.entries(ticketObj).map(([key, values], index) => (
              <li key={index}>
                {key}: {values.join(",")}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
};
// console.log(document.getElementsByClassName("UmaBan")[0].textContent);

(() => {
  renderApp();

  window.addEventListener("load", () => renderTicketRecommender());
})();
