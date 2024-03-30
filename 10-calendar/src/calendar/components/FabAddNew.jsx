// import { addHours } from "date-fns";
// import { useCalendarStore, useUiStore } from "../../hooks";

// export const FabAddNew = () => {
//   const { openDateModal } = useUiStore();
//   const { setActiveEvent } = useCalendarStore();

//   const onClickNew = () => {
//     setActiveEvent({
//       title: '',
//       notes: '',
//       start: new Date(),
//       end: addHours(new Date(), 1),
//       bgColor: "#fafafa",
//       user: {
//         id: "123",
//         name: "Fernando",
//       },
//     });
//     openDateModal();
//   };

//   return (
//     <>
//       <button className="btn btn-primary fab" onClick={onClickNew}>
//         <i className="fas fa-plus "></i>
//       </button>
//     </>
//   );
// };

import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';


export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Fernando'
            }
        });
        openDateModal();
    }


  return (
    <button
        className="btn btn-primary fab"
        onClick={ handleClickNew }
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}