import Head from "next/head";
import TypeAnimation from "react-type-animation";
import { Progress, Timeline } from "antd";
import { useRef } from "react";
import Image from "next/image";

import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import MainHeader from "../components/header";

export default function Home() {
  const parallax = useRef();

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
      console.log("hello");
    }
  };

  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }} ref={parallax}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => scroll(1)}
      >
        <div
          style={{ display: "flex", justifyContent: "center", height: "100vh" }}
        >
          <div style={{ maxWidth: 1200 }}>
            <MainHeader />
            <div
              style={{
                textAlign: "center",
                paddingLeft: 100,
                paddingRight: 100,
              }}
            >
              <h1>
                hello, i'm dylan. i'm a full stack React developer && graphic
                designer.
              </h1>
            </div>
            <div
              style={{
                textAlign: "center",
                paddingLeft: 100,
                paddingRight: 100,
                marginTop: 100,
              }}
            >
              <TypeAnimation
                sequence={["Click to continue.", 2800]}
                wrapper="h2"
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            backgroundColor: "#EF233C",
          }}
          className="hero-background-EF233C"
        ></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            // backgroundColor: "#8D99AE",
          }}
          className="hero-background-8D99AE"
        ></div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => scroll(2)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            // backgroundColor: "#2B2D42",
          }}
          className="hero-background-2b2d42"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "#EDF2F4" }}>About Me</h1>
            <br />
            <h2
              style={{
                color: "#EDF2F4",
                textAlign: "center",
                paddingLeft: 20,
                paddingRight: 20,
                maxWidth: 1000,
                fontSize: 18,
              }}
            >
              I am a full stack developer based in the beautiful Cape Town. I am
              experienced in React, Next.js, Gatsby.js, Google Firebase and
              Supabase. I am also comfortable with using the Adobe suite.
              (Photoshop, Illustrator, Xd, etc.)
              <br />
              <br />I started my journey with Delphi/Pascal software about 5
              years ago, and it has been quite the journey since then. I have
              learnt multiple languages, including Python, Javascript, HTML,
              CSS, Java, SQL, PHP and more.
              <br />
              <br />
              I studied Software Engineering and Full Stack Development at a
              college in Cape Town called Hyperiondev. There, I learned
              Javascript, HTML, CSS, Java, SQL, PHP and more.
              <br />
              <br />
              <span style={{ fontStyle: "oblique" }}>Click to continue.</span>
            </h2>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => scroll(0)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            paddingLeft: 20,
            paddingRight: 20,
            whiteSpace: "nowrap",
          }}
        >
          <h2>
            <span style={{ color: "#EF233C" }}>{"<ul>"}</span>
            <br />
            &emsp;&emsp;<span style={{ color: "#D90429" }}>{"<li>"}</span>Email
            - dylan@rhys.co.za<span style={{ color: "#D90429" }}>{"<li>"}</span>
            <br />
            &emsp;&emsp;<span style={{ color: "#D90429" }}>{"<li>"}</span>Github
            - https://github.com/DylPayne
            <span style={{ color: "#D90429" }}>{"<li>"}</span>
            <br />
            &emsp;&emsp;<span style={{ color: "#D90429" }}>{"<li>"}</span>
            Instagram - @dylanpayne.za
            <span style={{ color: "#D90429" }}>{"<li>"}</span>
            <br />
            &emsp;&emsp;<span style={{ color: "#D90429" }}>{"<li>"}</span>Upwork
            - Dylan Payne<span style={{ color: "#D90429" }}>{"<li>"}</span>
            <br />
            <span style={{ color: "#EF233C" }}>{"</ul>"}</span>
          </h2>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
