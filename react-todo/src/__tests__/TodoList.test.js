// __tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
    // Test 1: Verify initial render
    test('renders the TodoList component with initial todos', () => {
        render(<TodoList />);

        // Check if initial todos are rendered
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });

    // Test 2: Verify adding a new todo
    test('adds a new todo when the form is submitted', () => {
        render(<TodoList />);

        // Simulate user input
        const input = screen.getByPlaceholderText('Add a new todo');
        fireEvent.change(input, { target: { value: 'New Todo' } });

        // Simulate form submission
        const addButton = screen.getByText('Add');
        fireEvent.click(addButton);

        // Check if the new todo is added
        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    // Test 3: Verify toggling a todo
    test('toggles a todo between completed and not completed', () => {
        render(<TodoList />);

        // Find the first todo item
        const todoItem = screen.getByText('Learn React');

        // Check initial state (not completed)
        expect(todoItem).not.toHaveStyle('text-decoration: line-through');

        // Simulate clicking the todo to toggle completion
        fireEvent.click(todoItem);

        // Check if the todo is marked as completed
        expect(todoItem).toHaveStyle('text-decoration: line-through');
    });

    // Test 4: Verify deleting a todo
    test('deletes a todo when the delete button is clicked', () => {
        render(<TodoList />);

        // Find the first todo item
        const todoItem = screen.getByText('Learn React');
        const deleteButton = screen.getAllByText('Delete')[0];

        // Simulate clicking the delete button
        fireEvent.click(deleteButton);

        // Check if the todo is removed
        expect(todoItem).not.toBeInTheDocument();
    });
});