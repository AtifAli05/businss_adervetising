import SvgComponent from "./Splash-Logo.js";
import Profile from "./Profile.js";
import EmailIcon from "./Email-Icon.js";
import PasswordLock from "./Password-Lock.js";
import PasswordSecure from "./Password-Secure.js";
import HomeBottom from "./Home-Bottom.js";
import HomeBottomActive from "./Home-Bottom-Active.js";
import DocumentBottom from "./Document-Bottom.js";
import DocumentBottomActive from "./Document-Bottom-Active.js";
import PerformanceBottom from "./Performance-Bottom.js";
import PerformanceBottomActive from "./Performance-Bottom-Active.js";
import SettingBottom from "./Setting-Bottom.js";
import SettingBottomActive from "./Setting-Bottom-Active.js";
import FacebookLogo from "./Facebook-Logo.js";
import AdsenseLogo from "./Adsense-Logo.js";
import TwitterLogo from "./Twitter-Logo.js";
import InstaLogo from "./Insta-Logo.js";
import TikTok from "./TikTok-Logo.js";
import AdsLogo from "./Ads-Logo.js";
import UpDown from "./up-down.js";
import DropDown from "./DropDown.js";
import BackBottomSheet from "./Back-BottomSheet.js";
import SplashImg from "./SplashImg.js";
import ImgBack from "./Img-Forgot-Back.js";
import AddIcon from "./Add-Icon.js";
import ExpenseGo from "./Expense-Go.js";
import IncomeGo from "./Income-Go.js";
import GraphFb from "./Graph-Fb.js";
import GraphTiktok from "./Graph-TikTok.js";
import CurrencyLogo from "./Currency-Logo.js";
import RateLogo from "./Rate-Logo.js";
import ShareLogo from "./Share-Logo.js";
import CurrencyGo from "./Currency-Go.js";
import SignOutIcon from "./SignOut-Icon.js";
import GraphAds from "./Graph-Ads.js";
import HistoryLogo from "./History-Logo.js";
import DateLogo from "./Date-Logo.js";
import SearchLogo from "./Search-Logo.js";
import SelectLanguage from "./Select-Language.js";
export {
  SvgComponent,
  Profile,
  EmailIcon,
  PasswordLock,
  PasswordSecure,
  HomeBottom,
  HomeBottomActive,
  DocumentBottom,
  DocumentBottomActive,
  PerformanceBottom,
  PerformanceBottomActive,
  SettingBottom,
  SettingBottomActive,
  FacebookLogo,
  AdsenseLogo,
  TwitterLogo,
  InstaLogo,
  TikTok,
  AdsLogo,
  UpDown,
  DropDown,
  BackBottomSheet,
  SplashImg,
  ImgBack,
  AddIcon,
  ExpenseGo,
  IncomeGo,
  GraphFb,
  GraphTiktok,
  CurrencyLogo,
  RateLogo,
  ShareLogo,
  CurrencyGo,
  SignOutIcon,
  GraphAds,
  HistoryLogo,
  DateLogo,
  SearchLogo,
  SelectLanguage,
};

import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { WP } from "../../../Utils";
const AnySvg = ({ name, width, style, height, onPress }) => {
  const Tag = name;
  console.log("name", name);
  return (
    <>
      {
        <TouchableOpacity
          activeOpacity={0.9}
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={onPress}
        >
        
            {
            <Tag width={WP(width)} height={WP(height)} style={style} />}
      
        </TouchableOpacity>
      }
    </>
  );
};
export default AnySvg;
