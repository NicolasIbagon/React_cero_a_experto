import { addHours } from "date-fns";
import { useUiStore, useCalendarStore } from "../../hooks"



export const FabDelete = () => {

  const {startdeletingEvent, hasEventSelected}  = useCalendarStore()

  const handleDelete = () =>{
    startdeletingEvent();
  }

  return (
    <button
        onClick={ handleDelete}
        className="btn btn-danger fab-danger"
        style={{display: hasEventSelected ? '' : 'none'}}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
