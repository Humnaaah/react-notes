import LinearProgress from "@mui/material/LinearProgress";
const CreateNote = ({textHandler, saveHandler, inputText}) =>{
     //character limit
    const charLimit = 150;
    const charLeft = charLimit - inputText.length;
    return(
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
        <textarea
            cols="10"
            rows="5"
            value={inputText}
            placeholder="Add a new note.."
            onChange={textHandler}
            maxLength="150"
        ></textarea>
        <div className="note__footer">
            <span className="label"> {charLeft} left</span>
            <button className="note__save" onClick={saveHandler}>Save</button>
        </div>
        <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
    )
}

export default CreateNote