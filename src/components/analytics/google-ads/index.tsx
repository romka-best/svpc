import Script from 'next/script';

const GOOGLE_ADS_ID = 'AW-18439105590';

const GoogleAdsTag = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
`,
        }}
        id="google-ads-init"
        strategy="afterInteractive"
      />
    </>
  );
};

export { GoogleAdsTag };
