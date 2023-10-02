import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
function App() {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className="h-screen w-screen flex p-0 m-0">
      <div className="bg-[#0052A8] h-screen w-1/2 justify-center items-center flex flex-col">
        <h1 className="text-white text-4xl font-bold w-1/2 py-5">
          Neque porro quisquam est qui dolorem ipsum
        </h1>
        <h3 className="text-white text-xl font-thin w-1/2 py-3 ">
          Neque porro quisquam est qui dolorem ipsum
        </h3>
        <div className="w-1/2 justify-start py-5">
          <button className="text-white text-xl py-3 bg-[#F5A622] px-8  font-bold rounded-full">
            Get Started
          </button>
        </div>
      </div>
      <div className="h-screen w-1/2 p-0 m-0 justfy-center items-center flex overflow-hidden">
        <img src="../assets/images/homepageImage.jpg" />
      </div>
    </div>
  );
}

export default App;
