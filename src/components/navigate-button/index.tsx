import styles from '@/styles/menu.module.css';
import Link from 'next/link';
import { useEffect } from 'react';

interface NavigateButtonProps {
    page: string;
    text: string;
    refresh?: boolean;
    onClick?: any;
}

export const NavigateButton: React.FC<NavigateButtonProps> = ({page, text, refresh = false, onClick}) => {
    useEffect(() => {
        if (refresh) {
          history.replaceState(null, '', page);
        }
      }, [refresh, page]);
    return (
        <Link href={page} className={styles.menuItem} onClick={onClick}>
            {text}
        </Link>
    );
  };  