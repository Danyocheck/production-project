import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className ?: string;
    showModal?: boolean;
    setShowModal?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function Sidebar({ className, showModal, setShowModal }: SidebarProps) {
    const { theme } = useTheme();

    return (
        <div
            className={classNames(
                '',
                {
                    [cls['modal-active']]: !showModal,
                    [cls['modal-light']]: showModal && theme === Theme.LIGHT,
                    [cls['modal-dark']]: showModal && theme === Theme.DARK,
                },
                [className],
            )}
            onClick={() => setShowModal(false)}
        >
            <div
                className={classNames(
                    '',
                    {
                        [cls.SidebarActive]: !showModal,
                        [cls.Sidebar]: showModal,
                    },
                    [className],
                )}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={cls.switchers}>
                    <ThemeSwitcher />
                </div>
            </div>
        </div>

    );
}

export default Sidebar;
