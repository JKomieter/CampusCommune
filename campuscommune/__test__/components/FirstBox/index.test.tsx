import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import FirstBox from "@/mypages/layout/FirstBox";
import AskModal from "@/modals/questionModal/AskModal";


describe("renders FirstBox", () => {
    it("renders FirstBox", () => {
        render(<FirstBox />);
    });
    it("displays all the text", () => {
        render(<FirstBox />);
        expect(screen.getByText("Ask")).toBeInTheDocument();
        expect(screen.getByText("Answer")).toBeInTheDocument();
        expect(screen.getByText("Post")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });
    it("displays AskModal when the textbox is clicked", () => {
        render(<FirstBox />);
        screen.getByRole("textbox").click();
    });
});
