import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import AskModal from "@/components/modals/QuestionModal/AskModal";



describe("AskModal", () => {
    it("renders AskModal component",  () => {
        render(<AskModal />);
    });
});
