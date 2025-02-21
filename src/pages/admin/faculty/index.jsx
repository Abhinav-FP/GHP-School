import React, { useEffect, useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Link from "next/link";
import AdminLayout from "@/layout/AdminLayout";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";
import Details from "@/pages/api/admin/Details";
import Header from "../Component/Header";
import SideBarAdmin from "../Component/SideBar";
import Faculty from "./faculty";
import Loading from "../Component/Loading";
import { BiEdit } from "react-icons/bi";

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
      >
       <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
          {index + 1}
        </td>
        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
          {item?.name}
        </td>
        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
          {item?.subjects}
        </td>
        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#46494D] tracking-[-0.03em]">
          {item?.grades}
        </td>
        <td className="pl-4 md:pl-6 lg:pl-10 pr-3 py-4 text-[15px] font-medium text-[#ff0000] tracking-[-0.03em]">
          <div className="flex items-center justify-center gap-3">
          <div 
          onClick={() => {
              handleDelete(item?.srNo);
            }} 
            className="text-[#fff] h-[30px] w-[30px] bg-[#ff0000] bg-opacity-80 hover:bg-opacity-100 rounded inline-flex items-center justify-center cursor-pointer">
            <RiDeleteBinLine 
            size={16} />
          </div>
          <Faculty item={item} getTeachers={getTeachers}/>
          </div>
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
    <div className="md:flex flex-wrap  bg-[#F5F6FB] items-start">
      <SideBarAdmin />
      {/* right sidebar  */}
      <div className="w-full lg:ml-[304px] lg:w-[calc(100%-304px)]">
        <Header title={"Manage Faculty"} />
        {/* Overview */}
        <div className="px-4 py-2 lg:px-10 lg:py-2.5">
          {/*  */}
          <div className="bg-white rounded-[20px] mb-[30px]">
            <div className="py-3 py-4 lg:py-[23px] px-4 md:px-6 lg:px-10 flex flex-wrap justify-between items-center border-b border-black  border-opacity-10">
              <h3 className=" text-base lg:text-lg font-semibold text-[#1E1E1E] mb-3 sm:mb-0 tracking-[-0.03em]">Faculty</h3>
              <Faculty getTeachers={getTeachers}/>
            </div>
            <div className="overflow-x-auto">
              {loading ? (
                <Loading/>
              ) : (
                <DndProvider backend={HTML5Backend}>
                  <div className="overflow-x-auto">
                  <table className="min-w-full">
                      <thead>
                        <tr className="">
                        <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                            Sr. No.
                          </th>
                          <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                            Name of the teacher
                          </th>
                          <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                            Subject
                          </th>
                          <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
                            Grade/Class
                          </th>
                          <th className="pl-4 md:pl-6 lg:pl-10 pr-3 py-3 lg:py-3.5 text-sm font-medium text-[#8D929A] text-left uppercase tracking-[-0.03em]">
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
          </div>
        </div>
      </div>
    </div>
    </AdminLayout>
  );
}
