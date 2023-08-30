import Paper from "@mui/material/Paper";
import '../css/body.css';

export default function AppBody(props) {
    return (
        <body className="body" style={{
            backgroundColor: `${props.bgColor}`
        }}>
        <Paper className="body-paper" elevation="0">{props.pageContent}</Paper>
        </body>
    )
}