import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import CreateStepOne from "@/components/modals/QuestionModal/CreateStepOne";


describe("CreateStepOne", () => {
    it("renders CreateStepOne component", () => {
        render(<CreateStepOne
            text={""}
            setText={() => { }}
            mode={"post"}
            setMode={() => { }}
            image={""}
            setImage={() => { }}
            title={""}
            setTitle={() => { }}
            description={""}
            setDescription={() => { }}
        />);
        const question = screen.getByText("Add Question");
        expect(question).toBeInTheDocument();
        question.click();   
        expect(question).not.toHaveStyle("border-bottom-width: 4px");
        // QuestionMode should be rendered
        const questionMode = screen.getByText("Tips on getting good answers quickly");
        expect(questionMode).toBeInTheDocument();
        expect(screen.getByText("Choose credential")).toBeInTheDocument();
    });
});