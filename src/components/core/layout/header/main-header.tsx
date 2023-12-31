import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { getFromLS, saveToLS } from "@/utils/save-to-ls";
import { getBaseSettings } from "@/api/get-settings";
import { LanguageType } from "types/settings";

const MainHeader = () => {
  // const languages = LANGUAGES;

  const [languages, setLanguages] = React.useState<LanguageType[]>([]);
  const [selectedLanguage, setSelectedLanguage] = React.useState("en");
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChangeLanguage = (language: string) => {
    setSelectedLanguage(language);
    saveToLS("locale", language);
    handleCloseUserMenu();
  };

  const getLanguages = async () => {
    const res = await getBaseSettings();
    if (res) setLanguages(res.languages);
  };

  React.useEffect(() => {
    const language = getFromLS("locale");
    setSelectedLanguage(language || "en");
    getLanguages();
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Change language">
              <Button
                onClick={handleOpenUserMenu}
                variant="text"
                sx={{ color: "common.white" }}
              >
                {selectedLanguage}
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {languages.map((language) => (
                <MenuItem
                  key={language.code}
                  onClick={() => {
                    handleChangeLanguage(language.code);
                  }}
                >
                  <Typography textAlign="center">{language.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainHeader;
