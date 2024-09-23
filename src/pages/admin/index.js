import AdminLayout from "@/Component/AdminLayout";
import React, { useEffect, useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Details from "../api/admin/Details";

const ItemType = "ROW"; // Define the type for the draggable row

// Draggable row component
const DraggableRow = ({ item, index, moveRow }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    drop(draggedItem) {
      // Handle the item drop and log once
      if (draggedItem.index !== index) {
        moveRow(draggedItem.index, index);
        console.log(
          `Item with srNo: ${draggedItem.srNo} dropped to position: ${index + 1}`
        );
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index, srNo: item.srNo }, // Add srNo to the item being dragged
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref)); // Combine drag and drop

  return (
    <tr
      ref={ref}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="border border-black border-opacity-10"
    >
      <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
        {index + 1}
      </td>
      <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
        {item?.name}
      </td>
      <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
        {item?.subjects}
      </td>
      <td className="text-[#666666] text-base px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
        {item?.grades}
      </td>
    </tr>
  );
};

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    setLoading(true);
    const main = new Details();
    main
      .getFaculty()
      .then((r) => {
        setLoading(false);
        setTeachers(r?.data?.faculties);
      })
      .catch((err) => {
        setLoading(false);
        setTeachers([]);
        console.log("error", err);
      });
  }, []);

  // Function to handle moving rows
  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const updatedTeachers = [...teachers];
      const draggedRow = updatedTeachers[dragIndex];

      // Reorder the rows in the array
      updatedTeachers.splice(dragIndex, 1);
      updatedTeachers.splice(hoverIndex, 0, draggedRow);

      setTeachers(updatedTeachers);
    },
    [teachers]
  );

  return (
    <AdminLayout>
      <h1>Faculty</h1>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <DndProvider backend={HTML5Backend}>
          <div className="overflow-x-auto">
            <table className="border border-gray-200 w-full">
              <thead>
                <tr className="bg-[#36C9B4] text-white">
                  <th
                    width="15%"
                    className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] capitalize font-medium"
                  >
                    Sr. No.
                  </th>
                  <th
                    width="25%"
                    className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium"
                  >
                    Name of the teacher
                  </th>
                  <th
                    width="35%"
                    className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium"
                  >
                    Subject
                  </th>
                  <th
                    width="25%"
                    className="text-white text-left text-sm px-3.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium"
                  >
                    Grade/Class
                  </th>
                </tr>
              </thead>
              <tbody>
                {teachers &&
                  teachers.map((item, index) => (
                    <DraggableRow
                      key={item._id}
                      index={index}
                      item={item}
                      moveRow={moveRow}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </DndProvider>
      )}
    </AdminLayout>
  );
}
