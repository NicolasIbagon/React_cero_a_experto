import React from 'react'
import { NavBar } from '../components/NavBar'
import {Calendar, dateFnsLocalizer  } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { addHours } from 'date-fns'
import { localizer, getMessagesES } from '../../helpers'
import { CalendarEvent } from '../components/CalendarEvent'



const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Fernando'
  }
}]

export const CalendarPage = () => {

  const eventStyleGetter = (event, start, end, isSelected) =>{


    const style = {
      backgroundColor: '#34CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color : 'white'
    }

    return {
      style
    }
  }
  return (
    <>
      <NavBar />

      <Calendar 
                culture='es'
                localizer={localizer}
                events= {events}
                startAccessor = "start"
                endAccessor="end"
                style = {{height: 'calc(100vh - 80px)'}} 
                messages = {getMessagesES()}
                eventPropGetter = {eventStyleGetter}
                components = {{
                  event : CalendarEvent
                }}
                />

      
    </>
  )
}


