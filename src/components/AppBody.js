import Paper from "@mui/material/Paper";
import '../css/body.css';

export default function AppBody(props) {
    return (
        <body className="body">
        <Paper style={{
            backgroundColor: "black",
            color: "white"
        }}>{props.pageContent}</Paper>
        </body>
    )
}