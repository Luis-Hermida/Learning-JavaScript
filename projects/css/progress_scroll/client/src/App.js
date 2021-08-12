import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.progressBar = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    this.progressBar.current.style.height =
      (window.pageYOffset / totalHeight) * 100 + "%";
  }

  render() {
    return (
      <div className="content">
        <div className="progress-bar" ref={this.progressBar}></div>
        <div className="scroll-path"></div>
        <section className="section" onScroll={this.handleScroll}>
          <h1> Progress Scroll </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
            aliquam eleifend mi in nulla posuere sollicitudin aliquam. Ut tortor
            pretium viverra suspendisse potenti nullam ac tortor. At lectus urna
            duis convallis convallis tellus id. Ut diam quam nulla porttitor
            massa id neque aliquam vestibulum. Tristique et egestas quis ipsum.
            Ornare suspendisse sed nisi lacus. Id ornare arcu odio ut. Id eu
            nisl nunc mi ipsum. Sit amet risus nullam eget felis eget nunc.
            Tempor id eu nisl nunc mi ipsum faucibus vitae. In fermentum et
            sollicitudin ac. Diam phasellus vestibulum lorem sed risus ultricies
            tristique nulla. Aliquam faucibus purus in massa tempor nec feugiat
            nisl pretium. Mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque pulvinar. Dictum sit amet justo donec. Faucibus vitae
            aliquet nec ullamcorper sit amet risus nullam eget.
          </p>
          <p>
            Ornare massa eget egestas purus. Sed id semper risus in hendrerit.
            Et malesuada fames ac turpis egestas. Faucibus scelerisque eleifend
            donec pretium vulputate sapien nec sagittis. Aliquet risus feugiat
            in ante metus. Elementum nisi quis eleifend quam adipiscing. Arcu
            non odio euismod lacinia. Pulvinar sapien et ligula ullamcorper
            malesuada. Et molestie ac feugiat sed. Consequat ac felis donec et
            odio pellentesque diam volutpat. Tristique nulla aliquet enim tortor
            at auctor urna nunc. Facilisi nullam vehicula ipsum a arcu. Felis
            eget nunc lobortis mattis aliquam. Praesent tristique magna sit amet
            purus gravida. Faucibus interdum posuere lorem ipsum dolor sit amet.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames. Et tortor at risus viverra adipiscing. Vitae turpis massa sed
            elementum tempus egestas sed sed. Amet consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus. A scelerisque purus
            semper eget duis. Habitant morbi tristique senectus et netus et
            malesuada. Velit egestas dui id ornare arcu odio ut sem nulla.
            Feugiat in fermentum posuere urna. Ultricies mi eget mauris pharetra
            et ultrices neque ornare aenean. Egestas diam in arcu cursus euismod
            quis viverra nibh. Molestie ac feugiat sed lectus vestibulum mattis
            ullamcorper.
          </p>
          <p>
            Scelerisque in dictum non consectetur a erat. Dictumst quisque
            sagittis purus sit amet volutpat. Enim ut tellus elementum sagittis
            vitae et leo. Nibh nisl condimentum id venenatis a condimentum vitae
            sapien. Neque egestas congue quisque egestas diam in. Habitant morbi
            tristique senectus et netus et. Dolor sed viverra ipsum nunc aliquet
            bibendum enim facilisis. Et tortor at risus viverra adipiscing.
            Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Et
            pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
            Velit laoreet id donec ultrices tincidunt arcu. Tortor posuere ac ut
            consequat semper viverra. Pulvinar proin gravida hendrerit lectus a.
            In fermentum posuere urna nec tincidunt praesent semper feugiat.
            Bibendum at varius vel pharetra. Augue interdum velit euismod in
            pellentesque massa placerat. Pulvinar sapien et ligula ullamcorper
            malesuada proin libero nunc consequat. Odio tempor orci dapibus
            ultrices in iaculis.
          </p>
          <p>
            Enim praesent elementum facilisis leo. In eu mi bibendum neque. Id
            diam vel quam elementum pulvinar etiam non. Et netus et malesuada
            fames ac turpis. Massa eget egestas purus viverra accumsan. Nec dui
            nunc mattis enim ut tellus elementum. Tortor dignissim convallis
            aenean et. Turpis egestas pretium aenean pharetra magna ac placerat
            vestibulum lectus. Facilisis gravida neque convallis a cras semper
            auctor. Dignissim enim sit amet venenatis urna cursus eget nunc
            scelerisque. Urna nunc id cursus metus aliquam. Vel pharetra vel
            turpis nunc eget lorem dolor sed. Malesuada fames ac turpis egestas
            integer eget aliquet. Sapien faucibus et molestie ac feugiat. Morbi
            quis commodo odio aenean sed adipiscing. Amet purus gravida quis
            blandit turpis. Tortor at risus viverra adipiscing at in tellus
            integer feugiat. Viverra suspendisse potenti nullam ac. Sed id
            semper risus in hendrerit gravida rutrum quisque non. Urna id
            volutpat lacus laoreet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
            aliquam eleifend mi in nulla posuere sollicitudin aliquam. Ut tortor
            pretium viverra suspendisse potenti nullam ac tortor. At lectus urna
            duis convallis convallis tellus id. Ut diam quam nulla porttitor
            massa id neque aliquam vestibulum. Tristique et egestas quis ipsum.
            Ornare suspendisse sed nisi lacus. Id ornare arcu odio ut. Id eu
            nisl nunc mi ipsum. Sit amet risus nullam eget felis eget nunc.
            Tempor id eu nisl nunc mi ipsum faucibus vitae. In fermentum et
            sollicitudin ac. Diam phasellus vestibulum lorem sed risus ultricies
            tristique nulla. Aliquam faucibus purus in massa tempor nec feugiat
            nisl pretium. Mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque pulvinar. Dictum sit amet justo donec. Faucibus vitae
            aliquet nec ullamcorper sit amet risus nullam eget.
          </p>
          <p>
            Ornare massa eget egestas purus. Sed id semper risus in hendrerit.
            Et malesuada fames ac turpis egestas. Faucibus scelerisque eleifend
            donec pretium vulputate sapien nec sagittis. Aliquet risus feugiat
            in ante metus. Elementum nisi quis eleifend quam adipiscing. Arcu
            non odio euismod lacinia. Pulvinar sapien et ligula ullamcorper
            malesuada. Et molestie ac feugiat sed. Consequat ac felis donec et
            odio pellentesque diam volutpat. Tristique nulla aliquet enim tortor
            at auctor urna nunc. Facilisi nullam vehicula ipsum a arcu. Felis
            eget nunc lobortis mattis aliquam. Praesent tristique magna sit amet
            purus gravida. Faucibus interdum posuere lorem ipsum dolor sit amet.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames. Et tortor at risus viverra adipiscing. Vitae turpis massa sed
            elementum tempus egestas sed sed. Amet consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus. A scelerisque purus
            semper eget duis. Habitant morbi tristique senectus et netus et
            malesuada. Velit egestas dui id ornare arcu odio ut sem nulla.
            Feugiat in fermentum posuere urna. Ultricies mi eget mauris pharetra
            et ultrices neque ornare aenean. Egestas diam in arcu cursus euismod
            quis viverra nibh. Molestie ac feugiat sed lectus vestibulum mattis
            ullamcorper.
          </p>
          <p>
            Scelerisque in dictum non consectetur a erat. Dictumst quisque
            sagittis purus sit amet volutpat. Enim ut tellus elementum sagittis
            vitae et leo. Nibh nisl condimentum id venenatis a condimentum vitae
            sapien. Neque egestas congue quisque egestas diam in. Habitant morbi
            tristique senectus et netus et. Dolor sed viverra ipsum nunc aliquet
            bibendum enim facilisis. Et tortor at risus viverra adipiscing.
            Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Et
            pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
            Velit laoreet id donec ultrices tincidunt arcu. Tortor posuere ac ut
            consequat semper viverra. Pulvinar proin gravida hendrerit lectus a.
            In fermentum posuere urna nec tincidunt praesent semper feugiat.
            Bibendum at varius vel pharetra. Augue interdum velit euismod in
            pellentesque massa placerat. Pulvinar sapien et ligula ullamcorper
            malesuada proin libero nunc consequat. Odio tempor orci dapibus
            ultrices in iaculis.
          </p>
          <p>
            Enim praesent elementum facilisis leo. In eu mi bibendum neque. Id
            diam vel quam elementum pulvinar etiam non. Et netus et malesuada
            fames ac turpis. Massa eget egestas purus viverra accumsan. Nec dui
            nunc mattis enim ut tellus elementum. Tortor dignissim convallis
            aenean et. Turpis egestas pretium aenean pharetra magna ac placerat
            vestibulum lectus. Facilisis gravida neque convallis a cras semper
            auctor. Dignissim enim sit amet venenatis urna cursus eget nunc
            scelerisque. Urna nunc id cursus metus aliquam. Vel pharetra vel
            turpis nunc eget lorem dolor sed. Malesuada fames ac turpis egestas
            integer eget aliquet. Sapien faucibus et molestie ac feugiat. Morbi
            quis commodo odio aenean sed adipiscing. Amet purus gravida quis
            blandit turpis. Tortor at risus viverra adipiscing at in tellus
            integer feugiat. Viverra suspendisse potenti nullam ac. Sed id
            semper risus in hendrerit gravida rutrum quisque non. Urna id
            volutpat lacus laoreet.
          </p>
        </section>
      </div>
    );
  }
}

export default App;
