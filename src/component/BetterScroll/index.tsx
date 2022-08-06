/*
 * @Author: EDSPower
 * @Date: 2022-08-05 15:55:07
 * @LastEditTime: 2022-08-06 17:57:14
 * @LastEditors: EDSPower
 * @Description:
 * @FilePath: \vite-react-ts-app\src\component\BetterScroll\index.tsx
 * 766782971@qq.com
 */
import React, {
  useState,
  useRef,
  useEffect,
  FC,
  PropsWithChildren,
  useCallback,
} from 'react';
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import PullDown from '@better-scroll/pull-down';
import ObserveDOM from '@better-scroll/observe-dom';
import './index.scss';

BScroll.use(ObserveDOM);
BScroll.use(Pullup);
BScroll.use(PullDown);

const TIME_BOUNCE = 800;
const THRESHOLD = 70;
const STOP = 40;

interface BetterScrollProps extends PropsWithChildren {
  /** 下拉刷新 */
  pulldownData?: {
    pullingDownCallBack: () => void;
  };

  /** 上拉加载更多 */
  pullupData?: {
    pullingUpCallBack: () => void;
    /** 显示到底 */
    isLastPage: boolean;
  };
}

const BetterScroll: FC<BetterScrollProps> = (props) => {
  const { children, pullupData, pulldownData } = props;

  const scrollRef = useRef<unknown | any>(null);
  const [scrollData, setScrollData] = useState({
    isPullUpLoad: false,
    beforePullDown: true,
    isPullingDown: false,
  });

  useEffect(() => {
    initBscroll();
  }, []);

  useEffect(() => {
    if (!scrollData?.isPullUpLoad && scrollRef?.current?.finishPullUp) {
      scrollRef?.current?.finishPullUp();
    }
  }, [scrollData?.isPullUpLoad]);

  useEffect(() => {
    if (!scrollData?.isPullingDown) {
      if (scrollRef?.current && scrollRef?.current?.finishPullDown) {
        scrollRef?.current?.finishPullDown();
      }
    }
  }, [scrollData?.isPullingDown]);

  useEffect(() => {
    if (pullupData?.isLastPage) {
      scrollRef.current.off('pullingUp', pullingUpHandler);
    }
  }, [pullupData?.isLastPage]);

  const initBscroll = () => {
    const options: any = {
      observeDOM: true,
      scrollY: true,
      bounceTime: TIME_BOUNCE,
      useTransition: false,
    };

    console.log('scrollRef.current: ', scrollRef.current);

    if (pullupData) {
      options.pullUpLoad = true;
    }

    if (pulldownData) {
      options.pullDownRefresh = {
        threshold: THRESHOLD,
        stop: STOP,
      };
    }

    scrollRef.current = new BScroll('.better-scroll-wrapper', options);

    if (pullupData) {
      scrollRef.current.on('pullingUp', pullingUpHandler);
    }

    if (pulldownData) {
      scrollRef.current.on('pullingDown', pullingDownHandler);
    }

    // scrollRef.current.autoPullDownRefresh();
  };

  const pullingDownHandler = async () => {
    console.log('pullingDownHandler: ');
    if (pulldownData) {
      setScrollData((old) => ({
        ...old,
        beforePullDown: false,
        isPullingDown: true,
      }));
      await pulldownData?.pullingDownCallBack();
      setScrollData((old) => ({
        ...old,
        beforePullDown: true,
        isPullingDown: false,
      }));
    }
  };

  const pullingUpHandler = useCallback(async () => {
    if (pullupData) {
      setScrollData((old) => ({
        ...old,
        isPullUpLoad: true,
      }));
      await pullupData.pullingUpCallBack();
      setScrollData((old) => ({
        ...old,
        isPullUpLoad: false,
      }));
    }
  }, []);

  const pulldownBox = () => {
    if (scrollData?.beforePullDown) {
      return (
        <div>
          <span>Pull Down and refresh</span>
        </div>
      );
    } 
      return (
        <div>
          {scrollData?.isPullingDown ? (
            <span>Loading...</span>
          ) : (
            <span>Refresh success</span>
          )}
        </div>
      );
  };

  const pullupBox = () => {
    if (pullupData?.isLastPage) {
      return (
        <div className="end-trigger">
          <span className="end-trigger-txt">到底了</span>
        </div>
      );
    } 
      if (scrollData?.isPullUpLoad) {
        return (
          <div className="after-trigger">
            <span className="better-scroll-txt">Loading...</span>
          </div>
        );
      } 
        return (
          <div className="before-trigger">
            <span className="better-scroll-txt">Pull up and load more</span>
          </div>
        );
  };

  return (
    <div className="better-scroll">
      <div className="better-scroll-wrapper">
        <div className="better-scroll-content">
          {pulldownData && (
            <div className="pulldown-wrapper">{pulldownBox()}</div>
          )}
          <ul className="better-scroll-children">{children}</ul>
          {pullupData && (
            <div className="better-scroll-tips">{pullupBox()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BetterScroll;
