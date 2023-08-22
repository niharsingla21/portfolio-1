import AppBar from '@mui/material/AppBar';
import {Button, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {Link, useNavigate} from "react-router-dom";

export default function AppHeader() {
    const navigate = useNavigate();
    const handleNavigation = (page) => {
        navigate(`/${page}`)
    }
    return (
        <AppBar className="app-header" style={{backgroundColor: '#313236', color: 'white'}}>
            <Paper elevation={1} className="header-paper"
                   style={{display: "flex", backgroundColor: "inherit", color: 'inherit'}}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "50%",
                    alignContent: "center",
                    alignItems: "center",
                    backgroundColor: "inherit"
                }}>
                    <Link to="/" style={{
                        color:'inherit',
                        textDecoration: 'none'
                    }}>
                    <Typography>
                        <em>
                            Nihar Singla
                        </em>
                    </Typography>
                    </Link>
                </div>
                <div style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "0px 20px",
                    backgroundColor: "inherit"
                }}>
                    <Button variant="text" style={{color: "inherit", margin: "0px 15px"}}
                            onClick={() => {handleNavigation('aboutMe')}}>About Me</Button>
                    <Button variant="text" style={{color: "inherit", margin: "0px 15px"}}
                            onClick={() => {handleNavigation('experience')}}>Experience</Button>
                    <Button variant="text" style={{color: "inherit", margin: "0px 15px"}}
                            onClick={() => {handleNavigation('skills')}}>Skills</Button>
                    <Button variant="text" style={{color: "inherit", margin: "0px 15px"}}
                            onClick={() => {handleNavigation('contactMe')}}>Contact Me</Button>
                </div>
            </Paper>
        </AppBar>
    )

}