type TStaticAds={
  LeftText : string;
  RightText : string;
  Link : string;
}

const StaticAds : React.FC<TStaticAds> = ({LeftText, RightText, Link}) => {
  return (
    <div className="static_ads container">
        <p className="upper_text"> {LeftText} </p>
        <p className="lower_text"> {RightText} </p>
    </div>
  )
}

export default StaticAds