import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'park bench',
    category: 'landscape',
    description: 'lorem ipsum',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it ('renders', () => {
        //baseline render component test
        render(<Modal 
            onClose = {mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    });
    
    //snapshot test
    it('matches snpashot DOM', () => {
        const { asFragment } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
            />);

            expect(asFragment()).toMatchSnapshot();
    })
})

describe('click event', () => {
    it('calls onClose handler', () => {
        //arrange render modal
        const {getByText} = render(<Modal 
            onClose = {mockToggleModal}
            currentPhoto={currentPhoto} />);
        //act simulate click event
            fireEvent.click(getByText('Close this modal'));
        //assert expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})