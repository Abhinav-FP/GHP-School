import React, { useEffect, useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Details from "../api/admin/Details";
import Link from "next/link";
import AdminLayout from "@/layout/AdminLayout";
import dashboard from "./banner/index"
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";

export default function Index() {


  return (
    <AdminLayout>
      <dashboard />
    </AdminLayout>
  );
}
