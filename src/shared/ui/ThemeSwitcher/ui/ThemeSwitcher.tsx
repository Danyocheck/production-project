import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className ?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cls['btn-container']}>
            <i className={`fa ${cls['fa-sun-o']}`} aria-hidden="true" />
            <label
                className={classNames(
                    cls['btn-color-mode-switch'],
                    {},
                    ['switch'],
                )}
            >
                <input
                    type="checkbox"
                    id="color_mode"
                    style={{ width: 0, height: 0 }}
                    checked={theme === Theme.DARK}
                    readOnly
                />
                <label
                    htmlFor="color_mode"
                    data-on="Dark"
                    data-off="Light"
                    className={cls['btn-color-mode-switch-inner']}
                    onClick={toggleTheme}
                />
            </label>
            <i
                className={classNames(
                    cls['fa-moon-o'],
                    {},
                    ['fa'],
                )}
                aria-hidden="true"
            />
        </div>
    );
}

export default ThemeSwitcher;
