import React from 'react'
import DrawerAdminPanel from "../../components/adminpanel/DrawerAdminPanel"

const IndexPage = () => {
  return (
    <DrawerAdminPanel />
  )
}

// Set noLayout property on the IndexPage component
IndexPage.noLayout = true;

export default IndexPage;
