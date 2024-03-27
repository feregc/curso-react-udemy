import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from "date-fns";
import { localizer, getMessagesES } from "../helpers";
import { CalendarEvent } from "./CalendarEvent";


export const BigCalendar = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    
    // console.log( { event, start, end, isSelected } );
    
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    };

    return {
      style
    };
  }
  
  const events = [
    {
      title: "Cumpleaños del jefe",
      notes: "Hay que comprar pastel",
      start: new Date(),
      end: addHours(new Date(), 1),
      user:
      {
        id: '123',
        name: 'Fernando'
      }
    },
  ];

  return (
    <Calendar
      culture="es"
      localizer={ localizer }
      events={ events }
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px )' }}
      messages = { getMessagesES() }
      eventPropGetter={ eventStyleGetter }
      components={{
        event: CalendarEvent
      }}
    />
  );
};
