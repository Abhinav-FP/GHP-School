import React, { useEffect, useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Details from "../api/admin/Details";
import Link from "next/link";
import AdminLayout from "@/layout/AdminLayout";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const ItemType = "ROW";

  const handleDelete = (number) => {
    const main = new Details();
    const formData = new FormData();
    formData.append("srNo", number);
    const response = main.deleteFaculty(formData);
    response
      .then((res) => {
        if (res && res?.data && res?.data?.status) {
          toast.success(res.data.message);
          getTeachers();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        // console.log("error", error);
      });
  };
  const getTeachers = () => {
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
  };

  const DraggableRow = ({ item, index, moveRow }) => {
    const ref = React.useRef(null);
    
    const [, drop] = useDrop({
      accept: ItemType,
      drop(draggedItem) {
        // Handle the item drop and log the ID of the dragged item
        if (draggedItem.index !== index) {
          moveRow(draggedItem.index, index);
          draggedItem.index = index;
           // Moving the task through api
           const main = new Details();
           const formData = new FormData();
           formData.append("id", draggedItem._id);
           formData.append("oldPosition", draggedItem.srNo);
           formData.append("newPosition", index + 1);
           const response = main.moveFaculty(formData);
           response
             .then((res) => {
               if (res && res?.data && res?.data?.status) {
                 toast.success(res.data.message);
               } else {
                 toast.error(res.data.message);
               }
             })
             .catch((error) => {
               toast.error(error?.response?.data?.message);
               // console.log("error", error);
             });
        }
      },
    });
  
    const [{ isDragging }, drag] = useDrag({
      type: ItemType,
      item: { index, srNo: item.srNo, _id: item._id }, // Add srNo and _id to the item being dragged
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
        <td className="text-[#666666] text-base px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
          {index + 1}
        </td>
        <td className="text-[#666666] text-base px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
          {item?.name}
        </td>
        <td className="text-[#666666] text-base px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
          {item?.subjects}
        </td>
        <td className="text-[#666666] text-base px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
          {item?.grades}
        </td>
        <td className="text-[#666666] text-base px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] border border-black border-opacity-10">
          <RiDeleteBinLine
            size={16}
            onClick={() => {
              handleDelete(item?.srNo);
            }}
            className="cursor-pointer"
          />
        </td>
      </tr>
    );
  };
  
  

  useEffect(() => {
    getTeachers();
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
      <div className="container mx-auto mt-4">
        <div className="flex gap-4 mb-4">
          <h1>Faculty</h1>
          <Link
            href="/admin/add/faculty"
            className="bg-[#EE834E] hover:bg-[#ECCD6E] rounded px-2 lg:px-4 py-1 text-white text-base font-normal tracking-[-0.04em]"
          >
            Add New Faculty
          </Link>
        </div>
        {loading ? (
          <div>Loading....</div>
        ) : (
          <DndProvider backend={HTML5Backend}>
            <div className="overflow-x-auto">
              <table className="border border-gray-200 w-full">
                <thead>
                  <tr className="bg-[#36C9B4] text-white">
                    <th
                      width="10%"
                      className="text-white text-left text-sm px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] capitalize font-medium"
                    >
                      Sr. No.
                    </th>
                    <th
                      width="25%"
                      className="text-white text-left text-sm px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium"
                    >
                      Name of the teacher
                    </th>
                    <th
                      width="30%"
                      className="text-white text-left text-sm px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium"
                    >
                      Subject
                    </th>
                    <th
                      width="25%"
                      className="text-white text-left text-sm px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium"
                    >
                      Grade/Class
                    </th>
                    <th
                      width="10%"
                      className="text-white text-left text-sm px-1.5 lg:px-[40px] py-5 tracking-[-0.04em] uppercase font-medium"
                    >
                      Action
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
      </div>
    </AdminLayout>
  );
}
