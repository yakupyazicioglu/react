import React from 'react';
import { render, screen } from '@testing-library/react'; 
import { beforeEach, describe, expect, it } from 'vitest';

import { Alert } from '../packages/alert/src/index.js';

it('Renders an info Alert', () => {
  render(<Alert show={true} type="info">This is an info alert</Alert>);
  
  expect(screen.getByText('This is an info alert')).toBeInTheDocument();
  expect(screen.getByTitle('Information circle')).toBeInTheDocument();
});

it('Renders a positive Alert', () => {
  render(<Alert show={true} type="positive">This is a positive alert</Alert>);
  
  expect(screen.getByText('This is a positive alert')).toBeInTheDocument();
  expect(screen.getByTitle('Circle with checkmark')).toBeInTheDocument();
});

it('Renders a warning Alert', () => {
  render(<Alert show={true} type="warning">This is a warning alert</Alert>);
  
  expect(screen.getByText('This is a warning alert')).toBeInTheDocument();
  expect(screen.getByTitle('Warning triangle with exclamation point')).toBeInTheDocument();
});

it('Renders a negative Alert', () => {
  render(<Alert show={true} type="negative">This is a negative alert</Alert>);
  
  expect(screen.getByText('This is a negative alert')).toBeInTheDocument();
  expect(screen.getByTitle('Octagon with exclamation point')).toBeInTheDocument();
});

it('Renders Alert with a status role', () => {
  render(<Alert show={true} role="status">This is an info alert</Alert>);

  expect(screen.getByText('This is an info alert')).toBeInTheDocument();
  expect(screen.getByRole('status')).toBeInTheDocument();
});
