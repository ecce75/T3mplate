import manImg from '../../man.png';
import HeaderTop from './HeaderTop';

const Header = () => {
  return (
    <div>
      <HeaderTop />
      <div className="header">
      <div className="t3mplate">
        <span className="heading">AI physiotherapy using motion tracking</span>
        <span className="sub-text">Exercise and recieve instant feedback from AI physiotherapist</span>
        <div className="btn-container">
        <a href='#video-page' class="btn">Start Exercise</a>
        </div>
      </div>
      <img className='manImg' src='https://media.discordapp.net/attachments/1114498895758753802/1114870678915653713/image.png?width=606&height=606' />
    </div>
    </div>
  );
};

export default Header;
