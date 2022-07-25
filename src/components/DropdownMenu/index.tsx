import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

interface DropdownMenuProps {
  title: string;
  list: string[];
}

export function DropdownMenu({ title, list }: DropdownMenuProps) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title);

  const toggleList = () => {
    setIsListOpen(prevState => !prevState);
  };

  return (
    <div
      className={styles.ddWrapper}
      onMouseOver={toggleList}
      onMouseLeave={toggleList}
      onFocus={toggleList}
    >
      <button type="button" className={styles.ddHeader}>
        <div className={styles.ddHeaderTitle}>{headerTitle}</div>
        {isListOpen ? (
          <FontAwesomeIcon icon={faAngleUp} size="1x" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} size="1x" />
        )}
      </button>
      {isListOpen && (
        <div role="list" className={styles.ddList}>
          {list.map(item => (
            <button type="button" className={styles.ddListItem} key={item}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
