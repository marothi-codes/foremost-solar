/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';

import FeatureCardColumn from 'components/feature-card-column.js';
import Work from './work';

import theme from 'theme';

import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Products from 'assets/key-feature/products.svg';
import Service from 'assets/key-feature/service.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Subscription,
    altText: 'Backup Systems',
    title: 'Backup Systems',
    text:
      'Backup Systems are designed to keep your essentials running during load shedding and power outages. We understand that working from home has become the norm and every second lost due to power failures means a loss of income for yourself and/or your company. Our Backup systems will help you get work done whenever ESKOM fails you.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Grid-Tied Systems',
    title: 'Grid-Tied Systems',
    text:
      'Our Grid-tied systems are the most popular solar solution we offer. Not only are you ready to continue life as normal during outages but, you save money on your utility (ESKOM) account.  Solar panels offer you free power during the daylight hours which help reduce your electrical account substantially. Yes! You can save up tp 95% of your monthly utility account.',
  },
  {
    id: 3,
    imgSrc: Performance,
    altText: 'Off-Grid Systems',
    title: 'Off-Grid Systems',
    text:
      'Foremost Solar can take you completely off the grid. In other words... NO ESKOM! You must have at least 48hours (2 days) backup power available in the form of batteries. You should also have an alternative power source available usually in the form of a generator. Due to the costs involved. it is not always financially viable for most consumers.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Installations',
    title: 'Installations',
    text:
      'All installations are overseen by a registered electrician who manages our teams of experienced installers. He will issue a CoC (Certificate of Compliance) confirming that all electrical work conforms to the latest regulations and standards once the final payment has been received. Insurance companies require the CoC along with a paid in full invoice before they will insure your newly installed solar system.',
  },
  {
    id: 5,
    imgSrc: Products,
    altText: 'Our Products',
    title: 'Our Products',
    text:
      'Foremost Solar does not limit ourselves to certain brands. We are registered suppliers of all available solar products in South Africa with the exception that if the supplier does not meet our expectations or his product does not meet our strict standards, then we will not offer this to our clients. We only source our products from reputable companies that offer the same after sales service and support expected by our own customers. ',
  },
  {
    id: 6,
    imgSrc: Service,
    altText: 'After Sales Service',
    title: 'After Sales Service',
    text:
      'Foremost Solar, along with our amazing team, provides telephonic and online technical diagnostics and support with all our installations. Our installations also come with a workmanship guarantee of 5 years to give you extra peace of mind. ',
  },
];

export default function Services() {
  return (
    <section id="service" sx={{ variant: 'section.services' }}>
      <Container>
        <hr sx={theme.styles.hr} />
        <br />
        <SectionHeader slogan="WHAT DO WE DO?" title="Our Services" />
        <hr sx={theme.styles.hr} />
        <br />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <br />
        <hr sx={theme.styles.hr} />
        <Work />
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)'],
  },
};
