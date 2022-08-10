import cx from 'classnames';

interface ButtonTabProps {
  active: boolean;
  title: string;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active } = props;
  const buttonClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter="failed" href="/#" className={buttonClass}>
      {title}
    </a>
  );
}
