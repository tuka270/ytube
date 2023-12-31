import { Item } from "@/components/Item";
import { Tired } from "@/components/Tired";
import { Head } from "@/components/Head";
import { Left } from "@/components/Left";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Head />
      <div className="w-[100%] h-[94%] flex">
        <Left />
        <div className="w-[88%] h-[100%]">
          <div className="w-[100%] h-[6%] bg-neutral-900 flex overflow-x-auto items-center">
            {item.map((user, index) => (
              <Item index={index} user={user} />
            ))}
          </div>
          <div className="w-[100%] h-[94%] flex flex-wrap overflow-y-auto justify-around bg-zinc-900 pt-[1%]">
            {kk.map((user, index) => (
              <Tired index={index} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const item = [
  { text: "All" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
  { text: "Item" },
];

const kk = [
  
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  
];
