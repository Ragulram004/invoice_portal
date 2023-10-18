import React, { createContext, useReducer} from 'react';

const InvoiceContext = createContext();

const initialInvoices = []; // You can initialize with your default data if needed

const invoiceReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      return [...state, action.payload];
    default:
      return state;
  }
};

const InvoiceProvider = ({ children }) => {
  const [invoices, dispatch] = useReducer(invoiceReducer, initialInvoices);

  return (
    <InvoiceContext.Provider value={{ invoices, dispatch }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export { InvoiceContext, InvoiceProvider };