import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import calendarApi from "../api/calendarApi"
import { convertEventsToDateEvents } from "../helpers/convertEventsToDateEvents"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice"

export const useCalendarStore = () => {
    const dispatch = useDispatch()
    const {events, activeEvent} = useSelector(state => state.calendar)
    const {user} = useSelector(state => state.auth)
    const SetActiveEvent = (calendarEvent) =>{
      dispatch(onSetActiveEvent(calendarEvent))
    }
    
    const startSavingEvent = async(calendarEvent) => {
      
      try {
        if(calendarEvent._id){

          await calendarApi.put(`/events${calendarEvent.id}`, calendarEvent );
  
          dispatch(onUpdateEvent({...calendarEvent, user}));
        
        }else{
          const {data} = await calendarApi.post('/events', calendarEvent);
  
          dispatch(onAddNewEvent({...calendarEvent, id: data.evento.id, user}));
        }
      } catch (error) {
        console.log(error)
        Swal.fire('Error al guardar', error.response.data.msg, 'error');
      }
    }

    const startdeletingEvent = async() => {
      
      try {
        await calendarApi.get(`/events/${activeEvent.id}`)
        console.log(activeEvent.id);
        dispatch(onDeleteEvent())  
      } catch (error) {
        console.log('Error eliminando evento')
      }
      
      
    }
    
    const startLoadingEvents = async() => {
      try {
        const {data} = await calendarApi.get('/events')
        console.log(data)
        const events = convertEventsToDateEvents(data.evento);


        dispatch(onLoadEvents(events));
      } catch (error) {
        console.log('Error cargando eventos')
        console.log(error)
      }
    }
    
    return {
        events,
        activeEvent,
        hasEventSelected : !!activeEvent,
        SetActiveEvent,
        startSavingEvent,
        startdeletingEvent,
        startLoadingEvents

  }
}
