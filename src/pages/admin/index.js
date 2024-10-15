import React, { useEffect, useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Details from "../api/admin/Details";
import Link from "next/link";
import AdminLayout from "@/layout/AdminLayout";
import Dashboard from "./dashboard/index"
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";
import Banner from "./banner";

export default function Index() {


  return (
    <AdminLayout>
      <Banner />
    </AdminLayout>
  );
}
