import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
AdminProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
