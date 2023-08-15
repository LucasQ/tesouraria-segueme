import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Person2Icon from "@mui/icons-material/Person2";
import { Link } from "react-router-dom";

function BottomNavBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="fixed bottom-0 w-screen">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/"/>
        <BottomNavigationAction label="Comandas" icon={<TextSnippetIcon />} component={Link} to="/comandas"/>
        <BottomNavigationAction label="Perfil" icon={<Person2Icon />} />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNavBar;
