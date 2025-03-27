import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './form';
import React from 'react';

describe('form component', () => {
    test('button exists', () => {
        //assign
        render(<Form />)
        //act
        const button = screen.getByRole('button');
        //assert
        expect(button).toBeTruthy();
    })

})