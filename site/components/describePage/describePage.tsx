import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { useTranslation } from 'react-i18next';
import styles from './describePage.module.less';

const gridBackgroundImg =
  'https://gw.alipayobjects.com/zos/basement_prod/31366ec3-a932-4e29-9e84-44ae0d6e6815.svg';

const DescribePage = () => {
  const { t } = useTranslation();
  let title = 'AntV 企业级可视化解决方案';
  let description =
    'AntV 3.0 已全新升级，主要包含 G2、G6、F2、L7 以及一套完整的图表使用和设计规范。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑阿里集团内外 6000+ 业务系统，通过了日均千万级 UV 产品的严苛考验后方敢与君见。';
  // playScale={0.3}
  //     component="section"
  //     key="page"
  return (
    <div className={styles.wrapper}>
      <QueueAnim
        type="bottom"
        key="title"
        leaveReverse
        className={styles.content}
      >
        <p className={styles.title}>{t(title)}</p>
        <div key="slicer" className={styles.slicer} />
        <QueueAnim
          key="content"
          type="bottom"
          className={styles.descriptionWrapper}
        >
          <p key="content1" className={styles.description}>
            {t(description)}
          </p>
        </QueueAnim>
        <img
          src={gridBackgroundImg}
          className={styles.gridback}
          alt="gird-background"
        />
      </QueueAnim>
    </div>
  );
};
export default DescribePage;
