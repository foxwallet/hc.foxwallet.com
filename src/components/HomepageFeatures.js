import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Secure',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        FoxWallet is a decentralized Web3 wallet. Your digital assets are under your control.
      </>
    ),
  },
  {
    title: 'Easy to use',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        FoxWallet is user-friendly. Go ahead and enjoy the crypto world.
      </>
    ),
  },
  {
    title: 'Powered by heart',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Never stop to provide a strong reliability and good experience.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
