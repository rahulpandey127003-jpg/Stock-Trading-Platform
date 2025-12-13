import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // NEW

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},

  openSellWindow: (uid) => {}, // NEW
  closeSellWindow: () => {},   // NEW
});

export const GeneralContextProvider = (props) => {
  // BUY WINDOW STATES
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // SELL WINDOW STATES
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // NEW

  // ---------------- BUY FUNCTIONS ----------------
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // ---------------- SELL FUNCTIONS ----------------
  const handleOpenSellWindow = (uid) => {      // NEW
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {        // NEW
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        openSellWindow: handleOpenSellWindow,   // NEW
        closeSellWindow: handleCloseSellWindow, // NEW
      }}
    >
      {props.children}

      {/* BUY WINDOW */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}

      {/* SELL WINDOW (NEW) */}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;