import './App.css';

import logoImg from './assets/logo.svg';
import heroImg from './assets/hero.png';
import allEncoresImg from './assets/all-encores.jpg';
import articulationImg from './assets/articulation.jpg';
import encores2Img from './assets/encores-2.jpg';
import eulogyImg from './assets/eulogy-for-evolution.jpg';
import authorImg from './assets/profile_picture.jpg';
import fbIcon from './assets/facebook-icon.png';
import igIcon from './assets/instagram-icon.svg';
import twIcon from './assets/twitter-icon.svg';

function App() {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <img src={logoImg} alt="Erased Tapes Records Logo" className="header-logo" />
        <nav className="header-nav">
          <a href="#shop">Our Shop</a>
          <a href="#artists">Our Artists</a>
          <a href="#story">Our Story</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="article-hero">
          <h1 className="main-title">Erased Tapes:</h1>
          <h2 className="main-subtitle">Exploring the Sonic Frontier</h2>
          <p className="lead-paragraph">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mi eu scelerisque turpis posuere tempor? Leo condimentum himenaeos molestie elit; maximus iaculis proin nulla. Ullamcorper nibh cras conubia suscipit dapibus sagittis, facilisi habitant vivamus. Etiam fusce posuere himenaeos ipsum commodo sollicitudin himenaeos nec.
          </p>
        </section>

        <section className="text-grid-section">
          <div className="text-column">
            <h3 className="column-heading">Heading</h3>
            <p>
              Montes ridiculus mus tellus nunc vulputate. Cras facilisi congue et facilisis porttitor litora etiam praesent porttitor. Sollicitudin cubilia scelerisque diam taciti lacus. Dapibus penatibus augue dapibus sagittis; rhoncus accumsan. Accumsan urna et, ultrices placerat justo rutrum. Tristique mattis ante cras accumsan convallis phasellus fermentum magna. Rhoncus curabitur pharetra proin ante nam adipiscing accumsan hac. Rutrum efficitur nullam integer ut ex id. Pulvinar vel at vestibulum vivamus sed nascetur eget.
            </p>
            <p>
              Laoreet volutpat hendrerit est aliquam; fusce quam tempor. Nisi interdum praesent pellentesque non non blandit cubilia et. Aptent maximus vehicula nullam odio tempor. Placerat dis facilisis potenti iaculis, primis vivamus nec at magnis. Aadipiscing curabitur vestibulum imperdiet dolor primis. Inceptos penatibus inceptos eu habitasse aptent vehicula platea litora congue. Ultricies mauris fringilla rhoncus pharetra iaculis vitae. Venenatis himenaeos eget molestie dignissim consectetur tellus litora. Porta a iaculis mi primis rhoncus.
            </p>
            <p>
              Curae habitasse elementum amet nunc, natoque at. Tortor vel blandit sociosqu auctor aliquam maximus porta feugiat. Eros phasellus platea mauris condimentum natoque hendrerit tellus id. Ex imperdiet vitae maximus adipiscing neque quam tempor orci. Lobortis porta lacinia cubilia tellus vel placerat; facilisis mi euismod. Neque eu orci nulla penatibus elit nec.
            </p>
            <p>
              Parturient habitasse facilisis purus donec, enim platea maximus. Primis class varius augue sed class ultricies. Posuere curabitur tristique penatibus montes hac ac imperdiet. Risus per sociosqu, cursus leo condimentum ac fringilla. Nibh curabitur eros tempus nec; nam curae hendrerit. Mattis placerat maximus mollis praesent, eros adipiscing dui.
            </p>
          </div>

          <div className="text-column">
            <p>
              Habitasse ornare fames facilisis montes pulvinar habitasse fringilla. Risus porta cursus duis vivamus quam adipiscing nec. Ante at posuere eget aptent natoque vivamus ante. Aenean enim dapibus viverra sem efficitur. Felis nam semper integer justo in.
            </p>
            <p>
              Facilisi augue urna torquent lacinia facilisi inceptos. Natoque varius feugiat massa scelerisque natoque, cras tempor inceptos. Amet ac leo, imperdiet hac litora auctor. Suscipit congue duis sociosqu auctor euismod vivamus urna diam.
            </p>
            <h3 className="column-heading">Heading</h3>
            <p>
              Nunc enim himenaeos litora facilisi, tincidunt torquent. Eros sapien laoreet duis, volutpat rutrum pulvinar. Natoque semper sapien aptent quis habitant aliquam condimentum luctus. Tempus pellentesque congue varius dapibus pharetra. Fermentum diam auctor bibendum rhoncus leo.
            </p>
            <p>
              Vestibulum tincidunt fames convallis ligula semper porttitor. Magnis maximus morbi, litora accumsan vivamus facilisi etiam pharetra. Platea congue orci sagittis purus scelerisque. Velit taciti maecenas praesent nam lobortis metus vehicula habitasse porttitor.
            </p>
          </div>

          <div className="text-column">
            <p>
              Vulputate nullam tempus montes eu tellus integer adipiscing pulvinar. Pharetra eu luctus id a potenti. Pulvinar egestas conubia ante varius lobortis iaculis metus. Netus sem imperdiet hendrerit vehicula netus est gravida tortor.
            </p>
            <h3 className="column-heading">Heading</h3>
            <p>
              Nunc ridiculus per montes nulla, facilisis lacinia per leo. Hendrerit scelerisque nulla in suspendisse sit tortor sagittis. Suscipit dictumst ipsum laoreet cras egestas suscipit orci. Per molestie felis erat platea blandit commodo.
            </p>
            <p>
              Ad venenatis sapien habitant posuere donec porttitor vel nisi. Sodales laoreet donec diam rhoncus lectus euismod orci torquent curae. Fames rhoncus torquent sed convallis; potenti cras. Dictumst arcu libero nulla malesuada mi ridiculus platea.
            </p>
          </div>
        </section>

        <section className="gallery-grid">
          <div className="gallery-large">
            <img src={heroImg} alt="Erased Tapes feature album" />
          </div>
          <div className="gallery-subgrid">
            <img src={allEncoresImg} alt="All Encores album cover" />
            <img src={articulationImg} alt="Articulation album cover" />
            <img src={encores2Img} alt="Encores 2 album cover" />
            <img src={eulogyImg} alt="Eulogy for Evolution album cover" />
          </div>
        </section>

        <section className="author-section">
          <div className="author-info">
            <h3 className="author-heading">The Author</h3>
            <p className="author-bio">
              Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.
            </p>
          </div>
          <div className="author-media">
            <img src={authorImg} alt="Author profile" className="author-photo" />
            <div className="author-socials">
              <a href="#fb" className="social-icon">
                <img src={fbIcon} alt="Facebook" />
              </a>
              <a href="#ig" className="social-icon">
                <img src={igIcon} alt="Instagram" />
              </a>
              <a href="#tw" className="social-icon social-icon-twitter">
                <img src={twIcon} alt="Twitter" />
              </a>
            </div>
          </div>
        </section>

        <section className="comments-section">
          <h3 className="comments-heading">Comments</h3>
          <div className="comments-list">
            <div className="comment-item">
              <strong className="comment-user">soundseeker92</strong>
              <p className="comment-text">
                This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?
              </p>
            </div>
            <div className="comment-item">
              <strong className="comment-user">Ted Baker</strong>
              <p className="comment-text">
                I've been following the label for years—so glad someone's finally writing about their impact.
              </p>
            </div>
            <div className="comment-item">
              <strong className="comment-user">Queen_of_noise</strong>
              <p className="comment-text">
                I discovered Erased Tapes through Ólafur Arnalds—this article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <nav className="footer-nav">
          <a href="#shop">Our Shop</a>
          <a href="#artists">Our Artists</a>
          <a href="#story">Our Story</a>
        </nav>
        <p className="footer-copy">Copyright &copy; 2023 Erased Disks Ltd.</p>
        <div className="footer-socials">
          <a href="#fb" className="social-icon footer-fb-icon">
            <img src={fbIcon} alt="Facebook" />
          </a>
          <a href="#ig" className="social-icon">
            <img src={igIcon} alt="Instagram" />
          </a>
          <a href="#tw" className="social-icon">
            <img src={twIcon} alt="Twitter" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;