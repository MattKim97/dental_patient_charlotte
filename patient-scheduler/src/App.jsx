import Background from "./components/Background";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import BookingSection from "./components/BookingSection";

export default function App() {
  return (
    <>
      <Background />

      <div className="page">
        <Hero />
        <VideoSection />
        <BookingSection />
      </div>
    </>
  );
}
