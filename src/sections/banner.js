/** @jsx jsx */
import { jsx } from 'theme-ui';
import HeroImg from 'assets/hero-img.jpg';
import { ParallaxBanner } from 'react-scroll-parallax';

export default function Banner() {
  return (
    <>
      <div sx={{ height: '70px' }}></div>
      <ParallaxBanner
        sx={styles.banner}
        id="home"
        layers={[{ image: HeroImg, speed: -4 }]}></ParallaxBanner>
    </>
  );
}

const styles = {
  banner: {
    aspectRatio: '16 /4',
    backgroundColor: 'black',
    paddingTop: '100px',
      '@media screen and (max-width: 767.99px)': {
        aspectRatio: '0.9/ 0.6',
        backgroundSize: 'contain',
    },
  },
};
