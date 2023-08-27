import Paper from "@mui/material/Paper";
import '../css/body.css';

export default function AppBody(props) {
    return (
        <body className="body">
        <Paper className="body-paper">{props.pageContent}</Paper>
        </body>
    )
}