import { classNames } from './classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        const expected = 'class class1 class2';
        expect(classNames('class', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods and additional class', () => {
        const expected = 'class class1 class2 class3';
        expect(classNames(
            'class',
            {
                class3: true,
                class4: false,
            },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
