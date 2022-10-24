import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import {Calendar  } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { localizer, getMessagesES } from '../../helpers'
import { CalendarEvent } from '../components/CalendarEvent'
import { CalendarModal } from '../components/CalendarModal'
import { useUiStore , useCalendarStore} from '../../hooks'
import { FabAddNew } from '../components/FabAddNew'
import { FabDelete } from '../components/FabDelete'
import { useAuthStore } from '../../hooks/useAuthStore'




export const CalendarPage = () => {

  const {user} = useAuthStore();
  const {openDateModal} = useUiStore();
  const {events, SetActiveEvent, startLoadingEvents} = useCalendarStore();
  const [lastView, setLastView] =  useState(localStorage.getItem('lastView')|| 'week')



  const eventStyleGetter = (event, start, end, isSelected) =>{

    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent?  '#34CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color : 'white'
    }

    return {
      style
    }
  }


  const onDoubleClick = (event) => {
    openDateModal();
  }


  const onSelect = (event) => {
    SetActiveEvent(event);
  }

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event);
    setLastView(event)
  }

  useEffect(() => {
    startLoadingEvents()
  }, [])
  

  return (
    <>
      <NavBar />

      <Calendar 
                culture='es'
                localizer={localizer}
                events= {events}
                defaultView = {lastView}
                startAccessor = "start"
                endAccessor="end"
                style = {{height: 'calc(100vh - 80px)'}} 
                messages = {getMessagesES()}
                eventPropGetter = {eventStyleGetter}
                components = {{
                  event : CalendarEvent
                }}
                onDoubleClickEvent = {onDoubleClick}
                onSelectEvent = {onSelect}
                onView = {onViewChange}
                />

                <CalendarModal/>
                <FabAddNew/>
                <FabDelete/>

      
    </>
  )
}


