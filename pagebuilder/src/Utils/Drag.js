import { useDrop } from "react-dnd";

// export function DropUtils(ref, type, handler){
//     const [{ canDrop, isOver }, drop] = useDrop(() => ({
//         accept: "grid",
//         drop: (item) => {
//           dispatch(addGridorFlex(item, "123"));
//         },
//         canDrop: (item) => item.component === "grid" || item.component === "flex",
//         collect: (monitor) => ({
//           isOver: monitor.isOver(),
//           canDrop: monitor.canDrop(),
//         }),
//       }));

// }