import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LiveDiscussionActions from '@/components/Discussion/DiscussionTitle/LiveDiscussionActions';
import { currentUserType } from '@/types';

// Mock the toast notification library
jest.mock('react-hot-toast', () => ({
    error: jest.fn(),
}));

// Mock Firebase
const mockFirebase = {
    firestore: jest.fn(() => ({
        collection: jest.fn(() => ({
            addDoc: jest.fn(),
        })),
    })),
};

// Mock the current user data
const currentUser = {
    email: 'test@example.com',
    full_name: 'Test User',
    profile_pic: 'profile.jpg',
} as currentUserType;

beforeEach(() => {
    (global as any).firebase = mockFirebase;
});

afterEach(() => {
    delete (global as any).firebase;
});

describe('LiveDiscussionActions', () => {
    it('should allow users to send a message', async () => {
        render(<LiveDiscussionActions title="Discussion Title" currentUser={currentUser} />);

        // Fill in the message input
        const messageInput = screen.getByPlaceholderText('Type a message...');
        fireEvent.change(messageInput, { target: { value: 'Hello, World!' } });

        // Click the Send button
        const sendButton = screen.getByText('Send');
        fireEvent.click(sendButton);

        // Wait for Firestore to be called
        await waitFor(() => {
            expect(mockFirebase.firestore().collection().addDoc).toHaveBeenCalledWith(expect.any(Function));
        });

        // Check if the input is cleared after sending
        expect(messageInput).toHaveValue('');

        // Check if the Firestore addDoc function was called with the correct data
        expect(mockFirebase.firestore().collection().addDoc).toHaveBeenCalledWith({
            text: 'Hello, World!',
            created_at: expect.any(Date),
            sender_email: 'test@example.com',
            sender_name: 'Test User',
            sender_photo: 'profile.jpg',
            multimedia: {
                image: '',
                video: '',
                audio: '',
            },
            title: 'Discussion Title',
        });
    });
});


