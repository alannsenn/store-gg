import GameItem from '../../molecules/GameItem';

export default function FeaturedGame() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            gameTitle="Super Mechs"
            gameCategory="Mobile"
            gameThumbnail="/img/Thumbnail-1.png"
          />
          <GameItem
            gameTitle="Call of Duty: Modern"
            gameCategory="Mobile"
            gameThumbnail="/img/Thumbnail-2.png"
          />
          <GameItem
            gameTitle="Mobile Legends"
            gameCategory="Mobile"
            gameThumbnail="/img/Thumbnail-3.png"
          />
          <GameItem
            gameTitle="Clash of Clans"
            gameCategory="Mobile"
            gameThumbnail="/img/Thumbnail-4.png"
          />
          <GameItem
            gameTitle="Valorant"
            gameCategory="Desktop"
            gameThumbnail="/img/Thumbnail-5.png"
          />
        </div>
      </div>
    </section>
  );
}
