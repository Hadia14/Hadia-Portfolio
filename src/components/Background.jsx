import "../styles/background.css";

function Background() {

  return (

    <div className="background">

      {Array.from({ length: 120 }).map((_, index) => (

        <span

          key={index}

          style={{

            "--i": Math.random(),

            animationDelay: `${Math.random() * 15}s`,

            width: `${2 + Math.random() * 5}px`,

            height: `${2 + Math.random() * 5}px`,

            opacity: 0.4 + Math.random() * 0.6

          }}

        />

      ))}

    </div>

  );

}

export default Background;