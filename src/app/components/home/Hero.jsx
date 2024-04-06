import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen relative flex flex-col gap-8 overflow-clip">
        <Image
          src="/images/helmet.jpg"
          alt="a man wearing helmet"
          width={1767}
          height={900}
          className="absolute -z-20 inset-0 h-full w-full object-cover"
        />
      </div>
      <p className="translate-y-[50%] skew-y-[1.5deg]">
        The Reflective Helmet seamlessly integrates reflective technology,
        ensuring visibility without drawing unnecessary attention. The perfect
        choice for the mindful cyclist.
      </p>
    </section>
  );
};

export default Hero;
