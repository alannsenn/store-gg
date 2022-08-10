import StepItem from '../../molecules/StepItem';

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br />
          Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItem
            icon="step-one"
            title="1. Start"
            descOne="Pilih salah satu game"
            descTwo="yang ingin kamu top up"
          />
          <StepItem
            icon="step-two"
            title="2. Fill Up"
            descOne="Top up sesuai dengan"
            descTwo="nominal yang sudah tersedia"
          />
          <StepItem
            icon="step-three"
            title="Be a Winner"
            descOne="Siap digunakan untuk"
            descTwo="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
