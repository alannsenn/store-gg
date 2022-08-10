export interface StepItemProps {
  icon: 'step-one' | 'step-two' | 'step-three';
  title: string;
  descOne: string;
  descTwo: string;
}

export default function StepItem(props: StepItemProps) {
  // eslint-disable-next-line object-curly-newline
  const { icon, title, descOne, descTwo } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img
          src={`/icon/${icon}.svg`}
          width="80"
          height="80"
          className="mb-30"
          alt="steps"
        />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {descOne}
          <br />
          {descTwo}
        </p>
      </div>
    </div>
  );
}
