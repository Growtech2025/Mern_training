import { useDispatch, useSelector } from "react-redux"
import { changeSelectionCount, setDefatultSelectionAddCountByPayloadF } from "../slices/MarkSlice";

function ShowTotalSelection() {
    const dispatch = useDispatch();
    const selection = useSelector((state) => state.selections.value);
    const fname = useSelector((state) => state.selections.name);
    console.log("Ye data selection slice se aaya hai ", selection);
    function handleSelectionRecords() {
        console.log("me hee to hu jo redux ke function ko chalaunga ")
        /*you are not allowed to call redux ki store ke andar jo slice hai us slice ke andar jo 
        aapka reducer hai use reducer ke andar jo aapka function
           hai aap use directly call nhi kar sakte hai example ese ->   changeSelectionCount() */
        // eske leaye dispatch kee need hoti hai 
        dispatch(changeSelectionCount())

    }


    function DefaultUsigPayload() {

        dispatch(setDefatultSelectionAddCountByPayloadF(17));
    }

    return (
        <div>
            <p> Total number of offer later we got {selection}</p>
            <button onClick={() => {
                handleSelectionRecords()
            }}>change selection</button>


            <button onClick={() => {
                DefaultUsigPayload()
            }}>change selection</button>
            <p> Instructor Name {fname}</p>

        </div>

    )
}

export default ShowTotalSelection