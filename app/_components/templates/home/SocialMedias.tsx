import React from "react";
import SocialMedia from "../../modules/SocialMedia";

export default function SocialMedias() {
  return (
    <div className="mt-[100px] flex flex-col items-center md:flex-row md:justify-center gap-6 [&>*]:scale-[0.8] [&>*]:origin-center">
      <SocialMedia
        bg="bg-gradient-to-r from-[#FFC828] to-[#F15A24]"
        iconmd="/home/socialmedia/instagramsm.png"
        iconsm="/home/socialmedia/instagrammd.png"
        title="لاول کد را در اینستاگرام دنبال کنید. "
      ></SocialMedia>
      <SocialMedia
        bg="bg-gradient-to-r from-[#00A0C5] to-[#00D2FC]"
        iconmd="/home/socialmedia/telegramsm.png"
        iconsm="/home/socialmedia/telegrammd.png"
        title="لاول کد را در تلگرام دنبال کنید. "
      ></SocialMedia>
    </div>
  );
}
