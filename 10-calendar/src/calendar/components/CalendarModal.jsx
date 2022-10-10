import { addHours, differenceInSeconds, isDate } from 'date-fns';
import { useMemo, useState, useEffect } from 'react';
import Modal from 'react-modal'
import DatePicker, {registerLocale} from "react-datepicker";
import es from 'date-fns/locale/es';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import "react-datepicker/dist/react-datepicker.css";
import { useCalendarStore, useUiStore } from '../../hooks';



registerLocale('es',es);


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



Modal.setAppElement('#root');

export const CalendarModal = () => {


  const {isDateModalOpen, CloseDateModal} = useUiStore();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {activeEvent, startSavingEvent} = useCalendarStore();



  const [formValues, setFormValues] = useState({
    title: 'Nicolas',
    notes: 'Ibagon',
    start: new Date(),
    end: addHours( new Date(), 2 )
  });

  

  const titleClass =  useMemo(() => {
    if(!formSubmitted) return '';

    return (formValues.title.length > 0) ? '' : 'is-invalid'

  }, [formValues.title, formSubmitted])

  useEffect(() => {
    if(activeEvent !== null) {
      setFormValues({...activeEvent})
    }

  }, [activeEvent])
  
  

  const onInputChange = ({target}) =>{
    setFormValues({
        ...formValues,
        [target.name] : target.value
    })
  }

  const onDateChange = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing] : event  
    })
  }


  const onCloseModal = () =>{
    CloseDateModal();

  }

  const onSubmit = async(event) =>{
    event.preventDefault();
    setFormSubmitted(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);

    if(isNaN(difference) || difference <= 0) {
        Swal.fire('Fechas Incorrectas', 'Reavisar las fechas ingresadas', 'error');
        console.log('Error en fecha')
        return;
    }

    if(formValues.title.length <= 0) return;

    console.log(formValues);

    await startSavingEvent(formValues);
    onCloseModal();
    setFormSubmitted(false);
  }

  return (
    <Modal
        isOpen = {isDateModalOpen}
        className= "modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS= {200}
        onRequestClose={onCloseModal}
        style={customStyles}

    >
    <h1> Nuevo evento </h1>
    <hr />
    <form className="container" onSubmit={onSubmit}>

        <div className="form-group mb-2">
            <label>Fecha y hora inicio</label>
            <DatePicker
                selected={formValues.start}
                className = {`form-control ${titleClass}`}
                onChange={(event) => onDateChange(event, 'start')}
                dateFormat = "Pp"
                showTimeSelect
                locale="es"
                timeCaption='Hora'
            />
        </div>

        <div className="form-group mb-2">
            <label>Fecha y hora fin</label>
            <DatePicker
                minDate={formValues.start}
                selected={formValues.end}
                className = "form-control"
                onChange={(event) => onDateChange(event, 'end')}
                dateFormat = "Pp"
                showTimeSelect
                locale="es"
                timeCaption='Hora'
            />
        </div>

        <hr />
        <div className="form-group mb-2">
            <label>Titulo y notas</label>
            <input 
                type="text" 
                className="form-control"
                placeholder="Título del evento"
                name="title"
                autoComplete="off"
                value={formValues.title}
                onChange = {onInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group mb-2">
            <textarea 
                type="text" 
                className="form-control"
                placeholder="Notas"
                rows="5"
                name="notes"
                value={formValues.notes}
                onChange = {onInputChange}
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
            type="submit"
            className="btn btn-outline-primary btn-block"
        >
            <i className="far fa-save"></i>
            <span> Guardar</span>
        </button>

    </form>
    </Modal>
  )
}
