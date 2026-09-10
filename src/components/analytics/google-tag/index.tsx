import Script from 'next/script';

const GOOGLE_ADS_ID = 'AW-18439105590';
const GOOGLE_ANALYTICS_ID = 'G-CW5KHHQ9NV';

const GoogleTag = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ANALYTICS_ID}');
gtag('config', '${GOOGLE_ADS_ID}');
`,
        }}
        id="google-tag-init"
        strategy="afterInteractive"
      />
    </>
  );
};

export { GoogleTag };
