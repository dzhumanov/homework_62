import CarouselHome from "../../Components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="container">
      <h1 className="my-5">Official website of Formula 1 races</h1>
      <CarouselHome />
      <h3>What is Formula 1?</h3>
      <p>
        Formula 1 (F1) is the top tier of single-seater auto racing, known for
        its high-speed, technologically advanced cars. The F1 World Championship
        consists of a series of races known as Grands Prix, held on various
        circuits around the world. Teams, each with two drivers, compete for
        both the Constructors' Championship (based on team performance) and the
        Drivers' Championship (based on individual driver performance). The
        sport has a rich history, dating back to the inaugural season in 1950.
        Over the years, F1 has evolved, incorporating cutting-edge technology
        and engineering advancements. The cars are finely tuned for
        aerodynamics, speed, and cornering ability. Key elements of a Formula 1
        race weekend include practice sessions, qualifying, and the race itself.
        Races are known for their strategic elements, including pit stops for
        tire changes and fueling. The sport has produced legendary drivers,
        iconic teams, and memorable moments that have solidified its status as
        one of the most popular and prestigious racing series in the world.
      </p>
    </div>
  );
};

export default Home;
