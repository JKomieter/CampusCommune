import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NoteModal from '@/modals/noteModal/NoteModal';


// Mock the Firebase functions and auth as needed
jest.mock('@/firebase/config', () => ({
    db: {
        collection: jest.fn(() => ({
            addDoc: jest.fn(() => Promise.resolve()),
        })),
        storage: jest.fn(),
    },
    storage: {
        ref: jest.fn(),
        uploadBytes: jest.fn(() => Promise.resolve()),
        getDownloadURL: jest.fn(() => Promise.resolve('mocked-url')),
    },
    auth: {
        useAuthState: jest.fn(() => [null]),
    },
}));

test('renders NoteModal correctly', () => {
    render(<NoteModal onClose={() => { }} />);
    const titleInput = screen.getByLabelText('Title');
    const descriptionInput = screen.getByLabelText('Description');
    const courseInput = screen.getByLabelText('Course');
    const imageInput = screen.getByLabelText('Image');
    const postButton = screen.getByText('Post');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(courseInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(postButton).toBeInTheDocument();
});

test('submitting the form calls the onSubmit function', async () => {
    render(<NoteModal onClose={() => { }} />);
    const titleInput = screen.getByLabelText('Title');
    const descriptionInput = screen.getByLabelText('Description');
    const courseInput = screen.getByLabelText('Course');
    const imageInput = screen.getByLabelText('Image');
    const postButton = screen.getByText('Post');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.click(courseInput);
    fireEvent.click(screen.getByText('Agriculture'));
    // Here, you may need to mock the image input using a library like `jest-file-mock`
    fireEvent.change(imageInput, { target: { value: 'Test Image' } });

    fireEvent.click(postButton);

    // Wait for the asynchronous operations to complete
    await waitFor(() => {
        expect(screen.getByText('Note added successfully!')).toBeInTheDocument();
    });
});
