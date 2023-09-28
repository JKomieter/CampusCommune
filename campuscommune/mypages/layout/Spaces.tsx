"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { RiDiscussLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ModalContent, useDisclosure } from "@nextui-org/react";
import NoteModal from "@/modals/noteModal/NoteModal";
import { Modal } from "@nextui-org/react";
import SpacesCollection from "./SpacesCollection";
import SpaceModal from "@/modals/spaceModal/SpaceModal";
import SpaceBar from "./SpaceBar";


// component for Sidebar quick access buttons
const Spaces = () => {

    return (
      <div className="md:flex hidden basis-1/5  flex-col gap-5" style={{minWidth: "200px"}}>
        <SpaceBar />
        <SpacesCollection />
      </div>
    );
}

export default Spaces;