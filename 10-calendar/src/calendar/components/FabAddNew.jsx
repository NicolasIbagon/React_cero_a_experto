import { addHours } from "date-fns";
import { useUiStore, useCalendarStore } from "../../hooks"



export const FabAddNew = () => {

  const {openDateModal} = useUiStore();
  const {SetActiveEvent} = useCalendarStore()
  const handleClickNew = () =>{
    SetActiveEvent({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2 ),
        bgColor: '#fafafa',
        user: {
          _id: '123',
          name: 'Fernando'
        }
    })
    openDateModal();
  }

  return (
    <button
        onClick={ handleClickNew}
        className="btn btn-primary fab"
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
