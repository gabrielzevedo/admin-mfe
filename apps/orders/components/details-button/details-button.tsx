import styles from './details-button.module.scss';

/* eslint-disable-next-line */
export interface DetailsButtonProps {}

export function DetailsButton(props: DetailsButtonProps) {
  return (
    <div className={styles['container']}>
      <button type="button" {...props} />
    </div>
  );
}

export default DetailsButton;
