import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
const Note = ({id,text,date,time,deleteNote}) =>{

    return(
        <div className="note">
            <div className="note__head ft__12" > {date} <span className="note__time"> {time} </span></div>
            <div className="note-body"> {text} </div>
            <div className="note__footer" style={{ justifyContent: "flex-end" }}>
                <DeleteForeverOutlinedIcon
                onClick={()=> deleteNote(id)}
                className="note__delete"
                aria-hidden="true"
                ></DeleteForeverOutlinedIcon>
            </div>
        </div>
    )
}

export default Note