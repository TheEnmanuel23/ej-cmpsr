import React from 'react';
import TestRenderer from 'react-test-renderer';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@tests/renderWithProviders';
import { ComposerProvider } from '@theme';
import { Select } from '.';

describe('Select', () => {
  test('it should render', () => {
    renderWithProviders(<Select />);
    expect(screen.queryByTestId('cmpsr.select')).toBeTruthy();
  });

  test('it should have the correct color when the placeholder is selected', () => {
    const result = TestRenderer.create(
      <ComposerProvider>
        <Select placeholder="Test">
          <option value="option1">Option 1</option>
        </Select>
      </ComposerProvider>
    );

    expect(result.root.findByProps({ 'data-testid': 'cmpsr.select' }).props.textColor).toBe('text-secondary');
  });

  test('it should have the correct color when the placeholder is not selected', () => {
    const result = TestRenderer.create(
      <ComposerProvider>
        <Select placeholder="Test" value="option1">
          <option value="option1">Option 1</option>
        </Select>
      </ComposerProvider>
    );

    expect(result.root.findByProps({ 'data-testid': 'cmpsr.select' }).props.textColor).toBe('text-primary');
  });
});
