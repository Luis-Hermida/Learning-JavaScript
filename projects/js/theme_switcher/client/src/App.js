import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.darkButton = React.createRef();
    this.lightButton = React.createRef();
    this.solarButton = React.createRef();
    this.content = React.createRef();

    this.darkButtonHandleClick = this.darkButtonHandleClick.bind(this);
    this.lightButtonHandleClick = this.lightButtonHandleClick.bind(this);
    this.solarButtonHandleClick = this.solarButtonHandleClick.bind(this);
  }

  componentDidMount() {
    if (localStorage.theme) {
      this.content.current.classList.add(localStorage.theme);
    }

    if (localStorage.isSolar) {
      this.content.current.classList.add("solar");
    }
  }

  darkButtonHandleClick() {
    this.content.current.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }

  lightButtonHandleClick() {
    this.content.current.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }

  solarButtonHandleClick() {
    if (this.content.current.classList.toggle("solar")) {
      console.log(1);
      localStorage.setItem("isSolar", true);
    } else {
      console.log(2);
      localStorage.removeItem("isSolar");
    }
  }

  render() {
    return (
      <div className="content light" ref={this.content}>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>

            <li className="nav-item has-dropdown">
              <a href="/#">Theme</a>
              <ul className="dropdown">
                <li
                  className="dropdown-item"
                  ref={this.lightButton}
                  onClick={this.lightButtonHandleClick}
                >
                  <a id="light" href="/#">
                    Light
                  </a>
                </li>
                <li
                  className="dropdown-item"
                  ref={this.darkButton}
                  onClick={this.darkButtonHandleClick}
                >
                  <a id="dark" href="/#">
                    Dark
                  </a>
                </li>
                <li
                  className="dropdown-item"
                  ref={this.solarButton}
                  onClick={this.solarButtonHandleClick}
                >
                  <a id="solar" href="/#">
                    Solarize
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">Login</li>
          </ul>
        </nav>

        <header>
          <img src="./logo.png" className="logo" alt="react-logo"></img>
          <h1 className="title">Front-End Web Development</h1>
        </header>

        <main>
          <h1>Lorem ipsum</h1>
          <p>
            Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Facilisi nullam
            vehicula ipsum a arcu cursus. Pulvinar sapien et ligula ullamcorper
            malesuada proin. Nibh venenatis cras sed felis eget velit aliquet
            sagittis id. Sit amet cursus sit amet dictum sit amet. Aliquet enim
            tortor at auctor urna nunc id cursus metus. In hendrerit gravida
            rutrum quisque non tellus orci. Iaculis eu non diam phasellus
            vestibulum lorem sed risus ultricies. Massa ultricies mi quis
            hendrerit dolor magna. Quis viverra nibh cras pulvinar mattis nunc
            sed blandit. Lacus sed turpis tincidunt id aliquet risus feugiat in
            ante.
          </p>
          <p>
            Amet risus nullam eget felis eget. Interdum posuere lorem ipsum
            dolor sit amet. Eu facilisis sed odio morbi quis commodo odio aenean
            sed. Vitae nunc sed velit dignissim sodales ut eu. Ut tristique et
            egestas quis ipsum suspendisse ultrices gravida. Vel orci porta non
            pulvinar neque laoreet suspendisse interdum. Tellus molestie nunc
            non blandit. Aliquam vestibulum morbi blandit cursus risus at
            ultrices mi tempus. Ac turpis egestas sed tempus urna et pharetra.
            Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.
            Sodales ut etiam sit amet nisl purus in mollis. Amet luctus
            venenatis lectus magna fringilla urna. Faucibus et molestie ac
            feugiat. Pellentesque pulvinar pellentesque habitant morbi. Nisl
            tincidunt eget nullam non nisi. Orci porta non pulvinar neque.
          </p>

          <h1>Adipiscing at in tellus integer</h1>
          <p>
            Feugiat scelerisque varius. Ornare massa eget egestas purus viverra.
            Habitasse platea dictumst vestibulum rhoncus est. Mattis aliquam
            faucibus purus in. Sed ullamcorper morbi tincidunt ornare massa eget
            egestas purus viverra. Lobortis scelerisque fermentum dui faucibus.
            Et magnis dis parturient montes. Fames ac turpis egestas maecenas
            pharetra convallis. Varius sit amet mattis vulputate enim. In massa
            tempor nec feugiat nisl. Sollicitudin ac orci phasellus egestas
            tellus rutrum tellus pellentesque eu. Vel pretium lectus quam id leo
            in vitae turpis massa. Congue eu consequat ac felis donec.
            Scelerisque eleifend donec pretium vulputate sapien nec sagittis
            aliquam malesuada. Metus vulputate eu scelerisque felis.
          </p>
          <p>
            Viverra nam libero justo laoreet. Dictumst vestibulum rhoncus est
            pellentesque elit ullamcorper dignissim. Bibendum ut tristique et
            egestas quis. Tortor at auctor urna nunc id cursus metus aliquam.
            Aliquet porttitor lacus luctus accumsan tortor posuere ac ut
            consequat. Massa massa ultricies mi quis hendrerit dolor. Egestas
            tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.
            Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.
            Consequat interdum varius sit amet mattis vulputate enim. Erat
            imperdiet sed euismod nisi porta lorem mollis. Vulputate ut pharetra
            sit amet. Vulputate dignissim suspendisse in est. Cursus euismod
            quis viverra nibh cras pulvinar. A arcu cursus vitae congue mauris
            rhoncus. Amet consectetur adipiscing elit ut aliquam purus.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
