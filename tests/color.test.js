import { useColor } from '../functions/providers/ColorContext';
import { mountReactHook } from './mockHook';
import { waitFor, act } from '@testing-library/react-native';

const original = {
    primary: '#ffffff',
    primaryText: '#555555',
    highlight: '#000099',
    inactive: '#999999',
    background: '#89F1FF',
    shadow: '#aaa'
};

const colorSchemes = [
    'blue',
    'periwinkle',
    'pink',
    'lavender',
    'yellow',
    'green',
    'cyberpunk',
    'dark3',
    'dark2',
    'dark1',
    'original'
];

describe('Color Tests', () => {
    let setupComponent;
    let hook;

    beforeEach(() => {
        setupComponent = mountReactHook(useColor);
        hook = setupComponent.componentHook;
    });

    it('Has initial color', async () => {
        expect(hook.color).toEqual(original);
    });

    it('Has color schemes', async () => {
        expect(Object.keys(hook.colorSchemes)).toEqual(colorSchemes);
    });

    // it('Changes color', async () => {
    //     await act(async () => {
    //         hook.setName('dark3');
    //         await waitFor(() => {});
    //     });

    //     expect(hook.color).toEqual(hook.colorSchemes['dark3']);
    // });
});
