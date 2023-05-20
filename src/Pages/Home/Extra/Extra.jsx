

const Extra = () => {
    return (
        <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div
          className="h-full bg-cover bg-center transform scale-150"
          style={{ backgroundImage: "url('https://thumbs.dreamstime.com/z/kids-play-toy-cars-children-playing-car-toys-white-room-little-boy-truck-vehicle-transportation-game-kid-parking-145779563.jpg')" }}
        ></div>
      </div>
      <div className="relative container mx-auto h-full flex items-center justify-center z-10">
        <h1 className="text-4xl font-bold text-white">Your Parallax Section</h1>
      </div>
    </section>
    );
};

export default Extra;