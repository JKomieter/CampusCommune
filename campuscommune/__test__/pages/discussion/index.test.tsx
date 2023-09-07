import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DiscussionItem from "@/components/Discussion/DiscussionItem";

const discussion = {
    title: "Sample Discussion",
    description: "Sample description",
    participants: [],
    category: ["Sample Category"],
    index: 0,
    views: 100,
};

describe("DiscussionItem", () => {
    it("renders DiscussionItem component", () => {
        // Mock any necessary dependencies or props

        // Render the component with the mocked data
        render(
            <DiscussionItem
                title={discussion.title}
                description={discussion.description}
                participants={discussion.participants}
                category={discussion.category}
                index={discussion.index}
                views={discussion.views}
            />
        );

        // Assert that the component renders correctly
        expect(screen.getByText("Sample Discussion")).toBeInTheDocument();
        expect(screen.getByText("Sample Category")).toBeInTheDocument();
        expect(screen.getByText("100 views")).toBeInTheDocument();

        // You can add more assertions as needed
    });

    it("opens the DiscussionModal when clicked", () => {
        // Mock any necessary dependencies or props

        // Render the component with the mocked data
        render(
            <DiscussionItem
                title={discussion.title}
                description={discussion.description}
                participants={discussion.participants}
                category={discussion.category}
                index={discussion.index}
                views={discussion.views}
            />
        );

        // Click on the component to open the modal
        fireEvent.click(screen.getByText("Sample Discussion"));

        // Assert that the DiscussionModal is opened
        expect(screen.getByText("Discussion Modal Content")).toBeInTheDocument();
        // You can add more assertions related to the modal content if needed
    });

    // Add more test cases as needed
});
