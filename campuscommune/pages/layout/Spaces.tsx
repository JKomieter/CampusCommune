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


// component for Sidebar quick access buttons
const Spaces = () => {

    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
      <div className="md:flex hidden basis-1/5">
        <div className="flex flex-col gap-6 items-start bg-white fixed shadow-lg px-4 py-3 rounded-md">
          <div className="cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full flex items-center gap-2">
            <AiOutlinePlus size={20} className="text-neutral-800" />
            <p className="text-sm">Create Space</p>
          </div>
          <div
          onClick={() => onOpen()}
          className="cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full  flex items-center gap-2">
            <GrNotes size={20} className="text-neutral-800" />
            <p className="text-sm">Share Notes</p>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="rounded-md">
              {onClose => (
                <NoteModal onClose={onClose} />
              )}
            </ModalContent>
          </Modal>
          <div className="cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full  flex items-center gap-2">
            <RiDiscussLine size={20} className="text-neutral-800" />
            <p 
              onClick={() => router.push("/join-discussion")}
            className="text-sm">Join Discussions</p>
          </div>
          <div className="cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full  flex items-center gap-2">
            <MdOutlineExplore size={20} className="text-neutral-800" />
            <p className="text-sm">Explore Courses</p>
          </div>
          <div className="cursor-pointer hover:bg-neutral-300 p-2 rounded-md w-full  flex items-center gap-2">
            <FaChalkboardTeacher size={20} className="text-neutral-800" />
            <p className="text-sm">Find Tutors</p>
          </div>
        </div>
      </div>
    );
}

export default Spaces;