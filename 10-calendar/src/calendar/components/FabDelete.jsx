// import { useCalendarStore } from "../../hooks";

// export const FabDelete = () => {

//   const { startDeletingEvent, hasEventSelected } = useCalendarStore();

//   const onDeleteEvent = () => {
//     console.log('si me disparo');
//     startDeletingEvent();
//   };

//   return (
//     <>
//       <button 
//         className="btn btn-danger fab-danger" 
//         onClick={ onDeleteEvent }
//         style={{ display: hasEventSelected ? '' : 'none' }}
//       >
//         <i className="fa fa-trash-alt"></i>
//       </button>
//     </>
//   );
// };


import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeletingEvent();
    }


  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={ handleDelete }
        style={{
            display: hasEventSelected ? '': 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}