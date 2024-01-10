import React, { useEffect } from 'react';
import { Button } from './KakaoShare.style';
const { Kakao } = window as any;

const KakaoShare = () => {
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(`${process.env.REACT_APP_KAKAO_JS_KEY}`);
    console.log(Kakao.isInitialized());
  }, []);

  const handleKakaoShare = () => {
    const imageUrl = `https://nine-cloud9.vercel.app/onboard1.png`;
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '감정일기',
        description: '당신의 오늘 하루는 어떠셨나요?',
        imageUrl: imageUrl,
        link: {
          mobileWebUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '감정일기 쓰러가기',
          link: {
            mobileWebUrl: resultUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <div>
        <Button
          onClick={() => {
            handleKakaoShare();
          }}
        ></Button>
      </div>
    </>
  );
};

KakaoShare.displayName = 'KakaoShare';

export default KakaoShare;
