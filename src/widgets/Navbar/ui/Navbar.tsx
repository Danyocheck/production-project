import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import LightIcon from 'shared/assets/items/light-icon.svg';
import DarkIcon from 'shared/assets/items/dark-icon.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className ?: string;
    showModal?: boolean;
    setShowModal?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function Navbar({ className, showModal, setShowModal }: NavbarProps) {
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={theme === Theme.LIGHT
                    ? ThemeButton.LIGHT
                    : ThemeButton.DARK}
                onClick={() => setShowModal(!showModal)}
            >
                {theme === Theme.LIGHT
                    ? <LightIcon className={cls.icons} />
                    : <DarkIcon className={cls.icons} />}
            </Button>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    О сайте
                </AppLink>
            </div>
        </div>
    );
}

export default Navbar;
