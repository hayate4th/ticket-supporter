import React from "react";

type Props = {
  raceId: string;
};

export type SignList = {
  [markType: string]: number[];
};

const Container: React.FC<Props> = ({ raceId }) => {
  const handleRecommendTicketButtonClick = () => {
    const rowElList = Array.from(document.getElementsByClassName("HorseList"));
    if (rowElList.length > 0) {
      const result: SignList = {
        "--": [],
        "◎": [],
        "◯": [],
        "▲": [],
        "△": [],
        "☆": [],
        "✓": [],
        消: [],
      };
      rowElList.forEach((rowEl) => {
        const checkMarkEl = rowEl.querySelector(".CheckMark .selectBox");
        const umabanEl = rowEl.getElementsByTagName("td")[1];

        if (checkMarkEl?.textContent && umabanEl?.textContent) {
          result[checkMarkEl.textContent] = [
            ...result[checkMarkEl.textContent],
            Number(umabanEl.textContent),
          ];
        }
      });

      window.location.href = `/odds/myodds.html?race_id=${raceId}&ticketObj=${encodeURIComponent(
        JSON.stringify(result)
      )}`;
    }
  };

  return (
    <button
      className="recommend-btn"
      onClick={handleRecommendTicketButtonClick}
    >
      おすすめの買い方
    </button>
  );
};

export const App = Container;
